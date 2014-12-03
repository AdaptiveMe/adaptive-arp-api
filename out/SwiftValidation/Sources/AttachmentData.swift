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
Structure representing the binary attachment data.

@author Carlos Lozano Diez
@since 1.0
@version 1.0
*/
public class AttachmentData : NSObject {

     /**
        The raw data for the current file attachment (byte array)
     */
     var data : [Byte]?
     /**
        The data size (in bytes) of the current file attachment
     */
     var dataSize : Int64?
     /**
        The name of the current file attachment
     */
     var fileName : String?
     /**
        The mime type of the current attachment
     */
     var mimeType : String?
     /**
        The relative path where the contents for the attachment file could be located.
     */
     var referenceUrl : String?

}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
