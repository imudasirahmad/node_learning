const express = require("express");
const app = express();
const  people = require('./routes/people')
const  auth = require('./routes/auth');
const { getPeople, createPerson, deletePerson } = require("./2-express_tutorial/controllers/people");

// static assets
app.use(express.static("./2-express_tutorial/methods-public"));

// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use('/api/people', people)
app.use('/login', auth)


router.route('/').get(getPeople).post(createPerson)
router.route('/').post(createPerson)
router.route('/:id').put(updatePerson).delete(deletePerson)

app.listen(3000, () => {
  console.log("Server is listening on port 5000....");
});
