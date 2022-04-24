const express = require('express');
import mongoose from 'mongoose';
const { Schema } = mongoose;

const characterSchema = new Schema({
    name: String,
    attaque: Number,
    life: Number,
    level: Number
})

const Character = mongoose.model('Character', characterSchema);