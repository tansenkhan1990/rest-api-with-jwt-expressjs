const express = require('express')
const router = express.Router()

// Getting all
router.get('/', async (req, res) => {
    res.send('this is get')
//   try {
//     res.status(200).json({ message: 'this is get response' })
//   } catch (err) {
//     res.status(500).json({ message: err.message })
//   }
})

// Getting One

// Creating one
router.post('/', async (req, res) => {
    res.send('this is post')
    // try {
    //     res.status(200).json({ message: 'this is Post response' })
    //   } catch (err) {
    //     res.status(500).json({ message: err.message })
    //   }
})

// Updating One
router.patch('/:id', async (req, res) => {
    res.send('this is update')
    // try {
    //     res.status(200).json({ message: 'this is update response' })
    //   } catch (err) {
    //     res.status(500).json({ message: err.message })
    //   }
})

// Deleting One
router.delete('/:id', async (req, res) => {
    res.send('this delete')
})

module.exports = router;