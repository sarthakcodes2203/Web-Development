use("10crudDB")

// // console.log(db)

// db.createCollection("users")

// //Create>>>>>>>>
// db.users.insertOne({name: "John",age: 25,status: "A"})
// db.users.insertMany([
//     { name: "Jane", age: 30, status: "A" },
//     { name: "Doe", age: 35, status: "A" },
//     { name: "sarthak", age: 35, status: "A" }
// ])

// //Read>>>>>>>>
let a=db.users.find({age: 30})
printjson(a)
// console.log(a.count());
// console.log(a.toArray());
// let b=db.users.findOne({age: 35})
// printjson(b)

// //Update>>>>>>>>
// db.users.updateOne({name: "John"}, {$set: {age: 60}})    
// db.users.updateMany({status: "B"}, {$set: {status: "A"}})


// //Delete>>>>>>>>
// db.users.deleteOne({name: "John"})
// db.users.deleteMany({age: "35"})
