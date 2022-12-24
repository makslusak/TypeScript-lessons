"use strict";
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class Home {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(person) {
        if (!this.door) {
            throw new Error('The door is close');
        }
        this.tenants.push(person);
        console.log('Person entered');
    }
}
class MyHouse extends Home {
    openDoor(key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error('Key to another door');
        }
        return (this.door = true);
    }
}
const key = new Key();
const person = new Person(key);
//# sourceMappingURL=APP.js.map