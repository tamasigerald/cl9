import { FC, useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';

import { ReactComponent as FilterIcon } from '@/assets/images/svg/filter.svg';
import { SalonType } from '@/types';
import { fakeGetSalons } from '@/adapters/xhr';
import Filter from '@/components/Filter';
import ListItem from '@/components/ListItem';

const SalonsPage: FC = () => {
    const [dataList, setDataList] = useState<SalonType[]>([]);
    const [filteredList, setFilteredList] = useState<SalonType[]>([]);

    const [minFilter, setMinFilter] = useState<number | undefined>();
    const [maxFilter, setMaxFilter] = useState<number | undefined>();

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            const dataFromResponse = fakeGetSalons() as any;
            setDataList(dataFromResponse);
            setLoading(false);
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
                backButtonFn={() => alert('Action not available ;)')}
                rightButton={{
                    icon: <FilterIcon />,
                    class: 'filter',
                    rightButtonFn: () => alert('Right button action ;)'),
                }}
            />
            <Filter
                minValue={minFilter}
                maxValue={maxFilter}
                setMinValue={(x: number | undefined) => setMinFilter(x)}
                setMaxValue={(x: number | undefined) => setMaxFilter(x)}
            />
            <Layout>
                {filteredList &&
                    filteredList.length > 0 &&
                    filteredList.map((salon, i) => <ListItem salon={salon} key={i} />)}

                {(!filteredList || filteredList.length === 0) && !loading && <div>No data</div>}

                {loading && <div>Loading...</div>}
            </Layout>
        </>
    );
};

export default SalonsPage;
