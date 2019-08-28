const express = require('express');
const router = express.Router();

/**
 * @route   GET posts/test
 * @desc    tests posts route
 * @access  Public
 */
router.get('/test', (req, res) => {
    res.status(200).json({
        msg: "posts works"
    });
});

module.exports = router;