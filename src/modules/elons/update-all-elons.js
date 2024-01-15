const { BadRequestError } = require("../../shared/errors");
const { Elon } = require("./Elon");

const UpdateAll_Elons = async ({ params, body }) => {
  let findElons = Elon.findById({ _id: params.id });

  if (!findElons) {
    throw new BadRequestError("not found elons");
  }

  let UpdateObj = {
    title: body.title ? body.title : findElons.title,
    description: body.description ? body.description : findElons.description,
    honalar_soni: body.honalar_soni
      ? body.honalar_soni
      : findElons.honalar_soni,
    uy_maydoni: body.uy_maydoni ? body.uy_maydoni : findElons.uy_maydoni,
    nechinchi_qavat: body.nechinchi_qavat
      ? body.nechinchi_qavat
      : findElons.nechinchi_qavat,
    uy_manzili: body.uy_manzili ? body.uy_manzili : findElons.uy_manzili,
    category: body.category ? body.category : findElons.category,
    remont: body.remont ? body.remont : findElons.remont,
    price: body.price ? body.price : findElons.price,
    qurilishda_ishlatilgan: body.qurilishda_ishlatilgan
      ? body.qurilishda_ishlatilgan
      : findElons.qurilishda_ishlatilgan,
    uy_manzil_xaritada: body.uy_manzil_xaritada
      ? body.uy_manzil_xaritada
      : findElons.uy_manzil_xaritada,
    elon_holati: body.elon_holati ? body.elon_holati : findElons.elon_holati,
  };

  let update_elons = await Elon.findByIdAndUpdate(
    { _id: params.id },
    { ...UpdateObj },
    { new: true }
  );

  return update_elons;
};

module.exports = { UpdateAll_Elons };
