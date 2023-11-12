const express = require('express')
const { contactDelete, getContacts, createContact, getContact, updateContact } = require('../controllers/contactController')
const validateToken = require('../middleware/validateTokenHandler')
const router = express.Router()

/* router.route("/") .get(getContacts)
router.route("/") .post(createContact)
router.route("/:id") .get(getContact)
router.route("/:id") .put(updateContact)
router.route("/:id") .delete(deleteContact) can also written as below */

router.use(validateToken)
router.route("/").get(getContacts).post(createContact)
router.route("/:id").get(getContact).put(updateContact)
router.route("/:id").delete(contactDelete)



module.exports = router;