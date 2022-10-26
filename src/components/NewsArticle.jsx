import React from 'react'

function NewsArticle({data}) {
  return (
    <div className='news_article'>
        <h1 className='news_heading'>{data.title}</h1>
        <hr/>
        <p className='news_desc'>{data.description}</p>
        <div className='author'><span className='news_author'>{data.author}</span>
        <span className='news_date'>{data.publishedAt}</span>
        </div>
    </div>
  )
}

export default NewsArticle