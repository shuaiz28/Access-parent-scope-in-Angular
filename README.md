# Access-parent-scope-in-Angular
In angular, each ng-app has one $rootScope and can has many child $scope.
The child $scope has access to its parent scope by using $parent.
If the child $scope doesn't have a certain variable, it will find the variable in its parent scope, and keep doing so until the $rootScope.
