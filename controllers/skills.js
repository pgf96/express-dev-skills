let Skill = require('../models/skill')

const index = (req,res) => {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}

module.exports = {
    index
}