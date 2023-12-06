import React from 'react';
import {Component} from 'react';
import './Class.scss'
class Child extends Component {
    render() {
        return (
            <div className="parent">
                <div className="home">
                    <h1>Welcome</h1>
                </div>
                <div className="about">
                    <p>Hi....</p>
                </div>

            </div>
        )

    }
}
export default Child;


