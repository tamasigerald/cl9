import { FC, ReactElement, useState } from 'react';
import TabTitle from './TabTitle/TabTitle';

type TabsType = {
    children: ReactElement[];
};

const Tabs: FC<TabsType> = ({ children }) => {
    const [selectedTab, setSelectedTab] = useState<number>(0);
    return (
        <div className="c-tabs">
            <ul className="c-tabs__header">
                {children.map((item, i) => (
                    <TabTitle
                        key={i}
                        title={item.props.title}
                        index={i}
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                    ></TabTitle>
                ))}
            </ul>

            <div className="c-tabs__separator"></div>

            {children[selectedTab]}
        </div>
    );
};

export default Tabs;
