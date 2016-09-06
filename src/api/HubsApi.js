/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. From visualizing data to 3D printing, take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


module.exports = (function() {
   'use strict';

   var ApiClient = require('../ApiClient');

  /**
   * Hubs service.
   * @module api/HubsApi
   * @version 0.1.4
   */

  /**
   * Constructs a new HubsApi. 
   * @alias module:api/HubsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Returns data on a specific &#x60;hub_id&#x60;. 
     * @param {String} hubId the &#x60;hub id&#x60; for the current operation
     * @param {Object} credentials Credentials for the call
     */
    this.getHub = function(hubId, credentials) {
      var postBody = null;

      // verify the required parameter 'hubId' is set
      if (hubId == undefined || hubId == null) {
        throw "Missing the required parameter 'hubId' when calling getHub";
      }


      var pathParams = {
        'hub_id': hubId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/project/v1/hubs/{hub_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, credentials
      );
    };


    /**
     * Returns a collection of projects for a given &#x60;hub_id&#x60;. A project represents an A360 project or a BIM 360 project which is set up under an A360 hub or BIM 360 account, respectively. Within a hub or an account, multiple projects can be created to be used. 
     * @param {String} hubId the &#x60;hub id&#x60; for the current operation
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.filterId filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target
     * @param {Array.<String>} opts.filterExtensionType filter by the extension type
     * data is of type: {Object}
     * @param {Object} credentials Credentials for the call
     */
    this.getHubProjects = function(hubId, opts, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'hubId' is set
      if (hubId == undefined || hubId == null) {
        throw "Missing the required parameter 'hubId' when calling getHubProjects";
      }


      var pathParams = {
        'hub_id': hubId
      };
      var queryParams = {
        'filter[id]': this.apiClient.buildCollectionParam(opts['filterId'], 'multi'),
        'filter[extension.type]': this.apiClient.buildCollectionParam(opts['filterExtensionType'], 'multi')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/project/v1/hubs/{hub_id}/projects', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, credentials
      );
    };


    /**
     * Returns a collection of accessible hubs for this member. A Hub represents an A360 Team/Personal hub or a BIM 360 account. 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.filterId filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target
     * @param {Array.<String>} opts.filterExtensionType filter by the extension type
     * data is of type: {Object}
     * @param {Object} credentials Credentials for the call
     */
    this.getHubs = function(opts, credentials) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter[id]': this.apiClient.buildCollectionParam(opts['filterId'], 'multi'),
        'filter[extension.type]': this.apiClient.buildCollectionParam(opts['filterExtensionType'], 'multi')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/project/v1/hubs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, credentials
      );
    };
  };

  return exports;
}());