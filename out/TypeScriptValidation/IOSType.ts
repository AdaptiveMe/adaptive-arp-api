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

    * @version v2.0.3

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

module Adaptive {

     /**
        Enumeration IOSType
     */
     export class IOSType {

          constructor(public value:string){}
          toString(){return this.value;}

          static iOS = new IOSType("iOS");
          static OSX = new IOSType("OSX");
          static Windows = new IOSType("Windows");
          static WindowsPhone = new IOSType("WindowsPhone");
          static Android = new IOSType("Android");
          static Linux = new IOSType("Linux");
          static Blackberry = new IOSType("Blackberry");
          static Tizen = new IOSType("Tizen");
          static FirefoxOS = new IOSType("FirefoxOS");
          static Chromium = new IOSType("Chromium");
          static Unspecified = new IOSType("Unspecified");
          static Unknown = new IOSType("Unknown");

     }
}
