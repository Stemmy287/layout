import React from 'react';
import s from './job.module.css'

type JobPropsType = {
    img: string
    title: string
    description: string
}

const Job: React.FC<JobPropsType> = ({
                                         img,
                                         title,
                                         description
                                     }) => {
    return (
        <div className={s.jobContainer}>
            <div className={s.icon}>
                <button>Смотреть</button>
            </div>
            <div className={s.descriptionBlock}>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    );
};

export default Job;