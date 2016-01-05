'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('MenuCtrl', function () {
    this.id = 'chipotle-shrimp-wrap';
    this.name = 'Chipotle Shrimp Wrap';
    this.img = 'chipotle-shrimp-wrap.jpg';
    this.rating = 4.3;
    this.url = 'https://www.eatclub.com/s/dish/chipotle-shrimp-vurvur/';
  });
