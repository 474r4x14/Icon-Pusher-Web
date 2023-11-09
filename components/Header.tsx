import React, { useState } from "react";
import Link from "next/link";
import AppCardGroup from './AppCardGroup';
import AppCard from './AppCard';
import style from './Header.module.scss';

class Header extends React.Component {

    //let results = []

    constructor(props) {
        super(props);
        this.state = {
            keyWord: "narp",
            results: [],
        };
        //this.resultAppData = []
      }

    doSearch = (e) =>
    {
        let keyword = e.target.value
        this.setState({keyWord: keyword});
        if (keyword.length >= 3) {
            fetch(`https://api.iconpusher.com/search/${keyword}`)
            .then(res => res.json())
            .then(data => {
              this.populateResults(data.apps)
            }).catch((e) => {console.log(e)});
        } else {
            this.populateResults([])
        }
    }

    populateResults = (appData: Array) => {
        var results = <p>niet</p>
        if (appData.length > 0) {
            var more = null;
            var moreLink = `/search/${this.state.keyWord}`
            if (appData.length >= 10) {
                more = <Link href={`/search/${this.state.keyWord}`}>
                    More Results
                </Link>
            }
            var resultList = []
            var i = 0
            var max = appData.length
            if (max > 9) {
                max = 9
            }

            /*
            for (i = 0; i < max; i++) {
                var app = appData[i]
                resultList.push(<li>
                // New component for grouping all cards
                <AppCard name={app.name} appData={app} onAdd={this.addApp} onRemove={this.removeApp} />
                </li>)
            }
            */
            results = <div><AppCardGroup appCards={appData} moreLink={moreLink} onAdd={this.addApp} onRemove={this.removeApp} onCheckSelected={this.checkSelected} /></div>
        }

       this.setState({results: results})
    }







    addApp = appData => {
        console.log('HEADER add card data', appData.name)
        console.log(this.props)
        this.props.onAdd(appData)
    }

    removeApp = (appId) => {
        console.log('remove card data', appId, this.props)
        this.props.onRemove(appId)
    }

    checkSelected = (appId) => {
        console.log('check selected data', appId, this.props)
        this.props.onCheckSelec(appId)
    }

    render() {
        return <header>
            <p>Icon Pusher</p>
            <div className={style.search}>
                <input type="search" onChange={this.doSearch} placeholder="Search" />
                {this.state.results}
            </div>
            <nav>
            </nav>
        </header>;
    }
  }

  export default Header
