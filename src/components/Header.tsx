import { FC } from 'react';
import { ReactComponent as ArrowIcon } from '@/assets/images/svg/arrow.svg';

type LayoutType = {
    color?: 'default' | 'white';
    customClassName?: string;
    title?: string;
    backButtonFn?: () => void;
    rightButton?: {
        icon: JSX.Element;
        class: string;
        rightButtonFn: () => void;
    };
};

const Header: FC<LayoutType> = ({
    color = 'default',
    customClassName = 'c-header',
    title,
    backButtonFn,
    rightButton,
}) => {
    return (
        <header
            className={`${customClassName}${
                color !== 'default' ? ` ${customClassName}--${color}` : ''
            }`}
        >
            {backButtonFn && (
                <div
                    className={`${customClassName}__backBtn svg-icon`}
                    onClick={() => backButtonFn()}
                >
                    <ArrowIcon />
                </div>
            )}

            {title && <div className={`${customClassName}__title`}>{title}</div>}

            {rightButton && (
                <div
                    className={`${customClassName}__rightBtn ${customClassName}__rightBtn--${rightButton.class} svg-icon`}
                    onClick={() => rightButton.rightButtonFn()}
                >
                    {rightButton.icon}
                </div>
            )}
        </header>
    );
};

export default Header;
