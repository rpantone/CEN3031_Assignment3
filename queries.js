const fs = require('fs'),
      mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Listing = require('./ListingSchema.js'),
      config = require('./config.js');

mongoose.connect(config.db.uri);

var findLibraryWest = function() {
    Listing.find({ name: 'Library West' }, function(err, val) {
        if (err) throw err;
        console.log(val);
    });

};

var removeCable = function() {
    Listing.findOneAndRemove({ code: 'CABL' }, function(err, val) {
        if (err) throw err;
        console.log(val);
    });
};

var updatePhelpsLab = function() {
    Listing.findOneAndUpdate({ name: 'Phelps Laboratory'},{address: '1275 Center Drive, Gainesville, FL 32611'}, function(err, val) {
	    if (err) throw err;
	    console.log(val);
	 });
};

var retrieveAllListings = function() {
    Listing.find({}, function(err, val) {
        if (err) throw err;
        console.log(val);
  })

};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();