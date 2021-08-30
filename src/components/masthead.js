//<!-- Masthead-->
import React, { Component } from 'react'

export default class Masthead extends Component {
    render() {
        return (<header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                <img class="masthead-avatar mb-5" src="assets/img/samhead.png" alt="Sam Lanctot" />
                <h1 class="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <p class="masthead-subheading font-weight-light mb-0">Full Stack Developer in .Net</p>
            </div>
        </header>
        );
    }
}
