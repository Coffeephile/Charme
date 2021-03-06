// Generated by CoffeeScript 1.6.3
/*
	Name:
	charme_schema

	Info:
	Global Context Definitions
*/


(function() {
  this.charme_schema_services = ["carrepair", "pcrepair", "electronic", "engineer", "electrician", "clean", "assembly", "music", "musicteach", "plumber", "trainer", "software", "trainer"];

  this.charme_schema_services_names = {
    "carrepair": "Car Repair",
    "pcrepair": "Computer Repair",
    "electronic": "Electronic Engineer",
    "engineer": "Engineer",
    "electrician": "Electrician",
    "clean": "Home Cleaning",
    "assembly": "Indoor Assembly",
    "music": "Musician",
    "musicteach": "Music Teacher",
    "plumber": "Plumber",
    "trainer": "Painting",
    "software": "Software Engineer",
    "trainer": "Trainer"
  };

  this.charme_schema_categories = [
    {
      id: 'el',
      name: 'Electronics and Hardware',
      sub: [
        {
          id: 'el_smartphone',
          name: 'Smartphones and Mobile Phones'
        }, {
          id: 'el_tv',
          name: 'Television'
        }, {
          id: 'el_car',
          name: 'Car Electronics'
        }, {
          id: 'el_pc',
          name: 'Laptops and Computers'
        }, {
          id: 'el_screens',
          name: 'Screens'
        }, {
          id: 'el_smartphone',
          name: 'PC Components',
          sub: [
            {
              id: 'el_pc_cpu',
              name: 'CPU'
            }, {
              id: 'el_pc_ram',
              name: 'RAM'
            }, {
              id: 'el_pc_mainbaord',
              name: 'Mainboard'
            }, {
              id: 'el_pc_hdd',
              name: 'Harddisk'
            }, {
              id: 'el_pc_print',
              name: 'Printers'
            }
          ]
        }
      ]
    }, {
      id: 'cl',
      name: 'Clothing',
      sub: [
        {
          id: 'cl_shoes',
          name: 'Shoes'
        }, {
          id: 'cl_hats',
          name: 'Hats'
        }
      ]
    }, {
      id: 'fur',
      name: 'Furniture',
      sub: [
        {
          id: 'fur_deco',
          name: 'Decoration'
        }, {
          id: 'fur_tables',
          name: 'Tables'
        }
      ]
    }, {
      id: 'bo',
      name: 'Books and Magazines',
      sub: [
        {
          id: 'bo_nonfiction',
          name: 'Nonfiction Books',
          sub: [
            {
              id: 'cl_nonfiction_engineer',
              name: 'Engineering Books'
            }, {
              id: 'cl_nonfiction_cs',
              name: 'Computer Science Books'
            }, {
              id: 'cl_nonfiction_medical',
              name: 'Medical Books'
            }, {
              id: 'cl_nonfiction_law',
              name: 'Law Books'
            }
          ]
        }, {
          id: 'bo_photo',
          name: 'Photography Books'
        }, {
          id: 'bo_bio',
          name: 'Biographies'
        }, {
          id: 'bo_child',
          name: 'Books for Children'
        }, {
          id: 'bo_cook',
          name: 'Cookbooks'
        }, {
          id: 'bo_scifi',
          name: 'Sci-Fi and Fantasy Books'
        }, {
          id: 'bo_teen',
          name: 'Books for Teenage and Young Adult'
        }, {
          id: 'bo_lit',
          name: 'Literature and Fiction Books'
        }, {
          id: 'bo_rom',
          name: 'Romance Books'
        }
      ]
    }, {
      id: 'fo',
      name: 'Food and drinks',
      sub: [
        {
          id: 'fo_drink',
          name: 'Drinks',
          sub: [
            {
              id: 'fo_drink_lemonade',
              name: 'Lemonade'
            }, {
              id: 'fo_drink_milk',
              name: 'Milk'
            }, {
              id: 'fo_drink_beer',
              name: 'Beer'
            }, {
              id: 'fo_drink_water',
              name: 'Water'
            }
          ]
        }, {
          id: 'fo_meal',
          name: 'Meal'
        }, {
          id: 'fo_snack',
          name: 'Sweets',
          sub: [
            {
              id: 'fo_snack_chocolate',
              name: 'Chocolate'
            }
          ]
        }
      ]
    }
  ];

  this.charme_schema = {
    global: {
      'move': {
        name: "Move from A to B",
        attributes: [
          {
            id: "startLocation",
            type: "location",
            name: "Start",
            required: true,
            filter: "location"
          }, {
            id: "endLocation",
            type: "location",
            name: "Destination",
            required: true,
            filter: "location"
          }, {
            id: "startTime",
            type: "datetime",
            name: "Start Time",
            optional: true
          }, {
            id: "endTime",
            type: "datetime",
            name: "End Time",
            optional: true
          }, {
            id: "seats",
            type: "int",
            name: "Seats",
            filter: "range",
            optional: true
          }
        ]
      },
      'lend': {
        name: "Lend",
        attributes: [
          {
            id: "price",
            type: "moneyamount",
            name: "Price per day",
            required: true,
            filter: "range"
          }, {
            id: "currency",
            type: "currency",
            name: "Currency"
          }, {
            id: "sell",
            type: "productcategory",
            required: true,
            name: "Product Identifier",
            filter: "exact"
          }
        ]
      },
      'offer': {
        name: "Offer",
        attributes: [
          {
            id: "price",
            type: "moneyamount",
            name: "Price",
            filter: "range",
            required: true
          }, {
            id: "currency",
            type: "currency",
            name: "Currency"
          }, {
            id: "sell",
            type: "productcategory",
            name: "Product Identifier",
            filter: "exact",
            required: true
          }
        ]
      },
      'service': {
        name: "Service",
        attributes: [
          {
            id: "price",
            type: "moneyamount",
            name: "Price per hour ",
            required: true
          }, {
            id: "currency",
            type: "currency",
            name: "Currency"
          }, {
            id: "service",
            type: "service",
            required: true,
            name: "Typ"
          }
        ]
      },
      'meal': {
        name: "Meal",
        attributes: [
          {
            id: "people",
            type: "int",
            name: "Number of People",
            filter: "range"
          }, {
            id: "location",
            type: "optionallocation",
            name: "Location (optional)",
            filter: "location"
          }
        ]
      },
      'activity': {
        name: "Activity",
        attributes: [
          {
            id: "location",
            type: "optionallocation",
            name: "Location (optional)",
            filter: "location"
          }, {
            id: "activity",
            type: "activity",
            name: "Type:"
          }
        ]
      },
      'review': {
        name: "Review",
        attributes: [
          {
            id: "target",
            type: "entity",
            name: "Entity"
          }, {
            id: "rating",
            type: "rating",
            name: "Rating"
          }
        ]
      },
      'publicevent': {
        name: "Event",
        attributes: [
          {
            id: "Title",
            type: "string",
            name: "Title:"
          }, {
            id: "location",
            type: "location",
            name: "Location"
          }, {
            id: "startTime",
            type: "datetime",
            name: "Start Time"
          }, {
            id: "endTime",
            type: "datetime",
            name: "End Time"
          }, {
            id: "audience",
            type: "int",
            name: "Guests"
          }
        ]
      }
    }
  };

  CharmeModels.ListOperations = (function() {
    function ListOperations() {}

    ListOperations.makeUniqueList = function(list) {
      var uniqueNames;
      uniqueNames = [];
      $.each(list, function(i, el) {
        if ($.inArray(el, uniqueNames) === -1) {
          return uniqueNames.push(el);
        }
      });
      return uniqueNames;
    };

    return ListOperations;

  })();

  CharmeModels.SimpleStorage = (function() {
    function SimpleStorage() {}

    SimpleStorage.getItems = function(className, encrypt, callbackFunction) {
      if (encrypt == null) {
        encrypt = false;
      }
      return apl_request({
        'requests': [
          {
            'id': 'simpleStore',
            'action': 'get',
            'class': className
          }
        ]
      }, function(dataFromServer) {
        return typeof callbackFunction === "function" ? callbackFunction(dataFromServer.simpleStore) : void 0;
      });
    };

    SimpleStorage.storeItem = function(className, data, encrypt, callbackFunction) {
      if (encrypt == null) {
        encrypt = false;
      }
      return apl_request({
        'requests': [
          {
            'id': 'simpleStore',
            'action': 'add',
            'class': className,
            'data': data
          }
        ]
      }, function(d) {
        var status;
        status = 200;
        return typeof callbackFunction === "function" ? callbackFunction(status) : void 0;
      });
    };

    return SimpleStorage;

  })();

  CharmeModels.Signature = (function() {
    Signature.hash;

    Signature.revision;

    /*
    
    	Name:
    	Signature(originalMessage)
    
    	Info:
    	Generate a signature with the users private key.
    	
    	Params:
    	message:string:The message you want to sign
    
    	Location:
    	crypto.js
    
    	Code:JS:
    	var signature = crypto_sign("hallo welt", );
    */


    function Signature(originalMessage) {
      var key1, rsa;
      rsa = new RSAKey();
      key1 = getKeyByRevision(0);
      this.revision = key1.revision;
      rsa.setPrivateEx(key1.rsa.rsa.n, key1.rsa.rsa.e, key1.rsa.rsa.d, key1.rsa.rsa.p, key1.rsa.rsa.q, key1.rsa.rsa.dmp1, key1.rsa.rsa.dmq1, key1.rsa.rsa.coeff);
      console.log("---------------------------");
      console.log(originalMessage);
      this.hash = rsa.signStringWithSHA1(originalMessage);
    }

    /*
    	
    	Name:
    	Signature.Verify(hash, message2verify, publicKey)
    
    	Info:
    	Verify a signature. Returns TRUE or FALSE
    
    	Params:
    	signature:string:The signature to check
    	message:string:The message you want to check
    	publicKey:object:The publicKey (usually from key directory)
    
    	Location:
    	crypto.js
    
    	Code:JS:
    	// TODO
    */


    Signature.Verify = function(hash2Check, message2verify, publicKey) {
      var key1, result, x509;
      key1 = getKeyByRevision(0);
      alert("SIGNATURE VERIFICATION NOT WORKING YET!!!");
      x509 = new X509();
      x509.readCertNE(key1.rsa.rsa.n, key1.rsa.rsa.e);
      result = x509.subjectPublicKeyRSA.verifyString(message, signature);
      if (result === true) {
        return true;
      } else {
        return false;
      }
    };

    Signature.keyToPem = function(n, e) {
      var i, linecount, pem, pemnew, rsa;
      rsa = new RSAKey();
      rsa.setPublic(n, e);
      pem = rsa.publicKeyToX509PemString();
      linecount = Math.ceil(pem.length / 64);
      pemnew = "-----BEGIN PUBLIC KEY-----\n";
      i = 0;
      while (i < linecount) {
        pemnew += pem.substr(i * 64, 64) + "\n";
        i++;
      }
      return pemnew += "-----END PUBLIC KEY-----";
    };

    Signature.prototype.toJSON = function() {
      return {
        keyRevision: this.revision,
        hashvalue: this.hash
      };
    };

    Signature.showDialog = function() {
      return $.get("templates/box_checksign.html", function(d) {
        var template;
        _.templateSettings.variable = "rc";
        template = _.template(d, null);
        return ui_showBox(template, function() {});
      });
    };

    /*
    
    		Return Form: {object, signature {keyRevision, hashvalue}}
    */


    Signature.makeSignedJSON = function(object) {
      var jsonString, theSignature;
      jsonString = JSON.stringify(object);
      console.log(jsonString);
      console.log("signature is");
      theSignature = new CharmeModels.Signature(jsonString);
      console.log(theSignature);
      return {
        "object": object,
        "signature": theSignature.toJSON()
      };
    };

    Signature.verifySignedJSON = function(object, key) {
      var str;
      str = JSON.stringify(object);
      return CharmeModels.Signature.Verify(object.signature.hashvalue, str, key);
    };

    return Signature;

  })();

  CharmeModels.Keys = (function() {
    function Keys() {}

    Keys.buildFingerprint = function(key) {
      return CryptoJS.SHA256(key.n + key.e).toString(CryptoJS.enc.Base64);
    };

    Keys.makeRsaFkKeypair = function(publicKey) {
      var fastkey, randomKey, rk, rsa, rsaEncKey;
      randomKey = randomAesKey(32);
      fastkey = getFastKey(0, 1);
      rk = crypto_encryptFK1(randomKey).message;
      rsa = new RSAKey();
      rsa.setPublic(publicKey.n, publicKey.e);
      rsaEncKey = rsa.encrypt(randomKey);
      return {
        rsaEncKey: rsaEncKey,
        "revision": fastkey.revision,
        "randomKey": rk
      };
    };

    Keys.makeKeyStoreRequestObject = function(publicKey, addedPublicKeyRevision, publicKeyUserId, username) {
      var e_value, keypair, request;
      keypair = CharmeModels.Keys.makeRsaFkKeypair(publicKey);
      e_value = crypto_hmac_make({
        username: username,
        revisionSum: addedPublicKeyRevision + keypair.revision,
        publicKey: publicKey,
        publicKeyUserId: publicKeyUserId,
        publicKeyRevision: addedPublicKeyRevision,
        edgekeyWithFK: keypair.randomKey,
        edgekeyWithPublicKey: keypair.rsaEncKey,
        fingerprint: CharmeModels.Keys.buildFingerprint(publicKey)
      });
      request = {
        "id": "key_storeInDir",
        "key": e_value
      };
      return request;
    };

    return Keys;

  })();

  this.isResponsive = function() {
    return $(".header.responsive").is(":visible");
  };

  CharmeModels.Context = (function() {
    function Context() {}

    Context.setupLocationSelector = function() {
      var updateDataTag;
      updateDataTag = function() {
        $('.locationContainer option:selected').each(function() {
          $(this).parent().data('storage', $(this).data('json'));
        });
      };
      updateDataTag();
      return $('.locationContainer').change(function() {
        updateDataTag();
      });
    };

    Context.getTimeHours = function() {
      var k, str, _i, _len, _ref;
      str = "";
      str += "<option value=''>-</option>";
      _ref = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        k = _ref[_i];
        str += "<option>" + k + "</option>";
      }
      return str;
    };

    Context.getTimeMinutes = function() {
      var k, str, _i, _len, _ref;
      str = "";
      str += "<option value=''>-</option>";
      _ref = [0, 15, 30, 45];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        k = _ref[_i];
        str += "<option>" + k + "</option>";
      }
      return str;
    };

    Context.getRad = function() {
      var k, str, _i, _len, _ref;
      str = "";
      _ref = [1, 3, 5, 10, 25, 50];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        k = _ref[_i];
        str += "<option value='" + k + "'>" + k + "km</option>";
      }
      return str;
    };

    Context.getActivities = function() {
      var k, str, _i, _len, _ref;
      str = "";
      _ref = ["House Party", "Watching Soccer on TV", "Making Music", "Baseball", "Volleyball", "Table Tennis", "Soccer"];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        k = _ref[_i];
        str += "<option vale='" + k + "'>" + k + "</option>";
      }
      return str;
    };

    Context.getContextChoices = function() {
      var all, k, schema, _ref;
      all = [];
      _ref = charme_schema.global;
      for (k in _ref) {
        schema = _ref[k];
        all.push({
          id: k,
          name: schema.name
        });
      }
      return all;
    };

    Context.getFilters = function(filterId) {
      var all, attribute, k, schema, _i, _len, _ref, _ref1;
      all = [];
      _ref = charme_schema.global;
      for (k in _ref) {
        schema = _ref[k];
        _ref1 = schema.attributes;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          attribute = _ref1[_i];
          if (attribute.filter != null) {
            all.push({
              contextId: k,
              attribute: attribute
            });
          }
        }
      }
      return all;
    };

    Context.getContextFloats = function(type) {
      var all, attribute, _i, _len, _ref;
      all = [];
      _ref = charme_schema.global[type].attributes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        attribute = _ref[_i];
        if (attribute.type === "moneyamount") {
          all.push(attribute.id);
        }
      }
      return all;
    };

    Context.getContextIntegers = function(type) {
      var all, attribute, _i, _len, _ref;
      all = [];
      _ref = charme_schema.global[type].attributes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        attribute = _ref[_i];
        if (attribute.type === "int") {
          all.push(attribute.id);
        }
      }
      return all;
    };

    Context.getServices = function() {
      var str, v, _i, _len;
      str = "";
      for (_i = 0, _len = charme_schema_services.length; _i < _len; _i++) {
        v = charme_schema_services[_i];
        str += "<option value='" + v + "'>" + charme_schema_services_names[v] + "</option>";
      }
      return str;
    };

    Context.getDateSelector = function(name) {
      var k, str, _i, _j, _k, _len, _ref;
      str = "";
      str += "<select  name='" + name + "_day'>";
      str += "<option value=''>-</option>";
      for (k = _i = 1; _i < 31; k = _i += 1) {
        str += "<option vale='" + k + "'>" + k + "</option>";
      }
      str += "</select>";
      str += "<select  name='" + name + "_month'>";
      str += "<option value=''>-</option>";
      for (k = _j = 1; _j < 12; k = _j += 1) {
        str += "<option vale='" + k + "'>" + k + "</option>";
      }
      str += "</select>";
      str += "<select name='" + name + "_year'>";
      str += "<option value=''>-</option>";
      _ref = ["2015", "2016", "2017", "2018", "2019", "2020"];
      for (_k = 0, _len = _ref.length; _k < _len; _k++) {
        k = _ref[_k];
        str += "<option vale='" + k + "'>" + k + "</option>";
      }
      str += "</select>";
      return str;
    };

    Context.getCurrencies = function() {
      var k, str, _i, _len, _ref;
      str = "";
      _ref = ["EUR", "USD", "BTC", "YEN"];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        k = _ref[_i];
        str += "<option vale='" + k + "'>" + k + "</option>";
      }
      return str;
    };

    Context.getRating = function() {
      var k, str, _i, _len, _ref;
      str = "";
      _ref = ["5", "4", "3", "2", "1"];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        k = _ref[_i];
        str += "<option>" + k + "</option>";
      }
      return str;
    };

    Context.searchRecursiveId = function(node, parentId, level) {
      var retval, subnode, _i, _len;
      if (level == null) {
        level = 0;
      }
      for (_i = 0, _len = node.length; _i < _len; _i++) {
        subnode = node[_i];
        if (subnode.id === parentId) {
          return subnode.sub;
        } else if (subnode.sub != null) {
          retval = this.searchRecursiveId(subnode.sub, parentId, level + 1);
          if (retval != null) {
            return retval;
          }
        }
      }
    };

    Context.catById = function(node, id) {
      var retArray, subnode, subres, _i, _len;
      retArray = [];
      for (_i = 0, _len = node.length; _i < _len; _i++) {
        subnode = node[_i];
        if (subnode.id === id) {
          return subnode.name;
        } else if (subnode.sub != null) {
          subres = this.catById(subnode.sub, id);
          retArray = retArray.concat(subres);
        }
      }
      return retArray;
    };

    Context.searchRecursiveText = function(node, query) {
      var retArray, subnode, subres, _i, _len;
      retArray = [];
      for (_i = 0, _len = node.length; _i < _len; _i++) {
        subnode = node[_i];
        if (subnode.name.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
          retArray.push(subnode);
        }
        if (subnode.sub != null) {
          subres = this.searchRecursiveText(subnode.sub, query);
          retArray = retArray.concat(subres);
        }
      }
      return retArray;
    };

    Context.renderCateogries = function(parentId, searchQuery) {
      var item, parent, str, _i, _len;
      str = "";
      if (searchQuery !== "" && (searchQuery != null)) {
        parent = CharmeModels.Context.searchRecursiveText(charme_schema_categories, searchQuery);
      } else {
        if (parentId == null) {
          parent = charme_schema_categories;
        } else {
          parent = CharmeModels.Context.searchRecursiveId(charme_schema_categories, parentId);
        }
      }
      for (_i = 0, _len = parent.length; _i < _len; _i++) {
        item = parent[_i];
        if (str !== "") {
          str += ", ";
        }
        if (item.sub != null) {
          str += "<a class='selectCategory' data-cat='" + item.id + "'>" + item.name + "</a>";
        } else {
          str += "<a class='selectCategory' data-final='" + item.id + "'>" + item.name + "</a>";
        }
      }
      return str;
    };

    Context.registerEventProductClick = function(elementHelp) {
      $(elementHelp).parent().find('.productidentifierHelp a').unbind('click').click(function() {
        var elementSearch;
        if ($(this).data('cat') != null) {
          elementSearch = $(elementHelp).prev().prev();
          $(elementHelp).html(CharmeModels.Context.renderCateogries($(this).data('cat')));
          return CharmeModels.Context.registerEventProductClick(elementHelp);
        } else {
          elementSearch = $(elementHelp).prev().prev();
          $(elementHelp).html('<b>' + $(this).text() + '</b> - <a class=\'resetProduct\'>Select another Category</a>');
          $(elementSearch).next().val($(this).data('final'));
          $(elementHelp).find('.resetProduct').click(function() {
            $(".productSelector").val("");
            $(elementSearch).show().focus().select();
            $(elementHelp).html(CharmeModels.Context.renderCateogries(null));
            CharmeModels.Context.registerEventProductClick(elementHelp);
          });
          $(elementSearch).hide();
        }
      });
    };

    Context.initProductSelector = function() {
      $(".productidentifierHelp").each(function() {
        CharmeModels.Context.registerEventProductClick(this);
      });
      $('.productidentifierSearch').bind('propertychange onkeydown click keyup input paste', function() {
        var elementHelp;
        elementHelp = $(this).next().next();
        $(elementHelp).html(CharmeModels.Context.renderCateogries(null, $(this).val()));
        CharmeModels.Context.registerEventProductClick(elementHelp);
      });
    };

    Context.getProductSelector = function(name, requiredStr) {
      return '<input placeholder="Search..." class="productidentifierSearch box" type="text" style="margin-bottom:8px;"><input ' + requiredStr + ' data-requiredref=".productidentifierSearch" style="clear:both" data-type="exact" type="hidden" name="' + name + '" class="productSelector"><div  class="productidentifierHelp">' + CharmeModels.Context.renderCateogries() + '</div>';
    };

    Context.getForm = function(fieldId) {
      var hasOptional, html, k, requiredStr, v, _ref;
      html = "<div id='errorRequiredContextField' class='error hidden'>Please fill out all required fields.</div>";
      hasOptional = false;
      _ref = charme_schema.global[fieldId].attributes;
      for (k in _ref) {
        v = _ref[k];
        if (v["optional"]) {
          hasOptional = true;
          html += "<div class='optionalproperty' style='display:none'>";
        } else {
          html += "<div>";
        }
        html += "<div style='padding:8px 0px; font-weight:bold;'>" + v["name"] + "</div>";
        requiredStr = "";
        if ((v["required"] != null) && v["required"] === true) {
          requiredStr = " required='true' ";
        }
        if (v["type"] === "area") {
          html += "<select  " + requiredStr + " name='" + v["id"] + "' class='locationContainer'></select> <a class='but_addLocation'>Add Location</a> Radius: <select name='" + v["id"] + "_radius'>" + CharmeModels.Context.getRad() + "</select>";
        } else if (v["type"] === "location") {
          html += "<select  " + requiredStr + "  name='" + v["id"] + "' class='locationContainer'><option value=''>-</option></select> <a class='but_addLocation'>Add Location</a>";
        } else if (v["type"] === "optionallocation") {
          html += "<select  " + requiredStr + "  name='" + v["id"] + "' class='locationContainer'><option value='0' class='nolocation'>No location</option></select> <a class='but_addLocation'>Add Location</a>";
        } else if (v["type"] === "string") {
          html += "<input  name='" + v["id"] + "' type='text' class='box'>";
        } else if (v["type"] === "entity") {
          html += "<input  name='" + v["id"] + "' type='text' class='box'>";
        } else if (v["type"] === "rating") {
          html += '<select name="' + v["id"] + '">' + CharmeModels.Context.getRating() + '</select> (5 is best)';
        } else if (v["type"] === "datetime") {
          html += CharmeModels.Context.getDateSelector(v["id"]) + ' <select name="' + v["id"] + '_hour">' + CharmeModels.Context.getTimeHours() + '</select>:<select  name="' + v["id"] + '_minute">' + CharmeModels.Context.getTimeMinutes() + '</select>';
        } else if (v["type"] === "int") {
          html += "<input name='" + v["id"] + "' type='text' class='box'>";
        } else if (v["type"] === "moneyamount") {
          html += "<input " + requiredStr + "  type='number' min='1' step='any' name='" + v["id"] + "'  class='box'>";
        } else if (v["type"] === "currency") {
          html += '<select name="' + v["id"] + '">' + CharmeModels.Context.getCurrencies() + '</select>';
        } else if (v["type"] === "activity") {
          html += '<select name="' + v["id"] + '">' + CharmeModels.Context.getActivities() + '</select>';
        } else if (v["type"] === "service") {
          html += '<select  ' + requiredStr + ' name="' + v["id"] + '"><option value="">-</option>' + CharmeModels.Context.getServices() + '</select>';
        } else if (v["type"] === "productcategory") {
          html += CharmeModels.Context.getProductSelector(v["id"], requiredStr);
        }
        html += "</div>";
      }
      if (hasOptional) {
        html += "<div style='padding-top:32px; padding-bottom:16px;'><a id='advancedproperties'>Show Advanced Properties</a></div>";
      }
      return html;
    };

    return Context;

  })();

}).call(this);
