import classNames from 'classnames';
import React from 'react';

interface Tab {
  title: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, className }) => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div
      className={classNames(
        'tabs-container border border-purple-600 rounded-xl p-6 bg-purple-50',
        className
      )}
    >
      <div className="tabs flex items-center gap-8 font-bold">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab cursor-pointer mb-1 py-2 px-6 uppercase ${
              index === activeTabIndex ? 'active text-purple-600' : ''
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <hr />
      <div className="tab-content flex flex-col py-4">
        {tabs[activeTabIndex].content}
      </div>
    </div>
  );
};

export { Tabs };
