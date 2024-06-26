import React from "react";

type SearchInputProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

export const DefaultInput: React.FC<SearchInputProps> = ({
  onChange,
  value,
  placeholder = "",
}: SearchInputProps) => {
  return (
    <div className="flex items-center max-w-sm mx-auto flex-col sm:flex-row">
      <div className="relative w-full">
        <input
          type="text"
          id="simple-search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
