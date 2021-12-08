import { FC } from 'react';
import Layout from '@/components/Layout';
import { useParams } from 'react-router';

const SalonDetailPage: FC = () => {
    const params = useParams();

    return (
        <Layout>
            <p>Salon {params.salon}</p>
        </Layout>
    );
};

export default SalonDetailPage;
