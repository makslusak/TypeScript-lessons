class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class Home {
  protected door = false;
  private tenants: Person[] = [];
  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (!this.door) {
      throw new Error('The door is close');
    }
    this.tenants.push(person);
    console.log('Person entered');
  }
  abstract openDoor(key: Key): boolean;
}

class MyHouse extends Home {
  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error('Key to another door');
    }

    return (this.door = true);
  }
}

const key = new Key();
const person = new Person(key);
