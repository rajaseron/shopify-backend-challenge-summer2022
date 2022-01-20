let mongoose = require('mongoose');

let InventoryCollection = mongoose.Schema({
    CollectionId: Number,
    CollectionName: String
},
{
  collection: "inventoryCollection"
});

module.exports = mongoose.model('InventoryCollection', InventoryCollection);