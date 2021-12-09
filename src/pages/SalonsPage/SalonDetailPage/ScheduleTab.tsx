import { FC } from 'react';

import Layout from '@/components/Layout';

import { SalonType } from '@/types';

type ScheduleTabType = {
    salon: SalonType;
};

const ScheduleTab: FC<ScheduleTabType> = ({ salon }) => {
    return <Layout>Ups! Nothing to see here :{'('}</Layout>;
};

export default ScheduleTab;
