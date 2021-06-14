import { createSelector } from '@reduxjs/toolkit';

export const getFriends = (state) => state.friend.friends;
export const getAgeLimit = (state) => state.friend.ageLimit;
export const getShowLimit = (state) => state.friend.showLimit;

export const getFriendsWithAgeLimit = createSelector(
  getFriends,
  getAgeLimit,
  (friends, ageLimit) => friends.filter((friend) => friend.age < ageLimit)
);
export const getFriendsWithAgeShowLimit = createSelector(
  getFriendsWithAgeLimit,
  getShowLimit,
  (friendsWithAgeLimit, showLimit) => friendsWithAgeLimit.splice(0, showLimit)
);
