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

    * @version v2.0.2

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

/**
   Created by clozano on 19/12/14.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class FileDescriptor : NSObject {

     var dateCreated : Int?
     var dateModified : Int?
     var name : String?
     var path : String?
     var pathAbsolute : String?
     var size : Int?

     /**
        Default constructor.
     */
     public override init() {
          super.init()
     }

     /**
        Returns the milliseconds passed since 1/1/1970 since the file was created.

        @return Timestamp in milliseconds.
        @since ARP1.0
     */
     public func getDateCreated() -> Int? {
          return self.dateCreated
     }

     /**
        Sets the creation timestamp in milliseconds. Used internally.

        @param dateCreated Timestamp of file creation or -1 if the file or folder doesn't exist.
     */
     public func setDateCreated(dateCreated: Int) {
          self.dateCreated = dateCreated
     }

     /**
        Returns the milliseconds passed since 1/1/1970 since the file was modified.

        @return Timestamp in milliseconds.
        @since ARP1.0
     */
     public func getDateModified() -> Int? {
          return self.dateModified
     }

     /**
        Sets the file or folder modification timestamp in milliseconds. Used internally.

        @param dateModified Timestamp of file modification or -1 if the file or folder doesn't exist.
     */
     public func setDateModified(dateModified: Int) {
          self.dateModified = dateModified
     }

     /**
        Returns the name of the file if the reference is a file or the last path element of the folder.

        @return The name of the file.
        @since ARP1.0
     */
     public func getName() -> String? {
          return self.name
     }

     /**
        Sets the name of the file. Used internally.

        @param name Name of the file or last folder path element.
     */
     public func setName(name: String) {
          self.name = name
     }

     /**
        Returns the path element of the file or folder (excluding the last path element if it's a directory).

        @return The path to the file.
        @since ARP1.0
     */
     public func getPath() -> String? {
          return self.path
     }

     /**
        Sets the path of the file or folder. Used internally.

        @param path The path element of the file or folder.
     */
     public func setPath(path: String) {
          self.path = path
     }

     /**
        Returns the resolved absolute path elements of the file and/or folders (including the last path element).

        @return The absolute path to the file.
        @since ARP1.0
     */
     public func getPathAbsolute() -> String? {
          return self.pathAbsolute
     }

     /**
        Sets the absolute path of the file or folder. Used internally.

        @param pathAbsolute String with the absolute path of file or folder.
     */
     public func setPathAbsolute(pathAbsolute: String) {
          self.pathAbsolute = pathAbsolute
     }

     /**
        Returns the size in bytes of the file or -1 if the reference is a folder.

        @return Size in bytes of file.
        @since ARP1.0
     */
     public func getSize() -> Int? {
          return self.size
     }

     /**
        Sets the file size in bytes of the file. If the file is a folder, this will be 0. If the file
doesn't exist, this will be -1. Used internally.

        @param size The size in bytes of the file.
     */
     public func setSize(size: Int) {
          self.size = size
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
