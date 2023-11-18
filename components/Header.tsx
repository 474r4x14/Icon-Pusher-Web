import React, { ChangeEvent, ReactNode, useState, useEffect } from "react";
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

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, []);

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

  var more = null;
  var moreLink = `/search/${keyword}`
  if (results.length >= 10) {
      more = <Link href={`/search/${keyword}`}>
          More Results
      </Link>
  }



/*
// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')
*/
  const toggleTheme = () => {
    if (localStorage.theme == 'light') {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark');
    } else {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark');
    }
    console.log('setting theme', localStorage.theme);
  }


    return (
      <header>
        <div className="bg-emerald-700 border-b-4 border-emerald-800">
          <p className="logo" onClick={toggleTheme}>Icon Pusher</p>
        </div>
        {/* <div className={style.search}> */}
        <div className="text-center my-4">
          <input
            type="search"
            onChange={doSearch}
            placeholder="Search"
            className="transition-colors p-4 rounded-lg bg-zinc-300 dark:bg-zinc-700 border-2 border-emerald-400 dark:border-emerald-400"
          />
          <AppCardGroup
            appCards={results}
            moreLink={moreLink}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
            onCheckSelected={props.onCheckSelected}
          />
        </div>
      </header>
    )
  }
  export default Header
