import React, { ChangeEvent, ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import AppCardGroup from './AppCardGroup';
import style from './Header.module.scss';
import { IconSun, IconHistory, IconMail, IconMug } from '@tabler/icons-react';
import Tooltip from '@mui/material/Tooltip';
import { apiClient } from '../lib/api';

function Header (props:headerPropsType) {

  // const [keyword, setKeyword] = useState("narp");
  const [results, setResults] = useState<appType[]>([]);

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, []);

  useEffect(() => {
    // console.log('kw - Has changed')
    if (props.searchKeyword.length == 0) {
      setResults([])
    }
  },[props.searchKeyword]) // <-- here put the parameter to listen, react will re-render component when your state will be changed


  const doSearch = async (e:ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value
    props.setSearchKeyword(keyword)

    if (keyword.length >= 3) {
      try {
        // Use async/await to get the data and type it.
        const data: searchResultstPropsType = await apiClient.get(`/search/${keyword}`);
        setResults(data.apps);
      } catch (e) {
        console.error("Search failed:", e);
        setResults([]);
      }
    } else {
      setResults([])
    }
  }

  var more = null;
  var moreLink = `/search/${props.searchKeyword}`
  if (results.length > 12) {
      more = <Link href={`/search/${props.searchKeyword}`}>
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
    // console.log('setting theme', localStorage.theme);
  }

    return (
      <header>
        <div className="bg-emerald-700 border-b-4 border-emerald-800 text-white">
          <div className="max-w-screen-xl m-auto flex items-center">
            <p className="grow">
              <Link
                href="/"
                // className="py-3 inline-block"
                className={style.logo}
              >
                <span>
                  <img src="https://img.iconpusher.com/logo_w.png" className="size-12" />
                </span>
                <span className="pl-4 text-xl">Icon Pusher</span>
              </Link>
            </p>
            <ul className="flex">
              <li>
                <Link href="/donate" className="px-2 py-4 block">
                  <Tooltip title="Donate" arrow>
                    <IconMug />
                  </Tooltip>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="px-2 py-4 block">
                  <Tooltip title="Contact" arrow>
                    <IconMail />
                  </Tooltip>
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="px-2 py-4 block">
                  <Tooltip title="Changelog" arrow>
                    <IconHistory />
                  </Tooltip>
                </Link>
              </li>
            </ul>
            <p className="px-2 py-4 cursor-pointer" onClick={toggleTheme}>
              <Tooltip title="Change Theme" arrow>
                <IconSun />
              </Tooltip>
            </p>
          </div>
        </div>
        {/* <div className={style.search}> */}
        <div className="text-center my-4 max-w-screen-xl m-auto">
          <input
            type="search"
            onChange={doSearch}
            placeholder="Search for an app"
            className="transition-colors p-4 rounded-lg bg-zinc-100 dark:bg-zinc-700 border-2 border-emerald-400 dark:border-emerald-400 w-full"
            value={props.searchKeyword}
          />
          <AppCardGroup
            appCards={results}
            moreLink={moreLink}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
            onCheckSelected={props.onCheckSelected}
            setSearchKeyword={props.setSearchKeyword}
            useMax={true}
          />
        </div>
      </header>
    )
  }
  export default Header
