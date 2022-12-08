import React from 'react';
import s from './jobs.module.css'
import sContainer from '../common/styles/Container.module.css'
import Job from "./job/job";

export const Jobs = () => {

    const jobs = [
        {
            id: 1,
            img: '',
            title: 'Название проекта',
            description: 'Краткое описание'
        },
        {
            id: 2,
            img: '',
            title: 'Название проекта',
            description: 'Краткое описание'
        }
    ]

    return (
        <div className={s.jobsBlock}>
            <div className={`${sContainer.container} ${s.jobsContainer}`}>
                <h2 className={s.text}>My jobs</h2>
                <div className={s.jobs}>
                    {jobs.map(el => <Job
                        key={el.id}
                        img={el.img}
                        title={el.title}
                        description={el.description}
                    />)}
                </div>
            </div>
        </div>
    );
};

