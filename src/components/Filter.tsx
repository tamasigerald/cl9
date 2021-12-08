import { FC, useState } from 'react';
import { ReactComponent as ArrowIcon } from '@/assets/images/svg/arrow-small.svg';

type FilterType = {
    minValue?: number;
    maxValue?: number;
    setMinValue: (x: number | undefined) => void;
    setMaxValue: (x: number | undefined) => void;
};

const Filter: FC<FilterType> = ({ minValue, maxValue, setMinValue, setMaxValue }) => {
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

    const setValues = (e: React.FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        const inputName = input.name;
        const inputValue = input.value || undefined;

        console.log(inputValue);

        if (inputName === 'min') {
            inputValue ? setMinValue(parseFloat(inputValue)) : setMinValue(undefined);
        } else if (inputName === 'max') {
            inputValue ? setMaxValue(parseFloat(inputValue)) : setMaxValue(undefined);
        }
    };

    return (
        <div className={'c-filter'}>
            <div className={'c-filter}__text'}>Pris 250 - 500 kr</div>

            <div
                className={`c-filter__arrowBtn ${
                    isFilterOpen ? 'c-filter__arrowBtn--up' : 'c-filter__arrowBtn--down'
                } svg-icon`}
                onClick={() => setIsFilterOpen((prev) => !prev)}
            >
                <ArrowIcon />
            </div>

            <div className={`c-filter__menu${isFilterOpen ? ' c-filter__menu--expanded' : ''}`}>
                <input
                    className="c-filter__input"
                    type="number"
                    placeholder="Minimipris"
                    name="min"
                    min="0"
                    max={maxValue || undefined}
                    value={minValue || ''}
                    onChange={(e) => setValues(e)}
                />
                <input
                    className="c-filter__input"
                    type="number"
                    placeholder="Maxpris"
                    name="max"
                    min={minValue || 0}
                    value={maxValue || ''}
                    onChange={(e) => setValues(e)}
                />
            </div>
        </div>
    );
};

export default Filter;
