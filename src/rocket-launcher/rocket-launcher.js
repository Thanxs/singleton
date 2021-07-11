import React, { Component } from 'react';
import ButtonComponent from '../button/button.component';
import Rocket from '../rocket/rocket';

import './rocket-launcher.css'

export default class RocketLauncherComponent extends Component {

    state = {
        isLaunched: false,
        rocket: null
    };

    launchRocket() {
        this.setState(() => ({
            isLaunched: true,
            rocket: new Rocket('Space Alex XXX')
        }));

        this.state.rocket && this.state.rocket.flyFn && this.state.rocket.flyFn();
    }

    stopRocket() {
        this.setState({
            isLaunched: false
        });

        const { rocket } = this.state;

        clearInterval(rocket && rocket.timerId);
    }

    render() {
        const { isLaunched } = this.state;

        return (
            <div>
                {
                    !isLaunched
                        ?
                        <ButtonComponent
                            label='Launch'
                            listener={ this.launchRocket.bind(this) }
                        />
                        :
                        <ButtonComponent
                            label='Stop'
                            listener={ this.stopRocket.bind(this) }
                        />
                }
            </div>
        );
    }
}