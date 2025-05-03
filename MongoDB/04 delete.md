# DELETE:

### 1.To delete all documents from collection
db.inventory.deleteMany({});
// use carefully it delete all your data.

### 2.To delete documents by condition from collection
db.inventory.deleteMany({ status: "A"});

### 3.To delete document by condition from collection
db.inventory.deleteOne({ status: "A"});

// Below are remain to learn
// Below operation are same but return different value
like object instead of boolean
### 4.To remove/delete documents by condition from collection
db.inventory.remove({condition});

### 5.To remove/delete on document by conditon from collection
db.inventory.removeOne({condition});