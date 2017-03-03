/**
 * Created by ulhaq on 3/4/2017.
 */
app.controller("homeCtrl", function ($scope, testService) {
    $scope.name = "Home Controller";
    testService.test("Home Controller Initiated");
});