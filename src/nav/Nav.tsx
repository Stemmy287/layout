import React from 'react';
import s from './nav.module.css'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="">Главная</a>
            <a href="">Скилы</a>
            <a href="">Работа</a>
            <a href="">Контакты</a>
        </div>
    );
};

