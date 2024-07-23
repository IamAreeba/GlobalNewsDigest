import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description } = this.props


    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src="https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
