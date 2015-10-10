define({ "api": [
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
          "title": "Error-Reponse",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"The id was not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/ingredients.js",
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
          "title": "Error-Reponse",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"The name was not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/ingredients.js",
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
          "title": "Error-Reponse",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"The id was not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/ingredients.js",
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
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"The are no existing ingredients.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/ingredients.js",
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
            "optional": true,
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\"_id\" : \"561830c5fecdba4f72668fe8\",\n      \"name\": \"Tomato\",\n      \"description\": \"Very yummy fruit.\"\n\t\t \"fat\" : 0.3,\n\t\t \"carbohydrates\" : 5.8,\n\t\t \"protein\" : 1.3,\n\t\t \"tags\" : [{\n\t\t\t\t\t\"name\" : \"fruit\",\n\t\t\t\t\t\"description\" : \"Tag concerning fruits\",\n\t\t\t\t\t\"flag\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"SAFE\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }]\n    }",
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
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"The id was not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/ingredients.js",
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
            "optional": true,
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\"_id\" : \"561830c5fecdba4f72668fe8\",\n      \"name\": \"Tomato\",\n      \"description\": \"Very yummy fruit.\"\n\t\t \"fat\" : 0.3,\n\t\t \"carbohydrates\" : 5.8,\n\t\t \"protein\" : 1.3,\n\t\t \"tags\" : [{\n\t\t\t\t\t\"name\" : \"fruit\",\n\t\t\t\t\t\"description\" : \"Tag concerning fruits\",\n\t\t\t\t\t\"flag\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"SAFE\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }]\n    }",
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
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"The name was not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/ingredients.js",
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
            "optional": true,
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\"_id\" : \"561830c5fecdba4f72668fe8\",\n      \"name\": \"Tomato\",\n      \"description\": \"Very yummy fruit.\"\n\t\t \"fat\" : 0.3,\n\t\t \"carbohydrates\" : 5.8,\n\t\t \"protein\" : 1.3,\n\t\t \"tags\" : [{\n\t\t\t\t\t\"name\" : \"fruit\",\n\t\t\t\t\t\"description\" : \"Tag concerning fruits\",\n\t\t\t\t\t\"flag\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"SAFE\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }]\n    }",
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
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n\t\t\"_id\" : \"561830c5fecdba4f72668fe8\",\n      \"name\": \"Tomato\",\n      \"description\": \"Very yummy fruit.\"\n\t\t \"fat\" : 0.3,\n\t\t \"carbohydrates\" : 5.8,\n\t\t \"protein\" : 1.3,\n\t\t \"tags\" : [{\n\t\t\t\t\t\"name\" : \"fruit\",\n\t\t\t\t\t\"description\" : \"Tag concerning fruits\",\n\t\t\t\t\t\"flag\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"SAFE\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }]\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the ingredient</p> "
          },
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
      }
    },
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
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Ingredient succesfully created!\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\t...\n\tmongoose custom error\n\t...\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/ingredients.js",
    "groupTitle": "Ingredients"
  }
] });