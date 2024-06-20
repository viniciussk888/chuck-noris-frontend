import React from "react";

type SearchInputProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
};

export const SearchInput: React.FC<SearchInputProps> = ({
  onChange,
  onSearch,
  value,
  placeholder = "",
}: SearchInputProps) => {
  return (
    <div className="max-w-md mx-auto">
      <div className="relative">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="search"
          id="default-search"
          className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
        />
        <button
          onClick={onSearch}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
          className="text-white absolute end-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
