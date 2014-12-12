/**
--| ADAPTIVE RUNTIME PLATFORM |----------------------------------------------------------------------------------------

(C) Copyright 2013-2015 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the
License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless required by appli-
-cable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,  WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the  License  for the specific language governing
permissions and limitations under the License.

Original author:

    * Carlos Lozano Diez
            <http://github.com/carloslozano>
            <http://twitter.com/adaptivecoder>
            <mailto:carlos@adaptive.me>

Contributors:

    * See source code files for contributors.

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="APIBean.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Structure representing the column specification of a data column.

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    var DatabaseColumn = (function (_super) {
        __extends(DatabaseColumn, _super);
        /**
           Constructor with fields

           @param name Name of the column
           @since ARP1.0
        */
        function DatabaseColumn(name) {
            _super.call(this);
            this.name = name;
        }
        /**
           Returns the name of the column.

           @return The name of the column.
           @since ARP1.0
        */
        DatabaseColumn.prototype.getName = function () {
            return this.name;
        };
        /**
           Sets the name of the column.

           @param name The name of the column.
           @since ARP1.0
        */
        DatabaseColumn.prototype.setName = function (name) {
            this.name = name;
        };
        return DatabaseColumn;
    })(Adaptive.APIBean);
    Adaptive.DatabaseColumn = DatabaseColumn;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=DatabaseColumn.js.map