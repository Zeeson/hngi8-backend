const express = require("express")
const router = express.Router(); 
const Intern = require("../models/Intern")


// index
router.get('/', (req, res) =>{
    res.render("index"); 
})

// get all 
router.get("/interns", (req, res) => {
    const interns = Intern.find({}); 
    try {
        res.render("index", {interns: interns})
    } catch (err){
        res.status(500).send(err);
        console.log(err)
    }
})

// post 
router.post("/interns", (req, res) => {

    const name = req.body.name
    const internId = req.body.internId
    const email = req.body.email
    const phoneNumber = req.body.phoneNumber
    const cvLink = req.body.cvLink
    const interest = req.body.interest
    const country = req.body.country
    const state = req.body.state
    const employmentStatus = req.body.employmentStatus
    const about = req.body.about
    const applicationState = req.body.applicationState

    const intern = {
        name, internId, email, phoneNumber, cvLink,
        interest, country, state, employmentStatus,
        about, applicationState
      }; 

  Intern.create(intern)
  .then(intern, () => {
      res.redirect("/interns")
      console.log(intern) 
  })
  .catch(err, () =>{
      res.send(err); 
  }) 
})

// GET one intern
router.get('/interns/:id', (req, res) => {
    Intern.findById(req.params.id, (err, intern) => {
        res.json(intern);
    });
});


// UPDATE intern
router.post('/interns/update/:id', (req, res) => {
    Intern.findById(req.params.id, (err, intern) => {
        if (!intern)
            res.status(404).send("data is not found");
        else {
            intern.name = req.body.name
            intern.internId = req.body.internId
            intern.email = req.body.email
            intern.phoneNumber = req.body.phoneNumber
            intern.cvLink = req.body.cvLink
            intern.interest = req.body.interest
            intern.country = req.body.country
            intern.state = req.body.state
            intern.employmentStatus = req.body.employmentStatus
            intern.about = req.body.about
            intern.applicationState = req.body.applicationState

            intern.save().then(intern => {
                res.json({msg: "success"})
            })
            .catch(err => {
                res.json({msg: "falied"});
            });
        }
    });
});


// DELETE intern
router.post('/interns/delete/:id', (req, res) => {
    Intern.findByIdAndDelete(req.params.id)
    .then(() => res.json("Intern deleted"))
    .catch(err => res.status(400).json(`${_.id} deleted` ))
});

module.exports = router;
