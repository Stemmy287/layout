import React from 'react';
import s from './distantWork.module.css'
import sContainer from '../common/styles/Container.module.css'

export const DistantWork = () => {
    return (
        <div className={s.distantWorkBlock}>
            <div className={`${sContainer.container} ${s.container}`}>
                <h3>Рассматриваю вариант удаленной работы</h3>
                <button>Нанять меня</button>
            </div>
        </div>
    );
};

