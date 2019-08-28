const express = require('express');
const router = express.Router();

/**
 * @route   GET profile/test
 * @desc    tests profile route
 * @access  Public
 */
router.get('/test', (req, res) => {
    res.status(200).json({
        msg: "profile works"
    });
});

module.exports = router;