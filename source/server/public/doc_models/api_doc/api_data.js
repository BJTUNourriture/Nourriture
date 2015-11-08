define({ "api": [
  {
    "type": "delete",
    "url": "/allergies/",
    "title": "Delete Allergies (JSON)",
    "name": "deleteAllergies",
    "group": "Allergies",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "id",
            "description": "<p>Allergy unique ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Sting</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Allergy full name</p> "
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
    "filename": "API/controllers/allergies.js",
    "groupTitle": "Allergies",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Allergy succesfully deleted!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Allergy succesfully deleted!\"\n\t  }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/allergies/id/:id",
    "title": "Delete Allergy by id",
    "name": "deleteAllergyById",
    "group": "Allergies",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Allergy unique ID</p> "
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
    "filename": "API/controllers/allergies.js",
    "groupTitle": "Allergies",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Allergy succesfully deleted!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Allergy succesfully deleted!\"\n\t  }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/allergies/name/:name",
    "title": "Delete Allergy by name",
    "name": "deleteAllergyByName",
    "group": "Allergies",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Allergy full name</p> "
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
    "filename": "API/controllers/allergies.js",
    "groupTitle": "Allergies",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Allergy succesfully deleted!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Allergy succesfully deleted!\"\n\t  }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/allergies/",
    "title": "Request all the Allergies",
    "name": "getAllAllergies",
    "group": "Allergies",
    "version": "0.1.0",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>There are no existing allergies.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"There are no existing allergies.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/allergies.js",
    "groupTitle": "Allergies",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the allergy</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the allergy</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the allergy</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "ingredients",
            "description": "<p>List of the ingredients the allergy is based on</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n      \"_id\": \"561830k5fecdba4f72668fe8\"\n      \"name\": \"Nuts\",\n      \"description\": \"All nuts\"\n\t\t\"ingredients\" : [{\n\t\t\t\t\t        \"id_ingredient\" : \"689ed300d6c22573533g895\",\n\t\t\t\t\t\t    \"name_ingredient\" : \"Peanut\"\n\t\t\t\t   \t    },\n                      {\n                          \"id_ingredient\" : \"234kf542a9g78512468a450\",\n                          \"name_ingredient\" : \"cashew nut\"\n                      }]\n    }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "ingredients.id_ingredient",
            "description": "<p>Id of the ingredient of the allergy</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "ingredients.name_ingredient",
            "description": "<p>Name of the ingredient of the allergy</p> "
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/allergies/id/:id",
    "title": "Request Allergy informations by id",
    "name": "getAllergyById",
    "group": "Allergies",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Allergies unique ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "ingredients.id_ingredient",
            "description": "<p>Id of the ingredient of the allergy</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "ingredients.name_ingredient",
            "description": "<p>Name of the ingredient of the allergy</p> "
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
            "description": "<p>The id of the allergy was not found</p> "
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
    "filename": "API/controllers/allergies.js",
    "groupTitle": "Allergies",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the allergy</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the allergy</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the allergy</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "ingredients",
            "description": "<p>List of the ingredients the allergy is based on</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n      \"_id\": \"561830k5fecdba4f72668fe8\"\n      \"name\": \"Nuts\",\n      \"description\": \"All nuts\"\n\t\t\"ingredients\" : [{\n\t\t\t\t\t        \"id_ingredient\" : \"689ed300d6c22573533g895\",\n\t\t\t\t\t\t    \"name_ingredient\" : \"Peanut\"\n\t\t\t\t   \t    },\n                      {\n                          \"id_ingredient\" : \"234kf542a9g78512468a450\",\n                          \"name_ingredient\" : \"cashew nut\"\n                      }]\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/allergies/name/:name",
    "title": "Request Allergy informations by name",
    "name": "getAllergyByName",
    "group": "Allergies",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Allergy partial or full name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "ingredients.id_ingredient",
            "description": "<p>Id of the ingredient of the allergy</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "ingredients.name_ingredient",
            "description": "<p>Name of the ingredient of the allergy</p> "
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
            "description": "<p>The name of the allergy was not found</p> "
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
    "filename": "API/controllers/allergies.js",
    "groupTitle": "Allergies",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the allergy</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the allergy</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the allergy</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "ingredients",
            "description": "<p>List of the ingredients the allergy is based on</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n      \"_id\": \"561830k5fecdba4f72668fe8\"\n      \"name\": \"Nuts\",\n      \"description\": \"All nuts\"\n\t\t\"ingredients\" : [{\n\t\t\t\t\t        \"id_ingredient\" : \"689ed300d6c22573533g895\",\n\t\t\t\t\t\t    \"name_ingredient\" : \"Peanut\"\n\t\t\t\t   \t    },\n                      {\n                          \"id_ingredient\" : \"234kf542a9g78512468a450\",\n                          \"name_ingredient\" : \"cashew nut\"\n                      }]\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/allergies/",
    "title": "Create a new Allergy",
    "name": "postAllergy",
    "group": "Allergies",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Allergy succesfully created!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Allergy succesfully created!\"\n\t  }",
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
    "filename": "API/controllers/allergies.js",
    "groupTitle": "Allergies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the allergy</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the allergy</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "ingredients",
            "description": "<p>List of the ingredients the allergy is based on</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "ingredients.id_ingredient",
            "description": "<p>Id of the ingredient of the allergy</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "ingredients.name_ingredient",
            "description": "<p>Name of the ingredient of the allergy</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"name\": \"Nuts\",\n      \"description\": \"All nuts\"\n\t\t\"ingredients\" : [{\n\t\t\t\t\t        \"id_ingredient\" : \"689ed300d6c22573533g895\",\n\t\t\t\t\t\t    \"name_ingredient\" : \"Peanut\"\n\t\t\t\t   \t    },\n                      {\n                          \"id_ingredient\" : \"234kf542a9g78512468a450\",\n                          \"name_ingredient\" : \"cashew nut\"\n                      }]\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/allergies/id/:id",
    "title": "Update an Allergy by Id",
    "name": "putAllergyById",
    "group": "Allergies",
    "version": "0.1.0",
    "filename": "API/controllers/allergies.js",
    "groupTitle": "Allergies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Name of the allergy</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the allergy</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "ingredients",
            "description": "<p>List of the ingredients the allergy is based on</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "ingredients.id_ingredient",
            "description": "<p>Id of the ingredient of the allergy</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "ingredients.name_ingredient",
            "description": "<p>Name of the ingredient of the allergy</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"name\": \"Nuts\",\n      \"description\": \"All nuts\"\n\t\t\"ingredients\" : [{\n\t\t\t\t\t        \"id_ingredient\" : \"689ed300d6c22573533g895\",\n\t\t\t\t\t\t    \"name_ingredient\" : \"Peanut\"\n\t\t\t\t   \t    },\n                      {\n                          \"id_ingredient\" : \"234kf542a9g78512468a450\",\n                          \"name_ingredient\" : \"cashew nut\"\n                      }]\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Allergy successfully updated!\"\n\t  }",
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
            "description": "<p>Allergy not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "  HTTP/1.1 404 Bad Request\n  {\n\t\"message\" : \"Allergy not found.\"\n  }",
          "type": "json"
        },
        {
          "title": "Bad key sent",
          "content": "  HTTP/1.1 400 Bad Request\n  {\n\t\"message\" : \"The key <key> does not exist for Allergies.\"\n  }",
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
    "url": "/allergies/name/:name",
    "title": "Update an Allergy by name",
    "name": "putAllergyByName",
    "group": "Allergies",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Allergy successfully updated!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Allergy successfully updated!\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/allergies.js",
    "groupTitle": "Allergies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Name of the allergy</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the allergy</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "ingredients",
            "description": "<p>List of the ingredients the allergy is based on</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "ingredients.id_ingredient",
            "description": "<p>Id of the ingredient of the allergy</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "ingredients.name_ingredient",
            "description": "<p>Name of the ingredient of the allergy</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"name\": \"Nuts\",\n      \"description\": \"All nuts\"\n\t\t\"ingredients\" : [{\n\t\t\t\t\t        \"id_ingredient\" : \"689ed300d6c22573533g895\",\n\t\t\t\t\t\t    \"name_ingredient\" : \"Peanut\"\n\t\t\t\t   \t    },\n                      {\n                          \"id_ingredient\" : \"234kf542a9g78512468a450\",\n                          \"name_ingredient\" : \"cashew nut\"\n                      }]\n    }",
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
            "description": "<p>Allergy not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "  HTTP/1.1 404 Bad Request\n  {\n\t\"message\" : \"Allergy not found.\"\n  }",
          "type": "json"
        },
        {
          "title": "Bad key sent",
          "content": "  HTTP/1.1 400 Bad Request\n  {\n\t\"message\" : \"The key <key> does not exist for Allergies.\"\n  }",
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
    "url": "/groups/:group_id/add/:user_id",
    "title": "Add User to a group",
    "name": "addUserToGroup",
    "group": "Groups",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "group_id",
            "description": "<p>Group id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>User id</p> "
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
            "description": "<p>User has been added to group.</p> "
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
            "description": "<p>The id of the group was not found</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"The ID was not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/groups.js",
    "groupTitle": "Groups"
  },
  {
    "type": "delete",
    "url": "/groups/id/:id",
    "title": "Delete Group by id",
    "name": "deleteGroupById",
    "group": "Groups",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Group unique ID</p> "
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
    "filename": "API/controllers/groups.js",
    "groupTitle": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Group succesfully deleted!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\" : \"Group succesfully deleted!\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/groups/name/:name",
    "title": "Delete Group by name",
    "name": "deleteGroupByName",
    "group": "Groups",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Group full name</p> "
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
    "filename": "API/controllers/groups.js",
    "groupTitle": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Group succesfully deleted!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\" : \"Group succesfully deleted!\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/groups/",
    "title": "Delete Groups (JSON)",
    "name": "deleteGroups",
    "group": "Groups",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "id",
            "description": "<p>group unique ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Sting</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>group full name</p> "
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
    "filename": "API/controllers/groups.js",
    "groupTitle": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Group succesfully deleted!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\" : \"Group succesfully deleted!\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/group/",
    "title": "Request all Groups",
    "name": "getAllGroups",
    "group": "Groups",
    "version": "0.1.0",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>There are no existing groups.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"The are no existing groups.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/groups.js",
    "groupTitle": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "admin_id",
            "description": "<p>ID of the group's owner</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "tags",
            "description": "<p>List of the tags of the group</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\"_id\" : \"561830c5fecdba4f72668fe8\",\n      \"name\": \"Le gang du gras\",\n      \"description\": \"Fat for life\"\n\t\t\"admin_id\": \"561fc840d6c25173533e267f\"\n\t\t \"tags\" : [{\n\t\t\t\t\t\"name\" : \"fruit\",\n\t\t\t\t\t\"description\" : \"Don't event try\",\n\t\t\t\t\t\"flag\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"FORBIDDEN\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }]\n\t\t \"users\" : [{\n\t\t\t\t\t\"user_id\" : \"456ah145d9c31569845e354a\",\n\t\t\t\t\t\"access\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"ADMIN\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }]\n    }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "tags",
            "description": "<p>List of the tags of the group</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.name",
            "description": "<p>Name of the tags</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.description",
            "description": "<p>Description of the tags</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.flag",
            "description": "<p>Flag of the tags</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.flag.name",
            "description": "<p>Name of the flag</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.flag.level",
            "description": "<p>Indicator of the flag</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "users",
            "description": "<p>List of users of the group</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "users.user_id",
            "description": "<p>Id of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "users.description",
            "description": "<p>Description of the users</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "users.access",
            "description": "<p>Access right of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "users.access.name",
            "description": "<p>Name of the access</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "users.access.level",
            "description": "<p>Indicator of the access</p> "
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/groups/id/:id",
    "title": "Request Group informations by id",
    "name": "getGroupById",
    "group": "Groups",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Groups unique ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "tags",
            "description": "<p>List of the tags of the group</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.name",
            "description": "<p>Name of the tags</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.description",
            "description": "<p>Description of the tags</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.flag",
            "description": "<p>Flag of the tags</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.flag.name",
            "description": "<p>Name of the flag</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.flag.level",
            "description": "<p>Indicator of the flag</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "users",
            "description": "<p>List of users of the group</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "users.user_id",
            "description": "<p>Id of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "users.description",
            "description": "<p>Description of the users</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "users.access",
            "description": "<p>Access right of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "users.access.name",
            "description": "<p>Name of the access</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "users.access.level",
            "description": "<p>Indicator of the access</p> "
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
            "description": "<p>The id of the group was not found</p> "
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
    "filename": "API/controllers/groups.js",
    "groupTitle": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "admin_id",
            "description": "<p>ID of the group's owner</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "tags",
            "description": "<p>List of the tags of the group</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\"_id\" : \"561830c5fecdba4f72668fe8\",\n      \"name\": \"Le gang du gras\",\n      \"description\": \"Fat for life\"\n\t\t\"admin_id\": \"561fc840d6c25173533e267f\"\n\t\t \"tags\" : [{\n\t\t\t\t\t\"name\" : \"fruit\",\n\t\t\t\t\t\"description\" : \"Don't event try\",\n\t\t\t\t\t\"flag\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"FORBIDDEN\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }]\n\t\t \"users\" : [{\n\t\t\t\t\t\"user_id\" : \"456ah145d9c31569845e354a\",\n\t\t\t\t\t\"access\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"ADMIN\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }]\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/groups/name/:name",
    "title": "Request Group informations by name",
    "name": "getGroupByName",
    "group": "Groups",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Group partial or full name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "tags",
            "description": "<p>List of the tags of the group</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.name",
            "description": "<p>Name of the tags</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.description",
            "description": "<p>Description of the tags</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.flag",
            "description": "<p>Flag of the tags</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.flag.name",
            "description": "<p>Name of the flag</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.flag.level",
            "description": "<p>Indicator of the flag</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "users",
            "description": "<p>List of users of the group</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "users.user_id",
            "description": "<p>Id of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "users.description",
            "description": "<p>Description of the users</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "users.access",
            "description": "<p>Access right of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "users.access.name",
            "description": "<p>Name of the access</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "users.access.level",
            "description": "<p>Indicator of the access</p> "
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
            "description": "<p>The name of the group was not found</p> "
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
    "filename": "API/controllers/groups.js",
    "groupTitle": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "admin_id",
            "description": "<p>ID of the group's owner</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "tags",
            "description": "<p>List of the tags of the group</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\"_id\" : \"561830c5fecdba4f72668fe8\",\n      \"name\": \"Le gang du gras\",\n      \"description\": \"Fat for life\"\n\t\t\"admin_id\": \"561fc840d6c25173533e267f\"\n\t\t \"tags\" : [{\n\t\t\t\t\t\"name\" : \"fruit\",\n\t\t\t\t\t\"description\" : \"Don't event try\",\n\t\t\t\t\t\"flag\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"FORBIDDEN\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }]\n\t\t \"users\" : [{\n\t\t\t\t\t\"user_id\" : \"456ah145d9c31569845e354a\",\n\t\t\t\t\t\"access\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"ADMIN\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }]\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/groups/",
    "title": "Create a new Group",
    "name": "postGroup",
    "group": "Groups",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Group succesfully created!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Group succesfully created!\"\n\t  }",
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
    "filename": "API/controllers/groups.js",
    "groupTitle": "Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the group</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the group</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "admin_id",
            "description": "<p>ID of the group's owner</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "tags",
            "description": "<p>List of the tags of the group</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.name",
            "description": "<p>Name of the tags</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.description",
            "description": "<p>Description of the tags</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.flag",
            "description": "<p>Flag of the tags</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.flag.name",
            "description": "<p>Name of the flag</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.flag.level",
            "description": "<p>Indicator of the flag</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"name\": \"Le gang du gras\",\n      \"description\": \"Fat for life\"\n\t\t\"admin_id\": \"561fc840d6c25173533e267f\"\n\t\t \"tags\" : [{\n\t\t\t\t\t\"name\" : \"fruit\",\n\t\t\t\t\t\"description\" : \"Don't event try\",\n\t\t\t\t\t\"flag\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"FORBIDDEN\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }],\n\t\t \"users\" : [{\n\t\t\t\t\t\"user_id\" : \"456ah145d9c31569845e354a\",\n\t\t\t\t\t\"access\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"ADMIN\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }]\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/groups/access/:id",
    "title": "Update access right for user in group",
    "name": "putAccessRight",
    "group": "Groups",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Group successfully updated!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Group successfully updated!\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/groups.js",
    "groupTitle": "Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>User ID to update</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "access",
            "description": "<p>Access right to give to user</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n\t\t\"user_id\": \"561fc840d6c25173533e267f\",\n\t\t\"access\": \"2\"\n\t\t}",
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
            "description": "<p>Group not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "  HTTP/1.1 404 Bad Request\n  {\n\t\"message\" : \"Group not found.\"\n  }",
          "type": "json"
        },
        {
          "title": "Bad key sent",
          "content": "  HTTP/1.1 400 Bad Request\n  {\n\t\"message\" : \"The key <key> does not exist for Groups.\"\n  }",
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
    "url": "/groups/id/:id",
    "title": "Update a group by Id",
    "name": "putGroupById",
    "group": "Groups",
    "version": "0.1.0",
    "filename": "API/controllers/groups.js",
    "groupTitle": "Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Name of the group</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the group</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "admin_id",
            "description": "<p>ID of the group's owner</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "tags",
            "description": "<p>List of the tags of the group</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.name",
            "description": "<p>Name of the tags</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.description",
            "description": "<p>Description of the tags</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.flag",
            "description": "<p>Flag of the tags</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.flag.name",
            "description": "<p>Name of the flag</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.flag.level",
            "description": "<p>Indicator of the flag</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"name\": \"Le gang du gras\",\n      \"description\": \"Fat for life\"\n\t\t\"admin_id\": \"561fc840d6c25173533e267f\"\n\t\t \"tags\" : [{\n\t\t\t\t\t\"name\" : \"fruit\",\n\t\t\t\t\t\"description\" : \"Don't event try\",\n\t\t\t\t\t\"flag\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"FORBIDDEN\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }],\n\t\t \"users\" : [{\n\t\t\t\t\t\"user_id\" : \"456ah145d9c31569845e354a\",\n\t\t\t\t\t\"access\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"ADMIN\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }]\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Group successfully updated!\"\n\t  }",
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
            "description": "<p>Group not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "  HTTP/1.1 404 Bad Request\n  {\n\t\"message\" : \"Group not found.\"\n  }",
          "type": "json"
        },
        {
          "title": "Bad key sent",
          "content": "  HTTP/1.1 400 Bad Request\n  {\n\t\"message\" : \"The key <key> does not exist for Groups.\"\n  }",
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
    "url": "/groups/name/:name",
    "title": "Update a group by name",
    "name": "putGroupByName",
    "group": "Groups",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Group successfully updated!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Group successfully updated!\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/groups.js",
    "groupTitle": "Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Name of the group</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the group</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "admin_id",
            "description": "<p>ID of the group's owner</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "tags",
            "description": "<p>List of the tags of the group</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.name",
            "description": "<p>Name of the tags</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.description",
            "description": "<p>Description of the tags</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.flag",
            "description": "<p>Flag of the tags</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.flag.name",
            "description": "<p>Name of the flag</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "tags.flag.level",
            "description": "<p>Indicator of the flag</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"name\": \"Le gang du gras\",\n      \"description\": \"Fat for life\"\n\t\t\"admin_id\": \"561fc840d6c25173533e267f\"\n\t\t \"tags\" : [{\n\t\t\t\t\t\"name\" : \"fruit\",\n\t\t\t\t\t\"description\" : \"Don't event try\",\n\t\t\t\t\t\"flag\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"FORBIDDEN\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }],\n\t\t \"users\" : [{\n\t\t\t\t\t\"user_id\" : \"456ah145d9c31569845e354a\",\n\t\t\t\t\t\"access\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"ADMIN\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }]\n    }",
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
            "description": "<p>Group not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "  HTTP/1.1 404 Bad Request\n  {\n\t\"message\" : \"Group not found.\"\n  }",
          "type": "json"
        },
        {
          "title": "Bad key sent",
          "content": "  HTTP/1.1 400 Bad Request\n  {\n\t\"message\" : \"The key <key> does not exist for Groups.\"\n  }",
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
    "url": "/groups/:group_id/remove/:user_id",
    "title": "Remove User to a group",
    "name": "removeUserToGroup",
    "group": "Groups",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "group_id",
            "description": "<p>Group id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>User id</p> "
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
            "description": "<p>User has been removed to group.</p> "
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
            "description": "<p>The id of the group was not found</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"The ID was not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/groups.js",
    "groupTitle": "Groups"
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
    "filename": "API/controllers/ingredients.js",
    "groupTitle": "Ingredients",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Ingredient succesfully deleted!</p> "
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
    "filename": "API/controllers/ingredients.js",
    "groupTitle": "Ingredients",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Ingredient succesfully deleted!</p> "
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
    "filename": "API/controllers/ingredients.js",
    "groupTitle": "Ingredients",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Ingredient succesfully deleted!</p> "
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"There are no existing ingredients.\"\n}",
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
    "filename": "API/controllers/ingredients.js",
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
    "filename": "API/controllers/ingredients.js",
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
    "filename": "API/controllers/ingredients.js",
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
    "type": "delete",
    "url": "/recipes/",
    "title": "Delete Recipes (JSON)",
    "name": "deleteIngredients",
    "group": "Recipes",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "id",
            "description": "<p>Recipe unique ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Sting</p> ",
            "optional": true,
            "field": "title",
            "description": "<p>Recipe full name</p> "
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
    "filename": "API/controllers/recipes.js",
    "groupTitle": "Recipes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Recipe succesfully deleted!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Recipe succesfully deleted!\"\n\t  }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/recipes/id/:id",
    "title": "Delete Recipe by id",
    "name": "deleteRecipeById",
    "group": "Recipes",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Recipe unique ID</p> "
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
    "filename": "API/controllers/recipes.js",
    "groupTitle": "Recipes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Recipe succesfully deleted!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Recipe succesfully deleted!\"\n\t  }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/recipes/title/:title",
    "title": "Delete Recipe by title",
    "name": "deleteRecipeByTitle",
    "group": "Recipes",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Recipe full name</p> "
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
            "description": "<p>The title was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"The title was not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/recipes.js",
    "groupTitle": "Recipes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Recipe succesfully deleted!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Recipe succesfully deleted!\"\n\t  }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/recipes/",
    "title": "Request all the Recipes",
    "name": "getAllRecipes",
    "group": "Recipes",
    "version": "0.1.0",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>There are no existing recipes.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"There are no existing recipes.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/recipes.js",
    "groupTitle": "Recipes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>Name of the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "author_id",
            "description": "<p>Id of the author of the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "author_name",
            "description": "<p>Name of the author of the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "type",
            "description": "<p>Type of the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "type.id_type",
            "description": "<p>Id of the type</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type.name",
            "description": "<p>Name of the type</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": true,
            "field": "date_posted",
            "description": "<p>[default : Date.now] Date when the recipe was posted</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": true,
            "field": "date_edited",
            "description": "<p>Date when the recipe was edited</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "difficulty",
            "description": "<p>[default : 0, min : 0, max : 3] Difficulty set for the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "average_score",
            "description": "<p>[default : 0, min : 0, max : 5] Average score voted by the users for the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "time_preparation",
            "description": "<p>[default : 0, min : 0, max : 90000] Time it takes to make the recipe (in min)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "average_price",
            "description": "<p>[default : 0, min : 0, max : 3] Average cost of the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "ingredients",
            "description": "<p>List of the ingredients needed for the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "ingredients.id_ingredient",
            "description": "<p>Id of the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "ingredients.name_ingredient",
            "description": "<p>Name of the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "ingredients.amount_ingredient",
            "description": "<p>[default : 0, min : 0, max : 1000000] Grams of the ingredient needed</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "comments",
            "description": "<p>List of the comments posted for the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "comments.id_author",
            "description": "<p>Id of the author of the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "comments.name_author",
            "description": "<p>Name of the author of the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "comments.date_posted",
            "description": "<p>[default : Date.now] Date when the comment was posted</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": true,
            "field": "comments.date_edited",
            "description": "<p>Date when the comment was edited</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "comments.content",
            "description": "<p>The comment itself</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "comments.visible",
            "description": "<p>[default : true] Is the comment visible by others</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "pictures",
            "description": "<p>List of the pictures posted by the author for the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pictures.thumbnail_url",
            "description": "<p>Url of the thumbnail version of the picture</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pictures.medium_sized_url",
            "description": "<p>Url of the medium size version of the picture</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "pictures.big_sized_url",
            "description": "<p>Url of the big size version of the picture</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\"_id\" : \"281fc840d6c25173533er546\"\n      \"title\": \"Pumpkin pie\",\n      \"author_id\": \"561fc840d6c25173533e267f\",\n      \"author_name\": \"Kek man\",\n      \"description\" : \"It's Halloween time!\",\n\t\t\"type\" : {\n\t\t\t\t\"id_type\" : \"689ed840d6c25173533g895\",\n\t\t\t\t\"name\" : \"pie\"\n\t\t},\n\t\t\"date_posted\" : \"2015-03-31T22:00:00.000Z\",\n\t\t\"date_edited\" : \"2015-04-01T18:34:23.000Z\",\n\t\t\"difficulty\" : 1,\n\t\t\"average_score\" : 0,\n\t\t\"time_preparation\" : 60,\n\t\t\"average_price\" : 1,\n\t\t\"ingredients\" : [{\n\t\t\t\t\t\t\"id_ingredient\" : \"689ed840d6c25173533g895\",\n\t\t\t\t\t\t\"name_ingredient\" : \"Pumpkin\",\n\t\t\t\t\t\t\"amount_ingredient\" : 100\n\t\t\t\t   \t}],\n\t\t\"comments\" : [{\n\t\t\t\t\t\t\"id_author\" : \"386fc840d6c25173533e546h\",\n\t\t\t\t\t\t\"name_author\" : \"Pacza\",\n\t\t\t\t\t\t\"date_posted\" : \"2015-03-31T22:00:00.000Z\",\n\t\t\t\t\t\t\"date_edited\" : \"2015-04-01T18:34:23.000Z\",\n\t\t\t\t\t\t\"content\" : \"Thank you! Very nice recipe!\",\n\t\t\t\t\t\t\"visible\" : true\n\t\t\t\t   \t}],\n\t\t\"pictures\" : [{\n\t\t\t\t\t\t\"thumbnail_url\" : \"/thumbnails/1.jpg\",\n\t\t\t\t\t\t\"medium_sized_url\" : \"/medium_sized/1.jpg\",\n\t\t\t\t\t\t\"big_sized_url\" : \"/big_sized/1.jpg\"\n\t\t\t\t   \t}]\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/recipes/id/:id",
    "title": "Request Recipe informations by id",
    "name": "getRecipeById",
    "group": "Recipes",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Recipes unique ID</p> "
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
            "description": "<p>The id of the recipe was not found</p> "
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
    "filename": "API/controllers/recipes.js",
    "groupTitle": "Recipes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>Name of the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "author_id",
            "description": "<p>Id of the author of the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "author_name",
            "description": "<p>Name of the author of the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "type",
            "description": "<p>Type of the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "type.id_type",
            "description": "<p>Id of the type</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type.name",
            "description": "<p>Name of the type</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": true,
            "field": "date_posted",
            "description": "<p>[default : Date.now] Date when the recipe was posted</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": true,
            "field": "date_edited",
            "description": "<p>Date when the recipe was edited</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "difficulty",
            "description": "<p>[default : 0, min : 0, max : 3] Difficulty set for the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "average_score",
            "description": "<p>[default : 0, min : 0, max : 5] Average score voted by the users for the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "time_preparation",
            "description": "<p>[default : 0, min : 0, max : 90000] Time it takes to make the recipe (in min)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "average_price",
            "description": "<p>[default : 0, min : 0, max : 3] Average cost of the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "ingredients",
            "description": "<p>List of the ingredients needed for the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "ingredients.id_ingredient",
            "description": "<p>Id of the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "ingredients.name_ingredient",
            "description": "<p>Name of the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "ingredients.amount_ingredient",
            "description": "<p>[default : 0, min : 0, max : 1000000] Grams of the ingredient needed</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "comments",
            "description": "<p>List of the comments posted for the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "comments.id_author",
            "description": "<p>Id of the author of the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "comments.name_author",
            "description": "<p>Name of the author of the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "comments.date_posted",
            "description": "<p>[default : Date.now] Date when the comment was posted</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": true,
            "field": "comments.date_edited",
            "description": "<p>Date when the comment was edited</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "comments.content",
            "description": "<p>The comment itself</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "comments.visible",
            "description": "<p>[default : true] Is the comment visible by others</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "pictures",
            "description": "<p>List of the pictures posted by the author for the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pictures.thumbnail_url",
            "description": "<p>Url of the thumbnail version of the picture</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pictures.medium_sized_url",
            "description": "<p>Url of the medium size version of the picture</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "pictures.big_sized_url",
            "description": "<p>Url of the big size version of the picture</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\"_id\" : \"281fc840d6c25173533er546\"\n      \"title\": \"Pumpkin pie\",\n      \"author_id\": \"561fc840d6c25173533e267f\",\n      \"author_name\": \"Kek man\",\n      \"description\" : \"It's Halloween time!\",\n\t\t\"type\" : {\n\t\t\t\t\"id_type\" : \"689ed840d6c25173533g895\",\n\t\t\t\t\"name\" : \"pie\"\n\t\t},\n\t\t\"date_posted\" : \"2015-03-31T22:00:00.000Z\",\n\t\t\"date_edited\" : \"2015-04-01T18:34:23.000Z\",\n\t\t\"difficulty\" : 1,\n\t\t\"average_score\" : 0,\n\t\t\"time_preparation\" : 60,\n\t\t\"average_price\" : 1,\n\t\t\"ingredients\" : [{\n\t\t\t\t\t\t\"id_ingredient\" : \"689ed840d6c25173533g895\",\n\t\t\t\t\t\t\"name_ingredient\" : \"Pumpkin\",\n\t\t\t\t\t\t\"amount_ingredient\" : 100\n\t\t\t\t   \t}],\n\t\t\"comments\" : [{\n\t\t\t\t\t\t\"id_author\" : \"386fc840d6c25173533e546h\",\n\t\t\t\t\t\t\"name_author\" : \"Pacza\",\n\t\t\t\t\t\t\"date_posted\" : \"2015-03-31T22:00:00.000Z\",\n\t\t\t\t\t\t\"date_edited\" : \"2015-04-01T18:34:23.000Z\",\n\t\t\t\t\t\t\"content\" : \"Thank you! Very nice recipe!\",\n\t\t\t\t\t\t\"visible\" : true\n\t\t\t\t   \t}],\n\t\t\"pictures\" : [{\n\t\t\t\t\t\t\"thumbnail_url\" : \"/thumbnails/1.jpg\",\n\t\t\t\t\t\t\"medium_sized_url\" : \"/medium_sized/1.jpg\",\n\t\t\t\t\t\t\"big_sized_url\" : \"/big_sized/1.jpg\"\n\t\t\t\t   \t}]\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/recipes/title/:title",
    "title": "Request Recipe informations by title",
    "name": "getRecipeByTitle",
    "group": "Recipes",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>Recipe partial or full title</p> "
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
            "description": "<p>The title of the recipe was not found</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"The title was not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/recipes.js",
    "groupTitle": "Recipes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>Name of the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "author_id",
            "description": "<p>Id of the author of the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "author_name",
            "description": "<p>Name of the author of the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "type",
            "description": "<p>Type of the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "type.id_type",
            "description": "<p>Id of the type</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type.name",
            "description": "<p>Name of the type</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": true,
            "field": "date_posted",
            "description": "<p>[default : Date.now] Date when the recipe was posted</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": true,
            "field": "date_edited",
            "description": "<p>Date when the recipe was edited</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "difficulty",
            "description": "<p>[default : 0, min : 0, max : 3] Difficulty set for the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "average_score",
            "description": "<p>[default : 0, min : 0, max : 5] Average score voted by the users for the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "time_preparation",
            "description": "<p>[default : 0, min : 0, max : 90000] Time it takes to make the recipe (in min)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "average_price",
            "description": "<p>[default : 0, min : 0, max : 3] Average cost of the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "ingredients",
            "description": "<p>List of the ingredients needed for the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "ingredients.id_ingredient",
            "description": "<p>Id of the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "ingredients.name_ingredient",
            "description": "<p>Name of the ingredient</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "ingredients.amount_ingredient",
            "description": "<p>[default : 0, min : 0, max : 1000000] Grams of the ingredient needed</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "comments",
            "description": "<p>List of the comments posted for the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "comments.id_author",
            "description": "<p>Id of the author of the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "comments.name_author",
            "description": "<p>Name of the author of the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "comments.date_posted",
            "description": "<p>[default : Date.now] Date when the comment was posted</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": true,
            "field": "comments.date_edited",
            "description": "<p>Date when the comment was edited</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "comments.content",
            "description": "<p>The comment itself</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "comments.visible",
            "description": "<p>[default : true] Is the comment visible by others</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "pictures",
            "description": "<p>List of the pictures posted by the author for the recipe</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pictures.thumbnail_url",
            "description": "<p>Url of the thumbnail version of the picture</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pictures.medium_sized_url",
            "description": "<p>Url of the medium size version of the picture</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "pictures.big_sized_url",
            "description": "<p>Url of the big size version of the picture</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\"_id\" : \"281fc840d6c25173533er546\"\n      \"title\": \"Pumpkin pie\",\n      \"author_id\": \"561fc840d6c25173533e267f\",\n      \"author_name\": \"Kek man\",\n      \"description\" : \"It's Halloween time!\",\n\t\t\"type\" : {\n\t\t\t\t\"id_type\" : \"689ed840d6c25173533g895\",\n\t\t\t\t\"name\" : \"pie\"\n\t\t},\n\t\t\"date_posted\" : \"2015-03-31T22:00:00.000Z\",\n\t\t\"date_edited\" : \"2015-04-01T18:34:23.000Z\",\n\t\t\"difficulty\" : 1,\n\t\t\"average_score\" : 0,\n\t\t\"time_preparation\" : 60,\n\t\t\"average_price\" : 1,\n\t\t\"ingredients\" : [{\n\t\t\t\t\t\t\"id_ingredient\" : \"689ed840d6c25173533g895\",\n\t\t\t\t\t\t\"name_ingredient\" : \"Pumpkin\",\n\t\t\t\t\t\t\"amount_ingredient\" : 100\n\t\t\t\t   \t}],\n\t\t\"comments\" : [{\n\t\t\t\t\t\t\"id_author\" : \"386fc840d6c25173533e546h\",\n\t\t\t\t\t\t\"name_author\" : \"Pacza\",\n\t\t\t\t\t\t\"date_posted\" : \"2015-03-31T22:00:00.000Z\",\n\t\t\t\t\t\t\"date_edited\" : \"2015-04-01T18:34:23.000Z\",\n\t\t\t\t\t\t\"content\" : \"Thank you! Very nice recipe!\",\n\t\t\t\t\t\t\"visible\" : true\n\t\t\t\t   \t}],\n\t\t\"pictures\" : [{\n\t\t\t\t\t\t\"thumbnail_url\" : \"/thumbnails/1.jpg\",\n\t\t\t\t\t\t\"medium_sized_url\" : \"/medium_sized/1.jpg\",\n\t\t\t\t\t\t\"big_sized_url\" : \"/big_sized/1.jpg\"\n\t\t\t\t   \t}]\n    }",
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
    "filename": "API/controllers/recipes.js",
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
            "type": "<p>ObjectId</p> ",
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
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "type",
            "description": "<p>Type of the recipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "type.id_type",
            "description": "<p>Id of the type</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type.name",
            "description": "<p>Name of the type</p> "
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
            "type": "<p>ObjectId</p> ",
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
            "type": "<p>ObjectId</p> ",
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
          "content": "    {\n      \"title\": \"Pumpkin pie\",\n      \"author_id\": \"561fc840d6c25173533e267f\",\n      \"author_name\": \"Kek man\",\n      \"description\" : \"It's Halloween time!\",\n\t\t\"type\" : {\n\t\t\t\t\"id_type\" : \"689ed840d6c25173533g895\",\n\t\t\t\t\"name\" : \"pie\"\n\t\t},\n\t\t\"date_posted\" : \"2015-03-31T22:00:00.000Z\",\n\t\t\"date_edited\" : \"2015-04-01T18:34:23.000Z\",\n\t\t\"difficulty\" : 1,\n\t\t\"average_score\" : 0,\n\t\t\"time_preparation\" : 60,\n\t\t\"average_price\" : 1,\n\t\t\"ingredients\" : [{\n\t\t\t\t\t\t\"id_ingredient\" : \"689ed840d6c25173533g895\",\n\t\t\t\t\t\t\"name_ingredient\" : \"Pumpkin\",\n\t\t\t\t\t\t\"amount_ingredient\" : 100\n\t\t\t\t   \t}],\n\t\t\"comments\" : [{\n\t\t\t\t\t\t\"id_author\" : \"386fc840d6c25173533e546h\",\n\t\t\t\t\t\t\"name_author\" : \"Pacza\",\n\t\t\t\t\t\t\"date_posted\" : \"2015-03-31T22:00:00.000Z\",\n\t\t\t\t\t\t\"date_edited\" : \"2015-04-01T18:34:23.000Z\",\n\t\t\t\t\t\t\"content\" : \"Thank you! Very nice recipe!\",\n\t\t\t\t\t\t\"visible\" : true\n\t\t\t\t   \t}],\n\t\t\"pictures\" : [{\n\t\t\t\t\t\t\"thumbnail_url\" : \"/thumbnails/1.jpg\",\n\t\t\t\t\t\t\"medium_sized_url\" : \"/medium_sized/1.jpg\",\n\t\t\t\t\t\t\"big_sized_url\" : \"/big_sized/1.jpg\"\n\t\t\t\t   \t}]\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/recipes/id/:id",
    "title": "Update a Recipe by Id",
    "name": "putRecipeById",
    "group": "Recipes",
    "version": "0.1.0",
    "filename": "API/controllers/recipes.js",
    "groupTitle": "Recipes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "title",
            "description": "<p>Name of the recipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": true,
            "field": "author_id",
            "description": "<p>Id of the author of the recipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
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
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "type",
            "description": "<p>Type of the recipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "type.id_type",
            "description": "<p>Id of the type</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type.name",
            "description": "<p>Name of the type</p> "
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
            "optional": true,
            "field": "ingredients",
            "description": "<p>List of the ingredients needed for the recipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": true,
            "field": "ingredients.id_ingredient",
            "description": "<p>Id of the ingredient</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
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
            "type": "<p>ObjectId</p> ",
            "optional": true,
            "field": "comments.id_author",
            "description": "<p>Id of the author of the comment</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "comments.name_author",
            "description": "<p>Name of the author of the comment</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": true,
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
            "optional": true,
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
            "optional": true,
            "field": "pictures.thumbnail_url",
            "description": "<p>Url of the thumbnail version of the picture</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
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
          "content": "    {\n      \"title\": \"Pumpkin pie\",\n      \"author_id\": \"561fc840d6c25173533e267f\",\n      \"author_name\": \"Kek man\",\n      \"description\" : \"It's Halloween time!\",\n\t\t\"type\" : {\n\t\t\t\t\"id_type\" : \"689ed840d6c25173533g895\",\n\t\t\t\t\"name\" : \"pie\"\n\t\t},\n\t\t\"date_posted\" : \"2015-03-31T22:00:00.000Z\",\n\t\t\"date_edited\" : \"2015-04-01T18:34:23.000Z\",\n\t\t\"difficulty\" : 1,\n\t\t\"average_score\" : 0,\n\t\t\"time_preparation\" : 60,\n\t\t\"average_price\" : 1,\n\t\t\"ingredients\" : [{\n\t\t\t\t\t\t\"id_ingredient\" : \"689ed840d6c25173533g895\",\n\t\t\t\t\t\t\"name_ingredient\" : \"Pumpkin\",\n\t\t\t\t\t\t\"amount_ingredient\" : 100\n\t\t\t\t   \t}],\n\t\t\"comments\" : [{\n\t\t\t\t\t\t\"id_author\" : \"386fc840d6c25173533e546h\",\n\t\t\t\t\t\t\"name_author\" : \"Pacza\",\n\t\t\t\t\t\t\"date_posted\" : \"2015-03-31T22:00:00.000Z\",\n\t\t\t\t\t\t\"date_edited\" : \"2015-04-01T18:34:23.000Z\",\n\t\t\t\t\t\t\"content\" : \"Thank you! Very nice recipe!\",\n\t\t\t\t\t\t\"visible\" : true\n\t\t\t\t   \t}],\n\t\t\"pictures\" : [{\n\t\t\t\t\t\t\"thumbnail_url\" : \"/thumbnails/1.jpg\",\n\t\t\t\t\t\t\"medium_sized_url\" : \"/medium_sized/1.jpg\",\n\t\t\t\t\t\t\"big_sized_url\" : \"/big_sized/1.jpg\"\n\t\t\t\t   \t}]\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Recipe successfully updated!\"\n\t  }",
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
            "description": "<p>Recipe not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "  HTTP/1.1 404 Bad Request\n  {\n\t\"message\" : \"Recipe not found.\"\n  }",
          "type": "json"
        },
        {
          "title": "Bad key sent",
          "content": "  HTTP/1.1 400 Bad Request\n  {\n\t\"message\" : \"The key <key> does not exist for Recipes.\"\n  }",
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
    "url": "/recipes/title/:title",
    "title": "Update a Recipe by title",
    "name": "putRecipeByTitle",
    "group": "Recipes",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Recipe successfully updated!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Recipe successfully updated!\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/recipes.js",
    "groupTitle": "Recipes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "title",
            "description": "<p>Name of the recipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": true,
            "field": "author_id",
            "description": "<p>Id of the author of the recipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
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
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "type",
            "description": "<p>Type of the recipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "type.id_type",
            "description": "<p>Id of the type</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type.name",
            "description": "<p>Name of the type</p> "
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
            "optional": true,
            "field": "ingredients",
            "description": "<p>List of the ingredients needed for the recipe</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": true,
            "field": "ingredients.id_ingredient",
            "description": "<p>Id of the ingredient</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
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
            "type": "<p>ObjectId</p> ",
            "optional": true,
            "field": "comments.id_author",
            "description": "<p>Id of the author of the comment</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "comments.name_author",
            "description": "<p>Name of the author of the comment</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": true,
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
            "optional": true,
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
            "optional": true,
            "field": "pictures.thumbnail_url",
            "description": "<p>Url of the thumbnail version of the picture</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
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
          "content": "    {\n      \"title\": \"Pumpkin pie\",\n      \"author_id\": \"561fc840d6c25173533e267f\",\n      \"author_name\": \"Kek man\",\n      \"description\" : \"It's Halloween time!\",\n\t\t\"type\" : {\n\t\t\t\t\"id_type\" : \"689ed840d6c25173533g895\",\n\t\t\t\t\"name\" : \"pie\"\n\t\t},\n\t\t\"date_posted\" : \"2015-03-31T22:00:00.000Z\",\n\t\t\"date_edited\" : \"2015-04-01T18:34:23.000Z\",\n\t\t\"difficulty\" : 1,\n\t\t\"average_score\" : 0,\n\t\t\"time_preparation\" : 60,\n\t\t\"average_price\" : 1,\n\t\t\"ingredients\" : [{\n\t\t\t\t\t\t\"id_ingredient\" : \"689ed840d6c25173533g895\",\n\t\t\t\t\t\t\"name_ingredient\" : \"Pumpkin\",\n\t\t\t\t\t\t\"amount_ingredient\" : 100\n\t\t\t\t   \t}],\n\t\t\"comments\" : [{\n\t\t\t\t\t\t\"id_author\" : \"386fc840d6c25173533e546h\",\n\t\t\t\t\t\t\"name_author\" : \"Pacza\",\n\t\t\t\t\t\t\"date_posted\" : \"2015-03-31T22:00:00.000Z\",\n\t\t\t\t\t\t\"date_edited\" : \"2015-04-01T18:34:23.000Z\",\n\t\t\t\t\t\t\"content\" : \"Thank you! Very nice recipe!\",\n\t\t\t\t\t\t\"visible\" : true\n\t\t\t\t   \t}],\n\t\t\"pictures\" : [{\n\t\t\t\t\t\t\"thumbnail_url\" : \"/thumbnails/1.jpg\",\n\t\t\t\t\t\t\"medium_sized_url\" : \"/medium_sized/1.jpg\",\n\t\t\t\t\t\t\"big_sized_url\" : \"/big_sized/1.jpg\"\n\t\t\t\t   \t}]\n    }",
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
            "description": "<p>Recipe not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "  HTTP/1.1 404 Bad Request\n  {\n\t\"message\" : \"Recipe not found.\"\n  }",
          "type": "json"
        },
        {
          "title": "Bad key sent",
          "content": "  HTTP/1.1 400 Bad Request\n  {\n\t\"message\" : \"The key <key> does not exist for Recipes.\"\n  }",
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
    "url": "/search/ingredients/",
    "title": "Search some Ingredients",
    "name": "postSearch",
    "group": "Search",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"metadata\": [{\"current_page\": \"2\",\n\t\t\t      \"total_page\": \"24\",\n\t\t\t       \"order\": {\"field\": \"fat\",\n\t\t\t\t\t \"order\": \"desc\"},\n\t\t\t\t\"name\": \"Tom\"}],\n\t\t\"Ingredients\": [{\"_id\" : \"561830c5fecdba4f72668fe8\",\n     \t\t\t\t\"name\": \"Tomato\",\n     \t\t\t\t\"description\": \"Very yummy fruit.\"\n\t\t\t\t\"fat\" : 0.3,\n\t\t\t\t\"carbohydrates\" : 5.8,\n\t\t\t\t\"protein\" : 1.3,\n\t\t\t\t\"tags\" : [{\n\t\t\t\t\t\"name\" : \"fruit\",\n\t\t\t\t\t\"description\" : \"Tag concerning fruits\",\n\t\t\t\t\t\"flag\" : {\n\t\t\t\t\t\t\t\t\"name\" : \"SAFE\",\n\t\t\t\t\t\t\t\t\"level\" : 0\n\t\t\t\t\t\t\t }\n\t\t\t\t   }]\n\t  }",
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
            "description": "<p>Nothing find for this search</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"You must at least set a name or a tag to search\"\n}",
          "type": "json"
        },
        {
          "title": "No metadata find",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"You must set the metadata\"\n}",
          "type": "json"
        },
        {
          "title": "No order field find",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"The order.field must be set\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/search.js",
    "groupTitle": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Name of the ingredient (Regex)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String[]</p> ",
            "optional": true,
            "field": "tags",
            "description": "<p>Name of the tags that your ingredient must have.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "order",
            "description": "<p>Order of the return of the search</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order.order",
            "description": "<p>Order (can be asc or desc)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order.field",
            "description": "<p>Field which is order (ex: fat)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "metadata",
            "description": "<p>Number of items to return, page of the items</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "metadata.items",
            "description": "<p>number of items that are return for the current page</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "metadata.page",
            "description": "<p>Number of the page that you want to ask</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"name\": \"fu\",\n   \"order\": {\"order\": \"desc\",\n             \"field\": \"fat\"\n   },\n   \"tags\": ['fruit'],\n   \"metadata\": {\"items\": 1,\n                 \"page\": 1\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/search/recipes/",
    "title": "Search some recipes",
    "name": "postSearchRecipes",
    "group": "Search",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t  {\n \"metadata\": {\n   \"current_page\": 1,\n   \"order\": {\n     \"order\": \"desc\",\n     \"field\": \"fat\"\n   },\n   \"tags\": [\n     \"563091df113604b7959a6327\"\n   ],\n   \"total_page\": 1\n },\n \"recipes\": [\n   {\n     \"_id\": \"56309253113604b7959a632c\",\n     \"date_edited\": \"2015-04-01T18:34:23.000Z\",\n     \"title\": \"Pumpkin pie\",\n     \"author_id\": \"561fc840d6c25173533e267f\",\n     \"author_name\": \"Kek man\",\n     \"description\": \"It's Halloween time!\",\n     \"__v\": 0,\n     \"ingredients\": [\n       {\n         \"id_ingredient\": \"562a36ec4f0547a42755bf90\",\n         \"name_ingredient\": \"Fuck\",\n         \"_id\": \"56309253113604b7959a632d\",\n         \"amount_ingredient\": 100\n       }\n     ],\n     \"pictures\": [\n       {\n         \"thumbnail_url\": \"/thumbnails/1.jpg\",\n         \"medium_sized_url\": \"/medium_sized/1.jpg\",\n         \"big_sized_url\": \"/big_sized/1.jpg\",\n         \"_id\": \"56309253113604b7959a632e\"\n       }\n     ],\n     \"comments\": [\n       {\n         \"id_author\": \"386fc840d6c25173533e5406\",\n         \"name_author\": \"Pacza\",\n         \"date_posted\": \"2015-03-31T22:00:00.000Z\",\n         \"date_edited\": \"2015-04-01T18:34:23.000Z\",\n         \"content\": \"Thank you! Very nice recipe!\",\n         \"_id\": \"56309253113604b7959a632f\",\n         \"visible\": true\n       }\n     ],\n     \"average_price\": 1,\n     \"time_preparation\": 60,\n     \"average_score\": 0,\n     \"difficulty\": 1,\n     \"date_posted\": \"2015-03-31T22:00:00.000Z\",\n     \"type\": {\n       \"id_type\": \"563091df113604b7959a6327\",\n       \"name\": \"TopKek\"\n     }\n   }\n ]\n}",
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
            "description": "<p>Nothing find for this search</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"You must at least set a name or a tag to search\"\n}",
          "type": "json"
        },
        {
          "title": "No metadata find",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"You must set the metadata\"\n}",
          "type": "json"
        },
        {
          "title": "No order field find",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"The order.field must be set\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/search.js",
    "groupTitle": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "title",
            "description": "<p>Name of the recipes (Regex)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String[]</p> ",
            "optional": true,
            "field": "type",
            "description": "<p>Id of the types that your recipes must have.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "order",
            "description": "<p>Order of the return of the search</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order.order",
            "description": "<p>Order (can be asc or desc)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "order.field",
            "description": "<p>Field which is order (ex: fat)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "metadata",
            "description": "<p>Number of items to return, page of the items</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "metadata.items",
            "description": "<p>number of items that are return for the current page</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "metadata.page",
            "description": "<p>Number of the page that you want to ask</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"title\": \"pie\",\n   \"order\": {\"order\": \"desc\",\n             \"field\": \"fat\"\n   },\n   \"tags\": ['563091df113604b7959a6327'],\n   \"metadata\": {\"items\": 1,\n                 \"page\": 1\n   }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/types/id/:id",
    "title": "Delete Type by id",
    "name": "deleteTypeById",
    "group": "Types",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Type unique ID</p> "
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
    "filename": "API/controllers/types.js",
    "groupTitle": "Types",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Type succesfully deleted!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Type succesfully deleted!\"\n\t  }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/types/name/:name",
    "title": "Delete Type by name",
    "name": "deleteTypeByName",
    "group": "Types",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Type full name</p> "
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
    "filename": "API/controllers/types.js",
    "groupTitle": "Types",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Type succesfully deleted!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Type succesfully deleted!\"\n\t  }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/types/",
    "title": "Delete Types (JSON)",
    "name": "deleteTypes",
    "group": "Types",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "id",
            "description": "<p>Type unique ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Sting</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Type full name</p> "
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
    "filename": "API/controllers/types.js",
    "groupTitle": "Types",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Type succesfully deleted!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Type succesfully deleted!\"\n\t  }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/types/",
    "title": "Request all the Types",
    "name": "getAllTypes",
    "group": "Types",
    "version": "0.1.0",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>There are no existing types.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"There are no existing types.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/types.js",
    "groupTitle": "Types",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the Type</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Type</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "category",
            "description": "<p>Category of the Type</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\"_id\" : \"561830c5fecdba4f72668fe8\",\n      \"name\": \"Loukoums\",\n      \"category\": \"Desserts\"\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/types/id/:id",
    "title": "Request Type informations by id",
    "name": "getTypeById",
    "group": "Types",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Types unique ID</p> "
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
            "description": "<p>The id of the Type was not found</p> "
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
    "filename": "API/controllers/types.js",
    "groupTitle": "Types",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the Type</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Type</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "category",
            "description": "<p>Category of the Type</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\"_id\" : \"561830c5fecdba4f72668fe8\",\n      \"name\": \"Loukoums\",\n      \"category\": \"Desserts\"\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/types/name/:name",
    "title": "Request Type informations by name",
    "name": "getTypeByName",
    "group": "Types",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Type partial or full name</p> "
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
            "description": "<p>The name of the type was not found</p> "
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
    "filename": "API/controllers/types.js",
    "groupTitle": "Types",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the Type</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Type</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "category",
            "description": "<p>Category of the Type</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\"_id\" : \"561830c5fecdba4f72668fe8\",\n      \"name\": \"Loukoums\",\n      \"category\": \"Desserts\"\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/types/",
    "title": "Create a new Type",
    "name": "postType",
    "group": "Types",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Type succesfully created!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n\t  {\n\t\t\"message\" : \"Type succesfully created!\"\n\t  }",
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
    "filename": "API/controllers/types.js",
    "groupTitle": "Types",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Type</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "category",
            "description": "<p>Category of the Type</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Loukoums\",\n  \"description\": \"Desserts\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/users/id/:id",
    "title": "Delete User by id",
    "name": "deleteUserById",
    "group": "Users",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "id",
            "description": "<p>user unique ID</p> "
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
    "filename": "API/controllers/users.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Users succesfully deleted!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\" : \"Group succesfully deleted!\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/users/name/:username",
    "title": "Delete User by name",
    "name": "deleteUserByName",
    "group": "Users",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Sting</p> ",
            "optional": false,
            "field": "username",
            "description": "<p>user full name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  {\n\t\"username\" : \"Julien\"\n  }",
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
    "filename": "API/controllers/users.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Users succesfully deleted!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\" : \"Group succesfully deleted!\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/users/",
    "title": "Delete all Users",
    "name": "deleteUsers",
    "group": "Users",
    "version": "0.1.0",
    "filename": "API/controllers/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/username/:name",
    "title": "Request User informations by name",
    "name": "getUserByName",
    "group": "Users",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "username",
            "description": "<p>User name</p> "
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
            "description": "<p>The name of the group was not found</p> "
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
    "filename": "API/controllers/users.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "username",
            "description": "<p>Name of the user</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "alergy",
            "description": "<p>List of allergy</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "religion",
            "description": "<p>Religion of the user</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "pictures",
            "description": "<p>List of user pictures</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pictures.thumbnail_url",
            "description": "<p>Url of the thumbnail version of the picture</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pictures.medium_sized_url",
            "description": "<p>Url of the medium size version of the picture</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "pictures.big_sized_url",
            "description": "<p>Url of the big size version of the picture</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "joined_groups",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "like",
            "description": "<p>List of the ingredients a person like</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "like.id_ingredient",
            "description": "<p>Id of the ingredient liked</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "like.name_ingredient",
            "description": "<p>Name of the ingredient liked</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "dislike",
            "description": "<p>List of the ingredients a person dislike</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "dislike.id_ingredient",
            "description": "<p>Id of the ingredient disliked</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "dislike.name_ingredient",
            "description": "<p>Name of the ingredient disliked</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "follow",
            "description": "<p>List of people followed by a person</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "follow.id_person",
            "description": "<p>Id of the person followed</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "follow.username",
            "description": "<p>Username of the person followed</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t[\n\t\t{\n\t\t\t\"username\": \"Julien\",\n\t\t\t\"email\": \"julien@usa.gov\",\n\t\t\t\"joined_groups\" : [{\n\t\t\t\t\t\"id_group\" : \"548ed30d6c2257336f5675\",\n\t\t\t\t\t\"name\" : \"Saucisson Choux Fleurs\"\n\t\t\t}],\n\t\t\t\"religion\" : [{\n\t\t\t\t\t\"id_religion\" : \"548ed30d6c2257336f5675\",\n\t\t\t\t\t\"name\" : \"Boudism\"\n\t\t\t}],\n\t\t\t\"alergy\" : [{\n\t\t\t\t\t\"id_ingredient\" : \"548ed30d6c2257336f5675\",\n\t\t\t\t\t\"name\" : \"Bettrave Rouge\"\n\t\t\t}],\n\t\t\t\"pictures\" : [{\n\t\t\t\t\t\"thumbnail_url\" : \"/thumbnails/1.jpg\",\n\t\t\t\t\t\"medium_sized_url\" : \"/medium_sized/1.jpg\",\n\t\t\t\t\t\"big_sized_url\" : \"/big_sized/1.jpg\"\n\t\t\t}],\n\t\t\t\"like\" : [{\n\t\t\t\t\t\"id_ingredient\" : \"548ed30d6c2257336f5675\",\n\t\t\t\t\t\"name_ingredient\" : \"Carotte\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\t\"id_ingredient\" : \"246kf584a9g784312408a442\",\n\t\t\t\t\t\"name_ingredient\" : \"Potato\"\n\t\t\t}],\n\t\t\t\"dislike\" : [{\n\t\t\t\t\t\"id_ingredient\" : \"302fvd338d2c30185535g805\",\n\t\t\t\t\t\"name_ingredient\" : \"Bean\"\n\t\t\t}],\n\t\t\t\"follow\" :  [{\n\t\t\t\t\t\"id_person\" : \"689ed300d6c22573533g895\",\n\t\t\t\t\t\"username\" : \"bananaman\"\n\t\t\t}]\n\t\t}\n\t]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/id/:id",
    "title": "Request User informations by id",
    "name": "getUsersById",
    "group": "Users",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID</p> "
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
            "description": "<p>The id of the group was not found</p> "
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
    "filename": "API/controllers/users.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "username",
            "description": "<p>Name of the user</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "alergy",
            "description": "<p>List of allergy</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "religion",
            "description": "<p>Religion of the user</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "pictures",
            "description": "<p>List of user pictures</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pictures.thumbnail_url",
            "description": "<p>Url of the thumbnail version of the picture</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pictures.medium_sized_url",
            "description": "<p>Url of the medium size version of the picture</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "pictures.big_sized_url",
            "description": "<p>Url of the big size version of the picture</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "joined_groups",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "like",
            "description": "<p>List of the ingredients a person like</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "like.id_ingredient",
            "description": "<p>Id of the ingredient liked</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "like.name_ingredient",
            "description": "<p>Name of the ingredient liked</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "dislike",
            "description": "<p>List of the ingredients a person dislike</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "dislike.id_ingredient",
            "description": "<p>Id of the ingredient disliked</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "dislike.name_ingredient",
            "description": "<p>Name of the ingredient disliked</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "follow",
            "description": "<p>List of people followed by a person</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "follow.id_person",
            "description": "<p>Id of the person followed</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "follow.username",
            "description": "<p>Username of the person followed</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\t[\n\t\t{\n\t\t\t\"username\": \"Julien\",\n\t\t\t\"email\": \"julien@usa.gov\",\n\t\t\t\"joined_groups\" : [{\n\t\t\t\t\t\"id_group\" : \"548ed30d6c2257336f5675\",\n\t\t\t\t\t\"name\" : \"Saucisson Choux Fleurs\"\n\t\t\t}],\n\t\t\t\"religion\" : [{\n\t\t\t\t\t\"id_religion\" : \"548ed30d6c2257336f5675\",\n\t\t\t\t\t\"name\" : \"Boudism\"\n\t\t\t}],\n\t\t\t\"alergy\" : [{\n\t\t\t\t\t\"id_ingredient\" : \"548ed30d6c2257336f5675\",\n\t\t\t\t\t\"name\" : \"Bettrave Rouge\"\n\t\t\t}],\n\t\t\t\"pictures\" : [{\n\t\t\t\t\t\"thumbnail_url\" : \"/thumbnails/1.jpg\",\n\t\t\t\t\t\"medium_sized_url\" : \"/medium_sized/1.jpg\",\n\t\t\t\t\t\"big_sized_url\" : \"/big_sized/1.jpg\"\n\t\t\t}],\n\t\t\t\"like\" : [{\n\t\t\t\t\t\"id_ingredient\" : \"548ed30d6c2257336f5675\",\n\t\t\t\t\t\"name_ingredient\" : \"Carotte\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\t\"id_ingredient\" : \"246kf584a9g784312408a442\",\n\t\t\t\t\t\"name_ingredient\" : \"Potato\"\n\t\t\t}],\n\t\t\t\"dislike\" : [{\n\t\t\t\t\t\"id_ingredient\" : \"302fvd338d2c30185535g805\",\n\t\t\t\t\t\"name_ingredient\" : \"Bean\"\n\t\t\t}],\n\t\t\t\"follow\" :  [{\n\t\t\t\t\t\"id_person\" : \"689ed300d6c22573533g895\",\n\t\t\t\t\t\"username\" : \"bananaman\"\n\t\t\t}]\n\t\t}\n\t]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/register",
    "title": "Create a new User",
    "name": "postUser",
    "group": "Users",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>User succesfully created!</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "  HTTP/1.1 200 OK\n{\n\"message\" : \"User succesfully created!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Bad Value Definition",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n...\nmongoose custom error\n...\n}",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/users.js",
    "groupTitle": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "username",
            "description": "<p>Name of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "alergy",
            "description": "<p>List of allergy</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "religion",
            "description": "<p>Religion of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "pictures",
            "description": "<p>List of user pictures</p> "
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
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "joined_groups",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "like",
            "description": "<p>List of the ingredients a person like</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "like.id_ingredient",
            "description": "<p>Id of the ingredient liked</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "like.name_ingredient",
            "description": "<p>Name of the ingredient liked</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "dislike",
            "description": "<p>List of the ingredients a person dislike</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "dislike.id_ingredient",
            "description": "<p>Id of the ingredient disliked</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "dislike.name_ingredient",
            "description": "<p>Name of the ingredient disliked</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "follow",
            "description": "<p>List of people followed by a person</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "follow.id_person",
            "description": "<p>Id of the person followed</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "follow.username",
            "description": "<p>Username of the person followed</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n[\n\t{\n\t\t\"username\": \"Julien\",\n\t\t\"email\": \"julien@usa.gov\",\n\n\t\t\"joined_groups\" : [{\n\t\t\t\t\"id_group\" : \"548ed30d6c2257336f5675\",\n\t\t\t\t\"name\" : \"Saucisson Choux Fleurs\"\n\t\t}],\n\t\t\"religion\" : [{\n\t\t\t\t\"id_religion\" : \"548ed30d6c2257336f5675\",\n\t\t\t\t\"name\" : \"Boudism\"\n\t\t}],\n\t\t\"alergy\" : [{\n\t\t\t\t\"id_ingredient\" : \"548ed30d6c2257336f5675\",\n\t\t\t\t\"name\" : \"Bettrave Rouge\"\n\t\t}],\n\t\t\"pictures\" : [{\n\t\t\t\t\"thumbnail_url\" : \"/thumbnails/1.jpg\",\n\t\t\t\t\"medium_sized_url\" : \"/medium_sized/1.jpg\",\n\t\t\t\t\"big_sized_url\" : \"/big_sized/1.jpg\"\n\t\t}],\n\t\t\"like\" : [{\n\t\t\t\t\"id_ingredient\" : \"548ed30d6c2257336f5675\",\n\t\t\t\t\"name_ingredient\" : \"Carotte\"\n\t\t},\n\t\t{\n\t\t\t\t\"id_ingredient\" : \"246kf584a9g784312408a442\",\n\t\t\t\t\"name_ingredient\" : \"Potato\"\n\t\t}],\n\t\t\"dislike\" : [{\n\t\t\t\t\"id_ingredient\" : \"302fvd338d2c30185535g805\",\n\t\t\t\t\"name_ingredient\" : \"Bean\"\n\t\t}],\n\t\t\"follow\" :  [{\n\t\t\t\t\"id_person\" : \"689ed300d6c22573533g895\",\n\t\t\t\t\"username\" : \"bananaman\"\n\t\t}]\n\t}\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "Retrive all Users",
    "name": "postUser",
    "group": "Users",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>User succesfully created!</p> "
          }
        ]
      }
    },
    "filename": "API/controllers/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/id/:id",
    "title": "Update a User by Id",
    "name": "putUserById",
    "group": "Users",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>User successfully updated!</p> "
          }
        ]
      }
    },
    "filename": "API/controllers/users.js",
    "groupTitle": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "username",
            "description": "<p>Name of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "email",
            "description": "<p>Email of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "alergy",
            "description": "<p>List of allergy</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "religion",
            "description": "<p>Religion of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "pictures",
            "description": "<p>List of user pictures</p> "
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
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "joined_groups",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "like",
            "description": "<p>List of the ingredients a person like</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "like.id_ingredient",
            "description": "<p>Id of the ingredient liked</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "like.name_ingredient",
            "description": "<p>Name of the ingredient liked</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "dislike",
            "description": "<p>List of the ingredients a person dislike</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "dislike.id_ingredient",
            "description": "<p>Id of the ingredient disliked</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "dislike.name_ingredient",
            "description": "<p>Name of the ingredient disliked</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "follow",
            "description": "<p>List of people followed by a person</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "follow.id_person",
            "description": "<p>Id of the person followed</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "follow.username",
            "description": "<p>Username of the person followed</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n[\n\t{\n\t\t\"username\": \"Julien\",\n\t\t\"email\": \"julien@usa.gov\",\n\n\t\t\"joined_groups\" : [{\n\t\t\t\t\"id_group\" : \"548ed30d6c2257336f5675\",\n\t\t\t\t\"name\" : \"Saucisson Choux Fleurs\"\n\t\t}],\n\t\t\"religion\" : [{\n\t\t\t\t\"id_religion\" : \"548ed30d6c2257336f5675\",\n\t\t\t\t\"name\" : \"Boudism\"\n\t\t}],\n\t\t\"alergy\" : [{\n\t\t\t\t\"id_ingredient\" : \"548ed30d6c2257336f5675\",\n\t\t\t\t\"name\" : \"Bettrave Rouge\"\n\t\t}],\n\t\t\"pictures\" : [{\n\t\t\t\t\"thumbnail_url\" : \"/thumbnails/1.jpg\",\n\t\t\t\t\"medium_sized_url\" : \"/medium_sized/1.jpg\",\n\t\t\t\t\"big_sized_url\" : \"/big_sized/1.jpg\"\n\t\t}],\n\t\t\"like\" : [{\n\t\t\t\t\"id_ingredient\" : \"548ed30d6c2257336f5675\",\n\t\t\t\t\"name_ingredient\" : \"Carotte\"\n\t\t},\n\t\t{\n\t\t\t\t\"id_ingredient\" : \"246kf584a9g784312408a442\",\n\t\t\t\t\"name_ingredient\" : \"Potato\"\n\t\t}],\n\t\t\"dislike\" : [{\n\t\t\t\t\"id_ingredient\" : \"302fvd338d2c30185535g805\",\n\t\t\t\t\"name_ingredient\" : \"Bean\"\n\t\t}],\n\t\t\"follow\" :  [{\n\t\t\t\t\"id_person\" : \"689ed300d6c22573533g895\",\n\t\t\t\t\"username\" : \"bananaman\"\n\t\t}]\n\t}\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/users/username/:username",
    "title": "Update a User by username",
    "name": "putUserByName",
    "group": "Users",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>User successfully updated!</p> "
          }
        ]
      }
    },
    "filename": "API/controllers/users.js",
    "groupTitle": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "username",
            "description": "<p>Name of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "email",
            "description": "<p>Email of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "alergy",
            "description": "<p>List of allergy</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "religion",
            "description": "<p>Religion of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "pictures",
            "description": "<p>List of user pictures</p> "
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
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "joined_groups",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "like",
            "description": "<p>List of the ingredients a person like</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "like.id_ingredient",
            "description": "<p>Id of the ingredient liked</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "like.name_ingredient",
            "description": "<p>Name of the ingredient liked</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "dislike",
            "description": "<p>List of the ingredients a person dislike</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "dislike.id_ingredient",
            "description": "<p>Id of the ingredient disliked</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "dislike.name_ingredient",
            "description": "<p>Name of the ingredient disliked</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": true,
            "field": "follow",
            "description": "<p>List of people followed by a person</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "follow.id_person",
            "description": "<p>Id of the person followed</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "follow.username",
            "description": "<p>Username of the person followed</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n[\n\t{\n\t\t\"username\": \"Julien\",\n\t\t\"email\": \"julien@usa.gov\",\n\n\t\t\"joined_groups\" : [{\n\t\t\t\t\"id_group\" : \"548ed30d6c2257336f5675\",\n\t\t\t\t\"name\" : \"Saucisson Choux Fleurs\"\n\t\t}],\n\t\t\"religion\" : [{\n\t\t\t\t\"id_religion\" : \"548ed30d6c2257336f5675\",\n\t\t\t\t\"name\" : \"Boudism\"\n\t\t}],\n\t\t\"alergy\" : [{\n\t\t\t\t\"id_ingredient\" : \"548ed30d6c2257336f5675\",\n\t\t\t\t\"name\" : \"Bettrave Rouge\"\n\t\t}],\n\t\t\"pictures\" : [{\n\t\t\t\t\"thumbnail_url\" : \"/thumbnails/1.jpg\",\n\t\t\t\t\"medium_sized_url\" : \"/medium_sized/1.jpg\",\n\t\t\t\t\"big_sized_url\" : \"/big_sized/1.jpg\"\n\t\t}],\n\t\t\"like\" : [{\n\t\t\t\t\"id_ingredient\" : \"548ed30d6c2257336f5675\",\n\t\t\t\t\"name_ingredient\" : \"Carotte\"\n\t\t},\n\t\t{\n\t\t\t\t\"id_ingredient\" : \"246kf584a9g784312408a442\",\n\t\t\t\t\"name_ingredient\" : \"Potato\"\n\t\t}],\n\t\t\"dislike\" : [{\n\t\t\t\t\"id_ingredient\" : \"302fvd338d2c30185535g805\",\n\t\t\t\t\"name_ingredient\" : \"Bean\"\n\t\t}],\n\t\t\"follow\" :  [{\n\t\t\t\t\"id_person\" : \"689ed300d6c22573533g895\",\n\t\t\t\t\"username\" : \"bananaman\"\n\t\t}]\n\t}\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/sign-in/",
    "title": "Sign a user in",
    "name": "signinUser",
    "group": "Users",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "username",
            "description": "<p>Name of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n  \"username\" : \"toto\",\n  \"password\" : \"topkek\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "key",
            "description": "<p><token>.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n\"key\" : \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.ey\"\n}",
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
            "description": "<p>Username field must not be empty</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Username empty",
          "content": "HTTP/1.1 401 Bad Request\n{\n\"message\" : \"Username field must not be empty\"\n}",
          "type": "json"
        },
        {
          "title": "Password empty",
          "content": "HTTP/1.1 401 Bad Request\n{\n\"message\" : \"Password field must not be empty\"\n}",
          "type": "json"
        },
        {
          "title": "Bad Username",
          "content": "HTTP/1.1 401 Bad Request\n{\n\"message\" : \"Please verify the username provided.\"\n}",
          "type": "json"
        },
        {
          "title": "Bad Password",
          "content": "HTTP/1.1 401 Bad Request\n{\n\"message\" : \"Please verify the password provided.\"\n}",
          "type": "json"
        },
        {
          "title": "Email not verified",
          "content": "HTTP/1.1 401 Bad Request\n{\n\"message\" : \"Please verify your email.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/verify-email/:token",
    "title": "Verify a user email",
    "name": "verifyEmail",
    "group": "Users",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>Token to verify</p> "
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
            "description": "<p>Email confirmed successfully.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n\"message\" : \"Email confirmed successfully.\"\n}",
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
            "description": "<p>Email already confirmed or bad token.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter Value",
          "content": "HTTP/1.1 404 Bad Request\n{\n\"message\" : \"Email already confirmed or bad token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "API/controllers/users.js",
    "groupTitle": "Users"
  }
] });