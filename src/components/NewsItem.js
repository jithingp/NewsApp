
import React, { Component } from 'react'

export class NewsItem extends Component {
  
    render() {
        let {title,description,imageurl,newsUrl,author,date}=this.props
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={!imageurl?"https://images.livemint.com/img/2021/12/20/600x338/Tedros_1640015135780_1640015136051.JPG":imageurl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
