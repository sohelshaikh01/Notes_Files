## Aggregation Pipeline
- when we want out query process our document by some stage of operation
- so we can write pipelines to reuse many times to pull document from our databases

**To Create Pipeline:**
- Create New Collection in our Database
- Get the Query from official resources
- Insert this all entries into new collection
- Insert using MongoDB shell or MONGOSH

### Aggregation Pipeline is made using multiple stages:
We use aggregation pipeline operators

**To create aggregate pipeline**

Example:

```json
db.order.aggregate( [
    // Stage 1: Filter pizza order documents by pizza size
    {
        $match: { sized: "medium" }
    },
    // Stage 2: Group renaming documents by pizza name and calculate total quantity.
    {
        $group: { _id: "name", totalQuantity: { $sum: "$quantity" } }
    }
    // Stage 3: Is remaining here.
] )
```