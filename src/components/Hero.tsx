import { FC } from 'react';

type HeroType = {
    imageUrl: string;
};

const getSrc = (name: string) => {
    const path = `/src/assets/images/${name}`;
    const modules = import.meta.globEager(`/src/assets/images/*.png`);
    return modules[path].default;
};

const Hero: FC<HeroType> = ({ imageUrl, children }) => {
    const imageName = imageUrl.split('/').pop() as string;
    return (
        <div className="c-hero" style={{ backgroundImage: `url(${getSrc(imageName)})` }}>
            {children}
        </div>
    );
};

export default Hero;
