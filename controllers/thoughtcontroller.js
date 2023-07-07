const Thought = require('../models/thought');
const User = require('../models/user');
const Reaction = require('../models/reaction');

const thoughtController  = { getAllThoughts(req, res) {
    Thought.find({})
    .populate({
        path: 'user',
        select: '-__v'
    })
    .select('-__v')
    .sort ({ _id: -1 })
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => {
        console.log(err);
        res.sendStatus(400)
    });
},