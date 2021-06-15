import React from 'react';

const TimelineList = ({ timelines, onLike }) => {
  return (
    <ul>
      {timelines.map(({ id, desc, likes }) => (
        <li style={{ display: 'inline-block', fontSize: '18px' }} key={id}>
          {desc}
          <button data-id={id} onClick={onLike}>{`좋아요 ${likes}`}</button>
        </li>
      ))}
    </ul>
  );
};

export default TimelineList;
