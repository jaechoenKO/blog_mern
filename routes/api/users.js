const express = require('express');
const router = express.Router();

// @route: 경로, @desc: 설명, @access: 권한
// @route   GET users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => {
    res.status(200).json({
        msg: "users works"
    });
});

module.exports = router;