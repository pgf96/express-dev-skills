const skills = [
    {skill: 'Data Structures and Algorithms', proficient: false, id: 1 },
    {skill: 'Programming Languages', proficient: false, id: 2 },
    {skill: 'Databases', proficient: false, id: 3},
    {skill: 'knowing how to center a div', proficient: 'false x 10', id: 4},
    {skill: 'Testing', proficient: false, id: 5},
    {skill: 'Running the same exact code and hoping it magically fixed itself', proficient: true, id: 6},
    {skill: 'Source Control', proficient: false, id: 7},
]

const getAll = () => {
    return skills
}

const getOne = (id) => {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

const create = (skill) => {
    skill.id = Date.now() %10000
    //
    if (skill.proficient == "true") {
        skill.proficient = true
    } else {
        skill.proficient = false
    }
    skills.push(skill)
}

const deleteOne = (id) => {
    id = parseInt(id)
    let idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx,1)
}


//change skill and id to see if it still works

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
}