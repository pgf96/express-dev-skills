let Skill = require('../models/skill')

const index = (req,res) => {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}

const newSkill = (req,res) => {
    res.render('skills/new', req.body)
  }


const show = (req,res) => {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    })
  }

  const create = (req,res) => {
    console.log(req.body);
    // The model is responsible for creating data
    Skill.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/skills');
  }

  const deleteSkill = (req,res) => {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
  }
  
module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
}