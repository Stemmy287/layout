import React from 'react';
import s from './footer.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Social} from "./social/Social";

const social = [
    {
        id: 1,
        img: ''
    },
    {
        id: 2,
        img: ''
    },
    {
        id: 3,
        img: ''
    },
    {
        id: 4,
        img: ''
    }
]

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.container}`}>
                <h2>Иван Иванов</h2>
                <div className={s.social}>
                    {social.map(el => <Social key={el.id}/>)}
                </div>
                <span><b>Ⓒ 2022 все права защищены</b></span>
            </div>
        </div>
    );
};

