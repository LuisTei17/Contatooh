angular.module('contatooh').controller('ContatosController',
    function($scope, Contato) {
      $scope.total = 0;
      $scope.contatos = [];
      $scope.filtro = '';
      $scope.mensagem = {
        texto: ''
      };

      function buscaContato() {
        Contato.query(
          function(data) {
            $scope.contatos = data
          },
          function(erro) {
            console.log(erro);
            $scope.mensagem = {
              texto: "Não foi possível buscar a lista"
            };
          }
        );
      }
    buscaContato();

    $scope.remove = function(contato) {
      Contato.delete({
        id: contato._id
      }, buscaContato, function(erro) {
        console.log(erro);
        $scope.mensagem = {
          texto: "Não foi possível remover o contato"
        };
      });
    }

    /*Código legado para buscar contatos através do http
      $http.get('/contatos').success(function(data){
        $scope.contatos = data;
      }).error(function(statusText){
        console.log("N foi possível obter a lista");
        console.log(statusText);
      });
    //*/
  });
