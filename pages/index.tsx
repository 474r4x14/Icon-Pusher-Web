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
  latest:{apps:appType[]},
}

export default function Home(props:propsType) {

  var refTest = React.createRef();

    const [selectedApps, setSelectedApps] = useState<appType[]>([]);










/*
    // Has the app already been selected?
  function checkSelected(app)
  {
      console.log('index checkSelected',app.name, refTest)
      /*
      if (refTest.current.state.selected[app.id] !== undefined) {
          console.log('is selected')
      } else {
          console.log('is NOT selected')
      }
      *./
      /*
      appName.selected = true
      //appData.push(appName)
      console.log(appData,refTest.current.state.selected[appName.id])
      //refTest.current.setState({selected:[<p>bah</p>]})
      if (refTest.current.state.selected[appName.id] == undefined) {
          let tmpSelected =refTest.current.state.selected
          tmpSelected[appName.id] = appName
          //refTest.current.setState({selected: [...refTest.current.state.selected, appName]})
          refTest.current.setState({selected: tmpSelected})
      }
      //console.log('reftest',refTest.current)

      //setState({ books: booksList })
    *./
  }
  */



  const appIsSelected = (app:appType):boolean => {
    let isSelected = false
    selectedApps.forEach((appData) => {
      console.log('testing selected ['+appData.id+'|'+app.id+']')
      if (appData.id == app.id) {
        console.log('SELECTED!');
        isSelected = true
      }
    })
    console.log('alerady selected,',isSelected)
    return isSelected
  }

  const appSelectedIndex = (app:appType):number => {
    let isSelected = -1
    selectedApps.forEach((appData,index) => {
      console.log('testing selected ['+appData.id+'|'+app.id+']')
      if (appData.id == app.id) {
        console.log('SELECTED!');
        isSelected = index
      }
    })
    // console.log('alerady selected,',isSelected)
    return isSelected
  }

  const addTest = (appName:appType) =>
  {
      console.log('index addTest selected',selectedApps)
      console.log('index addTest',appName.name)
      appName.selected = true

      if (!appIsSelected(appName)) {
        console.log('adding selected?', selectedApps);
        // appData.push(appName)
        setSelectedApps( // Replace the state
        [ // with a new array
          ...selectedApps, // that contains all the old items
          appName // and one new item at the end
        ]
      );
      }




      /*
      console.log(appData,refTest.current.state.selected[appName.id])
      //refTest.current.setState({selected:[<p>bah</p>]})
      if (refTest.current.state.selected[appName.id] == undefined) {
          let tmpSelected =refTest.current.state.selected
          tmpSelected[appName.id] = appName
          //refTest.current.setState({selected: [...refTest.current.state.selected, appName]})
          refTest.current.setState({selected: tmpSelected})
      }
      */
      //console.log('reftest',refTest.current)

      //setState({ books: booksList })

  }


  function removeTest(app:appType)
  {
    console.log('index removeTest',app)
    var index = appSelectedIndex(app)
    console.log('index removeTest', index)

    setSelectedApps(selectedApps.filter(function(appCheck) {
      return appCheck.id !== app.id
  }));



    /*
      console.log('REMOVE', appName, refTest.current.state.selected)

      if (refTest.current.state.selected[appName] !== undefined) {
          let tmpSelected =refTest.current.state.selected
          //tmpSelected[appName.id] = appName

          tmpSelected[appName].selected = false

          console.log('before',tmpSelected)
          //tmpSelected.splice(appName, 1)
          delete tmpSelected[appName];
          console.log('after',tmpSelected)
          refTest.current.setState({selected: tmpSelected})
      }
      */

  }








    return (
        <div className={styles.container}>
            <Header
              onAdd={addTest}
              onRemove={removeTest}
              // onCheckSelected={checkSelected}
            />
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p>
                    <Link href="/">
                        home
                    </Link>
                </p>
                <AppCardGroup
                  appCards={props.latest.apps}
                  useMax={false}
                  onAdd={addTest}
                  onRemove={removeTest}
                  // onCheckSelected={checkSelected}
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
