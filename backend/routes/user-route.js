const userService = require("../services/user-service");

function addRoutes(App) {

    App.post(`/api/register`, (req, res) => {

        const user = req.body;
        userService.addUser(user)
            .then((user) => {
                req.session.loggedInUser = user;
                res.json(user)
            })
            .catch(err => {
                res.status(500).send('Wrong user details')
            })
    }),

    App.post('/api/login', (req, res) => {
        const { username, password } = req.body;
        userService.checkLogin({username,password})
        .then(user =>  res.json(user))
        .catch(res.catch)
      })
      

}
module.exports = addRoutes;
