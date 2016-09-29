// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Email
 * @header lbServices.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Email",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Emails/:id",
      { 'id': '@id' },
      {
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Email#modelName
    * @propertyOf lbServices.Email
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Email`.
    */
    R.modelName = "Email";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Actor
 * @header lbServices.Actor
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Actor` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Actor",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Actors/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Actor#prototype$__findById__accessTokens
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Actor` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Actors/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Actors/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#prototype$__updateById__accessTokens
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Actor` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Actors/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Actor.shop() instead.
        "prototype$__get__shop": {
          url: urlBase + "/Actors/:id/shop",
          method: "GET"
        },

        // INTERNAL. Use Actor.shop.create() instead.
        "prototype$__create__shop": {
          url: urlBase + "/Actors/:id/shop",
          method: "POST"
        },

        // INTERNAL. Use Actor.shop.update() instead.
        "prototype$__update__shop": {
          url: urlBase + "/Actors/:id/shop",
          method: "PUT"
        },

        // INTERNAL. Use Actor.shop.destroy() instead.
        "prototype$__destroy__shop": {
          url: urlBase + "/Actors/:id/shop",
          method: "DELETE"
        },

        // INTERNAL. Use Actor.shops.findById() instead.
        "prototype$__findById__shops": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Actors/:id/shops/:fk",
          method: "GET"
        },

        // INTERNAL. Use Actor.shops.destroyById() instead.
        "prototype$__destroyById__shops": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Actors/:id/shops/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Actor.shops.updateById() instead.
        "prototype$__updateById__shops": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Actors/:id/shops/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Actor.shops.link() instead.
        "prototype$__link__shops": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Actors/:id/shops/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Actor.shops.unlink() instead.
        "prototype$__unlink__shops": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Actors/:id/shops/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Actor.shops.exists() instead.
        "prototype$__exists__shops": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Actors/:id/shops/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Actor.bookItems.findById() instead.
        "prototype$__findById__bookItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Actors/:id/bookItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use Actor.bookItems.destroyById() instead.
        "prototype$__destroyById__bookItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Actors/:id/bookItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Actor.bookItems.updateById() instead.
        "prototype$__updateById__bookItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Actors/:id/bookItems/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#prototype$__get__accessTokens
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Queries accessTokens of Actor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Actor` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Actors/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#prototype$__create__accessTokens
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Actor` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Actors/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#prototype$__delete__accessTokens
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Actors/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#prototype$__count__accessTokens
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Counts accessTokens of Actor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Actors/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Actor.shops() instead.
        "prototype$__get__shops": {
          isArray: true,
          url: urlBase + "/Actors/:id/shops",
          method: "GET"
        },

        // INTERNAL. Use Actor.shops.create() instead.
        "prototype$__create__shops": {
          url: urlBase + "/Actors/:id/shops",
          method: "POST"
        },

        // INTERNAL. Use Actor.shops.destroyAll() instead.
        "prototype$__delete__shops": {
          url: urlBase + "/Actors/:id/shops",
          method: "DELETE"
        },

        // INTERNAL. Use Actor.shops.count() instead.
        "prototype$__count__shops": {
          url: urlBase + "/Actors/:id/shops/count",
          method: "GET"
        },

        // INTERNAL. Use Actor.bookItems() instead.
        "prototype$__get__bookItems": {
          isArray: true,
          url: urlBase + "/Actors/:id/bookItems",
          method: "GET"
        },

        // INTERNAL. Use Actor.bookItems.create() instead.
        "prototype$__create__bookItems": {
          url: urlBase + "/Actors/:id/bookItems",
          method: "POST"
        },

        // INTERNAL. Use Actor.bookItems.destroyAll() instead.
        "prototype$__delete__bookItems": {
          url: urlBase + "/Actors/:id/bookItems",
          method: "DELETE"
        },

        // INTERNAL. Use Actor.bookItems.count() instead.
        "prototype$__count__bookItems": {
          url: urlBase + "/Actors/:id/bookItems/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#create
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Actor` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Actors",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#createMany
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Actor` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Actors",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#upsert
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Actor` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Actors",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#exists
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Actors/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#findById
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Actor` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Actors/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#find
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Actor` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Actors",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#findOne
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Actor` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Actors/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#updateAll
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Actors/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#deleteById
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Actor` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Actors/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#count
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Actors/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#prototype$updateAttributes
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Actor` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Actors/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#createChangeStream
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Actors/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#login
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Actors/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#logout
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Actors/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#confirm
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Actors/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#resetPassword
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Actors/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#list
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `params` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Actor` object.)
         * </em>
         */
        "list": {
          isArray: true,
          url: urlBase + "/Actors/list",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#loginByAccessToken
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `user` – `{Actor=}` - 
         */
        "loginByAccessToken": {
          url: urlBase + "/Actors/loginByAccessToken",
          method: "POST"
        },

        // INTERNAL. Use Shop.owner() instead.
        "::get::Shop::owner": {
          url: urlBase + "/Shops/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use Customer.customer() instead.
        "::get::Customer::customer": {
          url: urlBase + "/Customers/:id/customer",
          method: "GET"
        },

        // INTERNAL. Use BookItem.renter() instead.
        "::get::BookItem::renter": {
          url: urlBase + "/BookItems/:id/renter",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Actor#getCurrent
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Actors" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Actor#updateOrCreate
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Actor` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Actor#update
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Actor#destroyById
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Actor` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Actor#removeById
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Actor` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Actor#getCachedCurrent
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Actor#login} or
         * {@link lbServices.Actor#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Actor instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor#isAuthenticated
         * @methodOf lbServices.Actor
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor#getCurrentId
         * @methodOf lbServices.Actor
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Actor#modelName
    * @propertyOf lbServices.Actor
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Actor`.
    */
    R.modelName = "Actor";

    /**
     * @ngdoc object
     * @name lbServices.Actor.shop
     * @header lbServices.Actor.shop
     * @object
     * @description
     *
     * The object `Actor.shop` groups methods
     * manipulating `Shop` instances related to `Actor`.
     *
     * Call {@link lbServices.Actor#shop Actor.shop()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Actor#shop
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Fetches hasOne relation shop.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R.shop = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::get::Actor::shop"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor.shop#create
         * @methodOf lbServices.Actor.shop
         *
         * @description
         *
         * Creates a new instance in shop of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R.shop.create = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::create::Actor::shop"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor.shop#createMany
         * @methodOf lbServices.Actor.shop
         *
         * @description
         *
         * Creates a new instance in shop of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R.shop.createMany = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::createMany::Actor::shop"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor.shop#destroy
         * @methodOf lbServices.Actor.shop
         *
         * @description
         *
         * Deletes shop of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.shop.destroy = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::destroy::Actor::shop"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor.shop#update
         * @methodOf lbServices.Actor.shop
         *
         * @description
         *
         * Update shop of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R.shop.update = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::update::Actor::shop"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Actor.shops
     * @header lbServices.Actor.shops
     * @object
     * @description
     *
     * The object `Actor.shops` groups methods
     * manipulating `Shop` instances related to `Actor`.
     *
     * Call {@link lbServices.Actor#shops Actor.shops()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Actor#shops
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Queries shops of Actor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R.shops = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::get::Actor::shops"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor.shops#count
         * @methodOf lbServices.Actor.shops
         *
         * @description
         *
         * Counts shops of Actor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.shops.count = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::count::Actor::shops"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor.shops#create
         * @methodOf lbServices.Actor.shops
         *
         * @description
         *
         * Creates a new instance in shops of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R.shops.create = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::create::Actor::shops"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor.shops#createMany
         * @methodOf lbServices.Actor.shops
         *
         * @description
         *
         * Creates a new instance in shops of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R.shops.createMany = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::createMany::Actor::shops"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor.shops#destroyAll
         * @methodOf lbServices.Actor.shops
         *
         * @description
         *
         * Deletes all shops of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.shops.destroyAll = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::delete::Actor::shops"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor.shops#destroyById
         * @methodOf lbServices.Actor.shops
         *
         * @description
         *
         * Delete a related item by id for shops.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for shops
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.shops.destroyById = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::destroyById::Actor::shops"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor.shops#exists
         * @methodOf lbServices.Actor.shops
         *
         * @description
         *
         * Check the existence of shops relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for shops
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R.shops.exists = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::exists::Actor::shops"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor.shops#findById
         * @methodOf lbServices.Actor.shops
         *
         * @description
         *
         * Find a related item by id for shops.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for shops
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R.shops.findById = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::findById::Actor::shops"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor.shops#link
         * @methodOf lbServices.Actor.shops
         *
         * @description
         *
         * Add a related item by id for shops.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for shops
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R.shops.link = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::link::Actor::shops"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor.shops#unlink
         * @methodOf lbServices.Actor.shops
         *
         * @description
         *
         * Remove the shops relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for shops
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.shops.unlink = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::unlink::Actor::shops"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor.shops#updateById
         * @methodOf lbServices.Actor.shops
         *
         * @description
         *
         * Update a related item by id for shops.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for shops
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R.shops.updateById = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::updateById::Actor::shops"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Actor.bookItems
     * @header lbServices.Actor.bookItems
     * @object
     * @description
     *
     * The object `Actor.bookItems` groups methods
     * manipulating `BookItem` instances related to `Actor`.
     *
     * Call {@link lbServices.Actor#bookItems Actor.bookItems()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Actor#bookItems
         * @methodOf lbServices.Actor
         *
         * @description
         *
         * Queries bookItems of Actor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        R.bookItems = function() {
          var TargetResource = $injector.get("BookItem");
          var action = TargetResource["::get::Actor::bookItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor.bookItems#count
         * @methodOf lbServices.Actor.bookItems
         *
         * @description
         *
         * Counts bookItems of Actor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.bookItems.count = function() {
          var TargetResource = $injector.get("BookItem");
          var action = TargetResource["::count::Actor::bookItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor.bookItems#create
         * @methodOf lbServices.Actor.bookItems
         *
         * @description
         *
         * Creates a new instance in bookItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        R.bookItems.create = function() {
          var TargetResource = $injector.get("BookItem");
          var action = TargetResource["::create::Actor::bookItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor.bookItems#createMany
         * @methodOf lbServices.Actor.bookItems
         *
         * @description
         *
         * Creates a new instance in bookItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        R.bookItems.createMany = function() {
          var TargetResource = $injector.get("BookItem");
          var action = TargetResource["::createMany::Actor::bookItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor.bookItems#destroyAll
         * @methodOf lbServices.Actor.bookItems
         *
         * @description
         *
         * Deletes all bookItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.bookItems.destroyAll = function() {
          var TargetResource = $injector.get("BookItem");
          var action = TargetResource["::delete::Actor::bookItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor.bookItems#destroyById
         * @methodOf lbServices.Actor.bookItems
         *
         * @description
         *
         * Delete a related item by id for bookItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for bookItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.bookItems.destroyById = function() {
          var TargetResource = $injector.get("BookItem");
          var action = TargetResource["::destroyById::Actor::bookItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor.bookItems#findById
         * @methodOf lbServices.Actor.bookItems
         *
         * @description
         *
         * Find a related item by id for bookItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for bookItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        R.bookItems.findById = function() {
          var TargetResource = $injector.get("BookItem");
          var action = TargetResource["::findById::Actor::bookItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Actor.bookItems#updateById
         * @methodOf lbServices.Actor.bookItems
         *
         * @description
         *
         * Update a related item by id for bookItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for bookItems
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        R.bookItems.updateById = function() {
          var TargetResource = $injector.get("BookItem");
          var action = TargetResource["::updateById::Actor::bookItems"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ParentCategory
 * @header lbServices.ParentCategory
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ParentCategory` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ParentCategory",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ParentCategories/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use ParentCategory.subCategories.findById() instead.
        "prototype$__findById__subCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ParentCategories/:id/subCategories/:fk",
          method: "GET"
        },

        // INTERNAL. Use ParentCategory.subCategories.destroyById() instead.
        "prototype$__destroyById__subCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ParentCategories/:id/subCategories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ParentCategory.subCategories.updateById() instead.
        "prototype$__updateById__subCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ParentCategories/:id/subCategories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ParentCategory.images.findById() instead.
        "prototype$__findById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ParentCategories/:id/images/:fk",
          method: "GET"
        },

        // INTERNAL. Use ParentCategory.images.destroyById() instead.
        "prototype$__destroyById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ParentCategories/:id/images/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ParentCategory.images.updateById() instead.
        "prototype$__updateById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ParentCategories/:id/images/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ParentCategory.subCategories() instead.
        "prototype$__get__subCategories": {
          isArray: true,
          url: urlBase + "/ParentCategories/:id/subCategories",
          method: "GET"
        },

        // INTERNAL. Use ParentCategory.subCategories.create() instead.
        "prototype$__create__subCategories": {
          url: urlBase + "/ParentCategories/:id/subCategories",
          method: "POST"
        },

        // INTERNAL. Use ParentCategory.subCategories.destroyAll() instead.
        "prototype$__delete__subCategories": {
          url: urlBase + "/ParentCategories/:id/subCategories",
          method: "DELETE"
        },

        // INTERNAL. Use ParentCategory.subCategories.count() instead.
        "prototype$__count__subCategories": {
          url: urlBase + "/ParentCategories/:id/subCategories/count",
          method: "GET"
        },

        // INTERNAL. Use ParentCategory.images() instead.
        "prototype$__get__images": {
          isArray: true,
          url: urlBase + "/ParentCategories/:id/images",
          method: "GET"
        },

        // INTERNAL. Use ParentCategory.images.create() instead.
        "prototype$__create__images": {
          url: urlBase + "/ParentCategories/:id/images",
          method: "POST"
        },

        // INTERNAL. Use ParentCategory.images.destroyAll() instead.
        "prototype$__delete__images": {
          url: urlBase + "/ParentCategories/:id/images",
          method: "DELETE"
        },

        // INTERNAL. Use ParentCategory.images.count() instead.
        "prototype$__count__images": {
          url: urlBase + "/ParentCategories/:id/images/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory#create
         * @methodOf lbServices.ParentCategory
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ParentCategory` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ParentCategories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory#createMany
         * @methodOf lbServices.ParentCategory
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ParentCategory` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/ParentCategories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory#upsert
         * @methodOf lbServices.ParentCategory
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ParentCategory` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ParentCategories",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory#exists
         * @methodOf lbServices.ParentCategory
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ParentCategories/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory#findById
         * @methodOf lbServices.ParentCategory
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ParentCategory` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ParentCategories/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory#find
         * @methodOf lbServices.ParentCategory
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ParentCategory` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ParentCategories",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory#findOne
         * @methodOf lbServices.ParentCategory
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ParentCategory` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ParentCategories/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory#updateAll
         * @methodOf lbServices.ParentCategory
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/ParentCategories/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory#deleteById
         * @methodOf lbServices.ParentCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ParentCategory` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/ParentCategories/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory#count
         * @methodOf lbServices.ParentCategory
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/ParentCategories/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory#prototype$updateAttributes
         * @methodOf lbServices.ParentCategory
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ParentCategory` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ParentCategories/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory#createChangeStream
         * @methodOf lbServices.ParentCategory
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/ParentCategories/change-stream",
          method: "POST"
        },

        // INTERNAL. Use SubCategory.parentCategory() instead.
        "::get::SubCategory::parentCategory": {
          url: urlBase + "/SubCategories/:id/parentCategory",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ParentCategory#updateOrCreate
         * @methodOf lbServices.ParentCategory
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ParentCategory` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory#update
         * @methodOf lbServices.ParentCategory
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory#destroyById
         * @methodOf lbServices.ParentCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ParentCategory` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory#removeById
         * @methodOf lbServices.ParentCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ParentCategory` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.ParentCategory#modelName
    * @propertyOf lbServices.ParentCategory
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ParentCategory`.
    */
    R.modelName = "ParentCategory";

    /**
     * @ngdoc object
     * @name lbServices.ParentCategory.subCategories
     * @header lbServices.ParentCategory.subCategories
     * @object
     * @description
     *
     * The object `ParentCategory.subCategories` groups methods
     * manipulating `SubCategory` instances related to `ParentCategory`.
     *
     * Call {@link lbServices.ParentCategory#subCategories ParentCategory.subCategories()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.ParentCategory#subCategories
         * @methodOf lbServices.ParentCategory
         *
         * @description
         *
         * Queries subCategories of ParentCategory.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubCategory` object.)
         * </em>
         */
        R.subCategories = function() {
          var TargetResource = $injector.get("SubCategory");
          var action = TargetResource["::get::ParentCategory::subCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory.subCategories#count
         * @methodOf lbServices.ParentCategory.subCategories
         *
         * @description
         *
         * Counts subCategories of ParentCategory.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.subCategories.count = function() {
          var TargetResource = $injector.get("SubCategory");
          var action = TargetResource["::count::ParentCategory::subCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory.subCategories#create
         * @methodOf lbServices.ParentCategory.subCategories
         *
         * @description
         *
         * Creates a new instance in subCategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubCategory` object.)
         * </em>
         */
        R.subCategories.create = function() {
          var TargetResource = $injector.get("SubCategory");
          var action = TargetResource["::create::ParentCategory::subCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory.subCategories#createMany
         * @methodOf lbServices.ParentCategory.subCategories
         *
         * @description
         *
         * Creates a new instance in subCategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubCategory` object.)
         * </em>
         */
        R.subCategories.createMany = function() {
          var TargetResource = $injector.get("SubCategory");
          var action = TargetResource["::createMany::ParentCategory::subCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory.subCategories#destroyAll
         * @methodOf lbServices.ParentCategory.subCategories
         *
         * @description
         *
         * Deletes all subCategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.subCategories.destroyAll = function() {
          var TargetResource = $injector.get("SubCategory");
          var action = TargetResource["::delete::ParentCategory::subCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory.subCategories#destroyById
         * @methodOf lbServices.ParentCategory.subCategories
         *
         * @description
         *
         * Delete a related item by id for subCategories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for subCategories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.subCategories.destroyById = function() {
          var TargetResource = $injector.get("SubCategory");
          var action = TargetResource["::destroyById::ParentCategory::subCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory.subCategories#findById
         * @methodOf lbServices.ParentCategory.subCategories
         *
         * @description
         *
         * Find a related item by id for subCategories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for subCategories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubCategory` object.)
         * </em>
         */
        R.subCategories.findById = function() {
          var TargetResource = $injector.get("SubCategory");
          var action = TargetResource["::findById::ParentCategory::subCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory.subCategories#updateById
         * @methodOf lbServices.ParentCategory.subCategories
         *
         * @description
         *
         * Update a related item by id for subCategories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for subCategories
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubCategory` object.)
         * </em>
         */
        R.subCategories.updateById = function() {
          var TargetResource = $injector.get("SubCategory");
          var action = TargetResource["::updateById::ParentCategory::subCategories"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.ParentCategory.images
     * @header lbServices.ParentCategory.images
     * @object
     * @description
     *
     * The object `ParentCategory.images` groups methods
     * manipulating `Image` instances related to `ParentCategory`.
     *
     * Call {@link lbServices.ParentCategory#images ParentCategory.images()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.ParentCategory#images
         * @methodOf lbServices.ParentCategory
         *
         * @description
         *
         * Queries images of ParentCategory.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        R.images = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::get::ParentCategory::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory.images#count
         * @methodOf lbServices.ParentCategory.images
         *
         * @description
         *
         * Counts images of ParentCategory.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.images.count = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::count::ParentCategory::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory.images#create
         * @methodOf lbServices.ParentCategory.images
         *
         * @description
         *
         * Creates a new instance in images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        R.images.create = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::create::ParentCategory::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory.images#createMany
         * @methodOf lbServices.ParentCategory.images
         *
         * @description
         *
         * Creates a new instance in images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        R.images.createMany = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::createMany::ParentCategory::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory.images#destroyAll
         * @methodOf lbServices.ParentCategory.images
         *
         * @description
         *
         * Deletes all images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.images.destroyAll = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::delete::ParentCategory::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory.images#destroyById
         * @methodOf lbServices.ParentCategory.images
         *
         * @description
         *
         * Delete a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.images.destroyById = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::destroyById::ParentCategory::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory.images#findById
         * @methodOf lbServices.ParentCategory.images
         *
         * @description
         *
         * Find a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        R.images.findById = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::findById::ParentCategory::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ParentCategory.images#updateById
         * @methodOf lbServices.ParentCategory.images
         *
         * @description
         *
         * Update a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        R.images.updateById = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::updateById::ParentCategory::images"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.SubCategory
 * @header lbServices.SubCategory
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `SubCategory` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "SubCategory",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/SubCategories/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use SubCategory.parentCategory() instead.
        "prototype$__get__parentCategory": {
          url: urlBase + "/SubCategories/:id/parentCategory",
          method: "GET"
        },

        // INTERNAL. Use SubCategory.rentalItems.findById() instead.
        "prototype$__findById__rentalItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SubCategories/:id/rentalItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use SubCategory.rentalItems.destroyById() instead.
        "prototype$__destroyById__rentalItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SubCategories/:id/rentalItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use SubCategory.rentalItems.updateById() instead.
        "prototype$__updateById__rentalItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SubCategories/:id/rentalItems/:fk",
          method: "PUT"
        },

        // INTERNAL. Use SubCategory.images.findById() instead.
        "prototype$__findById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SubCategories/:id/images/:fk",
          method: "GET"
        },

        // INTERNAL. Use SubCategory.images.destroyById() instead.
        "prototype$__destroyById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SubCategories/:id/images/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use SubCategory.images.updateById() instead.
        "prototype$__updateById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SubCategories/:id/images/:fk",
          method: "PUT"
        },

        // INTERNAL. Use SubCategory.rentalItems() instead.
        "prototype$__get__rentalItems": {
          isArray: true,
          url: urlBase + "/SubCategories/:id/rentalItems",
          method: "GET"
        },

        // INTERNAL. Use SubCategory.rentalItems.create() instead.
        "prototype$__create__rentalItems": {
          url: urlBase + "/SubCategories/:id/rentalItems",
          method: "POST"
        },

        // INTERNAL. Use SubCategory.rentalItems.destroyAll() instead.
        "prototype$__delete__rentalItems": {
          url: urlBase + "/SubCategories/:id/rentalItems",
          method: "DELETE"
        },

        // INTERNAL. Use SubCategory.rentalItems.count() instead.
        "prototype$__count__rentalItems": {
          url: urlBase + "/SubCategories/:id/rentalItems/count",
          method: "GET"
        },

        // INTERNAL. Use SubCategory.images() instead.
        "prototype$__get__images": {
          isArray: true,
          url: urlBase + "/SubCategories/:id/images",
          method: "GET"
        },

        // INTERNAL. Use SubCategory.images.create() instead.
        "prototype$__create__images": {
          url: urlBase + "/SubCategories/:id/images",
          method: "POST"
        },

        // INTERNAL. Use SubCategory.images.destroyAll() instead.
        "prototype$__delete__images": {
          url: urlBase + "/SubCategories/:id/images",
          method: "DELETE"
        },

        // INTERNAL. Use SubCategory.images.count() instead.
        "prototype$__count__images": {
          url: urlBase + "/SubCategories/:id/images/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubCategory#create
         * @methodOf lbServices.SubCategory
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubCategory` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/SubCategories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubCategory#createMany
         * @methodOf lbServices.SubCategory
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubCategory` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/SubCategories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubCategory#upsert
         * @methodOf lbServices.SubCategory
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubCategory` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/SubCategories",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubCategory#exists
         * @methodOf lbServices.SubCategory
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/SubCategories/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubCategory#findById
         * @methodOf lbServices.SubCategory
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubCategory` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/SubCategories/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubCategory#find
         * @methodOf lbServices.SubCategory
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubCategory` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/SubCategories",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubCategory#findOne
         * @methodOf lbServices.SubCategory
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubCategory` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/SubCategories/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubCategory#updateAll
         * @methodOf lbServices.SubCategory
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/SubCategories/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubCategory#deleteById
         * @methodOf lbServices.SubCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubCategory` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/SubCategories/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubCategory#count
         * @methodOf lbServices.SubCategory
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/SubCategories/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubCategory#prototype$updateAttributes
         * @methodOf lbServices.SubCategory
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubCategory` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/SubCategories/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubCategory#createChangeStream
         * @methodOf lbServices.SubCategory
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/SubCategories/change-stream",
          method: "POST"
        },

        // INTERNAL. Use ParentCategory.subCategories.findById() instead.
        "::findById::ParentCategory::subCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ParentCategories/:id/subCategories/:fk",
          method: "GET"
        },

        // INTERNAL. Use ParentCategory.subCategories.destroyById() instead.
        "::destroyById::ParentCategory::subCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ParentCategories/:id/subCategories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ParentCategory.subCategories.updateById() instead.
        "::updateById::ParentCategory::subCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ParentCategories/:id/subCategories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ParentCategory.subCategories() instead.
        "::get::ParentCategory::subCategories": {
          isArray: true,
          url: urlBase + "/ParentCategories/:id/subCategories",
          method: "GET"
        },

        // INTERNAL. Use ParentCategory.subCategories.create() instead.
        "::create::ParentCategory::subCategories": {
          url: urlBase + "/ParentCategories/:id/subCategories",
          method: "POST"
        },

        // INTERNAL. Use ParentCategory.subCategories.createMany() instead.
        "::createMany::ParentCategory::subCategories": {
          isArray: true,
          url: urlBase + "/ParentCategories/:id/subCategories",
          method: "POST"
        },

        // INTERNAL. Use ParentCategory.subCategories.destroyAll() instead.
        "::delete::ParentCategory::subCategories": {
          url: urlBase + "/ParentCategories/:id/subCategories",
          method: "DELETE"
        },

        // INTERNAL. Use ParentCategory.subCategories.count() instead.
        "::count::ParentCategory::subCategories": {
          url: urlBase + "/ParentCategories/:id/subCategories/count",
          method: "GET"
        },

        // INTERNAL. Use RentalItem.category() instead.
        "::get::RentalItem::category": {
          url: urlBase + "/RentalItems/:id/category",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.SubCategory#updateOrCreate
         * @methodOf lbServices.SubCategory
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubCategory` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.SubCategory#update
         * @methodOf lbServices.SubCategory
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.SubCategory#destroyById
         * @methodOf lbServices.SubCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubCategory` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.SubCategory#removeById
         * @methodOf lbServices.SubCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubCategory` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.SubCategory#modelName
    * @propertyOf lbServices.SubCategory
    * @description
    * The name of the model represented by this $resource,
    * i.e. `SubCategory`.
    */
    R.modelName = "SubCategory";


        /**
         * @ngdoc method
         * @name lbServices.SubCategory#parentCategory
         * @methodOf lbServices.SubCategory
         *
         * @description
         *
         * Fetches belongsTo relation parentCategory.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ParentCategory` object.)
         * </em>
         */
        R.parentCategory = function() {
          var TargetResource = $injector.get("ParentCategory");
          var action = TargetResource["::get::SubCategory::parentCategory"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.SubCategory.rentalItems
     * @header lbServices.SubCategory.rentalItems
     * @object
     * @description
     *
     * The object `SubCategory.rentalItems` groups methods
     * manipulating `RentalItem` instances related to `SubCategory`.
     *
     * Call {@link lbServices.SubCategory#rentalItems SubCategory.rentalItems()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.SubCategory#rentalItems
         * @methodOf lbServices.SubCategory
         *
         * @description
         *
         * Queries rentalItems of SubCategory.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        R.rentalItems = function() {
          var TargetResource = $injector.get("RentalItem");
          var action = TargetResource["::get::SubCategory::rentalItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SubCategory.rentalItems#count
         * @methodOf lbServices.SubCategory.rentalItems
         *
         * @description
         *
         * Counts rentalItems of SubCategory.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.rentalItems.count = function() {
          var TargetResource = $injector.get("RentalItem");
          var action = TargetResource["::count::SubCategory::rentalItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SubCategory.rentalItems#create
         * @methodOf lbServices.SubCategory.rentalItems
         *
         * @description
         *
         * Creates a new instance in rentalItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        R.rentalItems.create = function() {
          var TargetResource = $injector.get("RentalItem");
          var action = TargetResource["::create::SubCategory::rentalItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SubCategory.rentalItems#createMany
         * @methodOf lbServices.SubCategory.rentalItems
         *
         * @description
         *
         * Creates a new instance in rentalItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        R.rentalItems.createMany = function() {
          var TargetResource = $injector.get("RentalItem");
          var action = TargetResource["::createMany::SubCategory::rentalItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SubCategory.rentalItems#destroyAll
         * @methodOf lbServices.SubCategory.rentalItems
         *
         * @description
         *
         * Deletes all rentalItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rentalItems.destroyAll = function() {
          var TargetResource = $injector.get("RentalItem");
          var action = TargetResource["::delete::SubCategory::rentalItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SubCategory.rentalItems#destroyById
         * @methodOf lbServices.SubCategory.rentalItems
         *
         * @description
         *
         * Delete a related item by id for rentalItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rentalItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rentalItems.destroyById = function() {
          var TargetResource = $injector.get("RentalItem");
          var action = TargetResource["::destroyById::SubCategory::rentalItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SubCategory.rentalItems#findById
         * @methodOf lbServices.SubCategory.rentalItems
         *
         * @description
         *
         * Find a related item by id for rentalItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rentalItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        R.rentalItems.findById = function() {
          var TargetResource = $injector.get("RentalItem");
          var action = TargetResource["::findById::SubCategory::rentalItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SubCategory.rentalItems#updateById
         * @methodOf lbServices.SubCategory.rentalItems
         *
         * @description
         *
         * Update a related item by id for rentalItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rentalItems
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        R.rentalItems.updateById = function() {
          var TargetResource = $injector.get("RentalItem");
          var action = TargetResource["::updateById::SubCategory::rentalItems"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.SubCategory.images
     * @header lbServices.SubCategory.images
     * @object
     * @description
     *
     * The object `SubCategory.images` groups methods
     * manipulating `Image` instances related to `SubCategory`.
     *
     * Call {@link lbServices.SubCategory#images SubCategory.images()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.SubCategory#images
         * @methodOf lbServices.SubCategory
         *
         * @description
         *
         * Queries images of SubCategory.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        R.images = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::get::SubCategory::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SubCategory.images#count
         * @methodOf lbServices.SubCategory.images
         *
         * @description
         *
         * Counts images of SubCategory.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.images.count = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::count::SubCategory::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SubCategory.images#create
         * @methodOf lbServices.SubCategory.images
         *
         * @description
         *
         * Creates a new instance in images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        R.images.create = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::create::SubCategory::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SubCategory.images#createMany
         * @methodOf lbServices.SubCategory.images
         *
         * @description
         *
         * Creates a new instance in images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        R.images.createMany = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::createMany::SubCategory::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SubCategory.images#destroyAll
         * @methodOf lbServices.SubCategory.images
         *
         * @description
         *
         * Deletes all images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.images.destroyAll = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::delete::SubCategory::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SubCategory.images#destroyById
         * @methodOf lbServices.SubCategory.images
         *
         * @description
         *
         * Delete a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.images.destroyById = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::destroyById::SubCategory::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SubCategory.images#findById
         * @methodOf lbServices.SubCategory.images
         *
         * @description
         *
         * Find a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        R.images.findById = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::findById::SubCategory::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SubCategory.images#updateById
         * @methodOf lbServices.SubCategory.images
         *
         * @description
         *
         * Update a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        R.images.updateById = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::updateById::SubCategory::images"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Shop
 * @header lbServices.Shop
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Shop` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Shop",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Shops/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Shop.owner() instead.
        "prototype$__get__owner": {
          url: urlBase + "/Shops/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use Shop.customers.findById() instead.
        "prototype$__findById__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/customers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Shop.customers.destroyById() instead.
        "prototype$__destroyById__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/customers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Shop.customers.updateById() instead.
        "prototype$__updateById__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/customers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Shop.customers.link() instead.
        "prototype$__link__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/customers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Shop.customers.unlink() instead.
        "prototype$__unlink__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/customers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Shop.customers.exists() instead.
        "prototype$__exists__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/customers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Shop.rentalItems.findById() instead.
        "prototype$__findById__rentalItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/rentalItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use Shop.rentalItems.destroyById() instead.
        "prototype$__destroyById__rentalItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/rentalItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Shop.rentalItems.updateById() instead.
        "prototype$__updateById__rentalItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/rentalItems/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#prototype$__get__address
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Fetches hasOne relation address.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "prototype$__get__address": {
          url: urlBase + "/Shops/:id/address",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#prototype$__create__address
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Creates a new instance in address of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "prototype$__create__address": {
          url: urlBase + "/Shops/:id/address",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#prototype$__update__address
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Update address of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "prototype$__update__address": {
          url: urlBase + "/Shops/:id/address",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#prototype$__destroy__address
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Deletes address of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroy__address": {
          url: urlBase + "/Shops/:id/address",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#prototype$__get__balance
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Fetches hasOne relation balance.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "prototype$__get__balance": {
          url: urlBase + "/Shops/:id/balance",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#prototype$__create__balance
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Creates a new instance in balance of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "prototype$__create__balance": {
          url: urlBase + "/Shops/:id/balance",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#prototype$__update__balance
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Update balance of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "prototype$__update__balance": {
          url: urlBase + "/Shops/:id/balance",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#prototype$__destroy__balance
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Deletes balance of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroy__balance": {
          url: urlBase + "/Shops/:id/balance",
          method: "DELETE"
        },

        // INTERNAL. Use Shop.withdraws.findById() instead.
        "prototype$__findById__withdraws": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/withdraws/:fk",
          method: "GET"
        },

        // INTERNAL. Use Shop.withdraws.destroyById() instead.
        "prototype$__destroyById__withdraws": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/withdraws/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Shop.withdraws.updateById() instead.
        "prototype$__updateById__withdraws": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/withdraws/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Shop.customers() instead.
        "prototype$__get__customers": {
          isArray: true,
          url: urlBase + "/Shops/:id/customers",
          method: "GET"
        },

        // INTERNAL. Use Shop.customers.create() instead.
        "prototype$__create__customers": {
          url: urlBase + "/Shops/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use Shop.customers.destroyAll() instead.
        "prototype$__delete__customers": {
          url: urlBase + "/Shops/:id/customers",
          method: "DELETE"
        },

        // INTERNAL. Use Shop.customers.count() instead.
        "prototype$__count__customers": {
          url: urlBase + "/Shops/:id/customers/count",
          method: "GET"
        },

        // INTERNAL. Use Shop.rentalItems() instead.
        "prototype$__get__rentalItems": {
          isArray: true,
          url: urlBase + "/Shops/:id/rentalItems",
          method: "GET"
        },

        // INTERNAL. Use Shop.rentalItems.create() instead.
        "prototype$__create__rentalItems": {
          url: urlBase + "/Shops/:id/rentalItems",
          method: "POST"
        },

        // INTERNAL. Use Shop.rentalItems.destroyAll() instead.
        "prototype$__delete__rentalItems": {
          url: urlBase + "/Shops/:id/rentalItems",
          method: "DELETE"
        },

        // INTERNAL. Use Shop.rentalItems.count() instead.
        "prototype$__count__rentalItems": {
          url: urlBase + "/Shops/:id/rentalItems/count",
          method: "GET"
        },

        // INTERNAL. Use Shop.withdraws() instead.
        "prototype$__get__withdraws": {
          isArray: true,
          url: urlBase + "/Shops/:id/withdraws",
          method: "GET"
        },

        // INTERNAL. Use Shop.withdraws.create() instead.
        "prototype$__create__withdraws": {
          url: urlBase + "/Shops/:id/withdraws",
          method: "POST"
        },

        // INTERNAL. Use Shop.withdraws.destroyAll() instead.
        "prototype$__delete__withdraws": {
          url: urlBase + "/Shops/:id/withdraws",
          method: "DELETE"
        },

        // INTERNAL. Use Shop.withdraws.count() instead.
        "prototype$__count__withdraws": {
          url: urlBase + "/Shops/:id/withdraws/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#create
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Shops",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#createMany
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Shops",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#upsert
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Shops",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#exists
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Shops/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#findById
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Shops/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#find
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Shops",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#findOne
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Shops/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#updateAll
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Shops/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#deleteById
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Shops/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#count
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Shops/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#prototype$updateAttributes
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Shops/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#createChangeStream
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Shops/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Shop#validateBankAccountData
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `recipient` – `{object=}` - 
         */
        "validateBankAccountData": {
          url: urlBase + "/Shops/validateBankAccountData",
          method: "POST"
        },

        // INTERNAL. Use Actor.shop() instead.
        "::get::Actor::shop": {
          url: urlBase + "/Actors/:id/shop",
          method: "GET"
        },

        // INTERNAL. Use Actor.shop.create() instead.
        "::create::Actor::shop": {
          url: urlBase + "/Actors/:id/shop",
          method: "POST"
        },

        // INTERNAL. Use Actor.shop.createMany() instead.
        "::createMany::Actor::shop": {
          isArray: true,
          url: urlBase + "/Actors/:id/shop",
          method: "POST"
        },

        // INTERNAL. Use Actor.shop.update() instead.
        "::update::Actor::shop": {
          url: urlBase + "/Actors/:id/shop",
          method: "PUT"
        },

        // INTERNAL. Use Actor.shop.destroy() instead.
        "::destroy::Actor::shop": {
          url: urlBase + "/Actors/:id/shop",
          method: "DELETE"
        },

        // INTERNAL. Use Actor.shops.findById() instead.
        "::findById::Actor::shops": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Actors/:id/shops/:fk",
          method: "GET"
        },

        // INTERNAL. Use Actor.shops.destroyById() instead.
        "::destroyById::Actor::shops": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Actors/:id/shops/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Actor.shops.updateById() instead.
        "::updateById::Actor::shops": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Actors/:id/shops/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Actor.shops.link() instead.
        "::link::Actor::shops": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Actors/:id/shops/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Actor.shops.unlink() instead.
        "::unlink::Actor::shops": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Actors/:id/shops/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Actor.shops.exists() instead.
        "::exists::Actor::shops": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Actors/:id/shops/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Actor.shops() instead.
        "::get::Actor::shops": {
          isArray: true,
          url: urlBase + "/Actors/:id/shops",
          method: "GET"
        },

        // INTERNAL. Use Actor.shops.create() instead.
        "::create::Actor::shops": {
          url: urlBase + "/Actors/:id/shops",
          method: "POST"
        },

        // INTERNAL. Use Actor.shops.createMany() instead.
        "::createMany::Actor::shops": {
          isArray: true,
          url: urlBase + "/Actors/:id/shops",
          method: "POST"
        },

        // INTERNAL. Use Actor.shops.destroyAll() instead.
        "::delete::Actor::shops": {
          url: urlBase + "/Actors/:id/shops",
          method: "DELETE"
        },

        // INTERNAL. Use Actor.shops.count() instead.
        "::count::Actor::shops": {
          url: urlBase + "/Actors/:id/shops/count",
          method: "GET"
        },

        // INTERNAL. Use Customer.shop() instead.
        "::get::Customer::shop": {
          url: urlBase + "/Customers/:id/shop",
          method: "GET"
        },

        // INTERNAL. Use RentalItem.shop() instead.
        "::get::RentalItem::shop": {
          url: urlBase + "/RentalItems/:id/shop",
          method: "GET"
        },

        // INTERNAL. Use Withdraw.shop() instead.
        "::get::Withdraw::shop": {
          url: urlBase + "/Withdraws/:id/shop",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Shop#updateOrCreate
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Shop#update
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Shop#destroyById
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Shop#removeById
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Shop#modelName
    * @propertyOf lbServices.Shop
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Shop`.
    */
    R.modelName = "Shop";


        /**
         * @ngdoc method
         * @name lbServices.Shop#owner
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Fetches belongsTo relation owner.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Actor` object.)
         * </em>
         */
        R.owner = function() {
          var TargetResource = $injector.get("Actor");
          var action = TargetResource["::get::Shop::owner"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Shop.customers
     * @header lbServices.Shop.customers
     * @object
     * @description
     *
     * The object `Shop.customers` groups methods
     * manipulating `Customer` instances related to `Shop`.
     *
     * Call {@link lbServices.Shop#customers Shop.customers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Shop#customers
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Queries customers of Shop.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Shop::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.customers#count
         * @methodOf lbServices.Shop.customers
         *
         * @description
         *
         * Counts customers of Shop.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.customers.count = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::count::Shop::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.customers#create
         * @methodOf lbServices.Shop.customers
         *
         * @description
         *
         * Creates a new instance in customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.create = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::create::Shop::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.customers#createMany
         * @methodOf lbServices.Shop.customers
         *
         * @description
         *
         * Creates a new instance in customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.createMany = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::createMany::Shop::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.customers#destroyAll
         * @methodOf lbServices.Shop.customers
         *
         * @description
         *
         * Deletes all customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customers.destroyAll = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::delete::Shop::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.customers#destroyById
         * @methodOf lbServices.Shop.customers
         *
         * @description
         *
         * Delete a related item by id for customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customers.destroyById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::destroyById::Shop::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.customers#exists
         * @methodOf lbServices.Shop.customers
         *
         * @description
         *
         * Check the existence of customers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.exists = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::exists::Shop::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.customers#findById
         * @methodOf lbServices.Shop.customers
         *
         * @description
         *
         * Find a related item by id for customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.findById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::findById::Shop::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.customers#link
         * @methodOf lbServices.Shop.customers
         *
         * @description
         *
         * Add a related item by id for customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.link = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::link::Shop::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.customers#unlink
         * @methodOf lbServices.Shop.customers
         *
         * @description
         *
         * Remove the customers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customers.unlink = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::unlink::Shop::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.customers#updateById
         * @methodOf lbServices.Shop.customers
         *
         * @description
         *
         * Update a related item by id for customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.updateById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::updateById::Shop::customers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Shop.rentalItems
     * @header lbServices.Shop.rentalItems
     * @object
     * @description
     *
     * The object `Shop.rentalItems` groups methods
     * manipulating `RentalItem` instances related to `Shop`.
     *
     * Call {@link lbServices.Shop#rentalItems Shop.rentalItems()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Shop#rentalItems
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Queries rentalItems of Shop.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        R.rentalItems = function() {
          var TargetResource = $injector.get("RentalItem");
          var action = TargetResource["::get::Shop::rentalItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.rentalItems#count
         * @methodOf lbServices.Shop.rentalItems
         *
         * @description
         *
         * Counts rentalItems of Shop.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.rentalItems.count = function() {
          var TargetResource = $injector.get("RentalItem");
          var action = TargetResource["::count::Shop::rentalItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.rentalItems#create
         * @methodOf lbServices.Shop.rentalItems
         *
         * @description
         *
         * Creates a new instance in rentalItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        R.rentalItems.create = function() {
          var TargetResource = $injector.get("RentalItem");
          var action = TargetResource["::create::Shop::rentalItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.rentalItems#createMany
         * @methodOf lbServices.Shop.rentalItems
         *
         * @description
         *
         * Creates a new instance in rentalItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        R.rentalItems.createMany = function() {
          var TargetResource = $injector.get("RentalItem");
          var action = TargetResource["::createMany::Shop::rentalItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.rentalItems#destroyAll
         * @methodOf lbServices.Shop.rentalItems
         *
         * @description
         *
         * Deletes all rentalItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rentalItems.destroyAll = function() {
          var TargetResource = $injector.get("RentalItem");
          var action = TargetResource["::delete::Shop::rentalItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.rentalItems#destroyById
         * @methodOf lbServices.Shop.rentalItems
         *
         * @description
         *
         * Delete a related item by id for rentalItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rentalItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rentalItems.destroyById = function() {
          var TargetResource = $injector.get("RentalItem");
          var action = TargetResource["::destroyById::Shop::rentalItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.rentalItems#findById
         * @methodOf lbServices.Shop.rentalItems
         *
         * @description
         *
         * Find a related item by id for rentalItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rentalItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        R.rentalItems.findById = function() {
          var TargetResource = $injector.get("RentalItem");
          var action = TargetResource["::findById::Shop::rentalItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.rentalItems#updateById
         * @methodOf lbServices.Shop.rentalItems
         *
         * @description
         *
         * Update a related item by id for rentalItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rentalItems
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        R.rentalItems.updateById = function() {
          var TargetResource = $injector.get("RentalItem");
          var action = TargetResource["::updateById::Shop::rentalItems"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Shop.withdraws
     * @header lbServices.Shop.withdraws
     * @object
     * @description
     *
     * The object `Shop.withdraws` groups methods
     * manipulating `Withdraw` instances related to `Shop`.
     *
     * Call {@link lbServices.Shop#withdraws Shop.withdraws()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Shop#withdraws
         * @methodOf lbServices.Shop
         *
         * @description
         *
         * Queries withdraws of Shop.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Withdraw` object.)
         * </em>
         */
        R.withdraws = function() {
          var TargetResource = $injector.get("Withdraw");
          var action = TargetResource["::get::Shop::withdraws"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.withdraws#count
         * @methodOf lbServices.Shop.withdraws
         *
         * @description
         *
         * Counts withdraws of Shop.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.withdraws.count = function() {
          var TargetResource = $injector.get("Withdraw");
          var action = TargetResource["::count::Shop::withdraws"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.withdraws#create
         * @methodOf lbServices.Shop.withdraws
         *
         * @description
         *
         * Creates a new instance in withdraws of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Withdraw` object.)
         * </em>
         */
        R.withdraws.create = function() {
          var TargetResource = $injector.get("Withdraw");
          var action = TargetResource["::create::Shop::withdraws"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.withdraws#createMany
         * @methodOf lbServices.Shop.withdraws
         *
         * @description
         *
         * Creates a new instance in withdraws of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Withdraw` object.)
         * </em>
         */
        R.withdraws.createMany = function() {
          var TargetResource = $injector.get("Withdraw");
          var action = TargetResource["::createMany::Shop::withdraws"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.withdraws#destroyAll
         * @methodOf lbServices.Shop.withdraws
         *
         * @description
         *
         * Deletes all withdraws of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.withdraws.destroyAll = function() {
          var TargetResource = $injector.get("Withdraw");
          var action = TargetResource["::delete::Shop::withdraws"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.withdraws#destroyById
         * @methodOf lbServices.Shop.withdraws
         *
         * @description
         *
         * Delete a related item by id for withdraws.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for withdraws
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.withdraws.destroyById = function() {
          var TargetResource = $injector.get("Withdraw");
          var action = TargetResource["::destroyById::Shop::withdraws"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.withdraws#findById
         * @methodOf lbServices.Shop.withdraws
         *
         * @description
         *
         * Find a related item by id for withdraws.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for withdraws
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Withdraw` object.)
         * </em>
         */
        R.withdraws.findById = function() {
          var TargetResource = $injector.get("Withdraw");
          var action = TargetResource["::findById::Shop::withdraws"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Shop.withdraws#updateById
         * @methodOf lbServices.Shop.withdraws
         *
         * @description
         *
         * Update a related item by id for withdraws.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for withdraws
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Withdraw` object.)
         * </em>
         */
        R.withdraws.updateById = function() {
          var TargetResource = $injector.get("Withdraw");
          var action = TargetResource["::updateById::Shop::withdraws"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Customer
 * @header lbServices.Customer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Customer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Customer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Customers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Customer.shop() instead.
        "prototype$__get__shop": {
          url: urlBase + "/Customers/:id/shop",
          method: "GET"
        },

        // INTERNAL. Use Customer.customer() instead.
        "prototype$__get__customer": {
          url: urlBase + "/Customers/:id/customer",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#create
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Customers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#createMany
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Customers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#upsert
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Customers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#exists
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Customers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#findById
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Customers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#find
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Customers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#findOne
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Customers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#updateAll
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Customers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#deleteById
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Customers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#count
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Customers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#prototype$updateAttributes
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Customers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#createChangeStream
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Customers/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Shop.customers.findById() instead.
        "::findById::Shop::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/customers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Shop.customers.destroyById() instead.
        "::destroyById::Shop::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/customers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Shop.customers.updateById() instead.
        "::updateById::Shop::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/customers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Shop.customers.link() instead.
        "::link::Shop::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/customers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Shop.customers.unlink() instead.
        "::unlink::Shop::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/customers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Shop.customers.exists() instead.
        "::exists::Shop::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/customers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Shop.customers() instead.
        "::get::Shop::customers": {
          isArray: true,
          url: urlBase + "/Shops/:id/customers",
          method: "GET"
        },

        // INTERNAL. Use Shop.customers.create() instead.
        "::create::Shop::customers": {
          url: urlBase + "/Shops/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use Shop.customers.createMany() instead.
        "::createMany::Shop::customers": {
          isArray: true,
          url: urlBase + "/Shops/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use Shop.customers.destroyAll() instead.
        "::delete::Shop::customers": {
          url: urlBase + "/Shops/:id/customers",
          method: "DELETE"
        },

        // INTERNAL. Use Shop.customers.count() instead.
        "::count::Shop::customers": {
          url: urlBase + "/Shops/:id/customers/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Customer#updateOrCreate
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Customer#update
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Customer#destroyById
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Customer#removeById
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Customer#modelName
    * @propertyOf lbServices.Customer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Customer`.
    */
    R.modelName = "Customer";


        /**
         * @ngdoc method
         * @name lbServices.Customer#shop
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Fetches belongsTo relation shop.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R.shop = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::get::Customer::shop"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer#customer
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Fetches belongsTo relation customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Actor` object.)
         * </em>
         */
        R.customer = function() {
          var TargetResource = $injector.get("Actor");
          var action = TargetResource["::get::Customer::customer"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.RentalItem
 * @header lbServices.RentalItem
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `RentalItem` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "RentalItem",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/RentalItems/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use RentalItem.category() instead.
        "prototype$__get__category": {
          url: urlBase + "/RentalItems/:id/category",
          method: "GET"
        },

        // INTERNAL. Use RentalItem.shop() instead.
        "prototype$__get__shop": {
          url: urlBase + "/RentalItems/:id/shop",
          method: "GET"
        },

        // INTERNAL. Use RentalItem.images.findById() instead.
        "prototype$__findById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RentalItems/:id/images/:fk",
          method: "GET"
        },

        // INTERNAL. Use RentalItem.images.destroyById() instead.
        "prototype$__destroyById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RentalItems/:id/images/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RentalItem.images.updateById() instead.
        "prototype$__updateById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RentalItems/:id/images/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RentalItem.bookItems.findById() instead.
        "prototype$__findById__bookItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RentalItems/:id/bookItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use RentalItem.bookItems.destroyById() instead.
        "prototype$__destroyById__bookItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RentalItems/:id/bookItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RentalItem.bookItems.updateById() instead.
        "prototype$__updateById__bookItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RentalItems/:id/bookItems/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RentalItem.images() instead.
        "prototype$__get__images": {
          isArray: true,
          url: urlBase + "/RentalItems/:id/images",
          method: "GET"
        },

        // INTERNAL. Use RentalItem.images.create() instead.
        "prototype$__create__images": {
          url: urlBase + "/RentalItems/:id/images",
          method: "POST"
        },

        // INTERNAL. Use RentalItem.images.destroyAll() instead.
        "prototype$__delete__images": {
          url: urlBase + "/RentalItems/:id/images",
          method: "DELETE"
        },

        // INTERNAL. Use RentalItem.images.count() instead.
        "prototype$__count__images": {
          url: urlBase + "/RentalItems/:id/images/count",
          method: "GET"
        },

        // INTERNAL. Use RentalItem.bookItems() instead.
        "prototype$__get__bookItems": {
          isArray: true,
          url: urlBase + "/RentalItems/:id/bookItems",
          method: "GET"
        },

        // INTERNAL. Use RentalItem.bookItems.create() instead.
        "prototype$__create__bookItems": {
          url: urlBase + "/RentalItems/:id/bookItems",
          method: "POST"
        },

        // INTERNAL. Use RentalItem.bookItems.destroyAll() instead.
        "prototype$__delete__bookItems": {
          url: urlBase + "/RentalItems/:id/bookItems",
          method: "DELETE"
        },

        // INTERNAL. Use RentalItem.bookItems.count() instead.
        "prototype$__count__bookItems": {
          url: urlBase + "/RentalItems/:id/bookItems/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RentalItem#create
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/RentalItems",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RentalItem#createMany
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/RentalItems",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RentalItem#upsert
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/RentalItems",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RentalItem#exists
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/RentalItems/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RentalItem#findById
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/RentalItems/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RentalItem#find
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/RentalItems",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RentalItem#findOne
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/RentalItems/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RentalItem#updateAll
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/RentalItems/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RentalItem#deleteById
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/RentalItems/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.RentalItem#count
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/RentalItems/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RentalItem#prototype$updateAttributes
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/RentalItems/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RentalItem#createChangeStream
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/RentalItems/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RentalItem#list
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `params` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `items` – `{*=}` - 
         */
        "list": {
          url: urlBase + "/RentalItems/list",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RentalItem#listByLocation
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `category_id` – `{number=}` - 
         *
         *  - `name` – `{string=}` - 
         *
         *  - `location` – `{geopoint}` - 
         *
         *  - `radius` – `{number}` - 
         *
         *  - `page` – `{number=}` - 
         *
         *  - `size` – `{number=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `items` – `{*=}` - 
         */
        "listByLocation": {
          url: urlBase + "/RentalItems/listByLocation",
          method: "GET"
        },

        // INTERNAL. Use SubCategory.rentalItems.findById() instead.
        "::findById::SubCategory::rentalItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SubCategories/:id/rentalItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use SubCategory.rentalItems.destroyById() instead.
        "::destroyById::SubCategory::rentalItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SubCategories/:id/rentalItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use SubCategory.rentalItems.updateById() instead.
        "::updateById::SubCategory::rentalItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SubCategories/:id/rentalItems/:fk",
          method: "PUT"
        },

        // INTERNAL. Use SubCategory.rentalItems() instead.
        "::get::SubCategory::rentalItems": {
          isArray: true,
          url: urlBase + "/SubCategories/:id/rentalItems",
          method: "GET"
        },

        // INTERNAL. Use SubCategory.rentalItems.create() instead.
        "::create::SubCategory::rentalItems": {
          url: urlBase + "/SubCategories/:id/rentalItems",
          method: "POST"
        },

        // INTERNAL. Use SubCategory.rentalItems.createMany() instead.
        "::createMany::SubCategory::rentalItems": {
          isArray: true,
          url: urlBase + "/SubCategories/:id/rentalItems",
          method: "POST"
        },

        // INTERNAL. Use SubCategory.rentalItems.destroyAll() instead.
        "::delete::SubCategory::rentalItems": {
          url: urlBase + "/SubCategories/:id/rentalItems",
          method: "DELETE"
        },

        // INTERNAL. Use SubCategory.rentalItems.count() instead.
        "::count::SubCategory::rentalItems": {
          url: urlBase + "/SubCategories/:id/rentalItems/count",
          method: "GET"
        },

        // INTERNAL. Use Shop.rentalItems.findById() instead.
        "::findById::Shop::rentalItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/rentalItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use Shop.rentalItems.destroyById() instead.
        "::destroyById::Shop::rentalItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/rentalItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Shop.rentalItems.updateById() instead.
        "::updateById::Shop::rentalItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/rentalItems/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Shop.rentalItems() instead.
        "::get::Shop::rentalItems": {
          isArray: true,
          url: urlBase + "/Shops/:id/rentalItems",
          method: "GET"
        },

        // INTERNAL. Use Shop.rentalItems.create() instead.
        "::create::Shop::rentalItems": {
          url: urlBase + "/Shops/:id/rentalItems",
          method: "POST"
        },

        // INTERNAL. Use Shop.rentalItems.createMany() instead.
        "::createMany::Shop::rentalItems": {
          isArray: true,
          url: urlBase + "/Shops/:id/rentalItems",
          method: "POST"
        },

        // INTERNAL. Use Shop.rentalItems.destroyAll() instead.
        "::delete::Shop::rentalItems": {
          url: urlBase + "/Shops/:id/rentalItems",
          method: "DELETE"
        },

        // INTERNAL. Use Shop.rentalItems.count() instead.
        "::count::Shop::rentalItems": {
          url: urlBase + "/Shops/:id/rentalItems/count",
          method: "GET"
        },

        // INTERNAL. Use BookItem.rentalItem() instead.
        "::get::BookItem::rentalItem": {
          url: urlBase + "/BookItems/:id/rentalItem",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.RentalItem#updateOrCreate
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.RentalItem#update
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.RentalItem#destroyById
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.RentalItem#removeById
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.RentalItem#modelName
    * @propertyOf lbServices.RentalItem
    * @description
    * The name of the model represented by this $resource,
    * i.e. `RentalItem`.
    */
    R.modelName = "RentalItem";


        /**
         * @ngdoc method
         * @name lbServices.RentalItem#category
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * Fetches belongsTo relation category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubCategory` object.)
         * </em>
         */
        R.category = function() {
          var TargetResource = $injector.get("SubCategory");
          var action = TargetResource["::get::RentalItem::category"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RentalItem#shop
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * Fetches belongsTo relation shop.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R.shop = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::get::RentalItem::shop"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.RentalItem.images
     * @header lbServices.RentalItem.images
     * @object
     * @description
     *
     * The object `RentalItem.images` groups methods
     * manipulating `Image` instances related to `RentalItem`.
     *
     * Call {@link lbServices.RentalItem#images RentalItem.images()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.RentalItem#images
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * Queries images of RentalItem.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        R.images = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::get::RentalItem::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RentalItem.images#count
         * @methodOf lbServices.RentalItem.images
         *
         * @description
         *
         * Counts images of RentalItem.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.images.count = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::count::RentalItem::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RentalItem.images#create
         * @methodOf lbServices.RentalItem.images
         *
         * @description
         *
         * Creates a new instance in images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        R.images.create = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::create::RentalItem::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RentalItem.images#createMany
         * @methodOf lbServices.RentalItem.images
         *
         * @description
         *
         * Creates a new instance in images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        R.images.createMany = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::createMany::RentalItem::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RentalItem.images#destroyAll
         * @methodOf lbServices.RentalItem.images
         *
         * @description
         *
         * Deletes all images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.images.destroyAll = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::delete::RentalItem::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RentalItem.images#destroyById
         * @methodOf lbServices.RentalItem.images
         *
         * @description
         *
         * Delete a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.images.destroyById = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::destroyById::RentalItem::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RentalItem.images#findById
         * @methodOf lbServices.RentalItem.images
         *
         * @description
         *
         * Find a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        R.images.findById = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::findById::RentalItem::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RentalItem.images#updateById
         * @methodOf lbServices.RentalItem.images
         *
         * @description
         *
         * Update a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        R.images.updateById = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::updateById::RentalItem::images"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.RentalItem.bookItems
     * @header lbServices.RentalItem.bookItems
     * @object
     * @description
     *
     * The object `RentalItem.bookItems` groups methods
     * manipulating `BookItem` instances related to `RentalItem`.
     *
     * Call {@link lbServices.RentalItem#bookItems RentalItem.bookItems()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.RentalItem#bookItems
         * @methodOf lbServices.RentalItem
         *
         * @description
         *
         * Queries bookItems of RentalItem.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        R.bookItems = function() {
          var TargetResource = $injector.get("BookItem");
          var action = TargetResource["::get::RentalItem::bookItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RentalItem.bookItems#count
         * @methodOf lbServices.RentalItem.bookItems
         *
         * @description
         *
         * Counts bookItems of RentalItem.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.bookItems.count = function() {
          var TargetResource = $injector.get("BookItem");
          var action = TargetResource["::count::RentalItem::bookItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RentalItem.bookItems#create
         * @methodOf lbServices.RentalItem.bookItems
         *
         * @description
         *
         * Creates a new instance in bookItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        R.bookItems.create = function() {
          var TargetResource = $injector.get("BookItem");
          var action = TargetResource["::create::RentalItem::bookItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RentalItem.bookItems#createMany
         * @methodOf lbServices.RentalItem.bookItems
         *
         * @description
         *
         * Creates a new instance in bookItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        R.bookItems.createMany = function() {
          var TargetResource = $injector.get("BookItem");
          var action = TargetResource["::createMany::RentalItem::bookItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RentalItem.bookItems#destroyAll
         * @methodOf lbServices.RentalItem.bookItems
         *
         * @description
         *
         * Deletes all bookItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.bookItems.destroyAll = function() {
          var TargetResource = $injector.get("BookItem");
          var action = TargetResource["::delete::RentalItem::bookItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RentalItem.bookItems#destroyById
         * @methodOf lbServices.RentalItem.bookItems
         *
         * @description
         *
         * Delete a related item by id for bookItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for bookItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.bookItems.destroyById = function() {
          var TargetResource = $injector.get("BookItem");
          var action = TargetResource["::destroyById::RentalItem::bookItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RentalItem.bookItems#findById
         * @methodOf lbServices.RentalItem.bookItems
         *
         * @description
         *
         * Find a related item by id for bookItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for bookItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        R.bookItems.findById = function() {
          var TargetResource = $injector.get("BookItem");
          var action = TargetResource["::findById::RentalItem::bookItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RentalItem.bookItems#updateById
         * @methodOf lbServices.RentalItem.bookItems
         *
         * @description
         *
         * Update a related item by id for bookItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for bookItems
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        R.bookItems.updateById = function() {
          var TargetResource = $injector.get("BookItem");
          var action = TargetResource["::updateById::RentalItem::bookItems"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Image
 * @header lbServices.Image
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Image` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Image",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Images/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Image#create
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Images",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#createMany
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Images",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#upsert
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Images",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#exists
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Images/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#findById
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Images/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#find
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Images",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#findOne
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Images/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#updateAll
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Images/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#deleteById
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Images/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#count
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Images/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#prototype$updateAttributes
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Images/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#createChangeStream
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Images/change-stream",
          method: "POST"
        },

        // INTERNAL. Use ParentCategory.images.findById() instead.
        "::findById::ParentCategory::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ParentCategories/:id/images/:fk",
          method: "GET"
        },

        // INTERNAL. Use ParentCategory.images.destroyById() instead.
        "::destroyById::ParentCategory::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ParentCategories/:id/images/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ParentCategory.images.updateById() instead.
        "::updateById::ParentCategory::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ParentCategories/:id/images/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ParentCategory.images() instead.
        "::get::ParentCategory::images": {
          isArray: true,
          url: urlBase + "/ParentCategories/:id/images",
          method: "GET"
        },

        // INTERNAL. Use ParentCategory.images.create() instead.
        "::create::ParentCategory::images": {
          url: urlBase + "/ParentCategories/:id/images",
          method: "POST"
        },

        // INTERNAL. Use ParentCategory.images.createMany() instead.
        "::createMany::ParentCategory::images": {
          isArray: true,
          url: urlBase + "/ParentCategories/:id/images",
          method: "POST"
        },

        // INTERNAL. Use ParentCategory.images.destroyAll() instead.
        "::delete::ParentCategory::images": {
          url: urlBase + "/ParentCategories/:id/images",
          method: "DELETE"
        },

        // INTERNAL. Use ParentCategory.images.count() instead.
        "::count::ParentCategory::images": {
          url: urlBase + "/ParentCategories/:id/images/count",
          method: "GET"
        },

        // INTERNAL. Use SubCategory.images.findById() instead.
        "::findById::SubCategory::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SubCategories/:id/images/:fk",
          method: "GET"
        },

        // INTERNAL. Use SubCategory.images.destroyById() instead.
        "::destroyById::SubCategory::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SubCategories/:id/images/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use SubCategory.images.updateById() instead.
        "::updateById::SubCategory::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SubCategories/:id/images/:fk",
          method: "PUT"
        },

        // INTERNAL. Use SubCategory.images() instead.
        "::get::SubCategory::images": {
          isArray: true,
          url: urlBase + "/SubCategories/:id/images",
          method: "GET"
        },

        // INTERNAL. Use SubCategory.images.create() instead.
        "::create::SubCategory::images": {
          url: urlBase + "/SubCategories/:id/images",
          method: "POST"
        },

        // INTERNAL. Use SubCategory.images.createMany() instead.
        "::createMany::SubCategory::images": {
          isArray: true,
          url: urlBase + "/SubCategories/:id/images",
          method: "POST"
        },

        // INTERNAL. Use SubCategory.images.destroyAll() instead.
        "::delete::SubCategory::images": {
          url: urlBase + "/SubCategories/:id/images",
          method: "DELETE"
        },

        // INTERNAL. Use SubCategory.images.count() instead.
        "::count::SubCategory::images": {
          url: urlBase + "/SubCategories/:id/images/count",
          method: "GET"
        },

        // INTERNAL. Use RentalItem.images.findById() instead.
        "::findById::RentalItem::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RentalItems/:id/images/:fk",
          method: "GET"
        },

        // INTERNAL. Use RentalItem.images.destroyById() instead.
        "::destroyById::RentalItem::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RentalItems/:id/images/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RentalItem.images.updateById() instead.
        "::updateById::RentalItem::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RentalItems/:id/images/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RentalItem.images() instead.
        "::get::RentalItem::images": {
          isArray: true,
          url: urlBase + "/RentalItems/:id/images",
          method: "GET"
        },

        // INTERNAL. Use RentalItem.images.create() instead.
        "::create::RentalItem::images": {
          url: urlBase + "/RentalItems/:id/images",
          method: "POST"
        },

        // INTERNAL. Use RentalItem.images.createMany() instead.
        "::createMany::RentalItem::images": {
          isArray: true,
          url: urlBase + "/RentalItems/:id/images",
          method: "POST"
        },

        // INTERNAL. Use RentalItem.images.destroyAll() instead.
        "::delete::RentalItem::images": {
          url: urlBase + "/RentalItems/:id/images",
          method: "DELETE"
        },

        // INTERNAL. Use RentalItem.images.count() instead.
        "::count::RentalItem::images": {
          url: urlBase + "/RentalItems/:id/images/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Image#updateOrCreate
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Image#update
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Image#destroyById
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Image#removeById
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Image#modelName
    * @propertyOf lbServices.Image
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Image`.
    */
    R.modelName = "Image";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.BookItem
 * @header lbServices.BookItem
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `BookItem` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "BookItem",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/BookItems/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use BookItem.renter() instead.
        "prototype$__get__renter": {
          url: urlBase + "/BookItems/:id/renter",
          method: "GET"
        },

        // INTERNAL. Use BookItem.rentalItem() instead.
        "prototype$__get__rentalItem": {
          url: urlBase + "/BookItems/:id/rentalItem",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookItem#create
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/BookItems",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookItem#createMany
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/BookItems",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookItem#upsert
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/BookItems",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookItem#exists
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/BookItems/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookItem#findById
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/BookItems/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookItem#find
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/BookItems",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookItem#findOne
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/BookItems/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookItem#updateAll
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/BookItems/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookItem#deleteById
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/BookItems/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookItem#count
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/BookItems/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookItem#prototype$updateAttributes
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/BookItems/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookItem#createChangeStream
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/BookItems/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookItem#list
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `params` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `items` – `{*=}` - 
         */
        "list": {
          url: urlBase + "/BookItems/list",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookItem#request
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `params` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `item` – `{object=}` - 
         */
        "request": {
          url: urlBase + "/BookItems/request",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookItem#myBookingItems
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `params` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `items` – `{*=}` - 
         */
        "myBookingItems": {
          url: urlBase + "/BookItems/myBookingItems",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookItem#createStripeToken
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `card` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        "createStripeToken": {
          url: urlBase + "/BookItems/createStripeToken",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookItem#refund
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `id` – `{number=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `refund` – `{object=}` - 
         */
        "refund": {
          url: urlBase + "/BookItems/refund",
          method: "POST"
        },

        // INTERNAL. Use Actor.bookItems.findById() instead.
        "::findById::Actor::bookItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Actors/:id/bookItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use Actor.bookItems.destroyById() instead.
        "::destroyById::Actor::bookItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Actors/:id/bookItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Actor.bookItems.updateById() instead.
        "::updateById::Actor::bookItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Actors/:id/bookItems/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Actor.bookItems() instead.
        "::get::Actor::bookItems": {
          isArray: true,
          url: urlBase + "/Actors/:id/bookItems",
          method: "GET"
        },

        // INTERNAL. Use Actor.bookItems.create() instead.
        "::create::Actor::bookItems": {
          url: urlBase + "/Actors/:id/bookItems",
          method: "POST"
        },

        // INTERNAL. Use Actor.bookItems.createMany() instead.
        "::createMany::Actor::bookItems": {
          isArray: true,
          url: urlBase + "/Actors/:id/bookItems",
          method: "POST"
        },

        // INTERNAL. Use Actor.bookItems.destroyAll() instead.
        "::delete::Actor::bookItems": {
          url: urlBase + "/Actors/:id/bookItems",
          method: "DELETE"
        },

        // INTERNAL. Use Actor.bookItems.count() instead.
        "::count::Actor::bookItems": {
          url: urlBase + "/Actors/:id/bookItems/count",
          method: "GET"
        },

        // INTERNAL. Use RentalItem.bookItems.findById() instead.
        "::findById::RentalItem::bookItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RentalItems/:id/bookItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use RentalItem.bookItems.destroyById() instead.
        "::destroyById::RentalItem::bookItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RentalItems/:id/bookItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RentalItem.bookItems.updateById() instead.
        "::updateById::RentalItem::bookItems": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RentalItems/:id/bookItems/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RentalItem.bookItems() instead.
        "::get::RentalItem::bookItems": {
          isArray: true,
          url: urlBase + "/RentalItems/:id/bookItems",
          method: "GET"
        },

        // INTERNAL. Use RentalItem.bookItems.create() instead.
        "::create::RentalItem::bookItems": {
          url: urlBase + "/RentalItems/:id/bookItems",
          method: "POST"
        },

        // INTERNAL. Use RentalItem.bookItems.createMany() instead.
        "::createMany::RentalItem::bookItems": {
          isArray: true,
          url: urlBase + "/RentalItems/:id/bookItems",
          method: "POST"
        },

        // INTERNAL. Use RentalItem.bookItems.destroyAll() instead.
        "::delete::RentalItem::bookItems": {
          url: urlBase + "/RentalItems/:id/bookItems",
          method: "DELETE"
        },

        // INTERNAL. Use RentalItem.bookItems.count() instead.
        "::count::RentalItem::bookItems": {
          url: urlBase + "/RentalItems/:id/bookItems/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.BookItem#updateOrCreate
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.BookItem#update
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.BookItem#destroyById
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.BookItem#removeById
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookItem` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.BookItem#modelName
    * @propertyOf lbServices.BookItem
    * @description
    * The name of the model represented by this $resource,
    * i.e. `BookItem`.
    */
    R.modelName = "BookItem";


        /**
         * @ngdoc method
         * @name lbServices.BookItem#renter
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * Fetches belongsTo relation renter.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Actor` object.)
         * </em>
         */
        R.renter = function() {
          var TargetResource = $injector.get("Actor");
          var action = TargetResource["::get::BookItem::renter"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.BookItem#rentalItem
         * @methodOf lbServices.BookItem
         *
         * @description
         *
         * Fetches belongsTo relation rentalItem.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RentalItem` object.)
         * </em>
         */
        R.rentalItem = function() {
          var TargetResource = $injector.get("RentalItem");
          var action = TargetResource["::get::BookItem::rentalItem"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Withdraw
 * @header lbServices.Withdraw
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Withdraw` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Withdraw",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Withdraws/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Withdraw.shop() instead.
        "prototype$__get__shop": {
          url: urlBase + "/Withdraws/:id/shop",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Withdraw#create
         * @methodOf lbServices.Withdraw
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Withdraw` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Withdraws",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Withdraw#createMany
         * @methodOf lbServices.Withdraw
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Withdraw` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Withdraws",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Withdraw#upsert
         * @methodOf lbServices.Withdraw
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Withdraw` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Withdraws",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Withdraw#exists
         * @methodOf lbServices.Withdraw
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Withdraws/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Withdraw#findById
         * @methodOf lbServices.Withdraw
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Withdraw` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Withdraws/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Withdraw#find
         * @methodOf lbServices.Withdraw
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Withdraw` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Withdraws",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Withdraw#findOne
         * @methodOf lbServices.Withdraw
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Withdraw` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Withdraws/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Withdraw#updateAll
         * @methodOf lbServices.Withdraw
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Withdraws/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Withdraw#deleteById
         * @methodOf lbServices.Withdraw
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Withdraw` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Withdraws/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Withdraw#count
         * @methodOf lbServices.Withdraw
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Withdraws/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Withdraw#prototype$updateAttributes
         * @methodOf lbServices.Withdraw
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Withdraw` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Withdraws/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Withdraw#createChangeStream
         * @methodOf lbServices.Withdraw
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Withdraws/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Withdraw#list
         * @methodOf lbServices.Withdraw
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `params` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `items` – `{*=}` - 
         */
        "list": {
          url: urlBase + "/Withdraws/list",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Withdraw#withdraw
         * @methodOf lbServices.Withdraw
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `amount` – `{number=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `withdraw` – `{object=}` - 
         */
        "withdraw": {
          url: urlBase + "/Withdraws/withdraw",
          method: "POST"
        },

        // INTERNAL. Use Shop.withdraws.findById() instead.
        "::findById::Shop::withdraws": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/withdraws/:fk",
          method: "GET"
        },

        // INTERNAL. Use Shop.withdraws.destroyById() instead.
        "::destroyById::Shop::withdraws": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/withdraws/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Shop.withdraws.updateById() instead.
        "::updateById::Shop::withdraws": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Shops/:id/withdraws/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Shop.withdraws() instead.
        "::get::Shop::withdraws": {
          isArray: true,
          url: urlBase + "/Shops/:id/withdraws",
          method: "GET"
        },

        // INTERNAL. Use Shop.withdraws.create() instead.
        "::create::Shop::withdraws": {
          url: urlBase + "/Shops/:id/withdraws",
          method: "POST"
        },

        // INTERNAL. Use Shop.withdraws.createMany() instead.
        "::createMany::Shop::withdraws": {
          isArray: true,
          url: urlBase + "/Shops/:id/withdraws",
          method: "POST"
        },

        // INTERNAL. Use Shop.withdraws.destroyAll() instead.
        "::delete::Shop::withdraws": {
          url: urlBase + "/Shops/:id/withdraws",
          method: "DELETE"
        },

        // INTERNAL. Use Shop.withdraws.count() instead.
        "::count::Shop::withdraws": {
          url: urlBase + "/Shops/:id/withdraws/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Withdraw#updateOrCreate
         * @methodOf lbServices.Withdraw
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Withdraw` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Withdraw#update
         * @methodOf lbServices.Withdraw
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Withdraw#destroyById
         * @methodOf lbServices.Withdraw
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Withdraw` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Withdraw#removeById
         * @methodOf lbServices.Withdraw
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Withdraw` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Withdraw#modelName
    * @propertyOf lbServices.Withdraw
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Withdraw`.
    */
    R.modelName = "Withdraw";


        /**
         * @ngdoc method
         * @name lbServices.Withdraw#shop
         * @methodOf lbServices.Withdraw
         *
         * @description
         *
         * Fetches belongsTo relation shop.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Shop` object.)
         * </em>
         */
        R.shop = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::get::Withdraw::shop"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Container
 * @header lbServices.Container
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Container` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Container",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Containers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Container#getContainers
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getContainers": {
          isArray: true,
          url: urlBase + "/Containers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#createContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "createContainer": {
          url: urlBase + "/Containers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#destroyContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "destroyContainer": {
          url: urlBase + "/Containers/:container",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getContainer": {
          url: urlBase + "/Containers/:container",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getFiles
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getFiles": {
          isArray: true,
          url: urlBase + "/Containers/:container/files",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getFile
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getFile": {
          url: urlBase + "/Containers/:container/files/:file",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#removeFile
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "removeFile": {
          url: urlBase + "/Containers/:container/files/:file",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#upload
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "upload": {
          url: urlBase + "/Containers/:container/upload",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#download
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "download": {
          url: urlBase + "/Containers/:container/download/:file",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Container#modelName
    * @propertyOf lbServices.Container
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Container`.
    */
    R.modelName = "Container";


    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch(err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
