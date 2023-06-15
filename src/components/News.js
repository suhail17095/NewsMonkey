import React, { Component } from 'react'
import Loader from './Loader';
import NewsComponent from './NewsComponent'
import axios from "axios"
// news api

export class News extends Component {
    API_KEY="dbe88412809248e1a26496b12277d524";
    page_size=9;
    number_of_articles=0;
    constructor(){ 
        super();
        this.state = {
          articles:[],
          page:1,
          loading:false,
          author:"",
          date:""
        }
        this.default_image="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png";
    }
    async componentDidMount()
    {
        this.setState({loading:true});
        let url="https://newsapi.org/v2/top-headlines?country="+this.props.country+"&category="+this.props.category+"&apiKey="+this.API_KEY+"&page="+(this.state.page)+"&pageSize="+this.page_size;
        // let data=await fetch(url);
        // let parsed_data=await data.json();
        // this.setState(
        //     {   articles:parsed_data.articles
        //     }
        //     );
        // this.number_of_articles=parsed_data.totalResults;
        // this.setState({loading:false});
        axios.get(url).then((res)=>
        {
            console.log(res.data.articles)    
            this.setState(
                {   articles:res.data.articles
                }
                );
        this.number_of_articles=res.data.totalResults;
        this.setState({loading:false});
        }).catch((err)=>
        {
            console.log(err)
        })
        // console.log(Math.ceil(this.page_size/this.number_of_articles));
    }
    handlePrev=async ()=>
    {
        this.setState({loading:true});
        let url="https://newsapi.org/v2/top-headlines?country="+this.props.country+"&category="+this.props.category+"&apiKey="+this.API_KEY+"&page="+(this.state.page-1)+"&pageSize="+this.page_size;
        
        // let data=await fetch(url);
        // let parsed_data=await data.json();
        // this.setState(
        //     {   page:this.state.page-1,
        //         articles:parsed_data.articles
        //     }
        //     );
        // this.setState({loading:false});
        axios.get(url).then((res)=>
        {
            this.setState(
                {   page:this.state.page-1,
                    articles:res.data.articles
                }
                );
            this.setState({loading:false});
        })
      
    }
    handleNext=async ()=>
    {   
        this.setState({loading:true});
        let url="https://newsapi.org/v2/top-headlines?country="+this.props.country+"&category="+this.props.category+"&apiKey="+this.API_KEY+"&page="+(this.state.page+1)+"&pageSize="+this.page_size;
        // let data=await fetch(url);
        // let parsed_data=await data.json();
        // console.log(url);
        // this.setState(
        //     {   page:this.state.page+1,
        //         articles:parsed_data.articles
        //     }
        //     );
        // this.setState({loading:false});
        axios.get(url).then((res)=>
        {
            this.setState(
                {   page:this.state.page+1,
                    articles:res.data.articles
                }
                );
            this.setState({loading:false});
        })
    }
    render() {
        
        return (
            <>
             {this.state.loading && <Loader/>}
            <div className='container'>
                <div className="row container">
                {this.state.loading ==false && this.state.articles.map((element) => {
                    return <div className="col-lg-4 col-md-6 col-sm-12 my-5" key={element.url}>
                        <NewsComponent title={element.title && element.title.slice(0,30)+"..."} description={element.description && element.description.slice(0,88)+"..."} urlToImage={!element.urlToImage?this.default_image:element.urlToImage} url={element.url}
                        date={element.publishedAt} author={element.author}
                        />
                    </div>
                })}
                </div>
            </div>
            <div className="container mg-auto" style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"10px"}}>
                
                <button className="btn btn-dark mx-2 my-2" disabled={this.state.page <=1} onClick={this.handlePrev}>&laquo; Previous</button>
                <button className="btn btn-dark mx-2 my-2" disabled={Math.ceil(this.number_of_articles/this.page_size) == this.state.page} onClick={this.handleNext}>Next &raquo;</button>
            </div>
            </>
        )
    }
}

export default News