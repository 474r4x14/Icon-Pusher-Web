import React, { ChangeEvent, useState, useEffect } from "react";
import Link from "next/link";
import AppCardGroup from './AppCardGroup';
import style from './Header.module.scss';
import { IconSun, IconHistory, IconMail, IconMug } from '@tabler/icons-react';
import Tooltip from '@mui/material/Tooltip';
import { apiClient } from '../lib/api';

function Header (props:headerPropsType) {

  const [results, setResults] = useState<appType[]>([]);

  useEffect(() => {
    if (props.searchKeyword.length == 0) {
      setResults([])
    }
  },[props.searchKeyword])


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

  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.classList.contains('dark');

    // 1. Add the transition class
    root.classList.add('theme-transition');

    // 2. Toggle the dark mode class and update localStorage
    root.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');

    // 3. Remove the transition class after it has completed
    setTimeout(() => {
      root.classList.remove('theme-transition');
    }, 500);
  }

    return (
      <header>
        <div className="bg-emerald-700 border-b-4 border-emerald-800 text-white">
          <div className="max-w-screen-xl m-auto flex items-center">
            <p className="grow">
              <Link
                href="/"
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
