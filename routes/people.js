const express = require("express");
const router = express.Router()


const {
    getPeople,
    createPerson,
    updatePerson,
    deletePerson, }
  = require('../2-express_tutorial/controllers/people')



router.get("/", getPeople );
  
  router.post("/login", (req, res) => {
    const { name } = req.body;
    if (name) {
      return res.status(200).send(`Welcome ${name}`);
    }
  
    res.status(401).send("Please Provide Credentials");
  });
  
  // router.post("/",createPerson);
  
  // router.put("/:id", updatePerson);
  
  // router.delete('/:id', deletePerson)
  router.route('/').get(getPeople).post(createPerson)
router.route('/').post(createPerson)
router.route('/:id').put(updatePerson).delete(deletePerson)

  module.exports = router