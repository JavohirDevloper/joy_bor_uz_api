const { BadRequestError, NotFoundError } = require("../../shared/errors");
const User = require("../users/User");
const { Elon } = require("./Elon");

const Update_Elons = async ({ params, body, user }) => {
  let findElons = Elon.findById({ _id: params.id });

  if (!findElons) {
    throw new BadRequestError("not found elons");
  }

  let FindEUser = await User.findById({ _id: user.id });
  if (!FindEUser) {
    throw new NotFoundError("not found user");
  }

  if (!FindEUser.elons.includes(params.id)) {
    throw new BadRequestError(
      "bu sizning eloningiz emas uzir buni yangi olmaysiz"
    );
  }
  let imagePaths = body.images.map((file) => "/public/" + file.filename);

  let UpdateObj = {
    title: body.title ? body.title : findElons.title,
    description: body.description ? body.description : findElons.description,
    image: body.image ? body.image : findElons.image,
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
    images: imagePaths ? imagePaths : findElons.images,
  };

  let update_elons = await Elon.findByIdAndUpdate(
    { _id: params.id },
    { ...UpdateObj },
    { new: true }
  );

  return update_elons;
};

module.exports = { Update_Elons };
