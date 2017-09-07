'use strict';

var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
    file_info = require('./listings')

mongoose.connect(config.db.uri);

 file_info.entries.forEach(function(entry){
  new Listing({name: entry.name, code: entry.code, coordinates: entry.coordinates, address: entry.address}).save();