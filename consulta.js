// Código legado substituido pelo arquivo config/database.js
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectId;

var _idProcurado = new ObjectID('593052e69bb22caf01736b62');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh',
  function(erro, db){
    if(erro, db){
      if(erro) throw err;
      db.collection('contatos').findOne({_id: _idProcurado},
        function(erro, contato){
          if(erro) throw err;
          console.log(contato);
        }
      );
    }
  }
);
