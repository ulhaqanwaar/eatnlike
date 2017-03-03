/**
 * Created by ulhaq on 3/4/2017.
 */
app.controller("aboutCtrl", function ($scope, testService) {
    $scope.name = "About Controller";
    testService.test("About Controller Initiated");
});