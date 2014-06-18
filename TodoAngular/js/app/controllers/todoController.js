app.controller('todoCtrl', function ($scope, todoService) {

	todoService.getTodos().success(function (todos) {
		$scope.todos = todos;
	});

	$scope.doneCount = 0;

	//$scope.newTodo = { Name: "", Done: false };

	$scope.addTodo = function () {
		$scope.submitted = true;

		if ($scope.todoForm.$valid) {

			todoService.submitTodo($scope.newTodo).success(function () {
				$scope.todos.push({ Name: $scope.newTodo.Name, Done: false });
				$scope.newTodo = '';

				$scope.submitted = false;
			});
		}
	};

	$scope.updateTodo = function (todo) {
		todoService.updateTodo(todo).success(function () {
			
		});
	};

	$scope.$watch('todos', function (newValue, oldValue) {
		console.log('test');
		var count = 0;

		angular.forEach($scope.todos, function (todo) {
			count += todo.Done ? 1 : 0;
		});

		$scope.doneCount = count;
	}, true);

});