import React, { ChangeEvent, ReactNode, useState } from "react";
import Link from "next/link";
import AppCardGroup from './AppCardGroup';
import style from './Header.module.scss';

type propsType = {
  onAdd:Function,
  onRemove: Function,
  onCheckSelected: Function,

}
function Header (props:propsType) {

  const [keyword, setKeyword] = useState("narp");
  const [results, setResults] = useState<appType[]>([]);

  const doSearch = (e:ChangeEvent<HTMLInputElement>) => {
    let keyword = e.target.value
    setKeyword(keyword);
    if (keyword.length >= 3) {
      fetch(`https://api.iconpusher.com/search/${keyword}`)
      .then(res => res.json())
      .then(data => {
        setResults(data.apps)
      }).catch((e) => {console.log(e)});
    } else {
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
      </header>
    )
  }
  export default Header
