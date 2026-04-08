let result = {};

for (let i = 0; i < users.length; i++) {
  let role = users[i].role;
  let name = users[i].name;

  if (!result[role]) {
    result[role] = [];
  }

  result[role].push(name);
}

console.log(result);