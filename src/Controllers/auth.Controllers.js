import User from "../models/user.model";


export function userRegister(req, res) {
    const { username, email, password } = req.body
    if (!username || !email || password) {
        return res.status(400).json({ message: "All fields are required" })
    }

    const isUserExist = User.findOne({ email })
    if (isUserExist) {
        return res.status(400).json({ message: "User already exists" })
    }
    const user = new User({ username, email, password })
    user.save()
        .then(user => res.status(201).json(user))
        .catch(err => res.status(400).json(err))

}