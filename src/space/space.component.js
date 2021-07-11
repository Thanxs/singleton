import React, { Component } from 'react';
import RocketLauncherComponent from '../rocket-launcher/rocket-launcher';

import './space.component.css';

export default class SpaceComponent extends Component {

    render() {
        return (
            <div className="open-space">
                <RocketLauncherComponent />
            </div>
        );
    }
}