(function (angular) {
    angular.module('app').directive('companyPreview', function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: false,
            scope: {company: '='},
            template: '<div class="partner"><div class="border"><div class="logo">' +
            '<a ng-href="{{company.page}}" target="_blank"><img alt="" src="img/partners/{{company.logo}}"/></a>' +
            '</div><div class="info"><span class="status">{{status}} {{partnerSponsor}}</span></div></div></div>',
            link: function (scope, elem, attrs) {
                if (scope.company.sponsor) {
                    scope.partnerSponsor = 'SPONSOR';
                } else {
                    scope.partnerSponsor = 'PARTNER';
                }
                switch (scope.company.type) {
                    case 'gold':
                        scope.status = 'GOLD';
                        break;
                    case 'silver':
                        scope.status = 'SILVER';
                        break;
                    case 'bronze':
                        scope.status = 'BRONZE';
                        break;
                }
            }
        };
    });

    angular.module('app').directive('companyDetail', function ($sce) {
        return {
            restrict: 'E',
            replace: true,
            transclude: false,
            scope: {company: '='},
            templateUrl: 'templates/company-detail.tmpl.html',
            link: function (scope, elem, attrs) {
                scope.extendedDescription = scope.company.extendedDescription;
            }
        };
    });

    angular.module('app').directive('slideshow', function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: false,
            scope: {slides: '='},
            template: '<div class="slideme_container"><button class="arrow prev" ng-click="prevSlide()">{{"PREV_SLIDE"}}</button><button class="arrow next" ng-click="nextSlide()">{{"NEXT_SLIDE"}}</button>' +
            '<ul class="slideme slideme-fade" style="height: 900px;"><li ng-class="{current: slide==currentSlide}" ng-repeat="slide in slides"><img src="{{slidesFolder}}/{{slide.name}}"/></li></ul></div>',
            link: function (scope, elem, attrs) {
                var timeout = 5000;
                if (attrs.timeout) {
                    timeout = attrs.timeout;
                }

                scope.slidesFolder = attrs.slidesFolder;

                scope.setSlide = function (index) {
                    scope.currentSlide = scope.slides[index];
                    setTimeout(function () {
                        scope.nextSlide();
                        scope.$apply();
                    }, timeout);
                };

                scope.nextSlide = function () {
                    var currIndex = scope.slides.indexOf(scope.currentSlide);
                    var nextIndex = currIndex + 1;
                    if (nextIndex >= scope.slides.length) {
                        nextIndex = 0;
                    }
                    scope.setSlide(nextIndex);
                };

                scope.prevSlide = function () {
                    var currIndex = scope.slides.indexOf(scope.currentSlide);
                    var prevIndex = currIndex - 1;
                    if (prevIndex < 0) {
                        prevIndex = scope.slides.length - 1;
                    }
                    scope.setSlide(prevIndex);
                };
                scope.setSlide(0);
            }
        };
    });


})(angular);