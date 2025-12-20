const express = require('express');
const router = express.Router();
const Log = require('../models/Log');
const { protect } = require('../middleware/auth');

// Protect all routes
router.use(protect);

// GET /api/logs - Get all logs
router.get('/', async (req, res) => {
    try {
        const logs = await Log.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: logs.length,
            data: logs
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
});

// GET /api/logs/:id - Get single log
router.get('/:id', async (req, res) => {
    try {
        const log = await Log.findById(req.params.id);
        if (!log) {
            return res.status(404).json({
                success: false,
                message: 'Log not found'
            });
        }
        res.status(200).json({
            success: true,
            data: log
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
});

// POST /api/logs - Create new log
router.post('/', async (req, res) => {
    try {
        const log = await Log.create({
            action: req.body.action,
            message: req.body.message,
            level: req.body.level
        });
        res.status(201).json({
            success: true,
            message: 'Log created successfully',
            data: log
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Could not create log',
            error: error.message
        });
    }
});

// PUT /api/logs/:id - Update log
router.put('/:id', async (req, res) => {
    try {
        const log = await Log.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!log) {
            return res.status(404).json({
                success: false,
                message: 'Log not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Log updated successfully',
            data: log
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Could not update log',
            error: error.message
        });
    }
});

// DELETE /api/logs/:id - Delete log
router.delete('/:id', async (req, res) => {
    try {
        const log = await Log.findByIdAndDelete(req.params.id);
        if (!log) {
            return res.status(404).json({
                success: false,
                message: 'Log not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Log deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Could not delete log',
            error: error.message
        });
    }
});

module.exports = router;
