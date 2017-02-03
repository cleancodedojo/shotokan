import 'bootstrap/dist/css/bootstrap.min.css';
import "./ShotokanPage.css";
import logo from './images/jka-logo.png';

import React, { Component } from "react";
import Shotokan from "./core/source/index";
import KataLink from "./KataLink";

class ShotokanPage extends Component {
    constructor(props) {
        super(props);

        this.shotokan = new Shotokan.KataVideoSource();
    }

    render() {
        return (
            <div className="shotokan-page container-fluid">
                <nav className="navbar">
                    <img src={logo} className="header-logo" alt="logo" />
                    <h3 className="header-title">Shotokan Karate</h3>
                </nav>
                <div className="shotokan-page-body panel panel-default">
                    <div className="panel-heading">Kata</div>
                    <div className="panel-body">
                        <ul className="list-group">
                            {this.getKatas()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    getKatas() {
        let kataList = this.shotokan.getJKAKatasFromYouTubeVideoList();
        let katas = [];

        for (let k = 0; k < kataList.length; k += 1) {
            katas.push(<KataLink key={k} kataName={kataList[k].kataName} kataVideoName={kataList[k].kataVideoName} />);
        }

        return katas;
    }
}

export default ShotokanPage;