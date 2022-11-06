const adoptableService = require('../services/adoptable.service');

const getAllAdoptables = async (_, res) => {
  try {
    const allAdoptables = await adoptableService.getAllAdoptables();
    res.status(200).json(allAdoptables);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const getAdoptableById = async (req, res) => {
  try {
    const adoptable = await adoptableService.getAdoptableById(req.params.adoptableId);
    res.status(200).json(adoptable);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const createAdoptable = async (req, res) => {
  try {
    const newAdoptable = await adoptableService.createAdoptable(req.body);
    res.status(201).json(newAdoptable);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const updateAdoptable = async (req, res) => {
  try {
    const updatedAdoptable = await adoptableService.updateAdoptable(req.params.adoptableId, req.body);
    res.status(200).json(updatedAdoptable);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const deleteAdoptable = async (req, res) => {
  try {
    const deletedAdoptable = await adoptableService.deleteAdoptable(req.params.adoptableId);
    res.status(200).json(deletedAdoptable);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getAllAdoptables,
  getAdoptableById,
  createAdoptable,
  updateAdoptable,
  deleteAdoptable,
};