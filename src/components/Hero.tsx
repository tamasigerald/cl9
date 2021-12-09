import { FC } from 'react';

type HeroType = {
    imageUrl: string;
};

const Hero: FC<HeroType> = ({ imageUrl, children }) => {
    return (
        <div className="c-hero" style={{ backgroundImage: `url(${imageUrl})` }}>
            {children}
        </div>
    );
};

export default Hero;
