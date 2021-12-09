import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import Splash from './components/Splash';

function App() {
    const [splash, setSplash] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/salons');
        setSplash(true);
        const timer = setTimeout(() => {
            setSplash(false);
        }, 2000);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Splash splash={splash} />
            <Outlet />
        </>
    );
}

export default App;
