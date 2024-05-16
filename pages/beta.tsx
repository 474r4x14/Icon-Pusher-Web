import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Blog.module.scss'
import Link from "next/link";
// import MyLayout from "../../layouts/MyLayout";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from "../components/Header"
import Misc from '@/classes/Misc';
import useDownloader from "react-use-downloader";

import stream from 'stream';
import { promisify } from 'util';

type componentType = {

}

type appType = {
  name:string,
  slug:string,
  icon:string,
  iconDownload:string,
  version:string,
  packageName:string,
  components:componentType[],
}

const Beta: NextPage = () => {

  const router = useRouter()
  const { packageName } = router.query




  return (
    <div className={styles.container}>
      <Head>
        <title>Iconpusher Beta information</title>
        <meta name="description" content="Iconpusher Beta Information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Iconpusher v2 BETA</h1>
        <p>Hello icon pack artists/creators</p>
        <p>It&apos;s been a loooong time since iconpusher.com saw any sort of love, so it&apos;s well overdue.</p>
        <p>The ideas behind this new version have been on the board for quite some time with the plan to help improve the site.
          The key one being to allow selecting multiple apps and downloading all their details in one go.</p>
        <p>Please remember this is still a beta version, some things might be janky / broken.
          I&apos;m releasing this to the public to help show the direction we&apos;re headed and what&apos;s to come.</p>

        <p>All feedback is welcome: <a href="mailto:beta@iconpusher.com?subject=Beta feedback">beta@iconpusher.com</a></p>
        <h2>Issues I&apos;m aware of:</h2>
        <ul>
          <li>Missing icons (also on live)</li>
          <li>Option to clear selection</li>
          <li>Responsive design is incomplete</li>
          <li>General styling</li>
          <li>Some name characters are badly encoded</li>
        </ul>

        <h2>Upcoming features:</h2>
        <ul>
          <li>App icon versions</li>
          <li>Pagination</li>
          <li>Popular apps</li>
        </ul>

        <h2>Change log:</h2>
        <ul className={styles.changelog}>
          <li>
            <strong>v2.0 pre-5 (2024-05-16)</strong><br />
            Added device app list<br/>
            Added new page to view all selected apps<br/>
            Added the logo
          </li>
          <li>
            <strong>v2.0 pre-4 (2024-05-07)</strong><br />
            Added feedback to copy buttons<br/>
            Fixed copy buttons not working<br />
            Styled &lsquo;More Results&rsquo; button<br />
            Sync with live version is now automated<br />
            Fixed some broken icons
          </li>
          <li>
            <strong>v2.0 pre-3 (2024-01-19)</strong><br />
            Fixed - Some responsive styling
          </li>
          <li>
            <strong>v2.0 pre-2 (2024-01-01)</strong><br />
            Fixed - Some app icons are broken<br />
            Update - Attempted to fix latest icons not appearing
          </li>
          <li>
            <strong>v2.0-pre-1 (2023-12-22)</strong><br />
            The initial version featuring mutliple app selection &amp; download as zip
          </li>
        </ul>
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


export default Beta
