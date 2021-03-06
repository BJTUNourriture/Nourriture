define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p> "
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./backend/public/main.js",
    "group": "C__Users_Tagzz_Desktop_Nourriture_source_server_backend_public_main_js",
    "groupTitle": "C__Users_Tagzz_Desktop_Nourriture_source_server_backend_public_main_js",
    "name": ""
  },
  {
    "type": "delete",
    "url": "/ingredients/id/:id",
    "title": "Delete Ingredient by id",
    "name": "deleteIngredientById",
    "group": "Ingredients",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Ingredient unique ID</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>The id was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"The id was not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./backend/API/controllers/ingredients.js",
    "groupTitle": "Ingredients",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Ingredient succesfully created!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Ingredient succesfully deleted!\"\n\t  }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/ingredients/name/:name",
    "title": "Delete Ingredient by name",
    "name": "deleteIngredientByName",
    "group": "Ingredients",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Ingredient full name</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>The name was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"The name was not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./backend/API/controllers/ingredients.js",
    "groupTitle": "Ingredients",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Ingredient succesfully created!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Ingredient succesfully deleted!\"\n\t  }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/ingredients/",
    "title": "Delete Ingredients (JSON)",
    "name": "deleteIngredients",
    "group": "Ingredients",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "id",
            "description": "<p>Ingredient unique ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Sting</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Ingredient full name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  {\n\t\"id\" : \"56183b64753d867e016c80d2\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>The id was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"The id was not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./backend/API/controllers/ingredients.js",
    "groupTitle": "Ingredients",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Ingredient succesfully created!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Ingredient succesfully deleted!\"\n\t  }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/ingredients/",
    "title": "Request all the Ingredients",
    "name": "getAllIngredients",
    "group": "Ingredients",
    "version": "0.1.0",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>There are no existing ingredients.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"The are no existing ingredients.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./backend/API/controllers/ingredients.js",
    "groupTitle": "Ingredients",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "fat",
            "description": "<p>Fat (in grams) contained in the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "carbohydrates",
            "description": "<p>Carbohydrates (in grams) contained in the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "proteins",
            "description": "<p>Proteins (in grams) contained in the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "tags",
            "description": "<p>List of the tags of the ingredient</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\"_id\" : \"561830c5fecdba4f72668fe8\",\n      \"name\": \"Tomato\",\n      \"description\": \"Very yummy fruit.\"\n\t\t\"fat\" : 0.3,\n\t\t\"carbohydrates\" : 5.8,\n\t\t\"protein\" : 1.3,\n\t\t\"tags\" : [{\n\t\t\t\t\t\"name\" : \"fruit\",\n\t\t\t\t\t\"description\" : \"Tag concerning fruits\",\n\t\t\t\t\t\"flag\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"SAFE\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }]\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/ingredients/id/:id",
    "title": "Request Ingredient informations by id",
    "name": "getIngredientById",
    "group": "Ingredients",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Ingredients unique ID</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>The id of the ingredient was not found</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"The id was not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./backend/API/controllers/ingredients.js",
    "groupTitle": "Ingredients",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "fat",
            "description": "<p>Fat (in grams) contained in the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "carbohydrates",
            "description": "<p>Carbohydrates (in grams) contained in the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "proteins",
            "description": "<p>Proteins (in grams) contained in the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "tags",
            "description": "<p>List of the tags of the ingredient</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\"_id\" : \"561830c5fecdba4f72668fe8\",\n      \"name\": \"Tomato\",\n      \"description\": \"Very yummy fruit.\"\n\t\t\"fat\" : 0.3,\n\t\t\"carbohydrates\" : 5.8,\n\t\t\"protein\" : 1.3,\n\t\t\"tags\" : [{\n\t\t\t\t\t\"name\" : \"fruit\",\n\t\t\t\t\t\"description\" : \"Tag concerning fruits\",\n\t\t\t\t\t\"flag\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"SAFE\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }]\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/ingredients/name/:name",
    "title": "Request Ingredient informations by name",
    "name": "getIngredientByName",
    "group": "Ingredients",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Ingredient partial or full name</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>The name of the ingredient was not found</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"The name was not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./backend/API/controllers/ingredients.js",
    "groupTitle": "Ingredients",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "fat",
            "description": "<p>Fat (in grams) contained in the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "carbohydrates",
            "description": "<p>Carbohydrates (in grams) contained in the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "proteins",
            "description": "<p>Proteins (in grams) contained in the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "tags",
            "description": "<p>List of the tags of the ingredient</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\"_id\" : \"561830c5fecdba4f72668fe8\",\n      \"name\": \"Tomato\",\n      \"description\": \"Very yummy fruit.\"\n\t\t\"fat\" : 0.3,\n\t\t\"carbohydrates\" : 5.8,\n\t\t\"protein\" : 1.3,\n\t\t\"tags\" : [{\n\t\t\t\t\t\"name\" : \"fruit\",\n\t\t\t\t\t\"description\" : \"Tag concerning fruits\",\n\t\t\t\t\t\"flag\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"SAFE\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }]\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/ingredients/",
    "title": "Create a new Ingredient",
    "name": "postIngredient",
    "group": "Ingredients",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Ingredient succesfully created!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Ingredient succesfully created!\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Bad Value Definition",
          "content": "  HTTP/1.1 400 BAD REQUEST\n  {\n\t...\n\tmongoose custom error\n\t...\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./backend/API/controllers/ingredients.js",
    "groupTitle": "Ingredients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the ingredient</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the ingredient</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "fat",
            "description": "<p>Fat (in grams) contained in the ingredient</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "carbohydrates",
            "description": "<p>Carbohydrates (in grams) contained in the ingredient</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "proteins",
            "description": "<p>Proteins (in grams) contained in the ingredient</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "tags",
            "description": "<p>List of the tags of the ingredient</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"name\": \"Tomato\",\n      \"description\": \"Very yummy fruit.\"\n\t\t \"fat\" : 0.3,\n\t\t \"carbohydrates\" : 5.8,\n\t\t \"protein\" : 1.3,\n\t\t \"tags\" : [{\n\t\t\t\t\t\"name\" : \"fruit\",\n\t\t\t\t\t\"description\" : \"Tag concerning fruits\",\n\t\t\t\t\t\"flag\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"SAFE\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }]\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/ingredients/id/:id",
    "title": "Update an Ingredient by Id",
    "name": "putIngredientById",
    "group": "Ingredients",
    "version": "0.1.0",
    "filename": "./backend/API/controllers/ingredients.js",
    "groupTitle": "Ingredients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Name of the ingredient</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the ingredient</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "fat",
            "description": "<p>Fat (in grams) contained in the ingredient</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "carbohydrates",
            "description": "<p>Carbohydrates (in grams) contained in the ingredient</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "proteins",
            "description": "<p>Proteins (in grams) contained in the ingredient</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "tags",
            "description": "<p>List of the tags of the ingredient</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"name\": \"Tomato\",\n      \"description\": \"Very yummy fruit.\"\n\t\t \"fat\" : 0.3,\n\t\t \"carbohydrates\" : 5.8,\n\t\t \"protein\" : 1.3,\n\t\t \"tags\" : [{\n\t\t\t\t\t\"name\" : \"fruit\",\n\t\t\t\t\t\"description\" : \"Tag concerning fruits\",\n\t\t\t\t\t\"flag\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"SAFE\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }]\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Ingredient successfully updated!\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>Ingredient not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "  HTTP/1.1 404 Bad Request\n  {\n\t\"message\" : \"Ingredient not found.\"\n  }",
          "type": "json"
        },
        {
          "title": "Bad key sent",
          "content": "  HTTP/1.1 400 Bad Request\n  {\n\t\"message\" : \"The key <key> does not exist for Ingredients.\"\n  }",
          "type": "json"
        },
        {
          "title": "Bad Value Definition",
          "content": "  HTTP/1.1 200 OK\n  {\n\t...\n\tmongoose custom error\n\t...\n  }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/ingredients/name/:name",
    "title": "Update an Ingredient by name",
    "name": "putIngredientByName",
    "group": "Ingredients",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Ingredient successfully updated!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Ingredient successfully updated!\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "filename": "./backend/API/controllers/ingredients.js",
    "groupTitle": "Ingredients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Name of the ingredient</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the ingredient</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "fat",
            "description": "<p>Fat (in grams) contained in the ingredient</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "carbohydrates",
            "description": "<p>Carbohydrates (in grams) contained in the ingredient</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "proteins",
            "description": "<p>Proteins (in grams) contained in the ingredient</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "tags",
            "description": "<p>List of the tags of the ingredient</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"name\": \"Tomato\",\n      \"description\": \"Very yummy fruit.\"\n\t\t \"fat\" : 0.3,\n\t\t \"carbohydrates\" : 5.8,\n\t\t \"protein\" : 1.3,\n\t\t \"tags\" : [{\n\t\t\t\t\t\"name\" : \"fruit\",\n\t\t\t\t\t\"description\" : \"Tag concerning fruits\",\n\t\t\t\t\t\"flag\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"SAFE\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }]\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>Ingredient not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "  HTTP/1.1 404 Bad Request\n  {\n\t\"message\" : \"Ingredient not found.\"\n  }",
          "type": "json"
        },
        {
          "title": "Bad key sent",
          "content": "  HTTP/1.1 400 Bad Request\n  {\n\t\"message\" : \"The key <key> does not exist for Ingredients.\"\n  }",
          "type": "json"
        },
        {
          "title": "Bad Value Definition",
          "content": "  HTTP/1.1 200 OK\n  {\n\t...\n\tmongoose custom error\n\t...\n  }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/recipes/",
    "title": "Create a new Recipe",
    "name": "postRecipe",
    "group": "Recipes",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Recipe succesfully created!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Recipe succesfully created!\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Bad Value Definition",
          "content": "  HTTP/1.1 400 BAD REQUEST\n  {\n\t...\n\tmongoose custom error\n\t...\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./backend/API/controllers/recipes.js",
    "groupTitle": "Recipes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>Name of the recipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "author_id",
            "description": "<p>Id of the author of the recipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "author_name",
            "description": "<p>Name of the author of the recipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the recipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": true,
            "field": "date_posted",
            "description": "<p>[default : Date.now] Date when the recipe was posted</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": true,
            "field": "date_edited",
            "description": "<p>Date when the recipe was edited</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "difficulty",
            "description": "<p>[default : 0, min : 0, max : 3] Difficulty set for the recipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "average_score",
            "description": "<p>[default : 0, min : 0, max : 5] Average score voted by the users for the recipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "time_preparation",
            "description": "<p>[default : 0, min : 0, max : 90000] Time it takes to make the recipe (in min)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "average_price",
            "description": "<p>[default : 0, min : 0, max : 3] Average cost of the recipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "ingredients",
            "description": "<p>List of the ingredients needed for the recipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "ingredients.id_ingredient",
            "description": "<p>Id of the ingredient</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "ingredients.name_ingredient",
            "description": "<p>Name of the ingredient</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "ingredients.amount_ingredient",
            "description": "<p>[default : 0, min : 0, max : 1000000] Grams of the ingredient needed</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "comments",
            "description": "<p>List of the comments posted for the recipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "comments.id_author",
            "description": "<p>Id of the author of the comment</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "comments.name_author",
            "description": "<p>Name of the author of the comment</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "comments.date_posted",
            "description": "<p>[default : Date.now] Date when the comment was posted</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": true,
            "field": "comments.date_edited",
            "description": "<p>Date when the comment was edited</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "comments.content",
            "description": "<p>The comment itself</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "comments.visible",
            "description": "<p>[default : true] Is the comment visible by others</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "pictures",
            "description": "<p>List of the pictures posted by the author for the recipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pictures.thumbnail_url",
            "description": "<p>Url of the thumbnail version of the picture</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pictures.medium_sized_url",
            "description": "<p>Url of the medium size version of the picture</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "pictures.big_sized_url",
            "description": "<p>Url of the big size version of the picture</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"title\": \"Pumpkin pie\",\n      \"author_id\": \"561fc840d6c25173533e267f\",\n      \"author_name\": \"Kek man\",\n      \"description\" : \"It's Halloween time!\",\n\t\t\"date_posted\" : \"2015-03-31T22:00:00.000Z\",\n\t\t\"date_edited\" : \"2015-04-01T18:34:23.000Z\",\n\t\t\"difficulty\" : 1,\n\t\t\"average_score\" : 0,\n\t\t\"time_preparation\" : 60,\n\t\t\"average_price\" : 1,\n\t\t\"ingredients\" : [{\n\t\t\t\t\t\t\"id_ingredient\" : \"689ed840d6c25173533g895\",\n\t\t\t\t\t\t\"name_ingredient\" : \"Pumpkin\",\n\t\t\t\t\t\t\"amount_ingredient\" : 100\n\t\t\t\t   \t}],\n\t\t\"comments\" : [{\n\t\t\t\t\t\t\"id_author\" : \"386fc840d6c25173533e546h\",\n\t\t\t\t\t\t\"name_author\" : \"Pacza\",\n\t\t\t\t\t\t\"date_posted\" : \"2015-03-31T22:00:00.000Z\",\n\t\t\t\t\t\t\"date_edited\" : \"2015-04-01T18:34:23.000Z\",\n\t\t\t\t\t\t\"content\" : \"Thank you! Very nice recipe!\",\n\t\t\t\t\t\t\"visible\" : true\n\t\t\t\t   \t}],\n\t\t\"pictures\" : [{\n\t\t\t\t\t\t\"thumbnail_url\" : \"/thumbnails/1.jpg\",\n\t\t\t\t\t\t\"medium_sized_url\" : \"/medium_sized/1.jpg\",\n\t\t\t\t\t\t\"big_sized_url\" : \"/big_sized/1.jpg\"\n\t\t\t\t   \t}]\n    }",
          "type": "json"
        }
      ]
    }
  }
] });