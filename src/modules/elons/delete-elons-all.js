const { NotFoundError, BadRequestError } = require("../../shared/errors");
const { Elon } = require("./Elon");

const DeleteElonsAll = async ({ params }) => {
  let DeleteElons = await Elon.findByIdAndDelete(params.id);
  return DeleteElons;
};

module.exports = { DeleteElonsAll };
