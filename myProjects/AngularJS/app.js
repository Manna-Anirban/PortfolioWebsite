var app = angular.module("ShoppingListApp",[]); 

app.controller("listController", function($scope){
    $scope.list = ["milk","cheese","eggs"]; 

    $scope.addItem = function(z){
        $scope.list.push(z); 
        $scope.newItem = ""; 
    };

    $scope.remove = function(y){
        var removeItem = $scope.list.indexOf(y); 
        $scope.list.splice(removeItem,1); 
    }
}); 