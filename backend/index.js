const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./model/UserModel');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb://localhost:27017/redux`)
    .then(() => {
        console.log("Mongodb connected successfully");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB:", err);
    });

app.get('/', (req, res) => {
    UserModel.find({})
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
});

app.post('/create', (req, res) => {
    UserModel.create(req.body)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
});


app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        res.json(err);
    });
});

app.delete('/delte/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        res.json(err);
    });
})



app.listen(3000, () => {
    console.log("Server is started on port 3000");
});
