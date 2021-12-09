import { SalonType } from '@/types';
import { FC } from 'react';

import { ReactComponent as Arrow } from '@/assets/images/svg/arrow-small.svg';
import { ReactComponent as StarFill } from '@/assets/images/svg/star.svg';
import { ReactComponent as StarEmpty } from '@/assets/images/svg/star-empty.svg';
import { useNavigate } from 'react-router';

type ListItemType = {
    salon: SalonType;
};

const ListItem: FC<ListItemType> = ({ salon }) => {
    const navigate = useNavigate();
    return (
        <div className="c-listItem" onClick={() => navigate(`${salon.id}`)}>
            <div className="c-listItem__time">12:00</div>

            <div className="c-listItem__content">
                <div className="c-listItem__name">{salon.name}</div>
                <div className="c-listItem__ratings">
                    <span>
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
                    </span>{' '}
                    <span>({salon.total_ratings})</span>
                </div>
                <div className="c-listItem__address">{salon.address}</div>
            </div>

            <div className="c-listItem__info">
                <div className="c-listItem__price">{salon.price.toFixed(0)} kr</div>
                <div className="c-listItem__duration">30 min</div>
            </div>

            <div className="c-listItem__action">
                <Arrow />
            </div>
        </div>
    );
};

export default ListItem;
