import React from 'react'
import s from './index.module.css'

export default function NotFoundPage() {
    return (
        <div className={s.not_found}>
            <h1>Error 404</h1>
            <h2>The requested URL was not found on this website.</h2>
            <h3>That's all we know, sorry ;(</h3>
        </div>
    )
}
