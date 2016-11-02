(function(){
    angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);
    LunchCheckController.$inject = ["$scope"];
    function LunchCheckController($scope){
        $scope.items = "";
        $scope.output = "";
        $scope.checkItems = function(){
            var itemsArray = $scope.items.split(",");
            for (var itemIndex in itemsArray){
                if (itemsArray[itemIndex].trim().length === 0){
                    itemsArray.splice(itemIndex, 1);
                }
            }
            if (itemsArray.length === 0){
                $scope.output = "Please enter data first";
            } else if(itemsArray.length < 4) {
                $scope.output = "Enjoy!";
            } else {
                $scope.output = "Too much!";
            }
        }
    }
})();
