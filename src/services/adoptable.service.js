const { Adoptable } = require('../models');

exports.getAllAdoptables = () => {
  const adoptables = Adoptable.findAll();
  return adoptables;
};
exports.getAdoptableById = (adoptableId) => {
  const adoptable = Adoptable.findByPk(adoptableId);
  return adoptable;
};
exports.createAdoptable = (payload) => {
  const adoptable = Adoptable.create(payload);
  return adoptable;
};
exports.updateAdoptable = (adoptableId, payload) => {
  const adoptable = Adoptable.update(payload, {
    where: { adoptableId: adoptableId },
  });

  return adoptable;
};
exports.deleteAdoptable = (adoptableId) => {
  const adoptable = Adoptable.destroy({
    where: { adoptableId: adoptableId },
  });
  return adoptable;
};