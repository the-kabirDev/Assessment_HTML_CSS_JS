const arr = ["Rose", "Lily", "Jeasmin", "Sunflower"];

const obj = {
  name: "Royal Bengal Tiger",
  age: 12,
  place: "Sundarban",
};

// JSON = JavaScript Object Notation

// console.log(obj)

const wrappingData = JSON.stringify(obj);
console.log(JSON.parse(wrappingData));
