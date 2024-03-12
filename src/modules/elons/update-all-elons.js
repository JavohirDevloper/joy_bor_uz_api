const { BadRequestError } = require("../../shared/errors");
const { Elon } = require("./Elon");

const UpdateAll_Elons = async ({ params, body }) => {
  let findElon = await Elon.findById(params.id);  
  if (!findElon) {
    throw new BadRequestError("Elon not found");
  }

  let imagePaths;
  if (body.images && body.images.length > 0) {
    imagePaths = body.images.map((file) => "/public/" + file.filename);
  }

  let updateObj = {
    title: body.title || findElon.title,
    description: body.description || findElon.description,
    honalar_soni: body.honalar_soni || findElon.honalar_soni,
    uy_maydoni: body.uy_maydoni || findElon.uy_maydoni,
    nechinchi_qavat: body.nechinchi_qavat || findElon.nechinchi_qavat,
    uy_manzili: body.uy_manzili || findElon.uy_manzili,
    category: body.category || findElon.category,
    remont: body.remont || findElon.remont,
    price: body.price || findElon.price,
    qurilishda_ishlatilgan:
      body.qurilishda_ishlatilgan || findElon.qurilishda_ishlatilgan,
    uy_manzil_xaritada: body.uy_manzil_xaritada || findElon.uy_manzil_xaritada,
    elon_holati: body.elon_holati || findElon.elon_holati,
    images: imagePaths || findElon.images,
  };

  let updatedElon = await Elon.findByIdAndUpdate(params.id, updateObj, {
    new: true,
  });

  return updatedElon;
};

module.exports = { UpdateAll_Elons };
