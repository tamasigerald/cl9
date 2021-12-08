import { FC } from 'react';

type LayoutType = {
    as?: keyof JSX.IntrinsicElements;
    customClassName?: string;
    padding?: boolean;
    paddingSize?: 'sm' | 'md' | 'lg';
};

const Layout: FC<LayoutType> = ({
    children,
    as = 'main',
    customClassName = 'c-layout',
    padding = true,
    paddingSize = 'sm',
}) => {
    const LayoutTag = `${as}` as keyof JSX.IntrinsicElements;

    return (
        <LayoutTag
            className={`${customClassName}${
                padding ? `${paddingSize && ` ${customClassName}--${paddingSize}`}` : ''
            }`}
        >
            {children}
        </LayoutTag>
    );
};

export default Layout;
