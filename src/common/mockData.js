const friends = [
  { name: 'a', age: 15 },
  { name: 'b', age: 20 },
  { name: 'c', age: 25 },
  { name: 'd', age: 30 },
];
const timelines = [
  { desc: 'A', likes: 0 },
  { desc: 'B', likes: 10 },
  { desc: 'C', likes: 20 },
  { desc: 'D', likes: 30 },
];

function makeDataGenerator(items) {
  let itemIndex = 0;
  return function getNextData() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;
    return { ...item, id: itemIndex };
  };
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);
