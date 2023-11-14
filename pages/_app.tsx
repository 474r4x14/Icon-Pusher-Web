import '../styles/globals.css'
import type { AppProps } from 'next/app'
//import React from "react"
import React, { useState } from "react";
import '../app/globals.css'

// Component is the Page being loaded
function MyApp({ Component, pageProps }: AppProps) {
//    console.log('pageProps',pageProps)
//    console.log('app Component',Component)

    // We try to grab the Layout static var from the Page
    const Layout = Component.Layout ? Component.Layout : React.Fragment;
    const [selected, setSelected] = useState([]);

function appTest(tmpVal)
{
    console.log('app from page compnent ['+tmpVal+']')
}

  return <Layout>
	<Component {...pageProps} onTest={appTest} />
	</Layout>
}

export default MyApp
