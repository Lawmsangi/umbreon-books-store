import React from 'react';
import '../styles/Categories.css'
import { Link } from 'react-router-dom';
import Ikigai from '../assets/ikigai.jpg'

function Categories() {
    const categories = [
        {title: 'fiction', img: Ikigai},
        {title: 'non-fiction', img: Ikigai},
        {title: 'bestsellers', img: Ikigai},
        {title: 'self help', img: Ikigai},
        {title: 'thriller', img: Ikigai},
        {title: 'mystery', img: Ikigai},
        {title: 'business', img: Ikigai},
        {title: 'romance', img: Ikigai},
        {title: 'young-adult', img: Ikigai},
        {title: 'contemporary', img: Ikigai},
        {title: 'fantasy', img: Ikigai},
        {title: 'humor', img: Ikigai},
        {title: 'magic', img: Ikigai},
        {title: 'boy-love', img: Ikigai},
        {title: 'high-school', img: Ikigai},
    ]
  return (
    <div className='categories'>
        <div className="categories-card">
          {categories.map((category, index) => (
            <Link to={`/categories/${category.title}`} className='categories-link'>
              <div className='card'>
                <img src={category.img} alt="img"/>
                <span>{category.title}</span>
              </div>
            </Link>
          ))}
            
        </div>
    </div>
  )
}

export default Categories