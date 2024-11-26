
import React from 'react';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
            <Banner movie={{ title: 'Example Movie', backdrop_path: '/example.jpg' }} />
            <h2>Welcome to the Home Page</h2>
        </div>
    );
};

export default Home;
