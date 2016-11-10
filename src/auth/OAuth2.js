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

module.exports = (function () {
    'use strict';

    var request = require('request');
    var ApiClient = require('../ApiClient').instance;

    /**
     * Construct the scope string
     * @param allScopes
     * @param specificScope
     * @returns {Boolean}
     */
    var validateScope = function (allScopes, specificScope) {
        if (allScopes) {
            if (specificScope) {
                for (var key in specificScope) {
                    if (!allScopes.hasOwnProperty(specificScope[key])) {
                        throw specificScope[key] + " scope is not allowed";
                    }
                }
            } else { // throw if scope is null or undefined
                throw "Scope is missing or empty, you must provide a valid scope";
            }
        } else {
            throw "Authentication does not allow any scopes";
        }
        return true;
    };

    /**
     * A general POST request
     * @param url
     * @param params
     * @param callbackSuccess
     * @param callbackError
     */
    var doPostRequest = function (url, params, callbackSuccess, callbackError) {
        var headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        var paramsBody = [];
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                paramsBody.push(key + '=' + params[key]);
            }
        }

        request({
            headers: headers,
            uri: url,
            body: paramsBody.join('&'),
            method: 'POST'
        }, function (err, response, body) {
            var resp;
            try {
                resp = JSON.parse(body);
            } catch(e) {
                resp = body;
            }
            if (!err && response.statusCode === 200) {
                callbackSuccess(resp);
            } else if (callbackError){
                if (err) {
                    callbackError(err);
                } else {
                    callbackError(resp);
                }
            }
        });
    };

    /**
     * @module auth/OAuth2
     * @version 0.2.1
     */

    /**
     * Trait for creating OAuth2 objects
     * Constructs a new <code>oAuth2</code>.
     * @alias module:auth/OAuth2
     */
    var OAuth2 = function (clientId, clientSecret, scope, autoRefresh) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.credentials = {};
        this.credentials.expires_at = Date.now();
        this.autoRefresh = autoRefresh || false; // don't auto refresh by default

        this.validateTokenUrl = '/validation/v1/validatetoken';

        //this.authentications must be implemented in the child Class
        var validScope = validateScope(this.authentication.scopes, scope);

        //Make sure passed scope is valid
        if (validScope){
            this.scope = scope.join(' ');
        }

        //set the base path for the auth endpoints
        this.basePath = ApiClient.basePath;

        // Implement a sort of interface in JS
        if (!this.hasMember('authentication')) {
            throw new Error('Your OAuth2 object is missing the "authentication" property');
        }
    };

    OAuth2.prototype.doPostRequest = doPostRequest;

    // This allows us to create class members that
    // must be present in the child object
    Object.defineProperty(OAuth2.prototype, 'hasMember', {
        enumerable: false,
        value: function (memberName) {
            return (typeof this[memberName] === 'object');
        }
    });

    return OAuth2;

}());
