const Item = require('../models/Stationery');

exports.getIndex = async (req, res) => {
    const item = await Item.find((data) => data);

    try {
        console.log(item);
        res.status(200).render('index', { item: item });
    } catch (error) {
        console.log(error);
    }
};

exports.getItem = async (req, res) => {
    const itemId = req.params.itemId;

    const item = await Item.findById(itemId, (item) => item);

    try {
        console.log(item);
        res.status(200).render('item', { item: item });
    } catch (error) {
        console.log(error);
    }
};


exports.getAddItem = (req, res) => {
    res.status(200).render('edit-anime');
};

exports.postItem = (req, res) => {
    const { name, image, description } = req.body;

    const item = new Item({ name: name, image: image, description: description });
    item.save();
    console.log('Item Added to the database');
    res.status(201).redirect('/');
};
