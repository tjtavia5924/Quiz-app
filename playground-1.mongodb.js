
use('tester');

// Insert a few documents into the sales collection.
db.getCollection('data').insertMany([
 {
  user: 'party',
  firstName: 'Jack',
  lastName: 'Smith',
  userName: 'goat4552',
  email: 'Jack.Smith@gmail.com',
  password: 'heloof123',
  profile: 'picture',
  points: 2  
},

{
  user: 'grass',
  firstName: 'Jill',
  lastName: 'Cass',
  userName: 'mellow200',
  email: 'Jill.Cass@gmail.com',
  password: 'Fiver534',
  profile: 'picture',
  points: 4 
}

 
  
]);

