import classNames from 'classnames';
import React from 'react';

interface SearchableListItem {
  [key: string]: any;
}

interface SearchableListProps<T extends SearchableListItem> {
  items: SearchableListItem[];
  renderItem: (item: T) => React.ReactNode;
  onElementClick: (e: T) => void;
  className?: string;
}

const SearchableList: React.FC<SearchableListProps<any>> = ({
  items,
  renderItem,
  className,
  onElementClick,
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter((item) => {
    const values = Object.values(item).map((value) =>
      value?.toString().toLowerCase()
    );
    return values.some((value) => value?.includes(searchTerm.toLowerCase()));
  });

  return (
    <div className={classNames(className)}>
      <div className="p-4">
        <input
          type="text"
          placeholder="Search..."
          className="h-8 w-full rounded-lg p-2 border border-solid border-black"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <ul className="list-none-custom mb-0">
        {filteredItems.map((item, index) => (
          <li
            className="h-10 cursor-pointer flex items-center gap-x-2 hover:bg-purple-50 hover:font-semibold px-4"
            key={index}
            onClick={() => onElementClick(item)}
          >
            {renderItem(item)}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { SearchableList };
