import React from 'react';
import s from './contacts.module.css'
import sContainer from '../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.container}`}>
                <h3>Контакты</h3>
                <form>
                    <input/>
                    <input/>
                    <textarea></textarea>
                </form>
                <button>Отправить</button>
            </div>
        </div>
    );
};

