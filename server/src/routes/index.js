// const { response } = require('express')
const express = require('express')
const {addCrud, deleteCrud, editCrud, getCruds, getCrud} = require('../controllers/crud')

const router = express.Router()

router.post('/addCrud',addCrud)
router.delete('/deleteCrud/:id',deleteCrud)
router.patch('/editCrud/:id',editCrud)
router.get('/cruds',getCruds)
router.get('/crud/:id',getCrud)

module.exports = router