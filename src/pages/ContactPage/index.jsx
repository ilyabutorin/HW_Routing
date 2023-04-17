import React from 'react'
import s from './index.module.css'

export default function ContactPage() {
    return (
        <div className={s.contact_page}>
            <div className={s.cont_text}>
                <h3>Мы всегда рады новым клиентам и готовы ответить на все ваши вопросы. Свяжитесь с нами по телефону, электронной почте или через форму обратной связи на нашем веб-сайте. Благодарим вас за проявленный интерес к нашей компании "Green Fingers"!</h3>
            </div>
            <div className={s.cont_info}>
                <p>Адрес: ул. Гринвич, 123, г. Нью-Йорк, США</p>
                <p>Телефон: +1 (555) 123-4567</p>
                <p>Электронная почта: info@greenfingers.com <button onClick={() => window.location = 'mailto:info@greenfingers.com'}>Contact Us</button></p>
                <p>Веб-сайт: <a href="//www.greenfingers.com" target={'_blank'} >GreenFingers</a></p>
            </div>
        </div>
    )
}
