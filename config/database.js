var mongoose = require('mongoose');

module.exports = function(uri){
  mongoose.set('debug', true);
  mongoose.connect(uri);

  mongoose.connection.on('connected', function(){
    console.log('Mongoose! conectado em ' + uri);
  });
  mongoose.connection.on('desconnected', function(){
    console.log('Mongoose! desconectado em ' + uri);
  });
  mongoose.connection.on('error', function(erro){
    console.log('Mongoose! desconectado em ' + erro);
  });

  process.on('SIGINT', function(){
    mongoose.connection.close(function(){
      console.log("Mongoose! desconectado ");

      process.exit(0);
    })
  })

}
