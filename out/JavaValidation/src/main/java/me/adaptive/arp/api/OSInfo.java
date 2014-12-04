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

package me.adaptive.arp.api;

/**
   Represents the basic information about the operating system.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class OSInfo {

     /**
        The name of the operating system.
     */
     private String name;
     /**
        The vendor of the operating system.
     */
     private String vendor;
     /**
        The version/identifier of the operating system.
     */
     private String version;

     /**
        Constructor used by the implementation
     */
     public OSInfo() {
     }

     /**
        Constructor used by implementation to set the OS information.

        @param name    of the OS.
        @param version of the OS.
        @param vendor  of the OS.
     */
     public OSInfo(String name, String version, String vendor) {
          this();
          this.name = name;
          this.version = version;
          this.vendor = vendor;
     }
     /**
        Returns the name of the operating system.

        @return OS name.
     */
     public String getName() {
          return this.name;
     }

     /**
        Sets The name of the operating system.

        @param name The name of the operating system.
     */
     public void setName(String name) {
          this.name = name;
     }

     /**
        Returns the vendor of the operating system.

        @return OS vendor.
     */
     public String getVendor() {
          return this.vendor;
     }

     /**
        Sets The vendor of the operating system.

        @param vendor The vendor of the operating system.
     */
     public void setVendor(String vendor) {
          this.vendor = vendor;
     }

     /**
        Returns the version of the operating system.

        @return OS version.
     */
     public String getVersion() {
          return this.version;
     }

     /**
        Sets The version/identifier of the operating system.

        @param version The version/identifier of the operating system.
     */
     public void setVersion(String version) {
          this.version = version;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
