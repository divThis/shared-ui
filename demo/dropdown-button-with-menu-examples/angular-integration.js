define(['jquery', 'angular', 'bootstrap', 'widget!tm/widgets/dropdownMenu'], function($, angular) {
    'use strict';

    var data = {
        legend: 'Angular integration',
        description: 'Dropdown menu content provided by angular',
        html: '\
            <div id="angularIntegrationContainer" class="demo-container" ng-controller="dropdownController">\n\
                <div class="btn-group">\n\
                    <button class="btn btn-default dropdown-toggle" tm-dropdown-menu >Select Action<span class="caret"/></button>\n\
                    <ul class="dropdown-menu">\n\
                        <li ng-repeat="item in items"><a tabindex="-1" href="#dropDownMenu{{item.url}}">{{item.title}}</a></li>\n\
                    </ul>\n\
                </div>\n\
            </div>',
        js: function() {
            var app = angular.module("angular-dropdown", []);

            app.controller("dropdownController", function($scope) {
                $scope.items = [];
                for (var i = 1; i <= 5; i++) {
                    $scope.items.push({
                        title: "Action " + i,
                        url: "#" + i
                    });
                }
            });

            app.directive('tmDropdownMenu', function(){
                return {
                    restrict: 'A',
                    compile: function(tElement, tAttrs){

                        tElement.tmDropdownMenu();

                        return function link(scope, iElement, iAttrs){
                            //TODO Binding if necessary
                        }
                    }
                };
            });

            angular.bootstrap("#angularIntegrationContainer", ["angular-dropdown"]);
        }
    };

    return data;
});