import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Blog.module.scss'
import { useRouter } from 'next/router'

const Privacy: NextPage = () => {

  const router = useRouter()
  const { packageName } = router.query

  return (
    <div className={styles.container}>
      <Head>
        <title>App Privacy Policy | Icon Pusher</title>
        <meta name="description" content="Iconpusher Changelog Information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>App Privacy Policy</h1>
        <p>Icon Pusher is built and maintained by v01d.uk, any questions can be sent to <a href="mailto:iconpusher@v01d.uk">iconpusher@v01d.uk</a>.</p>

        <h2>Data collected</h2>
        <p>Icon Pusher scans the installed apps on your phone and collects the package and activity names of the selected applications. The package and activity names are just what the developer chose when creating the app, no personal information is collected by Icon Pusher. The only other piece of information the app accesses is the unique device ID. The unique device ID is a randomly generated hexidecimal value which contains no personal information and can not be used to gain information about you or your device.</p>

        <h2>What happens to the data</h2>
        <p>The unique device ID and the package & collection names of the selected apps are then sent to the iconpusher.com website. The unique device ID is only used by the site to filter the app list to just the apps which were sent by the device.</p>

        <p>The website iconpusher.com lists the historical package and activity names of packages to be used by icon pack developers. The app details (package & activity names) sent to the website will be publicly available but there will not be any means to link the apps to you.</p>

      </main>
    </div>
  )
}

export default Privacy
