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

/**
Structure representing the data of a http cookie.

@author Carlos Lozano Diez
@since 1.0
@version 1.0
*/
public class Cookie : NSObject {

     /**
        Cookie creation timestamp in milliseconds.
     */
     var creation : Int64?
     /**
        Value of the Cookie
     */
     var data : String?
     /**
        Domain for which the cookie is valid.
     */
     var domain : String?
     /**
        Cookie expiry in milliseconds or -1 for session only.
     */
     var expiry : Int64?
     /**
        Name ot the cookie
     */
     var name : String?
     /**
        URI path for which the cookie is valid.
     */
     var path : String?
     /**
        Scheme of the domain - http/https - for which the cookie is valid.
     */
     var scheme : String?
     /**
        Cookie is secure (https only)
     */
     var secure : Bool?

}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
