/**
 * 
 * filter Actions and Content Emitters
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *  
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *  
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var Pod = require('bip-pod'),
    filter = new Pod({
        name : 'filter', // pod name (action prefix)
        title : 'Filter', // short description
        description : 'Filter Your Content' // long description
    });

// Include any actions
filter.add(require('./entity_encode.js'));
filter.add(require('./entity_decode.js'));
filter.add(require('./regex_replace.js'));
filter.add(require('./text2json.js'));
filter.add(require('./xml2json.js'));
// -----------------------------------------------------------------------------
module.exports = filter;