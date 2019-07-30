import angular from 'angular';
import ngRoute from 'angular-route';
import oclazyLoad from 'oclazyload';

const MODULE_NAME = 'app.routes';

angular.module(MODULE_NAME, [ngRoute, oclazyLoad])
    .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', { 
            	template: '<home></home>',
            	resolve: {
            		test: function(){
            			console.log('resolve home - test');
            			return true;
            		}
            	} 
            })
            .when('/about', { 
            	template: '<about></about>' ,
            	resolve: {
            		test: function(){
            			console.log('resolve about - test');
            			return true;
            		},
            		foo: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
        				var deferred = $q.defer();

						   // This is webpack's magic. When webpack sees this require.ensure block, 
						   // it automatically creates a chunk file
						   // consisting of only that module and its dependencies, 
						   // and it automatically takes care of loading it for you when you need it
						 require.ensure([], function() {
						 	const modules = [
						         { name: require('./modules/sweet-alert.module.js').default },
						         { name: require('./modules/ladda-button.module.js').default }
					        ];

						    deferred.resolve($ocLazyLoad.load(modules));
						 });

						 return deferred.promise;
                    }]
               }     
            	
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

export default MODULE_NAME;