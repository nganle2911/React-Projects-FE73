import React, { Component } from 'react'

export default class Category extends Component {
  render() {
    return (
        <section className='category'>
            <div className='container'>
                <div className='row category-content'>
                    <div className='col-lg-6 col-xxl-4'>
                        <div className='card'>
                            <div className='card-content'>
                                <div className='card-icon'>
                                    <i className='bi bi-collection'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
