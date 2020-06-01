const express = require('express')
const router = express.Router();


// @route GET api/auth
// @desc  GET logged in userr
// @access Private

router.get('/', (req, res) => {
    res.send('GET logged in user');
});

// @route POST api/auth
// @desc  AUth user and get token
// @access public

router.post('/', (req, res) => {
    res.send('Log in user');
});

module.exports = router