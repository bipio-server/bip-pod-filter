/**
 *
 * The Bipio Flow Pod.  text2json action definition
 * ---------------------------------------------------------------
 *
 * Copyright (c) 2017 InterDigital, Inc. All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function Text2JSON() {
  this.name = 'text2json';
  this.title = 'Text to JSON',
  this.description = 'Converts a JSON text body into its equivalent export',
  this.trigger = false;
  this.singleton = true;
}

Text2JSON.prototype = {};

Text2JSON.prototype.getSchema = function() {
  return {
    "imports": {
      "properties" : {
        "body" : {
          "type" : String,
          "description" : "JSON String"
        }
      },
      "required" : [ "body" ]
    }
  }
}

/**
 * Invokes (runs) the action.
 */
Text2JSON.prototype.invoke = function(imports, channel, sysImports, contentParts, next) {

  if (imports.body) {
    try {
      var exports = JSON.parse(imports.body.replace(/\n/g, ''));
      next(false, exports);
    } catch (e) {
      this.$resource.log('parse error ' + e, channel, 'error');
      next(true);
    }
  }
}

// -----------------------------------------------------------------------------
module.exports = Text2JSON;