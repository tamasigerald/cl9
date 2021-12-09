import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Header from '@/components/Header';
import { ReactComponent as Heart } from '@/assets/images/svg/heart.svg';
import { ReactComponent as StarFill } from '@/assets/images/svg/star.svg';
import { ReactComponent as StarEmpty } from '@/assets/images/svg/star-empty.svg';

import { fakeGetSalonByID } from '@/adapters/xhr';

import { SalonType } from '@/types';
import Tabs from '@/components/Tabs/Tabs';
import Tab from '@/components/Tabs/Tab/Tab';
import InfoTab from './InfoTab';
import ScheduleTab from './ScheduleTab';

const SalonDetailPage: FC = () => {
    const { salon: salonId } = useParams();

    const [salon, setSalon] = useState<SalonType | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (salonId) {
            const data = fakeGetSalonByID(parseInt(salonId)) as any;
            setSalon(data);
        }
    }, [salonId]);

    return (
        <>
            {salon && (
                <Hero imageUrl={salon.image}>
                    <Header
                        color="white"
                        backButtonFn={() => navigate(-1)}
                        rightButton={{
                            icon: <Heart />,
                            class: 'heart',
                            rightButtonFn: () => alert('Made with \u2661 by Gerald! :)'),
                        }}
                    />
                    <Layout as="section">
                        <div className="c-hero__content">
                            <div className="c-hero__title">{salon.name}</div>
                            <div className="c-hero__ratings">
                                <span className="c-hero__ratings__icons">
                                    {Array(salon.average_rating)
                                        .fill(0)
                                        .map((_, i) => (
                                            <StarFill key={i} />
                                        ))}
                                    {Array(5 - salon.average_rating)
                                        .fill(0)
                                        .map((_, i) => (
                                            <StarEmpty key={i} />
                                        ))}
                                </span>
                                <span className="c-hero__ratings__total">
                                    ({salon.total_ratings})
                                </span>
                            </div>
                        </div>
                    </Layout>
                </Hero>
            )}

            {salon && (
                <Tabs>
                    <Tab title="Info">
                        <InfoTab salon={salon} />
                    </Tab>
                    <Tab title="Schedule">
                        <ScheduleTab salon={salon} />
                    </Tab>
                </Tabs>
            )}
        </>
    );
};

export default SalonDetailPage;
