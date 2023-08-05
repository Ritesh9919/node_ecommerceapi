const Store = require('../models/store');


// to create products

module.exports.create = async(req, res) => {
  try{
    const {name, quantity} = req.body;
    const product = await new Store({
        name,
        quantity

    });
    product.save();
    return res.status(201).json({
        message:'Successfully created product',
        data:{
            product:product
        }
    })
  } catch(err) {
    console.log('Error', err);
    return res.status(404).json({
        message:'Something went wrong!'
    })
  }
};


// get all products
module.exports.products = async(req, res) => {
    try{
    const products = await Store.find({});
    return res.status(200).json({
        message:'Successfully got products',
        data:{
            products:products
        }
    });

    } catch(err) {
        console.log('Error', err);
        return res.status(404).json({
            message:'Something went wrong!'
        })
    }
  
};

// delete a product by id
module.exports.delete = async(req, res) => {
    try{
    const {id} = req.params;
     await Store.findByIdAndDelete(id);
    return res.status(200).json({
        message:'Successfully deleted product'
    });
    
} catch(err) {
    console.log('Error', err);
    return res.status(404).json({
        message:'Something went wrong!'
    })
}
}

// update product quantity by id

module.exports.update = async (req, res) => {
    try{
        const {id} = req.params;
        const {number} = req.query;
     const product = await Store.findByIdAndUpdate(id, {quantity:number});
     product.save();
     return res.status(200).json({
        message:'Product updated successfully',



     })
     
     

    } catch(err) {
        console.log('Error', err);
        return res.status(404).json({
            message:'Something went wrong!'
        })
    }
}