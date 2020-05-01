import React from 'react';
import PropTypes from 'prop-types';

const Tags = ({ tag }) => {
  return (
    <span className="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 px-3 py-1 mr-2 mt-2">
      {tag}
    </span>
  );
};

Tags.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tags;
