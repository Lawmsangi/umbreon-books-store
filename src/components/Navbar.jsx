import React from 'react'
import '../styles/Navbar.css'
import { SlMenu } from "react-icons/sl";
import { TbShoppingCartHeart } from "react-icons/tb";
import { HiOutlineHeart } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { BsSearchHeart } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar-first">
            <div className="navbar-links">
                <Link><SlMenu /></Link>
                <Link to="https://www.google.com/maps?q=Umbreon+Books,+near+upc+church,+Zuangtui,+Aizawl,+Mizoram+796014&ftid=0x374debac308b7d17:0x967946d1a761b999&hl=en-IN&gl=in&entry=gps&lucs=47062720&g_ep=CAISBjYuNTYuMhgAINeCAyoINDcwNjI3MjBCAklO&g_st=iw"><CiLocationOn /></Link>
            </div>
            <div className="title">
                <h3>Umbreon Books</h3>
            </div>
            <div className="navbar-links">
                <a href="/about"><HiOutlineHeart /></a>
                <a href="/"><TbShoppingCartHeart /></a>
            </div>
        </div>
        
        <div className="navbar-second">
            <div className="navbar-search">
                <input type="text" placeholder="Search" />
                <span className="search-icon"><BsSearchHeart /></span>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar