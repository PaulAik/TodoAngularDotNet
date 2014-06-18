app.directive('paulMinLength', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {

            var minLength = attrs["paulMinLength"];

            ctrl.$parsers.unshift(function (viewValue) {
                if (viewValue.length < minLength) {
                    // it is invalid, return undefined (no model update)
                    ctrl.$setValidity('paulMinLength', false);
                    return undefined;
                }
                else {
                    // it is valid
                    ctrl.$setValidity('paulMinLength', true);
                    return viewValue;
                }
            });
        }
    }
});