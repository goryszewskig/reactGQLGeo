const user = {
    _id: "1",
    name: "gg",
    email: "g@g.pl",
    picture: "https://cl"
}

module.exports = {
    Query: {
        me: () => user
    }
}