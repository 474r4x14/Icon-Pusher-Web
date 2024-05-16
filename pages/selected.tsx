import type { NextPage } from 'next'
import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { IconBug, IconX } from '@tabler/icons-react';
// import MyLayout from "../layouts/MyLayout";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import SelectedApps from "../components/SelectedApps";
import AppCardGroup from "../components/AppCardGroup";

// let appData:appCardsType[] = []
/*
type appCardsType = {
  packageName:string,
  name:string,
  icon:string,
}
*/

type propsType = {
  selectedApps:appType[],
  onAdd:Function,
  onRemove:Function,
  onCheckSelected:Function,
  setSearchKeyword:Function,
  latest:{apps:appType[]},
}

export default function Home(props:propsType) {

  var refTest = React.createRef();

    const [selectedApps, setSelectedApps] = useState<appType[]>([]);
    const [showBetaPopup, setShowBetaPopup] = useState(false);

    useEffect(() => {
    const popStatus = localStorage.getItem('hideBetaPopup');
    if (!popStatus) {
      setShowBetaPopup(true)
    }
   },[])

    const hidePopup = () => {
      // const stored = localStorage.getItem(key);
      setShowBetaPopup(false)
      localStorage.setItem('hideBetaPopup', 'true');
    }

    const betaPopup = showBetaPopup ? <div className='fixed bottom-5 right-5 dark:bg-zinc-900 border-emerald-600 border-2 p-4 rounded-md bg-zinc-200 z-30'>
    <p className='font-semibold'>Welcome to the beta </p>
    <p>Please click the <IconBug className='inline' /> icon in<br/>the header for more info</p>
    <IconX className='absolute right-2 top-2 cursor-pointer' onClick={hidePopup} />
  </div> : ''

    var content = <p>There are no selected apps</p>
    if (props.selectedApps.length > 0) {
      content = <AppCardGroup
        appCards={props.selectedApps}
        useMax={false}
        onAdd={props.onAdd}
        onRemove={props.onRemove}
        onCheckSelected={props.onCheckSelected}
        setSearchKeyword={props.setSearchKeyword}
      />
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Icon Pusher - A utility for Android icon pack developers</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
              <h1>Selected Apps</h1>
                {content}
                {betaPopup}
            </main>
        </div>
    )
}

// This function gets called at build time
export async function getServerSideProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://api.iconpusher.com/latest')
    const latest = await res.json()

    // let's loop through the apps and mark any as selected
    // TODO ubove

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        latest,
      },
    }
  }


// Home.Layout = MyLayout
