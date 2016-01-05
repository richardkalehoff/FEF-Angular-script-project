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
    this.items = [
      {
        id: 'chipotle-shrimp-wrap',
        name: 'Chipotle Shrimp Wrap',
        img: 'chipotle-shrimp-wrap.jpg',
        rating: 4.3,
        url: 'https://www.eatclub.com/s/dish/chipotle-shrimp-vurvur/',
      }, {
        id: 'chicken-shawarma-rice-bowl',
        name: 'Chicken Shawarma Rice Bowl',
        img: 'chicken-shawarma-rice-bowl.jpg',
        rating: 3.9,
        url: 'https://www.eatclub.com/s/dish/Chicken-shawarma-rice-bowl-sajj/',
      }, {
        id: 'outrageous-chocolate-chip-cookies',
        name: 'Outrageous Chocolate Chip Cookies',
        img: 'outrageous-chocolate-chip-cookies.jpg',
        rating: 4.8,
        url: 'http://allrecipes.com/recipe/10141/outrageous-chocolate-chip-cookies/',
      }
    ];

    this.increment = function(item) {
      // item.rating += 1;
      item.rating = ((item.rating * 10) + 1 ) / 10;
    };
    this.decrement = function(item) {
      // item.rating -= 1;
      item.rating = ((item.rating * 10) - 1 ) / 10;
    };
  });
