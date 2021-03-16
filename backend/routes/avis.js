const router = require('express').Router();
let Avis = require('../models/avis.model');

router.route('/').get((req, res) => {
    Avis.find()
    .then(avs => res.json(avs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const description = req.body.description;

    const newDescription = new Avis({
        description
    });

    newDescription.save()
    .then(() => res.json('Avis ajouté !'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Avis.findById(req.params.id)
    .then(avisdesc => res.json(avisdesc))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Avis.findByIdAndDelete(req.params.id)
    .then(() => res.json('Avis supprimé.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Avis.findById(req.params.id)
    .then(descav => {
        descav.description = req.body.description;

        descav.save()
        .then(() => res.json('Avis updated !'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;