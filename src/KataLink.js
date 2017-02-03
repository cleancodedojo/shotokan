import React, { Component } from "react";

class KataLink extends Component {
    render() {
        return (
            <li className="list-group-item">
                <a href={this.getLink(this.props.kataVideoName)}>{this.props.kataName}</a>
            </li>
        );
    }

    getLink(kataVideoName) {
        let videoBaseUrl = "http://spock.webfactional.com/videos/shotokan-karate/";
        return videoBaseUrl + kataVideoName;
    }
}

export default KataLink;