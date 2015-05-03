/**
 * Created by  on 16-Apr-15.
 */
var app = angular.module("myApp",[]);
app.controller("myCtrl", function ($scope) {
    $scope.name = "User 01";
    $scope.age = 0;
    $scope.countries = [
        "Pakistan",
        "India",
        "Sri Lanka"
    ]
})
app.controller("myCtrl2", function ($scope) {
    var worldPopulation = 700
    $scope.countries2 = [
        {name: "Pakistan",population: 18},
        {name: "India", population: 122}
    ]
    $scope.worldPerc = function (countrypop) {
        return (countrypop / worldPopulation) * 100;
    }

})

