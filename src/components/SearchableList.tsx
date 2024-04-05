import classNames from 'classnames';
import React from 'react';
import Search from 'assets/search.svg?react';
import { handleParentFocus } from 'utilities/helpers';
import Close from 'assets/close.svg?react';
import FileSearch from 'assets/file-search.svg?react';

interface SearchableListItem {
  [key: string]: any;
}

interface SearchableListProps<T extends SearchableListItem> {
  items: SearchableListItem[];
  renderItem: (item: T) => React.ReactNode;
  onElementClick: (e: T) => void;
  className?: string;
}

const SearchableList: React.FC<SearchableListProps<any>> = ({ items, renderItem, className, onElementClick }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter((item) => {
    const values = Object.values(item).map((value) => value?.toString().toLowerCase());
    return values.some((value) => value?.includes(searchTerm.toLowerCase()));
  });

  const clearSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSearchTerm('');
  };

  const onLiElementClick = (item: SearchableListItem) => {
    setSearchTerm('');
    onElementClick(item);
  };

  return (
    <div className={classNames('flex flex-col', className)}>
      <div className="flex px-2 my-2 mx-4 items-center gap-x-2 rounded-lg outline outline-1 outline-slate-950">
        <Search className="h-4" />
        <input
          type="text"
          placeholder="Search..."
          className="h-8 w-full outline-none"
          value={searchTerm}
          onFocus={handleParentFocus}
          onBlur={handleParentFocus}
          onChange={handleSearchChange}
        />
        {searchTerm && (
          <button onClick={clearSearch}>
            <i>
              <Close className="h-4 text-gray-800" />
            </i>
          </button>
        )}
      </div>
      {filteredItems.length > 0 ? (
        <ul className="list-none-custom mb-0">
          {filteredItems.map((item, index) => (
            <li
              className="h-10 cursor-pointer flex items-center gap-x-2 hover:bg-purple-50 hover:font-semibold px-4"
              key={index}
              onClick={() => onLiElementClick(item)}>
              {renderItem(item)}
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-results flex-1 flex flex-col gap-y-4 justify-center items-center">
          <FileSearch className="h-12" />
          <span>No results</span>
        </div>
      )}
    </div>
  );
};

export { SearchableList };
