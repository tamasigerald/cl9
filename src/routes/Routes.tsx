import { FC } from 'react';
import { BrowserRouter, Navigate, Routes as RouteWrapper, Route } from 'react-router-dom';

import App from '../App';
import SalonsPage from '@/pages/SalonsPage/SalonsPage';
import SalonDetailPage from '@/pages/SalonsPage/SalonDetailPage/SalonDetailPage';

const Routes: FC = () => {
    return (
        <BrowserRouter>
            <RouteWrapper>
                <Route path="/" element={<App />}>
                    <Route path="salons" element={<SalonsPage />} />
                    <Route path="salons/:salon" element={<SalonDetailPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </RouteWrapper>
        </BrowserRouter>
    );
};

export default Routes;
