import React from 'react';
import s from './styles.module.css';

const Nav = () => {
    return (
        <aside className={s.nav}>
            <ul className={s.links_list}>
                <li>
                    <a href="#3" className={s.link}>
                        Главная
                    </a>
                </li>
                <li>
                    <a href="#3" className={s.link}>
                        Новости
                    </a>
                </li>
                <li>
                    <a href="#3" className={s.link}>
                        Сообщения
                    </a>
                </li>
                <li>
                    <a href="#3" className={s.link}>
                        Фото
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default Nav;
