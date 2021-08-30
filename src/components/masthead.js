//<!-- Masthead-->
import React, { Component } from 'react'

export default class Masthead extends Component {
    render() {
        return (<header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="..." />
                <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">Full Stack Developer in .Net</p>
            </div>
        </header>
        );
    }
}
