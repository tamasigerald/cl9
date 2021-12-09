import { useCallback } from 'react';

type TabTitleType = {
    title: string;
    index: number;
    selectedTab: number;
    setSelectedTab: (index: number) => void;
};

const TabTitle: React.FC<TabTitleType> = ({ title, selectedTab, setSelectedTab, index }) => {
    const onClick = useCallback(() => {
        setSelectedTab(index);
    }, [setSelectedTab, index]);

    return (
        <li
            className={`c-tabs__tab${selectedTab === index ? ' c-tabs__tab--active' : ''}`}
            onClick={onClick}
        >
            {title}
        </li>
    );
};

export default TabTitle;
