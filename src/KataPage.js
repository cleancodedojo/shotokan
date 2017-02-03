import React, { Component } from "react";

import { Link } from 'react-router'
import logo from './images/jka-logo.png';
import './KataPage.css';

import Shotokan from "./core/source/index";

class KataPage extends Component {
    constructor(props) {
        super(props);

        this.shotokan = new Shotokan.KataVideoSource();
    }

    render() {
        return (
            <div className="kata-page">
                <div className="shotokan-page container-fluid">
                    <nav className="navbar">
                        <img src={logo} className="header-logo" alt="logo" />
                        <h3 className="header-title">Shotokan Karate</h3>
                    </nav>
                    <Link to="/kata">
                        <button className="button-back btn btn-primary" type="button">back</button>
                    </Link>
                    <div className="shotokan-page-body panel panel-default">
                        <div className="panel-heading">{this.getName(this.props.params.kataName)}</div>
                        <div className="panel-body">
                            <video src={this.getLink(this.getName(this.props.params.kataName))} width="100%" autoPlay controls />    
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    getName(kataLinkName) {
        return kataLinkName.replace("-", " ");
    }

    getLink(kataVideoName) {
        let videoBaseUrl = "http://spock.webfactional.com/videos/shotokan-karate/";
        return videoBaseUrl + this.shotokan.getVideoName(kataVideoName);
    }
}

export default KataPage;