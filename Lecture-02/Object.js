var user = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
}

user.greet();