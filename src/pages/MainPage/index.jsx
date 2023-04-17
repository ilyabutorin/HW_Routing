import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function MainPage() {
    return (
        <div className={s.main_page}>
            <div className={s.main_block}>
                <div className={s.main_text}>
                    <h2>"Green Fingers" - это небольшая компания, которая занимается разработкой и созданием уникальных и экологически чистых растительных композиций. Мы создаем дизайнерские растительные композиции для дома, офиса и общественных мест. В "Green Fingers" мы гордимся тем, что наша продукция экологически чистая и дарит людям красоту и уют.</h2>
                
                <h3>Мы гордимся тем, что наша компания помогает сделать окружающую среду более зеленой и здоровой, и мы постоянно стремимся к улучшению качества наших услуг и продукции.</h3>
                </div>

                <img src="https://static.wixstatic.com/media/0a564b_96825905228345329481f53f58dbbf49~mv2.png/v1/fill/w_399,h_263,al_c,lg_1,q_85/0a564b_96825905228345329481f53f58dbbf49~mv2.png" alt="mainP" />
            </div>

            <Link to='/about'><button>Узнать больше о нас...</button></Link>
            
        </div>
    )
}
