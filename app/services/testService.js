/**
 * Created by ulhaq on 3/4/2017.
 */
app.factory('testService', function () {
    return {
        test:function (testMessage) {
            console.log(testMessage);
        }
    }
});