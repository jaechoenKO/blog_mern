const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.status(200).json({
        msg: "users works"
    });
});

module.exports = router;