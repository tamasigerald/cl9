import { FC, useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';

import { ReactComponent as FilterIcon } from '@/assets/images/svg/filter.svg';
import { SalonType } from '@/types';
import { fakeGetSalons } from '@/adapters/xhr';
import Filter from '@/components/Filter';

const SalonsPage: FC = () => {
    const [dataList, setDataList] = useState<SalonType[]>([]);
    const [filteredList, setFilteredList] = useState<SalonType[]>([]);

    const [minFilter, setMinFilter] = useState<number | undefined>();
    const [maxFilter, setMaxFilter] = useState<number | undefined>();

    useEffect(() => {
        const timer = setTimeout(() => {
            const dataFromResponse = fakeGetSalons() as any;
            setDataList(dataFromResponse);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (dataList && dataList.length > 0) {
            const filtered = dataList.filter((salon) => {
                if (minFilter && maxFilter)
                    return salon.price >= minFilter && salon.price <= maxFilter;
                if (minFilter) return salon.price >= minFilter;
                if (maxFilter) return salon.price <= maxFilter;
                if (!minFilter && !maxFilter) return salon;
            });

            setFilteredList(filtered);
        }
    }, [minFilter, maxFilter, dataList]);

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
            <Filter
                minValue={minFilter}
                maxValue={maxFilter}
                setMinValue={(x: number | undefined) => setMinFilter(x)}
                setMaxValue={(x: number | undefined) => setMaxFilter(x)}
            />
            <Layout>
                {filteredList && filteredList.length > 0 ? (
                    filteredList.map((salon, i) => <div key={i}>{salon.name}</div>)
                ) : (
                    <div>No data</div>
                )}
            </Layout>
        </>
    );
};

export default SalonsPage;
