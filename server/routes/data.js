const json = require('json2csv');
let express = require('express');
let router = express.Router();


let inventoryItem = require('../models/inventoryItem');

router.get('/download',(req, res) => {
    try {
        let itemsForCsv = [];
        inventoryItem.find( (err, itemsFromDb) => {
            itemsFromDb.forEach((element) => {  
                let item = {
                    "ItemName": element.ItemName,
                    "Description": element.Description,
                    "Price": element.Price,
                    "Weight": element.Weight,
                    "CollectionId":1,
                    "LocationId": 1,
                    "Units": element.Units
                };
                itemsForCsv.push(item);
            });
            
            const field = Object.keys(itemsForCsv[0]);
            const json2csv = new json.Parser({ field });
            const csv = json2csv.parse(itemsForCsv);
            res.header('Content-Type', 'text/csv');
            res.attachment("download.csv");
            return res.send(csv);
        }
        );
    } catch (error) {
      return res.send(error);
    }
  
  }
);


module.exports = router;