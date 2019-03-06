// Задание 1:
// Реализовать добавление группы к юзерам в цикле.

(function () {
  
  const users = [
    {id: 1, name: 'Bob'},
    {id: 2, name: 'Joe'},
    {id: 3, name: 'Don', groupId: 1},
    {id: 4, name: 'Kally'},
    {name: 'Alex'},
    {name: 'John'},
  ];
  
  const groups = [
    {id: 1, title: 'First Group'},
    {id: 2, title: 'Last Group'},
  ];


  const group = groups[1];

  addSelectedGroupToUsers(users, group)
  .then((res) => console.log(res));


  async function addSelectedGroupToUsers(users, group) {
    const result = [];

    for(let user of users) {
      let currentUser = {...user};

      if(!('id' in currentUser)) {
        currentUser = await createUser(currentUser);
      }
      if(!('groupId' in currentUser)) {
        currentUser = await addGroup(currentUser, group.id);
      }

      result.push(currentUser);
    }

    return result;    
  }


  function createUser(user) {
    return new Promise(resolve => {
      setTimeout(() => {
        const randomInt = Math.floor(Math.random() * 1001);
        resolve({id: randomInt, ...user});
      }, 500);
    })
  }

  function addGroup(user, groupId) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({...user, groupId});
      }, 500);
    })
  }


})();

