import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <div className='bg-dark text-white'>
            <div className='container d-flex justify-content-between'>
                <div className='header-left'>
                    <p>Start Bootstrap</p>
                </div>
                <ul className='header-right'>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}

