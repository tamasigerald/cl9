import { FC } from 'react';

type SplashType = {
    splash: boolean;
};

const Splash: FC<SplashType> = ({ splash }) => {
    return <div className={`c-splash${splash ? ' c-splash--show' : ''}`}>The Salon</div>;
};

export default Splash;
