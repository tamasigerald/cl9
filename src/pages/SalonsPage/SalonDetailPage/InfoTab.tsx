import { FC } from 'react';

import { ReactComponent as PinIcon } from '@/assets/images/svg/pin.svg';
import { ReactComponent as ClockIcon } from '@/assets/images/svg/clock.svg';
import { ReactComponent as PhoneIcon } from '@/assets/images/svg/phone.svg';
import { ReactComponent as GlobeIcon } from '@/assets/images/svg/globe.svg';

import parseScheduleText from '@/utils/helpers/parseSchedule';

import { SalonType } from '@/types';

type InfoTabType = {
    salon: SalonType;
};

const InfoTab: FC<InfoTabType> = ({ salon }) => {
    return (
        <div className="p-infoTab">
            <div className="p-infoTab__row">
                <span className="p-infoTab__icon">
                    <PinIcon />
                </span>
                <span>{salon.address}</span>
            </div>
            <div className="p-infoTab__row">
                <span className="p-infoTab__icon">
                    <ClockIcon />
                </span>
                <span>{parseScheduleText(salon)}</span>
            </div>
            <div className="p-infoTab__row">
                <span className="p-infoTab__icon">
                    <PhoneIcon />
                </span>
                <span>{salon.phone}</span>
            </div>
            <div className="p-infoTab__row">
                <span className="p-infoTab__icon">
                    <GlobeIcon />
                </span>
                <span>www.{salon.url}</span>
            </div>
            <div className="p-infoTab__desc">{salon.description}</div>
        </div>
    );
};

export default InfoTab;
