import { MagnifyingGlass } from '@phosphor-icons/react';

export interface AdvancedSearchFilterProps {
  usernameOrEmail?: string;
  createdDateRange: Date;
  sortBy?: string;
  sortOrder?: string;
}

const SearchBar: React.FC = () => {
  return (
    <div className="md:flex-[2] md:flex grow items-center gap-3 rounded-xl border-2 border-border text-gray-500 p-2.5 ml-40">
      <MagnifyingGlass />
      <input
        type="text"
        placeholder={'Enter blog title or description...'}
        className="focus:placeholder:text-primary focus:outline-none focus:placeholder:opacity-100 grow bg-transparent text-primary placeholder:text-tertiary text-sm font-inter font-normal"
      />
      <div className="md:flex-none inset-y-0 text-center"></div>
    </div>
  );
};

export default SearchBar;
