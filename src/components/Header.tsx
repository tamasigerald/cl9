import { FC } from 'react';

type LayoutType = {
    customClassName?: string;
    padding?: boolean;
    paddingSize?: 'sm' | 'md' | 'lg';
};

const Header: FC<LayoutType> = ({
    children,
    customClassName = 'c-header',
    padding = true,
    paddingSize = 'sm',
}) => {
    return (
        <header
            className={`${customClassName}${
                padding ? `${paddingSize && ` ${customClassName}--${paddingSize}`}` : ''
            }`}
        >
            {children}
        </header>
    );
};

export default Header;
