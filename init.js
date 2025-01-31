const mongoose = require('mongoose');
const Chat=require("./models/chats.js"); // model require to use


main().then((res) =>{
    console.log("connection succesful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


Chat.insertMany([
    {
        from: "neha",
        to: "priya",
        msg: "Hi",
        created_at: new Date()
    },
    {
        from: "rahul",
        to: "aman",
        msg: "Hey, how are you?",
        created_at: new Date()
    },
    {
        from: "priya",
        to: "neha",
        msg: "Hello! How’s your day?",
        created_at: new Date()
    },
    {
        from: "aman",
        to: "rahul",
        msg: "I’m good, what about you?",
        created_at: new Date()
    },
    {
        from: "sneha",
        to: "ravi",
        msg: "Did you complete the project?",
        created_at: new Date()
    },
    {
        from: "ravi",
        to: "sneha",
        msg: "Not yet, I’ll finish it soon.",
        created_at: new Date()
    },
    {
        from: "rohit",
        to: "kiran",
        msg: "Are you coming to the party?",
        created_at: new Date()
    },
    {
        from: "kiran",
        to: "rohit",
        msg: "Yes, I’ll be there!",
        created_at: new Date()
    },
    {
        from: "meera",
        to: "ajay",
        msg: "Call me when you are free.",
        created_at: new Date()
    }
]).then((res)=>{
    console.log(res);
});



