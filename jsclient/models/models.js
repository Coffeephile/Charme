// Generated by CoffeeScript 1.6.3
(function() {
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
      this.originalMessage = originalMessage;
      rsa = new RSAKey();
      key1 = getKeyByRevision(0);
      this.revision = key1.revision;
      rsa.setPrivateEx(key1.rsa.rsa.n, key1.rsa.rsa.e, key1.rsa.rsa.d, key1.rsa.rsa.p, key1.rsa.rsa.q, key1.rsa.rsa.dmp1, key1.rsa.rsa.dmq1, key1.rsa.rsa.coeff);
      this.hash = rsa.signString(originalMessage, "sha1");
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
    	hashkeys = buildHashKeyDir(["test@test.de"]);
    */


    Signature.Verify = function(hash2Check, message2verify, publicKey) {
      var key1, result, x509;
      key1 = getKeyByRevision(0);
      x509 = new X509();
      x509.readCertNE(key1.rsa.rsa.n, key1.rsa.rsa.e);
      result = x509.subjectPublicKeyRSA.verifyString(message, signature);
      if (result === true) {
        return true;
      } else {
        return false;
      }
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

    return Signature;

  })();

  CharmeModels.Keys = (function() {
    function Keys() {}

    Keys.buildHash = function(key) {
      return CryptoJS.SHA256(CryptoJS.SHA256(key.n) + CryptoJS.SHA256(key.e));
    };

    return Keys;

  })();

}).call(this);
