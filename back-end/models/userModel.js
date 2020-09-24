const connection = require('./connection');

const getUserByEmail = async (userEmail) => (
  connection()
    .then((schema) => schema
      .getTable('users')
      .select(['id', 'name', 'email', 'password', 'role'])
      .where('email = :email')
      .bind('email', userEmail)
      .execute())
    .then((results) => results.fetchOne())
    .then(([id, name, email, password, role]) => ({
      id, name, email, password, role,
    }))
    .catch((err) => err)
);

const getUserById = async (userId) => (
  connection()
    .then((schema) => schema
      .getTable('users')
      .select(['id', 'name', 'email', 'password', 'role'])
      .where('email = :email')
      .bind('id', userId)
      .execute())
    .then((results) => results.fetchOne())
    .then(([id, name, email, password, role]) => ({
      id, name, email, password, role,
    }))
    .catch((err) => err)
);

const createUser = async (name, email, password, seller) => {
  try {
    const role = seller ? 'administrator' : 'client';
    await connection()
      .then((db) => db
        .getTable('users')
        .insert(['name', 'email', 'password', 'role'])
        .values(name, email, password, role)
        .execute());
    return { name, email, password, role };
  } catch (err) {
    return err;
  }
};

const updateName = async (userName, userEmail) => (
  connection()
    .then((schema) => schema
      .getTable('users')
      .update()
      .set('name', userName)
      .where('email = :email')
      .bind('email', userEmail)
      .execute())
);

module.exports = {
  getUserByEmail,
  getUserById,
  createUser,
  updateName,
};
// const findByEmail = async (uEmail) => {
//   try {
//     const user = await connect()
//       .then((db) => db
//       .getTable('users')
//       .select()
//       .where('email = :email')
//       .bind('email', uEmail)
//       .execute(),
//     )
//     .then((results) => results.fetchAll()[0]);
//     if (user) {
//       const userData = ([id, email, password, firstName, lastName]) => ({
//         id, email, password, name: `${firstName} ${lastName}`,
//       });
//       return userData(user);
//     }
//     return {};
//   } catch (err) {
//     return err;
//   }
// };

// const findById = async (uId) => {
//   try {
//     const user = await connect()
//       .then((db) => db
//       .getTable('users')
//       .select()
//       .where('id = :id')
//       .bind('id', uId)
//       .execute(),
//     )
//     .then((results) => results.fetchAll()[0]);
//     if (user) {
//       const userData = ([id, email, password, firstName, lastName]) => ({
//         id, email, password, firstName, lastName,
//       });
//       return userData(user);
//     }
//     return {};
//   } catch (err) {
//     return err;
//   }
// };
// const updateUser = async (data) => {
//   try {
//     const { id, email, password, name, surname } = data.user;
//     const user = await connect()
//       .then((db) => db
//         .getTable('users')
//         .update()
//         .set('email', email)
//         .set('password', password)
//         .set('first_name', name)
//         .set('last_name', surname)
//         .where('id = :id')
//         .bind('id', id)
//         .execute());
//     return user;
//   } catch (err) {
//     return err;
//   }
// };
