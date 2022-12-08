import React from 'react';
import s from './header.module.css'
import {Nav} from "../nav/Nav";

export const Header = () => {
    return (
        <div className={s.header}>
            <Nav/>
        </div>
    );
};

