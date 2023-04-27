const fs = require("fs");
const EventEmitter = require("events");
// var personsList = require("./persons.json").persons;
var personsList = fs.readFileSync(__dirname + "/persons.json");

class DBController extends EventEmitter {
  select() {
    return new Promise((resolve, reject) => {
      this.emit("SELECT", "EventSelect");
      let personsList = fs.readFileSync(__dirname + "/persons.json");
      resolve(JSON.parse(personsList));
    });
  }

  insert(newPerson) {
    let personsList = JSON.parse(fs.readFileSync(__dirname + "/persons.json"));
    if (personsList.findIndex((person) => person.id == newPerson.id) !== -1)
      return false;
    this.emit("INSERT", "EventInsert");

    personsList.push(newPerson);
    fs.writeFileSync(
      __dirname + "/persons.json",
      JSON.stringify(personsList),
      "utf-8"
    );
    return true;
  }

  update(personToUpdate) {
    this.emit("UPDATE", "EventUpdate");
    let personsList = JSON.parse(fs.readFileSync(__dirname + "/persons.json"));

    let personIndex = personsList.findIndex(
      (person) => person.id == personToUpdate.id
    );
    if (personIndex === -1) return false;
    personsList[personIndex] = personToUpdate;
    fs.writeFileSync(
      __dirname + "/persons.json",
      JSON.stringify(personsList),
      "utf-8"
    );
    return true;
  }

  delete(personID) {
    this.emit("DELETE", "EventDelete");
    let personsList = JSON.parse(fs.readFileSync(__dirname + "/persons.json"));

    let personIndex = personsList.findIndex((person) => person.id == personID);
    if (personIndex === -1) return false;
    personsList.splice(personIndex, 1);
    fs.writeFileSync(
      __dirname + "/persons.json",
      JSON.stringify(personsList),
      "utf-8"
    );
    return true;
  }
}

module.exports = {
  DBController,
};
