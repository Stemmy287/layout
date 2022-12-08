import React from 'react';
import s from './skill.module.css'

type SKillPropsType = {
    title: string
    description: string
}

export const Skill: React.FC<SKillPropsType> = ({
    title,
                                                    description
                                                }) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};

