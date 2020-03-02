import React from 'react';
import Header from '../header';
import Content from '../content';
import Nav from '../nav';

import './styles.css';

const App = () => {
    return (
        <main className="container">
            <Header />
            <Nav />
            <Content />
        </main>
    );
};

export default App;
