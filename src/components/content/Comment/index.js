import React from 'react';
import s from './styles.module.css';

const Comment = () => {
    return (
        <div className={s.comment}>
            <div className={s.img} />
            <div className={s.text}>Текст коммента</div>
        </div>
    );
};

export default Comment;
