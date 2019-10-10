var express =require('express');
var router = express.Router();
var Hall_post= require('../models/hall_db');

router.get('/', (req,res)=>
{
    res.send("");
});

router.post('/hall_application', (req,res)=>
{
    const post= new Hall_post({

        hall_name:req.body.hall_name,
        hall_annex:req.body.hall_aannex
    });

    post.save()
        .then(data=>
            {
                res.json(data);
            })
            .catch(error=>
                {
                    res.json({message:error});
                });
      
                

});

module.exports= router;

