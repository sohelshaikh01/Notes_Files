# READ:

### Show / select / fetch / retrive from documents.
db.inventory.find(); // fetch all document array.
db.inventory.findOne(); // fetch one document.

db.inventory.find({qty:90});
db.inventory.findOne({qty:90});
// Find by column or any property
// Find by {field: value}

// Different select conditions:
- db.inventory.find({tags: {$in: ["zinc": "red"] } } )

### AND - No need to write it explicitely.
- db.inventory.find({status: "A", qty: {$lt: 30 } } )
// here $lt is for less that in qty.

### OR - It need to write explicitely.
- db.inventory.find({ $or: [ {status: "A"}, {qty: {$lt: 30}} ] });