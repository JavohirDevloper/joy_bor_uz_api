const config = require("../shared/config/index");

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
    "/users/login": {
      post: {
        tags: ["User"],
        summary:
          "Userni login qilishi va keyin sms code tashtiqlashga otib yuboriladi",
        description:
          "Userni login qilishi va keyin sms code tashtiqlashga otib yuboriladi",
        parameters: [
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/LoginUser",
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
    "/users/register": {
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
        description: "faqat fullname update boladi",
        parameters: [
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/UpdateUsername",
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
        description: "faqat fullname update boladi",
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
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/UpdateUser",
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
        ],
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
        description: "elonlarni yaratish admin uchun",
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
            name: "images",
            in: "formData",
            type: "file",
          },
          {
            name: "honalar_soni",
            in: "formData",
            type: "string",
          },
          {
            name: "uy_maydoni",
            in: "formData",
            type: "string",
          },
          {
            name: "nechinchi_qavat",
            in: "formData",
            type: "string",
          },
          {
            name: "uy_manzili",
            in: "formData",
            type: "string",
          },
          {
            name: "category",
            in: "formData",
            type: "string",
          },
          {
            name: "remont",
            in: "formData",
            type: "string",
            enum: ["o'rta", "yaxshi", "juda zor"],
          },
          {
            name: "price",
            in: "formData",
            type: "string",
          },
          {
            name: "qurilishda_ishlatilgan",
            in: "formData",
            type: "string",
            enum: ["gisht", "shloka_blok"],
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
            enum: ["sucses", "not_sucsus", "waiting", "no_faol"],
          },
          {
            name: "authorization",
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
    "elons{id}": {
      get: {
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
        description: "elonlarni update qilish admin uchun",
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
            name: "images",
            in: "formData",
            type: "file",
          },
          {
            name: "honalar_soni",
            in: "formData",
            type: "string",
          },
          {
            name: "uy_maydoni",
            in: "formData",
            type: "string",
          },
          {
            name: "nechinchi_qavat",
            in: "formData",
            type: "string",
          },
          {
            name: "uy_manzili",
            in: "formData",
            type: "string",
          },
          {
            name: "category",
            in: "formData",
            type: "string",
          },
          {
            name: "remont",
            in: "formData",
            type: "string",
            enum: ["o'rta", "yaxshi", "juda zor"],
          },
          {
            name: "price",
            in: "formData",
            type: "string",
          },
          {
            name: "qurilishda_ishlatilgan",
            in: "formData",
            type: "string",
            enum: ["gisht", "shloka_blok"],
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
    //category
    "/category": {
      get: {
        tags: ["Category"],
        produces: ["application/json"],
        summary: "Hamma category olish olish",
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
        ],
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
            name: "authorization",
            in: "header",
            description: "user or admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
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
        ],
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
            name: "authorization",
            in: "header",
            description: "user or admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
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
      UpdateUser: {
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
      UpdateUsername: {
        type: "object",
        properties: {
          fullname: {
            type: "string",
            exsample: "eshmat toshmatovich",
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
        },
        required: ["user_id", "code"],
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
    },
  },
};

module.exports = swagger_js;
