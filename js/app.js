var app = angular.module('storeApp', ['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/store', {
            templateUrl: 'partials/store.html'
			
            
        })

	 $routeProvider.when('/payment', {
            templateUrl: 'partials/payment.html'
            
        })

	 $routeProvider.when('/shipping', {
            templateUrl: 'partials/shipping.html'
			
            
        })

	 $routeProvider.when('/taxes', {
            templateUrl: 'partials/taxes.html'
            
        })
	 $routeProvider.when('/general', {
            templateUrl: 'partials/general.html'
            
        })

				$routeProvider.when('/sales', {
            templateUrl: 'partials/sales.html'
            
        })
				$routeProvider.when('/email', {
            templateUrl: 'partials/email.html'
            
        });
         }
]);