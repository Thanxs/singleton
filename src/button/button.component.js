import React, { Component } from 'react';

import './button.component.css'

export default class ButtonComponent extends Component {

    render() {
        const { label, listener } = this.props;

        return (
            <div>
                <button
                    type="button"
                    className="button"
                    onClick={ listener }
                    >
                        { label }
                </button>
            </div>
        );
    }
}