var app = angular.module("CEP", []);

app.controller("buscaCEP", function($scope, $http){
    $scope.app = "Busca CEP";
    $scope.numberCEP = "";
    $scope.resultBuscaCEP;
    $scope.functionConsultaCEP = function(){
        $http.get("https://viacep.com.br/ws/" + $scope.numberCEP +"/json/")
        .then(function mySuccess(response) {
            $scope.resultBuscaCEP =  response.data;
        }, function myError(response){
            alert("CEP não encontrado!");
        });
    }
});