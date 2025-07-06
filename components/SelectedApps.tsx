import React, { ReactElement, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Misc from '@/classes/Misc';
import { saveAs } from 'file-saver';
var JSZip = require("jszip");

function SelectedApps (props:packagePropData) {
  const renderSelected = () => {
    if (selectedApps.length > 5) {
      const slice = selectedApps.slice(0,5)
      const overflow = selectedApps.length - 5
      return (<>{slice} +{overflow}</>)
    }
    return selectedApps
  }

  const download = () => {
    // Build a list of icon URLs
    const iconUrls:string[] = [];
    props.appData.forEach((app) => {
      iconUrls.push(app.icon)
    })
    // saveToZip('test.zip',iconUrls)
    saveToZipFull('iconpusher-pack.zip',props.appData)
  }

  const saveToZip = (filename:string, urls:string[]) => {
    const zip = new JSZip()
    const folder = zip.folder('icons')
    urls.forEach((url)=> {
        const blobPromise = fetch(url).then(r => {
            if (r.status === 200) return r.blob()
            return Promise.reject(new Error(r.statusText))
        })
        const name = url.substring(url.lastIndexOf('/')+1)
        // console.log('added file',url,name)
        folder.file(name, blobPromise)
    })
    zip.generateAsync({type:"blob"})
        .then(
          (blob:Blob) => saveAs(blob, filename))
        .catch((e:Error) => console.log(e));
}

  const saveToZipFull = (filename:string, apps:appType[]) => {
    const zip = new JSZip()
    const folder = zip.folder('icons')

    var appFilterValue = '';
    var appMapValue = '';
    var themeResourcesValue = '';

    apps.forEach((app)=> {
      appFilterValue += `<!-- ${app.name} -->\n`;
      appMapValue += `<!-- ${app.name} -->\n`;
      themeResourcesValue += `<!-- ${app.name} -->\n`;
      if (app.components != undefined) {
        for (let c = 0; c < app.components.length; c++) {
            appFilterValue += `<item component="ComponentInfo{${app.packageName}/${app.components[c]}}" drawable="${Misc.slug(app.name,'_')}" />\n\n`
            appMapValue += `<item class="${app.components[c]}" name=${Misc.slug(app.name,'_')}/>\n\n`
            themeResourcesValue += `<AppIcon name="${app.packageName}/${app.components[c]}" image="${Misc.slug(app.name,'_')}"/>\n\n`
        }
      }

      const blobPromise = fetch(app.icon).then(r => {
            if (r.status === 200) return r.blob()
            return Promise.reject(new Error(r.statusText))
        })
        // const name = app.icon.substring(app.icon.lastIndexOf('/')+1)
        const name = Misc.slug(app.name,'_') + app.icon.substring(app.icon.lastIndexOf('.'))
        // console.log('added file',url,name)
        folder.file(name, blobPromise)
    })
    zip.file('appfilter.xml',appFilterValue)
    zip.file('appmap.xml',appMapValue)
    zip.file('theme_resources.xml',themeResourcesValue)

    zip.generateAsync({type:"blob"})
        .then(
          (blob:Blob) => saveAs(blob, filename))
        .catch((e:Error) => console.log(e));
  }

  let selectedApps:ReactElement[] = [];
  props.appData.forEach((app) => {
    // console.log('state app data',app)
    selectedApps.push(
      <Link
        href={`/package/${app.packageName}`}
        onClick={()=>{props.setSearchKeyword("")}}
      >
        <Image src={app.icon} className="w-16" width={192} height={192} alt={app.name} />
      </Link>
    )
  })

  if (props.appData.length > 0) {
    return(
      <div
        // className={style.selected}
        className="bg-emerald-700 border-t-4 border-emerald-800 fixed bottom-0 w-full z-20 p-4 text-white"
      >
        <div className="flex items-center">
          {renderSelected()}
          <a onClick={download} className="cursor-pointer p-4">Download zip</a>
          <Link href="/selected" className="cursor-pointer p-4">Selected apps</Link>
        </div>
      </div>
    )
  }
  return <></>
  }

  export default SelectedApps
