import React, { Component } from "react";
import Shotokan from "shotokan-core";
import "./ShotokanPage.css";

class ShotokanPage extends Component {
    constructor(props) {
        super(props);

        this.shotokan = new Shotokan.KataVideoSource();
    }

    render() {
        let kataList = this.shotokan.getJKAKatasFromYouTubeVideoList();
        let katas = [];

        for (let k = 0; k < kataList.length; k += 1) {
            katas.push(<li key={k}>{kataList[k].kataName}</li>);
        }

        return (
            <div className="shotokan-page">
                <h2>Kata</h2>
                <ul>
                    {katas}
                </ul>
            </div>
        );
    }
}

export default ShotokanPage;