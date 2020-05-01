import React from 'react';
import PropTypes from 'prop-types';

import Tags from './imageCard/Tags';

const ImageCard = ({ webformatURL, user, views, likes, downloads, tags }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={webformatURL} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2 capitalize">{`Photo by ${user}`}</div>
        <ul>
          <li>
            <strong>Views: </strong>
            {views.toLocaleString()}
          </li>
          <li>
            <strong>Likes: </strong>
            {likes.toLocaleString()}
          </li>
          <li>
            <strong>Downloads: </strong>
            {downloads.toLocaleString()}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.split(',').map((tag, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Tags key={index} tag={tag.trim()} />
        ))}
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageCard;
