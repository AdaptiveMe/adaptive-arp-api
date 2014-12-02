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

using System;

namespace Adaptive.Arp.Api
{
     /**
     Structure representing the data of a http cookie.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     public class Cookie
     {

          /**
             Cookie creation timestamp in milliseconds.
          */
          public long Creation { get; set; }
          /**
             Value of the Cookie
          */
          public string Data { get; set; }
          /**
             Domain for which the cookie is valid.
          */
          public string Domain { get; set; }
          /**
             Cookie expiry in milliseconds or -1 for session only.
          */
          public long Expiry { get; set; }
          /**
             Name ot the cookie
          */
          public string Name { get; set; }
          /**
             URI path for which the cookie is valid.
          */
          public string Path { get; set; }
          /**
             Scheme of the domain - http/https - for which the cookie is valid.
          */
          public string Scheme { get; set; }
          /**
             Cookie is secure (https only)
          */
          public bool Secure { get; set; }

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
