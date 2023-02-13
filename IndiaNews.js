
import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import ToggleTheme from './ToggleTheme';
import "./App.css"

const IndiaNews = () => {
    const [news,setnews]=useState([])
 

  
  useEffect(()=>{
    axios.get(" https://newsapi.org/v2/top-headlines?country=us&apiKey=598e31f93cfa482bbb39669f47ea6ed4")
    .then((res)=>{
      console.log(res.data.articles);
      setnews(res.data.articles)
    })
   },[])
   
  return (
 <>
<main>
<div className='container my-3'>
<div className='row text-center'>
    {news.map((val)=>{
        return(
            <div className="card" style={{width: "15rem"}}>
  <img src={val.urlToImage} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 classNmae="card-title" style={{height:"4rem",fontSize:"0.7rem"}}>{val.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href={val.url} class="btn btn-primary">More Detailes</a>
  </div>
</div>
        )
    })}
</div>
</div>
</main>
 </>
  )
}
export default IndiaNews;