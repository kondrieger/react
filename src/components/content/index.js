import React from 'react';
import s from './styles.module.css';
import Comment from './Comment';

const Content = () => {
    return (
        <section className={s.content}>
            <div className={s.pic}></div>
            <div className={s.info}>
                <div className={s.avatar}></div>
                <div className={s.text}>
                    <h2 className={s.name}>Alex F</h2>
                    <ul className={s.facts}>
                        <li>Date of Birth: 2 feb</li>
                        <li>City: Moscow</li>
                        <li>Education: MIET '11</li>
                    </ul>
                </div>
            </div>
            <div className={s.posts}>тут пост</div>
            <div className={s.comments}>
                <Comment />
                <Comment />
            </div>
        </section>
    );
};

export default Content;
