let express = require('express');
let router = express.Router();
let inventoryItem = require('../models/inventoryItem');

// Retrieve all items and display on the inventory list page
router.get('/', (req, res, next) => {
  inventoryItem.find( (err, items) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('items/index', {
        title: 'Items',
        items: items
      });
    }
  });

});

// Render the detail page for add operation
router.get('/add', (req, res, next) => {

  let newItem = inventoryItem();

  res.render('items/details', {title: 'Add an Inventory Item', item: newItem})
});

// Post operation for the submit button when adding a new inventory item 
router.post('/add', (req, res, next) => {
  let item = inventoryItem({
    "ItemName": req.body.ItemName,
    "Description": req.body.Description,
    "Price": req.body.Price,
    "Weight": req.body.Weight,
    "CollectionId":1,
    "LocationId": 1,
    "Units": req.body.Units
  });

  inventoryItem.create(item, (err, item) =>{
    if(err)
    {
      res.end(err);
    }
    else
    {
      res.redirect('/items');
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
      //show the edit view
      res.render('items/details', {title: 'Edit Inventory Item', item: itemToEdit})
    }
  });    
});

// Post operation for the submit button when editing an inventory item 
router.post('/:id', (req, res, next) => {
  let id = req.params.id

  let updatedItem = inventoryItem({
      "_id": id,
      "ItemName": req.body.ItemName,
      "Description": req.body.Description,
      "Price": req.body.Price,
      "Weight": req.body.Weight,
      "CollectionId":1,
      "LocationId": 1,
      "Units": req.body.Units
  });

  inventoryItem.updateOne({_id: id}, updatedItem, (err) => {
      if(err)
      {
        res.end(err);
      }
      else
      {
        res.redirect('/items');
      }
  });
});

// operation for the deletion of an inventory item
router.get('/delete/:id', (req, res, next) => {
  let id = req.params.id;

  inventoryItem.deleteOne({_id: id}, (err) => {
    if(err)
    {
      res.end(err);
    }
    else
    {
      res.redirect('/items');
    }
  });
});




module.exports = router;
