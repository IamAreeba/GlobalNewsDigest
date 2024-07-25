import React, { Component } from 'react'

export class NewsItem extends Component {

  // constructor(){
  //   super()
  //   console.log("Hello I am a constructor")
  // }

  render() {
    let { title, description, imageURL, newsURL } = this.props

    return (
      <div className="card my-3" style={{ width: "18rem" }}>
        <img src={imageURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="/" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
