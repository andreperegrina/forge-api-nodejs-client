/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
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
   * The CreateItemDataRelationshipsTipData model module.
   * @module model/CreateItemDataRelationshipsTipData
   * @version 0.2.1
   */

   /**
    * Constructs a <code>CreateItemDataRelationshipsTipData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CreateItemDataRelationshipsTipData} obj Optional instance to populate.
    * @return {module:model/CreateItemDataRelationshipsTipData} The populated <code>CreateItemDataRelationshipsTipData</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>CreateItemDataRelationshipsTipData</code>.
   * @alias module:model/CreateItemDataRelationshipsTipData
   * @class
   * @param type {module:model/CreateItemDataRelationshipsTipData.TypeEnum} 
   * @param id {module:model/CreateItemDataRelationshipsTipData.IdEnum} 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateItemDataRelationshipsTipData} obj Optional instance to populate.
   */
  var exports = function(type, id, theData, obj) {
    var _this = this;

    _this['type'] = type;
    _this['id'] = id;

    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>CreateItemDataRelationshipsTipData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateItemDataRelationshipsTipData} obj Optional instance to populate.
   * @return {module:model/CreateItemDataRelationshipsTipData} The populated <code>CreateItemDataRelationshipsTipData</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * @member {module:model/CreateItemDataRelationshipsTipData.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/CreateItemDataRelationshipsTipData.IdEnum} id
   */
  exports.prototype['id'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "versions"
     * @const
     */
    "versions": "versions"  };

  /**
   * Allowed values for the <code>id</code> property.
   * @enum {String}
   * @readonly
   */
  exports.IdEnum = {
    /**
     * value: "1"
     * @const
     */
    "1": "1"  };


  return exports;
}());


