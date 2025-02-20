import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from "next/link";
// import MyLayout from "../../layouts/MyLayout";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from "../../components/Header"
import Misc from '@/classes/Misc';
import useDownloader from "react-use-downloader";

import stream from 'stream';
import { promisify } from 'util';
import { Button, Tooltip } from '@mui/material';
import AppCard from '@/components/AppCard';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoices | Acme Dashboard',
};



function PackageDetails(props:packageDetailsPropsType) {

  const router = useRouter()
  const { packageName } = router.query

    const[appData, setAppData] = useState<appType>({
      name: '',
      icon: '',
      iconDownload: '',
      version: '',
      packageName: '',
      components: [],
      id:0,
      selected:false,
    });


    const [copyToolTipFilter, setCopyToolTipFilter] = useState(false);
    const [copyToolTipApp, setCopyToolTipApp] = useState(false);
    const [copyToolTipTheme, setCopyToolTipTheme] = useState(false);


    const { size, elapsed, percentage, download,
      cancel, error, isInProgress } =
    useDownloader();

    useEffect(() => {
      // if(!router.isReady) return;

        fetch(`https://api.iconpusher.com/package/${packageName}`)
        .then(res => res.json())
        .then(data => {
          setAppData(data);
        }).catch((e) => {console.log(e)});
      // }, [router.asPath]);
      }, [router.isReady, packageName]);

      var appFilterValue = `<!-- ${appData.name} -->\n`;
      var appMapValue = `<!-- ${appData.name} -->\n`;
      var themeResourcesValue = `<!-- ${appData.name} -->\n`;
    //   var test = appData.components
    //   console.log("l",appData.components, test.length);

      if (appData.components != undefined) {
        for (let c = 0; c < appData.components.length; c++) {
            appFilterValue += `<item component="ComponentInfo{${appData.packageName}/${appData.components[c]}}" drawable="${Misc.slug(appData.name,'_')}" />\n\n`
            appMapValue += `<item class="${appData.components[c]}" name=${Misc.slug(appData.name,'_')}/>\n\n`
            themeResourcesValue += `<AppIcon name="${appData.packageName}/${appData.components[c]}" image="${Misc.slug(appData.name,'_')}"/>\n\n`
        }
      }

      const copy = (elementId:string) =>
      {
        const element = document.getElementById(elementId)
        if (element != undefined) {
          let copyValue = "";
          let value = "";

            if (!global.navigator.clipboard) {
              // throw new Error("Browser don't have support for native clipboard.");
            }

            if (elementId) {
              const node = document.getElementById(elementId);

              if (!node || !node.textContent) {
                throw new Error("Element not found");
              }

              value = node.textContent;
            }

            if (value) {
              copyValue = value;
            }

            global.navigator.clipboard.writeText(copyValue);
        }
      }


      const handleTooltipClose = (type:number) => {
        if (type == 1) {
          setCopyToolTipApp(false)
        } else if (type == 2) {
          setCopyToolTipFilter(false)
        } else if (type == 3) {
          setCopyToolTipTheme(false)
        }
      };

      const handleTooltipOpen = (type:number) => {
        if (type == 1) {
          setCopyToolTipApp(true)
        } else if (type == 2) {
          setCopyToolTipFilter(true)
        } else if (type == 3) {
          setCopyToolTipTheme(true)
        }
        setTimeout(()=>{
          handleTooltipClose(type)
        },2000)
      };




  return (
    <div className={styles.container}>
      <Head>
        <title>{appData.name} Android App | Icon Pusher</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{appData.name}</h1>
        <p><a href={`https://play.google.com/store/apps/details?id=${appData.packageName}`} target="_blank">Google Play Page</a></p>

        <div className="text-center main-icon">
          <div className="inline-block">
            <AppCard
              name={appData.name}
              appData={appData}
              onAdd={props.onAdd}
              onRemove={props.onRemove}
              selected={props.onCheckSelected(appData)}
              setSearchKeyword={props.setSearchKeyword}
              isLink={false}
            />
          </div>
        </div>

        <p className="text-center">
            <a className='cursor-pointer'
              onClick={() => download(appData.icon, `${appData.packageName}-${appData.version}.png`)}
            >Download latest app version icon ({appData.version})</a>
        </p>

        <p><strong>appfilter.xml</strong></p>
        <p><textarea className="w-full h-40 p-2" id="appfilter" readOnly={true} value={appFilterValue}></textarea></p>
        <p>
          <Tooltip placement='right'
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title="Copied"
            // onClose={handleTooltipClose}
            open={copyToolTipFilter}
          >
          <button id="copy-appfilter"
            onClick={
              ()=>{
                handleTooltipOpen(2)
                copy("appfilter")
              }
            }
            className='transition-colors px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-700 border-2 border-emerald-400 dark:border-emerald-400 my-4'
          >Copy</button>
          </Tooltip>
        </p>


        <p><strong>appmap.xml</strong></p>
        <p><textarea className="w-full h-40 p-2" id="appmap" readOnly value={appMapValue}></textarea></p>
        <p>
        <Tooltip placement='right'
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title="Copied"
            // onClose={handleTooltipClose}
            open={copyToolTipApp}
          >
          <button
            id="copy-appmap"
            onClick={
              ()=>{
                handleTooltipOpen(1)
                copy("appmap")
              }
            }
            className='transition-colors px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-700 border-2 border-emerald-400 dark:border-emerald-400 my-4'
          >Copy</button>
          </Tooltip>
        </p>

        <p><strong>theme_resources.xml</strong></p>
        <p><textarea className="w-full h-40 p-2" id="theme-resources" readOnly value={themeResourcesValue}></textarea></p>
        <p>
          <Tooltip placement='right'
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title="Copied"
            // onClose={handleTooltipClose}
            open={copyToolTipTheme}
          >
            <button
              id="copy-theme-resources"
              onClick={
                ()=>{
                  handleTooltipOpen(3)
                  copy("theme-resources")
                }
              }
              className='transition-colors px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-700 border-2 border-emerald-400 dark:border-emerald-400 my-4'
            >Copy</button>
          </Tooltip>
        </p>
      </main>
    </div>
  )
}


// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://api.iconpusher.com/search/data`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
  }


export default PackageDetails
// PackageDetails.Layout = MyLayout;