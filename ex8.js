const names = ['John Doe', 'Alice Smith', 'Bob Johnson'];
const initials = [];

for (let i = 0; i < names.length; i++) {
  const nameParts = names[i].split(' ');
  let initialsForName = '';
  
  for (let j = 0; j < nameParts.length; j++) {
    initialsForName += nameParts[j][0];
  }

  initials.push(initialsForName);
}

console.log(initials);
