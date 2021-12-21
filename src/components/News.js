import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super()
        
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }
    async componentDidMount(){
      let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=2a32e4d1fc7b4347848d8ada3513ca4a&page=1&pageSize=20"
      let data=await fetch(url)
      let parsedData=await data.json()
      console.log(parsedData);
      this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
    }
    handleprevclick=async ()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=2a32e4d1fc7b4347848d8ada3513ca4a&page=${this.state.page-1}&pageSize=20`
      let data=await fetch(url)
      let parsedData=await data.json()
      console.log(parsedData)
      this.setState({
        page:this.state.page-1,
        articles:parsedData.articles
      })
    }
    handlenextclick=async ()=>{
      if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

      }
      else{
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=2a32e4d1fc7b4347848d8ada3513ca4a&page=${this.state.page+1}&pageSize=20`
      let data=await fetch(url)
      let parsedData=await data.json()
      console.log(parsedData)
      this.setState({
        page:this.state.page+1,
        articles:parsedData.articles
      })
      }

    }
    render() {
        return (
            <div className='container my-3'>
               <h2>NewsMonkey-Top Headlines</h2>
              
              <div className="row">
              {this.state.articles.map((element)=>{
                 return <div className="col-md-4" key={element.url}>
                  <NewsItem  title={element.title?element.title:""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage}
                  newsUrl={element.url}/>
                  </div>

              })}
              </div>
              <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick}> &larr; Previous</button>
              <button type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
              </div>
               
           
            </div>
        )
    }
}

export default News
