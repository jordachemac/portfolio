import DescriptionSection from '@components/DescriptionSection/descriptionSection';
import HeroSection from '@components/HeroSection/heroSection';
import React from 'react';

const Home: React.FC = () => {
    return (
        <>
            <HeroSection />
            <DescriptionSection
                title="Welcome to the home page"
                description="This is the home page of the website."
            />
        </>
    );
};

export default Home;
