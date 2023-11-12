const asyncHandler = require('express-async-handler') //express async handler used to handle error in async function
const Contact = require('../models/contactModel')
//@desce get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req,res)=>{
    const contacts =await  Contact.find({user_id:req.user.id})
    res.status(200).json(contacts)
})

//@desce get contact
//@route GET /api/contacts/:id
//@access private
const getContact =asyncHandler( async (req,res)=>{
    const contacts =await Contact.findById(req.params.id)
    if(!contacts){
        res.status(404)
        throw new Error("contact not found")
    }
    res.status(200).json(contacts)
})

//@desce creat new contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req,res)=>{
    console.log(req.body)
    const{name,email,ph} = req.body;
    if(!name || !email || !ph){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const contact = await Contact.create({
        user_id:req.user.id,
        name,
        email,
        ph,
      
    })
    res.status(200).json(contact)
})

//@desce update contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req,res)=>{
    const contacts =await Contact.findById(req.params.id)
    if(!contacts){
        res.status(404)
        throw new Error("contact not found")
    }

    if(contacts.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("user don't have permission")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updatedContact)
})

//@desce delet contact
//@route DELETE /api/contacts/:id
//@access public
const contactDelete = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("user don't have permission")
    }
 
    console.log("deleted")
    await Contact.findByIdAndRemove(req.params.id)
    console.log("deleted")
    res.send("contact deleted")
}) 

module.exports ={ contactDelete,getContact,getContacts,createContact,updateContact }

