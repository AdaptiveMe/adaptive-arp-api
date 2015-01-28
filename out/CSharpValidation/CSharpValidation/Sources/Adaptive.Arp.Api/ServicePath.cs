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

    * Ferran Vila Conesa
             <http://github.com/fnva>
             <http://twitter.com/ferran_vila>
             <mailto:ferran.vila.conesa@gmail.com>

    * See source code files for contributors.

Release:

    * @version v2.0.4

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

using System;

namespace Adaptive.Arp.Api
{
     /**
        Structure representing a service path for one endpoint

        @author fnva
        @since ARP1.0
        @version 1.0
     */
     public class ServicePath
     {

          /**
             The methods for calling a path
          */
          public IServiceMethod[] Methods { get; set; }
          /**
             The path for the endpoint
          */
          public string Path { get; set; }

          /**
             Default Constructor

             @since ARP1.0
          */
          public ServicePath()  {
          }

          /**
             Constructor with parameters

             @param Path    The path for the endpoint
             @param Methods The methods for calling a path
          */
          public ServicePath(string Path, IServiceMethod[] Methods) : base () {
               this.Path = Path;
               this.Methods = Methods;
          }

          /**
             Endpoint's path methods setter

             @return Endpoint's path methods
          */
          public IServiceMethod[] GetMethods() {
               return this.Methods;
          }

          /**
             Endpoint's path methods setter

             @param Methods Endpoint's path methods
          */
          public void SetMethods(IServiceMethod[] Methods) {
               this.Methods = Methods;
          }

          /**
             Endpoint's Path Getter

             @return Endpoint's Path
          */
          public string GetPath() {
               return this.Path;
          }

          /**
             Endpoint's path setter

             @param Path Endpoint's path
          */
          public void SetPath(string Path) {
               this.Path = Path;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
