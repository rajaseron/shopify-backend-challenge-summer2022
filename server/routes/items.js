// modules required for routing
let express = require('express');
let router = express.Router();

// define the model
let inventoryItem = require('../models/inventoryItem');

/* GET item List page. READ */
router.get('/', (req, res, next) => {
  // find all items in the inventoryItem collection
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

router.get('/api/get', (req, res, next) => {
  // return json for all items in the inventoryItem collection
  inventoryItem.find( (err, items) => {
    if (err) {
      return console.error(err);
    }
    else {
      return res.json(items);
    }
  });

});

//  GET the inventory item details page to add a new
router.get('/add', (req, res, next) => {

  let newItem = inventoryItem();

  res.render('items/details', {title: 'Add an Inventory Item', item: newItem})
});

// POST process the item details and create a new inventory item - CREATE
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
      console.log(err);
      res.end(err);
    }
    else
    {
      res.redirect('/items');
    }
  });
  
});

// GET the item details in order to edit an existing inventory item
router.get('/:id', (req, res, next) => {
  let id = req.params.id;

  inventoryItem.findById(id, (err, itemToEdit) => {
    if(err)
    {
      console.log(err);
      res.end(err);
    }
    else
    {
      //show the edit view
      res.render('items/details', {title: 'Edit Inventory Item', item: itemToEdit})
    }
  });    
});

// POST - process the information passed from the details form and update the item
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
        console.log(err);
        res.end(err);
      }
      else
      {
        res.redirect('/items');
      }
  });
});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {
  let id = req.params.id;

  inventoryItem.remove({_id: id}, (err) => {
    if(err)
    {
      console.log(err);
      res.end(err);
    }
    else
    {
      res.redirect('/items');
    }
  });
});


module.exports = router;
