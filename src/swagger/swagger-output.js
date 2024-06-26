const config = require("../shared/config/index");
let host = "back.joy-bor.uz"
let schemes = ["https"]

const swagger_js = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "joy bor uz api",
    description: "Documentation yoq",
  },
  host: "back.joy-bor.uz",
  basePath: "/",
  tags: [],
  schemes: ["https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    //admin
    "/admin": {
      get: {
        tags: ["Admin Router  "],
        produces: ["application/json"],
        summary: " Gets all Admin",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "User information.",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/register/admin": {
      post: {
        tags: ["Admin Router  "],
        summary: "Adds a new user",
        description: "Endpoint to sign in a specific user",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "User information.",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/AddAdmin",
            },
          },
        ],
        responses: {
          201: {
            description: "OK",
            content: "application/json",
          },
          400: {
            description: "Bad request, invalid input.",
          },
          401: { description: "Unauthorized, invalid credentials." },
          404: {
            description: "not found",
          },
        },
      },
    },
    "/login/admin": {
      post: {
        tags: ["Admin Router  "],
        summary: "User Authentication",
        description:
          "Authenticate a user by validating their credentials and return a token if successful.",
        parameters: [
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/LoginAdmin",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/admin/{id}": {
      get: {
        tags: ["Admin Router  "],
        produces: ["application/json"],
        summary: "Gets a Admin  by Mongo ID.",
        description: "Endpoint to sigup in a specific user",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int",
            },
          },
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      delete: {
        tags: ["Admin Router  "],
        produces: ["application/json"],
        summary: "Delete a Admin by MongoID.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int64",
            },
          },
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      patch: {
        tags: ["Admin Router  "],
        produces: ["application/json"],
        summary: "edit  Admin  by Mongo ID.",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int",
            },
          },
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            schema: {
              type: "string",
            },
          },
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/patchAdmin",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/admin/un/{id}": {
      delete: {
        tags: ["Admin Router  "],
        produces: ["application/json"],
        summary: "Delete a Admin by MongoID.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int64",
            },
          },
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/change/password/admin": {
      patch: {
        tags: ["Admin Router  "],
        summary: "User Authentication",
        description:
          "Authenticate a user by validating their credentials and return a token if successful.",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "obj",
            in: "body",
            description: "User information.",
            schema: {
              $ref: "#/definitions/schemas/ChangePassword",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },

    // user
    "/users": {
      get: {
        tags: ["User"],
        produces: ["application/json"],
        summary: "Hamma userlarni olish",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "User information.",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      post: {
        tags: ["User"],
        summary: "user yaratish admin uchun!",
        description: "user yaratish admin uchun",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "information.",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/CreateUser",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    // "/users/login": {
    //   post: {
    //     tags: ["User"],
    //     summary:
    //       "Userni login qilishi va keyin sms code tashtiqlashga otib yuboriladi",
    //     description:
    //       "Userni login qilishi va keyin sms code tashtiqlashga otib yuboriladi",
    //     parameters: [
    //       {
    //         name: "obj",
    //         in: "body",
    //         description: "User information.",
    //         required: true,
    //         schema: {
    //           $ref: "#/definitions/schemas/LoginUser",
    //         },
    //       },
    //     ],
    //     responses: {
    //       200: {
    //         description: "OK",
    //         content: "application/json",
    //       },
    //     },
    //   },
    // },
    "/users/registerorlogin": {
      post: {
        tags: ["User"],
        summary: "Userni login",
        description:
          "Userni register qilishi va keyin sms code tashtiqlashga otib yuboriladi",
        parameters: [
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/RegisterUser",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/users/me": {
      get: {
        tags: ["User"],
        produces: ["application/json"],
        summary: "userni tokenni orqali olish profile uchun ishlatsa boladi",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "User information.",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      put: {
        tags: ["User"],
        summary: "Userni update qilish",
        description: " fullname va image update boladi",
        consumes: ["multipart/form-data"],

        parameters: [
          {
            name: "avatar",
            in: "formData",
            type: "file",
          },
          {
            name: "username",
            in: "formData",
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      delete: {
        tags: ["User"],
        produces: ["application/json"],
        summary: "Delete a User by token.",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/users/{id}": {
      put: {
        tags: ["User"],
        summary: "Userni update qilish",
        description: "update qilish hammasini",
        consumes: ["multipart/form-data"],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int64",
            },
          },
          {
            name: "avatar",
            in: "formData",
            type: "file",
          },
          {
            name: "username",
            in: "formData",
            type: "string",
          },
          {
            name: "phone_number",
            in: "formData",
            type: "int",
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      delete: {
        tags: ["User"],
        produces: ["application/json"],
        summary: "Delete a User by Mongo id.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int64",
            },
          },
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      get: {
        tags: ["User"],
        produces: ["application/json"],
        summary: "userlarni id orqali olish faqat admin uchun",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "User information.",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/users/confirm": {
      post: {
        tags: ["User"],
        summary:
          "Userga sms orqali kod yuborilgan shuni tekshirish togri bolsa token qaytaradi",
        description:
          "Userga sms orqali kod yuborilgan shuni tekshirish togri bolsa token qaytaradi",
        parameters: [
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/ConfirmUser",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/users/changenumber": {
      post: {
        tags: ["User"],
        summary: "new phone numberga kod yuboriladi",
        description: "new phone numberga kod yuboriladi",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "information.",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/ChangeNumberUser",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    //elons
    "/elons": {
      get: {
        tags: ["Elons"],
        produces: ["application/json"],
        summary: "Hamma elonlarni olish",
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      post: {
        tags: ["Elons"],
        summary: "elonlarni yaratish admin uchun!",
        description: "elonlarni update imagelarni uploadga berib yuborasiz keyin sizga array qaytadi shuni images key bilan berib yuborasizs",
        consumes: ["multipart/form-data"],
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "admin faqat",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "title",
            in: "formData",
            type: "string",
          },
          {
            name: "description",
            in: "formData",
            type: "string",
          },
          {
            name: "files",
            in: "formData",
            type: "string",
          },
          {
            name: "honalar_soni",
            in: "formData",
            type: "number",
          },
          {
            name: "uy_maydoni",
            in: "formData",
            type: "number",
          },
          {
            name: "nechinchi_qavat",
            in: "formData",
            type: "number",
          },
          {
            name: "uy_manzili",
            in: "formData",
            type: "string",
          },
          {
            name: "category",
            in: "formData",
            type: "category id",
          },
          {
            name: "remont",
            in: "formData",
            type: "string",
            enum: ["Evrotamir", "O'rtacha", "Tamir talab", "Qora suvoq"],
          },
          {
            name: "price",
            in: "formData",
            type: "number",
          },
          {
            name: "price_type",
            in: "formData",
            enum: ["UZS", "USD"],
          },
          {
            name: "devor_turi",
            in: "formData",
            type: "string",
            enum: [
              "G'ishit",
              "Paner",
              "Monolit",
              "Shlakoblok",
              "Yogoch",
              "Gazoblok",
              "Sip panel",
            ],
          },
          {
            name: "uy_manzil_xaritada[latitude]",
            in: "formData",
            type: "string",
          },
          {
            name: "uy_manzil_xaritada[longitude]",
            in: "formData",
            type: "string",
          },
          {
            name: "qulayliklar",
            in: "formData",
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/elonchange/{id}": {
      patch: {
        tags: ["Elons"],
        produces: ["application/json"],
        summary: "change status elon admin uchun ",
        consumes: ["multipart/form-data"],
        parameters: [
          {
            name: "proses",
            in: "formData",
            type: "string",
            enum: ["sucses", "waiting", "no_faol"],
          },
          {
            in: "header",
            description: "information.",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "elons/{id}": {
      get: {
        tags: ["Elons"],
        produces: ["application/json"],
        summary: "Elonni id boyicha olish",
        parameters: [
          {
            in: "header",
            description: "information.",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      delete: {
        tags: ["Elons"],
        produces: ["application/json"],
        summary: "Elonni id boyicha olish",
        parameters: [
          {
            in: "header",
            description: "information.",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      put: {
        tags: ["Elons"],
        summary: "elonlarni update qilish",
        description: "elonlarni update imagelarni uploadga berib yuborasiz keyin sizga array qaytadi shuni images key bilan berib yuborasizs",
        consumes: ["multipart/form-data"],
        parameters: [
          {
            in: "header",
            description: "User information.",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int",
            },
          },
          {
            name: "title",
            in: "formData",
            type: "string",
          },
          {
            name: "description",
            in: "formData",
            type: "string",
          },
          {
            name: "files",
            in: "formData",
            type: "string",
          },
          {
            name: "honalar_soni",
            in: "formData",
            type: "number",
          },
          {
            name: "uy_maydoni",
            in: "formData",
            type: "number",
          },
          {
            name: "nechinchi_qavat",
            in: "formData",
            type: "number",
          },
          {
            name: "uy_manzili",
            in: "formData",
            type: "string",
          },
          {
            name: "category",
            in: "formData",
            type: "category id",
          },
          {
            name: "remont",
            in: "formData",
            type: "string",
            enum: ["Evrotamir", "O'rtacha", "Tamir talab", "Qora suvoq"],
          },
          {
            name: "price",
            in: "formData",
            type: "number",
          },
          {
            name: "price_type",
            in: "formData",
            enum: ["UZS", "USD"],
          },
          {
            name: "devor_turi",
            in: "formData",
            type: "string",
            enum: [
              "G'ishit",
              "Paner",
              "Monolit",
              "Shlakoblok",
              "Yogoch",
              "Gazoblok",
              "Sip panel",
            ],
          },
          {
            name: "uy_manzil_xaritada[latitude]",
            in: "formData",
            type: "string",
          },
          {
            name: "uy_manzil_xaritada[longitude]",
            in: "formData",
            type: "string",
          },
          {
            name: "qulayliklar",
            in: "formData",
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/like/elons/{id}": {
      post: {
        tags: ["Elons"],
        summary: "elonlarni yaratish admin uchun!",
        description: "elonlarni yaratish admin uchun",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "information.",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/elonsadmin/{id}": {
      put: {
        tags: ["Elons"],
        summary: "elonlarni update qilish admin uchun!",
        description: "elonlarni update qilish admin uchun bunda ham shunaqa array berasiz imagelarni",
        consumes: ["multipart/form-data"],
        parameters: [
          {
            in: "header",
            description: "User information.",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int",
            },
          },
          {
            name: "title",
            in: "formData",
            type: "string",
          },
          {
            name: "description",
            in: "formData",
            type: "string",
          },
          {
            name: "files",
            in: "formData",
            type: "string",
          },
          {
            name: "honalar_soni",
            in: "formData",
            type: "number",
          },
          {
            name: "uy_maydoni",
            in: "formData",
            type: "number",
          },
          {
            name: "nechinchi_qavat",
            in: "formData",
            type: "number",
          },
          {
            name: "uy_manzili",
            in: "formData",
            type: "string",
          },
          {
            name: "category",
            in: "formData",
            type: "category id",
          },
          {
            name: "remont",
            in: "formData",
            type: "string",
            enum: ["Evrotamir", "O'rtacha", "Tamir talab", "Qora suvoq"],
          },
          {
            name: "price",
            in: "formData",
            type: "number",
          },
          {
            name: "price_type",
            in: "formData",
            enum: ["UZS", "USD"],
          },
          {
            name: "devor_turi",
            in: "formData",
            type: "string",
            enum: [
              "G'ishit",
              "Paner",
              "Monolit",
              "Shlakoblok",
              "Yogoch",
              "Gazoblok",
              "Sip panel",
            ],
          },
          {
            name: "uy_manzil_xaritada[latitude]",
            in: "formData",
            type: "string",
          },
          {
            name: "uy_manzil_xaritada[longitude]",
            in: "formData",
            type: "string",
          },
          {
            name: "qulayliklar",
            in: "formData",
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      delete: {
        tags: ["Elons"],
        produces: ["application/json"],
        summary: "Elonni id boyicha olish",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "information.",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/elons/waiting": {
      get: {
        tags: ["Elons"],
        produces: ["application/json"],
        summary:
          "Hamma adminga jonatilgan elonlarni olish notification uchun ishlatsa boladi",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "Admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/elons/resend/{id}": {
      get: {
        tags: ["Elons"],
        produces: ["application/json"],
        summary: "Elonni qayta adminga jonatish",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "information.",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    //category
    "/category": {
      get: {
        tags: ["Category"],
        produces: ["application/json"],
        summary: "Hamma category olish olish",
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      post: {
        tags: ["Category"],
        summary: "elonlarni yaratish admin uchun!",
        description: "elonlarni yaratish admin uchun",
        parameters: [
          {
            name: "obj",
            in: "body",
            description: "adding category",
            required: true,
            schema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  example: "category",
                },
              },
              required: ["name"],
            },
          },
          {
            name: "authorization",
            in: "header",
            description: "admin faqat",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/category/{id}": {
      get: {
        tags: ["Category"],
        summary: "all categorys uchun!",
        description: "all categorys uchun",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "category id",
            schema: {
              type: "integer",
              format: "int",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      delete: {
        tags: ["Category"],
        summary: "category delete admin uchun!",
        description: "category delete admin uchun",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "admin or user token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "category token",
            schema: {
              type: "integer",
              format: "int",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    //banners
    "/banner": {
      get: {
        tags: ["Banner"],
        produces: ["application/json"],
        summary: "Hamma bannerlarni olish",

        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      post: {
        tags: ["Banner"],
        summary: "banner yaratish admin uchun!",
        description: "banner yaratish admin uchun",
        consumes: ["multipart/form-data"],
        parameters: [
          {
            name: "title",
            in: "formData",
            type: "string",
          },
          {
            name: "description",
            in: "formData",
            type: "string",
          },
          {
            name: "image",
            in: "formData",
            type: "file",
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/banner/{id}": {
      get: {
        tags: ["Banner"],
        summary: "bannerni id boyicha topish uchun",
        description: "bannerni id boyicha topish",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "category id",
            schema: {
              type: "integer",
              format: "int",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      delete: {
        tags: ["Banner"],
        summary: "bannerni delete admin uchun!",
        description: "bannerni delete admin uchun",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "banner id",
            schema: {
              type: "integer",
              format: "int",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      put: {
        tags: ["Banner"],
        summary: "banner update admin uchun!",
        description: "banner update admin uchun",
        consumes: ["multipart/form-data"],
        parameters: [
          {
            name: "title",
            in: "formData",
            type: "string",
          },
          {
            name: "description",
            in: "formData",
            type: "string",
          },
          {
            name: "image",
            in: "formData",
            type: "file",
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/banner/un/{id}": {
      delete: {
        tags: ["Banner"],
        summary: "bannerni un delete admin uchun!",
        description: "bannerni un delete admin uchun",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "banner id",
            schema: {
              type: "integer",
              format: "int",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    //chats
    "/chat": {
      get: {
        tags: ["Chats"],
        produces: ["application/json"],
        summary: "Hamma uzini chatlarini olish",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "User information.",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      post: {
        tags: ["Chats"],
        summary: "chat yaratish one to one",
        description: "chat yaratish one to one",
        consumes: ["multipart/form-data"],
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "User token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/Createchat",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    //messages
    "/message/{chatId}": {
      get: {
        tags: ["Messages"],
        produces: ["application/json"],
        summary: "chat id boyicha hamma messagelarni olish",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "User information.",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "chatId",
            in: "path",
            required: true,
            description: "chat id sini kiriting",
            schema: {
              type: "uuid",
              format: "int",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/message": {
      post: {
        tags: ["Messages"],
        summary: "chat yaratish one to one",
        description: "chat yaratish one to one",
        consumes: ["multipart/form-data"],
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "User token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/CreateMessage",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    //notifications
    "/notification/elon": {
      post: {
        tags: ["Notifications"],
        summary: "Notification yaratish admin uchun",
        description: "Notification yaratish admin uchun",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "Admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/CreateNotification",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/notification/elons": {
      get: {
        tags: ["Notifications"],
        produces: ["application/json"],
        summary: "Hamma notificationlarni olish",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "Admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/notification/me": {
      get: {
        tags: ["Notifications"],
        produces: ["application/json"],
        summary: "Hamma uzini notificationlarni olish",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "User token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/notification/{id}": {
      delete: {
        tags: ["Notifications"],
        summary: "notification delete qilish admin uchun",
        description: "notification delete qilish admin uchun",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "notification id",
            schema: {
              type: "ObjectId",
              format: "int",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      get: {
        tags: ["Notifications"],
        summary: "notification get qilish admin uchun",
        description: "notification get qilish admin uchun",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "notification id",
            schema: {
              type: "ObjectId",
              format: "int",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      put: {
        tags: ["Notifications"],
        summary: "notification get qilish admin uchun",
        description: "notification get qilish admin uchun",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "notification id",
            schema: {
              type: "ObjectId",
              format: "int",
            },
          },
          {
            name: "obj",
            in: "body",
            description: "notification update inputs )",
            schema: {
              $ref: "#/definitions/schemas/UpdateNotification",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/notification/change/{id}": {
      patch: {
        tags: ["Notifications"],
        summary: "notification status update qilish ",
        description: "notification status update qilish ",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "user token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "notification id",
            schema: {
              type: "ObjectId",
              format: "int",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    //upload
    "/upload/elons": {
      post: {
        tags: ["Upload"],
        summary: "upload yaratish elonnning rasimlarini",
        description: "upload qilish imagelar 6 ta berasiz sizga  files arrayda filnomari beradi beradi uni elonni images keyiga berib yuborasiz ",
        consumes: ["multipart/form-data"],
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "user token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "images",
            in: "formData",
            type: "file",
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/upload/image": {
      post: {
        tags: ["Upload"],
        summary: "upload yaratish admin user banner uchun rasmlarni bersaiz sizga filename qaytaradi",
        description: "upload qilish image",
        consumes: ["multipart/form-data"],
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "user token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "image",
            in: "formData",
            type: "file",
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
  },
  definitions: {
    schemas: {
      AddAdmin: {
        type: "object",
        properties: {
          first_name: {
            type: "string",
            example: "Jhon Doe",
          },
          last_name: {
            type: "string",
            example: "Marie Doe",
          },
          image: {
            type: "string",
            example: "Jhon_Doe.png",
          },
          role: {
            type: "string",
            exsample: "admin or super_admin",
            default: "admin",
          },
          username: {
            type: "string",
            exsample: "ayubxon",
          },
          password: {
            type: "string",
            exsample: "!@#$%^&",
          },
        },
        required: ["first_name", "last_name", "image", "username", "password"],
      },
      LoginAdmin: {
        type: "object",
        properties: {
          username: {
            type: "string",
            exsample: "ayubxon",
          },
          password: {
            type: "string",
            exsample: "!@#$%^&",
          },
        },
        required: ["username", "password"],
      },
      patchAdmin: {
        type: "object",
        properties: {
          first_name: {
            type: "string",
            example: "Jhon Doe",
          },
          last_name: {
            type: "string",
            example: "Marie Doe",
          },
          image: {
            type: "string",
            example: "Jhon_Doe.png",
          },
          username: {
            type: "string",
            exsample: "ayubxon",
          },
        },
      },
      ChangePassword: {
        type: "object",
        properties: {
          current_password: {
            type: "string",
            exsample: "!@#$%^&*",
          },
          new_password: {
            type: "string",
            exsample: "*&^%$#@!",
          },
        },
        required: ["current_password", "new_password"],
      },
      //users
      LoginUser: {
        type: "object",
        properties: {
          fullname: {
            type: "string",
            exsample: "eshmat toshmatovich",
          },
          phone_number: {
            type: "string",
            exsample: "998999999999",
          },
        },
        required: ["fullname", "phone_number"],
      },
      RegisterUser: {
        type: "object",
        properties: {
          phone_number: {
            type: "string",
            exsample: "998999999999",
          },
        },
        required: ["phone_number"],
      },
      CreateUser: {
        type: "object",
        properties: {
          fullname: {
            type: "string",
            exsample: "eshmat toshmatovich",
          },
          phone_number: {
            type: "string",
            exsample: "998999999999",
          },
        },
        required: ["fullname", "phone_number"],
      },
      ConfirmUser: {
        type: "object",
        properties: {
          user_id: {
            type: "string",
            exsample: "mongoid",
          },
          code: {
            type: "string",
            exsample: "2345612",
          },
          fullname: {
            type: "string",
            exsample: "eshmat toshmatovich",
          },
        },
        required: ["user_id", "code", "fullname"],
      },
      ChangeNumberUser: {
        type: "object",
        properties: {
          old_number: {
            type: "string",
            exsample: "998999999999",
          },
          new_number: {
            type: "string",
            exsample: "998999999999",
          },
        },
        required: ["old_number", "new_number"],
      },
      //elons
      Createelons: {
        type: "object",
        properties: {
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          images: {
            type: "file",
          },
          honalar_soni: {
            type: "string",
          },
          uy_maydoni: {
            type: "string",
          },
          nechinchi_qavat: {
            type: "string",
          },
          uy_manzili: {
            type: "string",
          },
          category: {
            type: "string",
          },
          remont: {
            type: "string",
          },
          price: {
            type: "string",
          },
          qurilishda_ishlatilgan: {
            type: "string",
          },
          uy_manzil_xaritada: {
            type: "object",
            properties: {
              latitude: {
                type: "string",
              },
              longitude: {
                type: "string",
              },
            },
            required: ["latitude", "longitude"],
          },
        },
        required: [
          "title",
          "description",
          "images",
          "honalar_soni",
          "uy_maydoni",
          "nechinchi_qavat",
          "uy_manzili",
          "category",
          "remont",
          "price",
          "qurilishda_ishlatilgan",
        ],
      },
      ChangeElonStatus: {
        type: "object",
        properties: {
          process: {
            type: "object",
          },
        },
        required: ["process"],
      },
      //chats
      Createchat: {
        type: "object",
        properties: {
          userId: {
            type: "string",
            exsample: "yozishmoqchi bolgan odam idsi mongo idsi",
          },
        },
        required: ["userId"],
      },
      //message
      CreateMessage: {
        type: "object",
        properties: {
          chatId: {
            type: "string",
            exsample: "chatni idsini kiri",
          },
          message: {
            type: "string",
            exsample: "bb world )",
          },
        },
        required: ["chatId", "message"],
      },
      //notifications
      CreateNotification: {
        type: "object",
        properties: {
          notfication_user: {
            type: "string",
            exsample: "user idsini kiri",
          },
          elon: {
            type: "string",
            exsample: "elon idsini kiri",
          },
          text: {
            type: "string",
            exsample: "elon idsini kiri",
          },
        },
        required: ["notfication_user", "elon", "text"],
      },
      UpdateNotification: {
        type: "object",
        properties: {
          notfication_user: {
            type: "string",
            exsample: "user idsini kiri",
          },
          elon: {
            type: "string",
            exsample: "elon idsini kiri",
          },
          text: {
            type: "string",
            exsample: "elon idsini kiri",
          },
        },
        // required: ["notfication_user", "elon", "text"],
      },
    },
  },
};

module.exports = swagger_js;
