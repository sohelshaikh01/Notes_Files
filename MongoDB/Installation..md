MongoDB Installation and Notes

1. Install MongoDB

- Go on Official Website
- download MSI File
- Install File
- Give path to env

**To Install Mongo Shell**
- It is built-in mongoDB compass
- You need to download it seprately
- Then similarly write mongod in terminal
- with it create another terminal and write mongosh

2. Install MongoDB Compass

- Open MongoDB Compass.
- Click to connect to the mongod server instance.
- Go to the Databases tab.
- Click on Create Database.

**Database Name**: Enter "Employees".

**Collection Name**: Enter "Managers".

**To insert data into the collection:**
- Click on Add Data.
- Select Insert Document.
- Enter the document details in the provided fields.

3. Understanding MongoDB Server Operations
- mongod runs as a background process, acting as an instance of the database server.
- If mongod stops running, database connections and operations cannot proceed.
- Restart using the same command in the terminal.

4. MongoDB Resources and Query Similarities
- MongoDB provides extensive documentation for queries in multiple programming languages.
- MongoDB queries are designed to be similar to SQL statements, making it easier for those 
- familiar with SQL to learn MongoDB.


5. CRUD Operations in MongoDB

**CREATE (C)**: Adding new data to the database.

**READ (R)**: Accessing data from the database.

**UPDATE (U)**: Modifying existing data.

**DELETE (D)**: Removing data from the database.


- Using MongoDB Shell (Mongosh)
- Open MongoDB Shell (Mongosh) in MongoDB Compass.
- Execute CRUD commands to interact with your database collections.

- Note: After switching to a specific database
all commands will be executed within the context of that database.
