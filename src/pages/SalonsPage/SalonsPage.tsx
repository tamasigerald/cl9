import { FC } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';

import { ReactComponent as FilterIcon } from '@/assets/images/svg/filter.svg';

const SalonsPage: FC = () => {
    return (
        <>
            <Header
                title="Hår"
                backButtonFn={() => {
                    console.log('hey');
                }}
                rightButton={{
                    icon: <FilterIcon />,
                    class: 'filter',
                    rightButtonFn: () => alert('right button'),
                }}
            />
            <Layout>
                <p>Hello</p>
            </Layout>
        </>
    );
};

export default SalonsPage;
