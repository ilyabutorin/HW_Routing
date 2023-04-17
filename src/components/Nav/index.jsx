import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className={s.nav}>

            <div className={s.nav_menu}>
                <Link to='/'>
                    <img src="https://greenfingerservices.co.uk/wp-content/uploads/2018/10/Green-Fingers-Tree-and-Garden-Services-Company-Logo-300px.png" alt="GreenFingers" /> </Link>

                <Link to='/'>
                    <div>Главная</div>
                </Link>

                <Link to='/about'>
                    <div>О нас</div>
                </Link>

                <Link to='/contact'>
                    <div>Контакты</div>
                </Link>
            </div>
        </div>
    )
}
