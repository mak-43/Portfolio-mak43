import React from 'react';
import './Nav.css'


const Nav = () => {



    const t = () => {
        let menu = document.querySelector('.menu')
        let navbar = document.querySelector('.navbar')
       
        menu.classList.toggle('fa-times')
        navbar.classList.toggle('active')
        menu.style.transform = null
        menu.style.transform = 'rotate(180deg)'
      
        menu.style.transition = 'all .8s ease-in-out'
    }
    return (

        <div>
            <header >
                <a href="#" >Mak</a>

                <nav className='navbar'>
                    <a href="#" className='active' >Home</a>
                    <a href="#" >Resume</a>
                    <a href="#" >Projects</a>
                    <a href="#" >Contact</a>
                    <a href="#" >Blogs</a>

                </nav>

                <div className="icon">
                    <i onClick={t} className="fas fa-bars menu"></i>
                </div>
            </header>
        </div>


    );
};

export default Nav;