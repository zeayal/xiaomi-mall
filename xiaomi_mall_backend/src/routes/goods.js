var express  = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/m_mail');

router.get('/', function(req, res) {
    const Cat = mongoose.model('Cat', { name: String });
    
    const kitty = new Cat({ name: 'Zildjian' });
    kitty.save().then(() => console.log('meow'));
    res.send('res');
})


module.exports = router;