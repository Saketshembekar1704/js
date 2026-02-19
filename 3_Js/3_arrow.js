const user = {
    name: "saket",
    balance: 999,

    welcomeMessage: function () {
        console.log(` ${this.name}, welcome to website`);

    }
}
user.welcomeMessage()
user.name = "Saket shembekar"
user.welcomeMessage()
