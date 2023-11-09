import React, { useState } from "react";
import Link from "next/link";
import AppCard from './AppCard';
import style from './SelectedApps.module.scss';
import Misc from '../classes/Misc';

class SelectedApps extends React.Component {
//var selected = [];
    //let results = []

    constructor(props) {
        super(props);
        this.selected = [];

        this.state = {
            keyWord: "narp",
            results: [],
            selected: Misc.getVal('selected',[]),
        };
        
        
        //this.selected.push(<p>app deets</p>)
        //const [count, setCount] = useState(0);
      }

/*
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
        }
    }

    populateResults = (appData: Array) => {
        var results = <p>niet</p>
        if (appData.length > 0) {
            var more = null;
            if (appData.length >= 10) {
                more = <Link href={`/search/${this.state.keyWord}`}>
                    <a>
                    MOAR
                    </a>
                </Link>
            }
            var resultList = []
            var i = 0
            var max = appData.length
            if (max > 9) {
                max = 9
            }

            for (i = 0; i < max; i++) {
                var app = appData[i]
                resultList.push(<li key={`selected-${app.id}`}>
                <Link href={`/package/${app.packageName}`}>
                    <a>
                    {app.name}!!!
                    </a>
                </Link>
                <AppCard name={app.name} />
                </li>)
            }
            results = <div><strong>YIP YIP <ul>{resultList}</ul></strong>{more}</div>
        }

       this.setState({results: results})
    }
*/

    render() {
        let selectedApps = [];
        /*
        for(let i = 0; i < this.state.selected.length; i++) {
            selectedApps.push(<p>{this.state.selected[i].name}</p>)
        }
        */
        this.state.selected.forEach((app) => {
            console.log('state app data',app)
            selectedApps.push(<p>{app.name}</p>)
        })
        return <div className={style.selected}>
            <h1>SELECTED, {this.props.name}</h1>
            {selectedApps}
            <p>t2</p>
            {this.props.appData}
        </div>;
    }
  }

  export default SelectedApps
