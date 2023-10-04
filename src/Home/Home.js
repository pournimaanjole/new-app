import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import Newscard from '../components/Newscard/Newscard';

const Home = () => {
  const [data, setdata] = useState([]);
  const [searchquery,setsearchquery] = useState('pune');

  const loadnews = async () => {
    try{
    const response = await axios.get(`https://newsapi.org/v2/everything?q= ${searchquery}&from=2023-10-02&to=2026f25a469812d44c890762aa089e65aa83-10-02&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`)
    console.log(response.data.articles);
    setdata(response.data.articles)
    }
    catch(error){
console.log(error);
    }
  }


  useEffect(() => {
    loadnews();
  }, [])

  useEffect(()=>{
    loadnews();
  },[searchquery])

  return (<>
    <div >
      <h1>news app</h1>

     <input type='text' onChange={(e)=>{
setsearchquery(e.target.value);
     }}/>

<div className='display'>
      {
        data.map((article, index) => {
          const { title, author, content, description, publishedAt, url, urlToImage} = article;
          return (<>
            <Newscard image={urlToImage} title={title} url={url}/>
          </>)
        })
      }
      </div>
    </div>
  </>
  )
}

export default Home
