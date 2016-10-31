(function () {
  'use strict';

  angular.module('lissajous')
    .component('plotXeq', {
      templateUrl: 'app/components/plotXeq/plotXeq.template.html',
      controller: function plotXeqController(PlotXeqService, $scope, $rootScope, $log) {

        var searchStart = $rootScope.$on('search-start', function (event, result) {
          $log.warn(result);
            $scope.plotX(result.A1, result.W1, result.phase);
          $scope.A1=result.A1;
          $scope.W1=result.W1;
          $scope.phase=result.phase;
          });

        $rootScope.$on('$destroy', searchStart);

        $scope.plotX = function (A1, W1, phase) {
          PlotXeqService.plotXequation(A1, W1, phase);
        };

        $scope.A1=5;
        $scope.W1=8;
        $scope.phase=150;

        $scope.plotX(5, 8, 150);


      }

    });
})();

