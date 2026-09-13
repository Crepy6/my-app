const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');

router.get('/', protect, (req, res) => {
  res.json({
    success: true,
    message: 'Dashboard stats',
    stats: {
      totalUsers: 1,
      activeUsers: 1,
      totalRequests: 100
    }
  });
});

router.get('/charts', protect, (req, res) => {
  res.json({
    success: true,
    message: 'Chart data',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      values: [10, 20, 15, 30, 25]
    }
  });
});

module.exports = router;
