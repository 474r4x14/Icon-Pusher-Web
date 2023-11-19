import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from "next/link";
// import MyLayout from "../../layouts/MyLayout";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from "../../components/Header"

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

    const[appData, setAppData] = useState<appType>({
      name: '',
      slug: '',
      icon: '',
      iconDownload: '',
      version: '',
      packageName: '',
      components: [],
    });


    useEffect(() => {
        fetch(`https://api.iconpusher.com/package/${packageName}`)
        .then(res => res.json())
        .then(data => {
          setAppData(data);
        }).catch((e) => {console.log(e)});
      }, []);



      var appFilterValue = `<!-- ${appData.name} -->\n`;
      var appMapValue = `<!-- ${appData.name} -->\n`;
      var themeResourcesValue = `<!-- ${appData.name} -->\n`;
    //   var test = appData.components
    //   console.log("l",appData.components, test.length);

      if (appData.components != undefined) {
        for (let c = 0; c < appData.components.length; c++) {
            appFilterValue += `<item component="ComponentInfo{${appData.packageName}/${appData.components[c]}}" drawable="${appData.slug}" />\n\n`
            appMapValue += `<item class="${appData.components[c]}" name=${appData.slug}/>\n\n`
            themeResourcesValue += `<AppIcon name="${appData.packageName}/${appData.components[c]}" image="${appData.slug}"/>\n\n`
        }
      }





  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App deets</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<p>
<Link href="/">
home
</Link>
</p>

<ul>
    <li>name: {appData.name}</li>
    <li>pkg: {appData.packageName}</li>
    <li>icon: {appData.icon}</li>
</ul>











        <h1>{appData.name}</h1>
        <p><a href="https://play.google.com/store/apps/details?id={appData.packageName}" target="_blank">Google Play Page</a></p>

        <p className="center main-icon">
            <img src={appData.icon} />
        </p>


        <p className="center">
            <a href={appData.iconDownload}>Download latest app version icon ({appData.version})</a>
        </p>

        <p><strong>appfilter.xml</strong></p>
        <p><textarea className="code" id="appfilter" readOnly={true} value={appFilterValue}></textarea></p>
        <p><button id="copy-appfilter">Copy</button></p>


        <p><strong>appmap.xml</strong></p>
        <p><textarea className="code" id="appmap" readOnly value={appMapValue}></textarea></p>
        <p><button id="copy-appmap">Copy</button></p>

        <p><strong>theme_resources.xml</strong></p>
        <p><textarea className="code" id="theme-resources" readOnly value={themeResourcesValue}></textarea></p>
        <p><button id="copy-theme-resources">Copy</button></p>











      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
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