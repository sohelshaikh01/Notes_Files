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