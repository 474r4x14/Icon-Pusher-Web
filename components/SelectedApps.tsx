import React, { ReactElement, useState } from "react";
import Link from "next/link";
import style from './SelectedApps.module.scss';
import Misc from '@/classes/Misc';
import { saveAs } from 'file-saver';
var JSZip = require("jszip");

type appCardsType = {
  packageName:string,
  components:string[],
  id:number,
  name:string,
  icon:string,
}

type propData = {
  appData:appCardsType[],
  setSearchKeyword:Function,
}

function SelectedApps (props:propData) {
  console.log('selectedApps',props)
  const [selectedAppData, setSelectedAppData] = useState<appCardsType[]>([]);

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
        console.log('added file',url,name)
        folder.file(name, blobPromise)
    })
    zip.generateAsync({type:"blob"})
        .then(
          (blob:Blob) => saveAs(blob, filename))
        .catch((e:Error) => console.log(e));
}

  const saveToZipFull = (filename:string, apps:appCardsType[]) => {
    const zip = new JSZip()
    const folder = zip.folder('icons')

    // appfilter.xml
    // appmap.xml
    // theme_resources.xml

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
    console.log('state app data',app)
    selectedApps.push(
      <Link
      href={`/package/${app.packageName}`}
      onClick={()=>{props.setSearchKeyword("")}}
    >
      <img src={app.icon} className="w-16" />
      </Link>
    )
  })
    return(
      <div className={style.selected}>
        <h1>Selected</h1>
        <div className="flex">
          {renderSelected()}
          <a onClick={download}>Download</a>
        </div>
      </div>
    )
  }

  export default SelectedApps
