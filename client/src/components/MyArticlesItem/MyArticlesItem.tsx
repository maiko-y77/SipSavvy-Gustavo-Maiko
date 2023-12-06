"use client"
import './MyArticlesItem.module.scss'
import { getArticles } from '@/lib/Articles/data'

const MyArticlesItem = () => {

  const articles = getArticles();
  console.log(articles)
  
  return <div className='test'>Vamos la</div>
}

export default MyArticlesItem