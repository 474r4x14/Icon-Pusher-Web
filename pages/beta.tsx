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

const PackageDetails: NextPage = () => {

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
        <p>It's been a loooong time since iconpusher.com saw any sort of love, so it's well overdue.</p>
        <p>The ideas behind this new version have been on the board for quite some time with the plan to help improve the site.
          The key one being to allow selecting multiple apps and downloading all their details in one go.</p>
        <p>Please remember this is still a beta version, some things might be janky / broken.
          I'm releasing this to the public to help show the direction we're headed and what's to come.</p>

        <p>All feedback is welcome: <a href="mailto:beta@iconpusher.com?subject=Beta feedback">beta@iconpusher.com</a></p>
        <h2>Issues I'm aware of:</h2>
        <ul>
          <li>Some app icons are broken</li>
          <li>Latest icons might not show (delayed data processing)</li>
          <li>No feedback using copy buttons</li>
          <li>Device lists</li>
          <li>Option to clear selection</li>
          <li>Page to view selected apps</li>
          <li>Select/deselect from details page</li>
          <li>Responsive design is incomplete</li>
          <li>General styling</li>
        </ul>

        <h2>New features:</h2>
        <ul>
          <li>App icon versions</li>
          <li>Pagination</li>
          <li>Popular apps</li>
        </ul>

        <h2>Change log:</h2>
        <ul>
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


export default PackageDetails
// PackageDetails.Layout = MyLayout;