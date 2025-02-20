import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from "next/link";
// import MyLayout from "../../layouts/MyLayout";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from "../../components/Header"
import AppCardGroup from '../../components/AppCardGroup';




function Device(props:devicePropsType) {

  const router = useRouter()
  const { deviceToken } = router.query

    const[appData, setAppData] = useState([]);

    useEffect(() => {
        fetch(`https://api.iconpusher.com/device/${deviceToken}`)
        .then(res => res.json())
        .then(data => {
          setAppData(data.apps);
        }).catch((e) => {console.log(e)});
      }, [router.isReady, deviceToken]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Search results for {deviceToken} - iconpusher</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppCardGroup
        appCards={appData}
        // moreLink={moreLink}
        onAdd={props.onAdd}
        onRemove={props.onRemove}
        onCheckSelected={props.onCheckSelected}
        setSearchKeyword={props.setSearchKeyword}
        useMax={false}
      />
    </div>
  )
}


// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://api.iconpusher.com/device/data`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
  }


export default Device
// SearchResult.Layout = MyLayout;