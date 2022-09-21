import { render } from "ejs"
import { Skill } from "../models/skill.js"

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render("skills/index", {
      skills: skills
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect("/")
  })
}

function newSkill(req, res) {
  res.render("skills/new")
}

function create(req, res) {
  Skill.create(req.body)
  .then(skill => {
    console.log(skill);
    res.redirect("/skills")
  })
  .catch(error => {
    console.log(error)
    res.redirect("/")
  })
}



export {
  index,
  newSkill as new,
  create,
}