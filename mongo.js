const express = require('express');
const mongoose = require('mongoose');


// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/nutrigeticDB', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// Define schema for user
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
    }
});

// Define schema for blog
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String, // Assuming the image will be stored as a URL string
        required: true,
    }
});


// Define models for user and blog
const Users = mongoose.model('User', userSchema);
const Blog = mongoose.model('Blog', blogSchema);

// API endpoint to fetch a single blog entry


// Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = {
    Users,
    Blog
};
