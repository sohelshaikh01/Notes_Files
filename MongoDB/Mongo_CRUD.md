
## 1. CREATE (Insert)

Adds new documents to a collection.

* **`insertOne()`**: Adds a single document.
* **`insertMany()`**: Adds an array of documents.

```javascript
// Example: Adding a product
db.products.insertOne({ item: "card", qty: 15 });

// Example: Adding multiple items
db.products.insertMany([
  { item: "envelope", qty: 20 },
  { item: "stamp", qty: 50 }
]);

```

---

## 2. READ (Find)

Retrieves documents using filters.

* **`find()`**: Returns all matches.
* **`findOne()`**: Returns the first match as an object.

```javascript
// Find all items where status is "D"
db.inventory.find({ status: "D" });

// Find items with qty less than 30 ($lt)
db.inventory.find({ qty: { $lt: 30 } });

// Complex OR condition
db.inventory.find({ 
  $or: [ { status: "A" }, { qty: { $gte: 100 } } ] 
});

```

---

## 3. UPDATE

Modifies existing documents. Use `$set` to avoid overwriting the whole document.

* **`updateOne()`**: Updates the first match.
* **`updateMany()`**: Updates every match.

```javascript
// Update one: Change status and add a timestamp
db.inventory.updateOne(
  { item: "paper" },
  { $set: { status: "P" }, $currentDate: { lastModified: true } }
);

// Update many: Set all small qty items to "reorder" status
db.inventory.updateMany(
  { qty: { $lt: 10 } },
  { $set: { reorder: true } }
);

```

---

## 4. DELETE

Removes documents. **Note:** Empty filters `{}` delete everything.

```javascript
// Delete one specific item
db.inventory.deleteOne({ item: "card" });

// Delete all documents marked as "archived"
db.inventory.deleteMany({ status: "archived" });

```

---

## 5. SORT, LIMIT, & SKIP

Used for organizing output and **Pagination**.

```javascript
// Sort by qty (high to low) and show only the top 5
db.inventory.find().sort({ qty: -1 }).limit(5);

// Pagination Example: Page 2 (showing 10 items per page)
db.inventory.find().skip(10).limit(10);

```

---

## 6. AGGREGATION PIPELINE

Processes data through stages to calculate results.

* **`$match`**: Filters the data.
* **`$group`**: Aggregates data (sums, averages).
* **`$sort`**: Orders the final result.

```javascript
// Example: Calculate total inventory value per status
db.inventory.aggregate([
  { $match: { qty: { $gt: 0 } } },
  { $group: { _id: "$status", totalStock: { $sum: "$qty" } } },
  { $sort: { totalStock: -1 } }
]);
```

```javascript
db.users.aggregate([
    {
        $lookup: {
            from: "comments",
            let: { userId: "$_id" },
            pipeline: [
                { $match: { $expr: { $eq: [ "$userId", "$$userId"] } } },
                { $sort: { createdAt: -1 }},
                { $limit: 1 }
            ],
            as: "latestComment",
        }
    },
    {
        $unwind: { path: "$latestComment", preserveNullAndEmptyArrays: true }
    }
])
```

---