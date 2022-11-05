import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
        <section className='banner'>
            <div className='container'>
                <div className='banner-content'>
                    <h1>A warm welcome !</h1>
                    <p>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                    <a className='btn btn-primary' href='#'>Call to action</a>
                </div>
            </div>
        </section>
    )
  }
}
