let result = [];

for (let i = 0; i < store.categories.length; i++) {
  for (let j = 0; j < store.categories[i].items.length; j++) {
    result.push(store.categories[i].items[j]);
  }
}

console.log(result);