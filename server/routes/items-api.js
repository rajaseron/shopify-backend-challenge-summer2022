// API endpoints so third party applications can consume the data

let express = require('express');
let router = express.Router();
let inventoryItem = require('../models/inventoryItem');

// Get all inventory items
router.get('/get', (req, res, next) => {
    inventoryItem.find( (err, items) => {
      if (err) {
        return console.error(err);
      }
      else {
        return res.json(items);
      }
    });
  });

// Get specific inventory item by id
router.get('/:id', (req, res, next) => {
  let id = req.params.id;

  inventoryItem.findById(id, (err, itemToEdit) => {
    if(err)
    {
      res.end(err);
    }
    else
    {
        return res.json(itemToEdit);
    }
  });    
});


module.exports = router;
