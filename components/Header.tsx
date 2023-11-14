import React, { ChangeEvent, ReactNode, useState } from "react";
import Link from "next/link";
import AppCardGroup from './AppCardGroup';
import AppCard from './AppCard';
import style from './Header.module.scss';
import { type } from "os";

type propsType = {
  onAdd:Function,
  onRemove: Function,
  onCheckSelected: Function,

}
function Header (props:propsType) {

    //let results = []


/*
    constructor(props:propsType) {
        super(props);
        this.state = {
            keyWord: "narp",
            results: [],
        };
        //this.resultAppData = []
      }
*/

const [keyword, setKeyword] = useState("narp");
const [results, setResults] = useState<appType[]>([]);


    const doSearch = (e:ChangeEvent<HTMLInputElement>) =>
    {
        let keyword = e.target.value
        // this.setState({keyWord: keyword});
        setKeyword(keyword);
        if (keyword.length >= 3) {
            fetch(`https://api.iconpusher.com/search/${keyword}`)
            .then(res => res.json())
            .then(data => {
              // populateResults(data.apps)
              setResults(data.apps)
            }).catch((e) => {console.log(e)});
        } else {
            // populateResults([])
            setResults([])
        }
    }

    const checkSelected = (appId:Number) => {
        console.log('check selected data', appId, props)
        props.onCheckSelected(appId)
    }

    var more = null;
    var moreLink = `/search/${keyword}`
    if (results.length >= 10) {
        more = <Link href={`/search/${keyword}`}>
            More Results
        </Link>
    }

    return (
        <header>
            <p className="logo">Icon Pusher</p>
            <div className={style.search}>
                <input type="search" onChange={doSearch} placeholder="Search" />
                <AppCardGroup
                appCards={results}
                moreLink={moreLink}
                onAdd={props.onAdd}
                onRemove={props.onRemove}
                // onCheckSelected={props.onCheckSelected}
              />
            </div>
            <nav>
            </nav>
        </header>
    )
  }
  export default Header
