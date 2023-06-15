import React, { Component } from 'react'

export class NewsComponent extends Component {
    render() {
        let {title,description,urlToImage,url,author,date} =this.props;
        return (
                <div className="card" style={{width:"18rem"}}>
                    <img className="card-img-top" src={urlToImage} alt="Card image cap" style={{height:"12rem"}}/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"> <small className='text-muted'>{"AUTHOR: "+author+" DATE: "+date}</small></p>
                            <a href={url} className="btn btn-dark">Read More</a> 
                        </div>
                </div>
        )
    }
}

export default NewsComponent