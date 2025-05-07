import React from 'react';
import '../styles/globals.css'
import HeroSection from '@/components/hero/hero';

const HomePage = () => {
    return (
        <div>
            <h1 className='bg-red-500 cursor-pointer'>home page</h1>
            <HeroSection/>
        </div>
    );
};

export default HomePage;