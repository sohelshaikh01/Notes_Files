## SORTING: some sorting method / queries.

# limit(n) - to get first/n number of documents.
db.inventory.find().limit(1); // limit output number to 1 document
db.inventory.find().limit(2); // limit output number to 2 document

# skip(n) - to skip nth documents and give other/after it.
db.inventory.find().skip(1); // skip first document
db.inventory.find().skip(2); // skip first 2 document

# sort({field: value}) - to sort documents in ascending / descending order.
db.inventory.find().sort({qty: 1});
db.inventory.find().sort({qty: -1});

# We can use this to achieve pagination
pageNo -> 1 to 10
no = 8
db.blogs.find().skip((pageNo-1) * no).limit(no)
pageno = 1 db.blogs.find().skip(0).limit(8)
pageno = 1 db.blogs.find().skip(8).limit(8)