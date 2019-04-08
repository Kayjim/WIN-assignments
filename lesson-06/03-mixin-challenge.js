function User(name, address, city, state, zipcode, avatar) {
    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
    this.avatar = avatar;
}

User.prototype = {
    getProfileUpdate() {
        return {address: '5678 2nd St', city: 'Charlotte', state: 'NC', zipcode: '28000'};
    },
    updateProfile(update) {
        for(var key in update) {
            this[key] = update[key];
        }
    }
}

/*
class User {
    constructor(name, address, city, state, zipcode, avatar) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.avatar = avatar;
    }

    getProfileUpdate() {
        return {address: '5678 2nd St', city: 'Charlotte', state: 'NC', zipcode: '28000'};
    }

    updateProfile(update) {
        for(var key in update) {
            this[key] = update[key];
        }
    }
}
*/

var user = new User('Bob', '1234 Main St', 'Columbia', 'SC', '29000', 'avatar.png');
console.log(user);
user.updateProfile(user.getProfileUpdate());
console.log(user);