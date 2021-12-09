import React from 'react';

type TabType = {
    title: string;
};

const Tab: React.FC<TabType> = ({ children }) => {
    return <>{children}</>;
};

export default Tab;
