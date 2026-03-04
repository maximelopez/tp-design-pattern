// Objet final
class User {
  constructor({ name, age, email, address }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.address = address;
  }
}

// Builder
class UserBuilder {
  constructor() {
    this.data = {};
  }

  setName(name) {
    this.data.name = name;
    return this;
  }

  setAge(age) {
    this.data.age = age;
    return this;
  }

  setEmail(email) {
    this.data.email = email;
    return this;
  }

  setAddress(address) {
    this.data.address = address;
    return this;
  }

  build() {
    if (!this.data.name) {
      throw new Error("Le nom est obligatoire.");
    }

    return new User(this.data);
  }
}

// Utilisation
const user = new UserBuilder()
  .setName("Maxime")
  .setAge(25)
  .setEmail("maxime@example.com")
  .setAddress("Beaucouzé")
  .build();

console.log(user);