import { FC, useState } from 'react';

import { ReactComponent as PinIcon } from '@/assets/images/svg/pin.svg';
import { ReactComponent as ClockIcon } from '@/assets/images/svg/clock.svg';
import { ReactComponent as PhoneIcon } from '@/assets/images/svg/phone.svg';
import { ReactComponent as GlobeIcon } from '@/assets/images/svg/globe.svg';
import { ReactComponent as Arrow } from '@/assets/images/svg/arrow-small.svg';

import parseScheduleText, { parseScheduleHours } from '@/utils/helpers/parseSchedule';

import { SalonType } from '@/types';

type InfoTabType = {
    salon: SalonType;
};

const InfoTab: FC<InfoTabType> = ({ salon }) => {
    const [isScheduleOpen, setIsScheduleOpen] = useState<boolean>(false);
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
                <span
                    onClick={() => setIsScheduleOpen((prev) => !prev)}
                    className={`p-infoTab__arrow${isScheduleOpen ? ' p-infoTab__arrow--up' : ''}`}
                >
                    <Arrow />
                </span>

                <div
                    className={`p-infoTab__menu${
                        isScheduleOpen ? ' p-infoTab__menu--expanded' : ''
                    }`}
                >
                    {Object.entries(salon.schedule).map(([day, value], i) => (
                        <div key={i} className="p-infoTab__scheduleRow">
                            <span>{day}: </span>
                            <span className="p-infoTab__scheduleHour">
                                {value.length > 0 ? (
                                    value.length === 1 ? (
                                        <>
                                            {parseScheduleHours(value[0].Start)} :{' '}
                                            {parseScheduleHours(value[0].Finish)}{' '}
                                        </>
                                    ) : (
                                        value.map((val, i) => (
                                            <span key={i}>
                                                {parseScheduleHours(val.Start)} :{' '}
                                                {parseScheduleHours(val.Finish)} {i === 0 && '- '}
                                            </span>
                                        ))
                                    )
                                ) : (
                                    <>Stängd</>
                                )}
                            </span>
                        </div>
                    ))}
                </div>
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
