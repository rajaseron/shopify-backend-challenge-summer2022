
let mongoose = require('mongoose');

let InventoryItem = mongoose.Schema({
    ItemName: String,
    Description: String,
    Price: Number,
    Weight: Number,
    CollectionId: Number,
    LocationId: Number,
    Units: Number
},
{
  collection: "inventoryItem"
});

module.exports = mongoose.model('InventoryItem', InventoryItem);