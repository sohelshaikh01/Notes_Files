## UPDATE:

# 1.Update / insert / replace in documents.

db.inventory.updateOne(
    { item: "paper" }, // condition
    { 
        $set: {"size.uom": "cm", "status: "p"},
        $currentData: { lastModified: true }
    }
);

# To find new updated:
db.inventory.findOne(
    { item: "paper" }
);

# 2.To update at many with conditions:
db.inventory.updateMany(
    { "qty": {$lt: 50 } }, // condition
    {
        $set: {"size.uom": "in", status: "Pj" },
        $currentDate: { lastModified: true }
    }
);

# To find new updated in many documents:
db.inventory.find(
    { "qty": {$lt: 50 } }
);

# 3.replace which replace one document with other
// This is to remained to learn.