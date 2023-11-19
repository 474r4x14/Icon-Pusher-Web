import React, { useState } from "react";
import Link from "next/link";
import AppCard from './AppCard';
import style from './Footer.module.scss';

class Footer extends React.Component {

    //let results = []

    constructor(props) {
        super(props);
        this.state = {
            keyWord: "narp",
            results: [],
        };
      }


    render() {
        return <footer className={style.main}>
            {this.props.name}
        </footer>;
    }
  }

  export default Footer
