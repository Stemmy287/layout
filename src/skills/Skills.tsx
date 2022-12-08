import React from 'react';
import s from './skills.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

const skills = [
    {
        id: 1,
        title: 'JS',
        description: 'sed do eiusmod tempor inoididunt ut labore alsol'
    },
    {
        id: 2,
        title: 'Css',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisoing elit.'
    },
    {
        id: 3,
        title: 'React',
        description: 'ut labore et dolore magna Ut enum...'
    },
]

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    {skills.map(el => <Skill
                        key={el.id}
                        title={el.title}
                        description={el.description}
                    />)}
                </div>
            </div>
        </div>
    );
};

