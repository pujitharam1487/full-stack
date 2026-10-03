const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db("collegeDB");
        const students = db.collection("students");

        // 1. Insert students
        await students.deleteMany({});

        await students.insertMany([
            {
                rollNo: "23CM001",
                name: "Ravi Kumar",
                branch: "CSE-AIML",
                year: 3,
                marks: 85,
                email: "ravi@example.com"
            },
            {
                rollNo: "23CM002",
                name: "Priya Sharma",
                branch: "CSE",
                year: 3,
                marks: 92,
                email: "priya@example.com"
            },
            {
                rollNo: "23CM003",
                name: "Arjun Rao",
                branch: "ECE",
                year: 2,
                marks: 68,
                email: "arjun@example.com"
            },
            {
                rollNo: "23CM004",
                name: "Sneha Reddy",
                branch: "CSE-AIML",
                year: 3,
                marks: 78,
                email: "sneha@example.com"
            },
            {
                rollNo: "23CM005",
                name: "Kiran Kumar",
                branch: "IT",
                year: 2,
                marks: 45,
                email: "kiran@example.com"
            },
            {
                rollNo: "23CM006",
                name: "Anjali Rao",
                branch: "CSE",
                year: 4,
                marks: 88,
                email: "anjali@example.com"
            }
        ]);

        console.log("\n1. All students:");
        console.log(await students.find().toArray());

        // 2. Students belonging to CSE-AIML
        console.log("\n2. Students belonging to CSE-AIML:");
        console.log(
            await students.find({ branch: "CSE-AIML" }).toArray()
        );

        // 3. Students scoring more than 75
        console.log("\n3. Students scoring more than 75:");
        console.log(
            await students.find({ marks: { $gt: 75 } }).toArray()
        );

        // 4. Search using rollNo
        console.log("\n4. Search student using rollNo 23CM002:");
        console.log(
            await students.findOne({ rollNo: "23CM002" })
        );

        // 5. Search based on condition
        console.log("\n5. Students in year 3:");
        console.log(
            await students.find({ year: 3 }).toArray()
        );

        // 6. Update marks
        await students.updateOne(
            { rollNo: "23CM003" },
            { $set: { marks: 75 } }
        );

        console.log("\n6. After updating marks of 23CM003:");
        console.log(
            await students.findOne({ rollNo: "23CM003" })
        );

        // 7. Update another field
        await students.updateOne(
            { rollNo: "23CM004" },
            { $set: { email: "sneha.new@example.com" } }
        );

        console.log("\n7. After updating email of 23CM004:");
        console.log(
            await students.findOne({ rollNo: "23CM004" })
        );

        // 8. Delete student using rollNo
        await students.deleteOne({ rollNo: "23CM005" });

        console.log("\n8. After deleting 23CM005:");
        console.log(await students.find().toArray());

        // 9. Sort students by marks descending
        console.log("\n9. Students sorted by marks descending:");
        console.log(
            await students.find().sort({ marks: -1 }).toArray()
        );

        // 10. Create index on rollNo
        await students.createIndex(
            { rollNo: 1 },
            { unique: true }
        );

        console.log("\n10. Index created on rollNo.");

        // 11. Show indexes
        console.log("\nAvailable indexes:");
        console.log(await students.indexes());

        // 12. Real-time extension: marks above 80
        console.log("\n11. Students scoring above 80:");
        console.log(
            await students.find({ marks: { $gt: 80 } }).toArray()
        );

        // 13. Marks below 50
        console.log("\n12. Students scoring below 50:");
        console.log(
            await students.find({ marks: { $lt: 50 } }).toArray()
        );

        // 14. Highest-scoring student
        console.log("\n13. Highest-scoring student:");
        console.log(
            await students.find().sort({ marks: -1 }).limit(1).toArray()
        );

        // 15. Particular branch
        console.log("\n14. Students belonging to CSE:");
        console.log(
            await students.find({ branch: "CSE" }).toArray()
        );

        // 16. Sorted according to marks
        console.log("\n15. Students sorted according to marks:");
        console.log(
            await students.find().sort({ marks: 1 }).toArray()
        );

    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
        console.log("\nMongoDB connection closed.");
    }
}

main();