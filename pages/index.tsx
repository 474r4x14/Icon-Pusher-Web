import type { NextPage } from 'next'
import React, { useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
// import MyLayout from "../layouts/MyLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
  onAdd:Function,
  onRemove:Function,
  onCheckSelected:Function,
  setSearchKeyword:Function,
  latest:{apps:appType[]},
}

export default function Home(props:propsType) {

  var refTest = React.createRef();

    const [selectedApps, setSelectedApps] = useState<appType[]>([]);


    return (
        <div className={styles.container}>
            <Head>
                <title>Icon Pusher - A utility for Android icon pack developers</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
              <h1>Icon Pusher</h1>

              <p>Icon Pusher is a resource for Android Icon Pack developers to get application details for setting up their icon packs.</p>
              <p>You can get the companion app for submitting apps from the Google Play Store:
                <a href="https://play.google.com/store/apps/details?id=dev.southpaw.iconpusher&amp;pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target="_blank" rel="noreferrer" className="google-play-badge">
                  <img alt="Get it on Google Play" src="https://play.google.com/intl/en_gb/badges/static/images/badges/en_badge_web_generic.png" />
                </a>
              </p>

                <p>
                    <Link href="/">
                        home
                    </Link>
                </p>
                <AppCardGroup
                  appCards={props.latest.apps}
                  useMax={false}
                  onAdd={props.onAdd}
                  onRemove={props.onRemove}
                  onCheckSelected={props.onCheckSelected}
                  setSearchKeyword={props.setSearchKeyword}
                />
            </main>


            <footer className={styles.footer}>
              <a
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Powered by{' '}
                <span className={styles.logo}>
                  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
              </a>
            </footer>
            <Footer />
            <SelectedApps
              appData={selectedApps}
              // ref={refTest}
            />
        </div>
    )
}

// This function gets called at build time
export async function getStaticProps() {
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
