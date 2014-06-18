var baseUrl = 'http://localhost:60211/';

app.factory('todoService', function ($http) {
    
    var todoService = {};

    todoService.getTodos = function () {
        return $http({
            method: 'GET',
            url: baseUrl + '/todos/',
        });
    }

    todoService.submitTodo = function (todo) {
        return $http({
            method: 'POST',
            url: baseUrl + '/todos/Create',
            data: todo
        });
    }

    todoService.updateTodo = function (todo) {
        return $http({
            method: 'POST',
            url: baseUrl + '/todos/Update',
            data: todo
        });
    }

    return todoService;

});