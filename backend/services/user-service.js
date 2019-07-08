const mongoService = require("./mongo-service");

const ObjectId = require("mongodb").ObjectId;

function checkLogin(userCredentials) {
  return mongoService.connect().then(db => {
    const collection = db.collection("user");
    return collection
      .findOne({
        $and: [
          { username: userCredentials.username },
          { password: userCredentials.password }
        ]
      })
      .then(user => {
        if (user) {
          var userToreturn = { ...user };
          const {username,email,isAdmin}=userToreturn
          return {username,email,isAdmin};
        } else {
          return Promise.reject(new Error("bad username or password"));
        }
      });
  });
}

function addUser(user) {
   console.log('the user is ',user) 
  return mongoService
    .connect()
    .then(db => db.collection("user").insertOne(user))
    .then(res => {
      user._id = res._id;
      return user;
    });
}
module.exports = {
  checkLogin,
  addUser
};
