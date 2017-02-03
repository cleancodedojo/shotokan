import React, { Component } from "react";
import { Link } from "react-router";

class KataLink extends Component {
    render() {
        return (
            <li className="list-group-item">
                <Link to={`kata/${this.getLink(this.props.kataName)}`}>
                    {this.props.kataName}
                </Link>
            </li>
        );
    }

    getLink(kataName) {
        return kataName.replace(" ", "-");
    }
}

export default KataLink;