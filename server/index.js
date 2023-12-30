const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv").config();

// using middlewares
app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URL_CONNECTION, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Creating Database
    const database = client.db("JobFinder");
    const availableJobs = database.collection("Available_Jobs");

    // getting all the jobs
    app.get("/all-jobs", async (req, res) => {
      const jobs = await availableJobs.find({}).toArray();
      res.send(jobs);
    });

    // post a job
    app.post("/post-job", async (req, res) => {
      const body = req.body;
      body.createAt = new Date();
      const result = await availableJobs.insertOne(body);
      if (result.insertedId) {
        return res.status(200).send(result);
      } else {
        return res.status(404).send({
          message: "Failed to insert, Please try again later!",
          status: false,
        });
      }
    });

    // get jobs by email
    app.get("/myJobs/:email", async (req, res) => {
      // console.log(req.params.email);
      const jobs = await availableJobs
        .find({ postedBy: req.params.email })
        .toArray();
      res.send(jobs);
    });

    // delete a job
    app.delete("/job/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await availableJobs.deleteOne(filter);
      res.send(result);
    });

    // get a single job from ID
    app.get("/all-jobs/:id", async (req, res) => {
      const id = req.params.id;
      const job = await availableJobs.findOne({ _id: new ObjectId(id) });
      res.send(job);
    });

    // update a job
    app.patch("/update-job/:id", async (req, res) => {
      const id = req.params.id;
      const jobData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateData = {
        $set: {
          ...jobData,
        },
      };

      const result = await availableJobs.updateOne(filter, updateData, options);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Isekai...");
});

app.listen(PORT, () => {
  console.log(`App Listening on port ${PORT}`);
});
