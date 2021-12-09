import Layout from '@/components/Layout';
import { SalonType } from '@/types';
import { FC } from 'react';

type ScheduleTabType = {
    salon: SalonType;
};

const ScheduleTab: FC<ScheduleTabType> = ({ salon }) => {
    return <Layout>Ups! Nothing to see here :{'('}</Layout>;
};

export default ScheduleTab;
