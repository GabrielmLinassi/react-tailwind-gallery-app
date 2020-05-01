import React, { useState } from 'react';

function SearchBar({ searchTerm }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    searchTerm(text);
  }

  return (
    <div className="max-w-sm mx-auto my-10">
      <form onSubmit={handleSubmit}>
        <div className="flex border-b-2 border-teal-500 py-2">
          <input
            className="w-full text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="bg-teal-500 hover:bg-teal-700 text-sm text-white py-2 px-3 rounded" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
