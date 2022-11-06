const express = require('express');
const router = express.Router();

const adoptableController = require('../../controllers/adoptable.controller');

router
  .get('/', adoptableController.getAllAdoptables)
  .get('/:adoptableId', adoptableController.getAdoptableById)
  .post('/', adoptableController.createAdoptable)
  .patch('/:adoptableId', adoptableController.updateAdoptable)
  .delete('/:adoptableId', adoptableController.deleteAdoptable);

module.exports = router;