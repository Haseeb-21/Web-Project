const database = require("../database");

let socialController = {

    showFriends: (req, res) => {
        res.render("social/friends", { friends: req.user.friends })
    },
    addFriend: (req, res) => {
        let msg = ""
        friend = req.body.email
        if (req.user.email == req.body.email ){
            msg = "You can not add yourself as a friend."
        }
        else if (req.user.friends.includes(req.body.email)) {
            msg = "User is already your friend."
        } else {
            for (let i=0; i < database.length; i++) {
                if (friend == database[i].email) {
                    req.user.friends.push(friend);
                    msg = "User successfully added."
                    break;
                } else {
                    msg = "User does not exist."
                }
            }
        }
        res.render("social/friends", { friends: req.user.friends, message: msg })
    },
}

module.exports = socialController;
