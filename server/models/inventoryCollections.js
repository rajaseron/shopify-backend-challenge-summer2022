let mongoose = require('mongoose');

// create a model class
let InventoryCollection = mongoose.Schema({
    ItemName: String,
    Description: String,
    Price: Number,
    Weight: Number,
    CollectionId: Number,
    LocationId: Number,
    Units: Number
},
{
  collection: "inventoryCollection"
});

module.exports = mongoose.model('InventoryCollection', InventoryCollection);