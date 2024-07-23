import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-4' >

        <h2> GlobalNewsDigest - Top Headlines </h2>

        <div className="row">
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" />
          </div>
          
        </div>


      </div>
    )
  }
}

export default News
