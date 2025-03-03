// Select the database to use.
use("courses");

// Insert a few documents into the sales collection.
db.getCollection("lessons").insertMany([
  {
    name: "Java",
    price: "2000",
    instructor: "Sarthak",
  },
  {
    name: "Python",
    price: "2500",
    instructor: "Amit",
  },
  {
    name: "JavaScript",
    price: "1800",
    instructor: "Rohit",
  },
  {
    name: "C++",
    price: "2200",
    instructor: "Neha",
  },
  {
    name: "Flutter",
    price: "3000",
    instructor: "Vikas",
  },
  {
    name: "React",
    price: "2700",
    instructor: "Anjali",
  },
  {
    name: "Node.js",
    price: "2600",
    instructor: "Sumit",
  },
  {
    name: "Django",
    price: "2800",
    instructor: "Priya",
  },
  {
    name: "Swift",
    price: "3200",
    instructor: "Rahul",
  },
  {
    name: "Kotlin",
    price: "3100",
    instructor: "Sneha",
  },
  {
    name: "Ruby",
    price: "2300",
    instructor: "Aditya",
  },
]);


// Print a message to the output window.
console.log("Done inseerting data");

