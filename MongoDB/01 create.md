## CREATE:
db.invertory.insertOne({});
db.invertory.insertMany([{}, {}]);

db.inventory.insertOne(
    { item: "canvas", qty: 100, tags: {"cotton"}, size: {h: 28, w: 35.5, uom: "cm"} }
);

# It insert data and return acknowledged and insertedId.
// If same inserted document it insert again with new id.

# To insert many documents in database:

// Official MongoDB Data Document:

db.inventory.insertMany([
    { item: "journal", qty: 25, size: {h: 14, w: 21, uno: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: {h: 8.5, w: 11, uno: "in" }, status: "p" },
    { item: "paper", qty: 100, size: {h: 8.5, w: 21, uno: "in" }, status: "D" },
    { item: "planner", qty: 75, size: {h: 22.85, w: 30, uno: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: {h: 10, w: 15.25, uno: "cm" }, status: "A" }
]);

db.inventory.insertMany([
    { item: "canvas1", qty: 60, tags: ["cotton"], size: {h: 28, w: 35.5, uom: "cm"} },
    { item: "canvas2", qty: 70, tags: ["copper"], size: {h: 28, w: 35.5, uom: "cm"} },
    { item: "canvas3", qty: 80, tags: ["zinc"], size: {h: 28, w: 35.5, uom: "cm"} },
    { item: "canvas4", qty: 90, tags: ["steel"], size: {h: 28, w: 35.5, uom: "cm"} }
]);


// Return one acknowledged and inserted id for each document.