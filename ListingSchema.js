var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var listingSchema = new Schema({
  code: { type: String,
  		  required: true,
  		  unique: true },
  name: { type: String,
  		  required: true, 
  		  unique: true },
  coordinates: {
  	latitude: Number,
  	longitude: Number
  },
  address: { type: String, 
  		     unique: true },
  updated_at: Date,
  created_at: Date
});

listingSchema.pre('save', function(next) {
  var date_now = new Date();
  this.updated_at = date_now;
  if(!this.created_at){ //if it's not there at all, add it
	  this.created_at = date_now;
  }
  next();
});

var Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;