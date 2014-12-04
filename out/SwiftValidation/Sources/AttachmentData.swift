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

     /**
        Convenience constructor.
     */
     public override init() {
     }

     /**
        Constructor used by the implementation

        @param data         raw data of the file attachment
        @param dataSize     size of the file attachment
        @param fileName     name of the file attachment
        @param mimeType     mime type of the file attachment
        @param referenceUrl relative url of the file attachment
        @since ARP1.0
     */
     public convenience init(data: [Byte], dataSize: Int64, fileName: String, mimeType: String, referenceUrl: String) {
          self.init()
          self.data = data
          self.dataSize = dataSize
          self.fileName = fileName
          self.mimeType = mimeType
          self.referenceUrl = referenceUrl
     }

     /**
        Returns the raw data in byte[]

        @return data Octet-binary content of the attachment payload.
        @since ARP1.0
     */
     public func getData() -> [Byte]? {
          return self.data
     }

     /**
        Set the data of the attachment as a byte[]

        @param data Sets the octet-binary content of the attachment.
        @since ARP1.0
     */
     public func setData(data: [Byte]) {
          self.data = data
     }

     /**
        Returns the size of the attachment as a long

        @return dataSize Length in bytes of the octet-binary content.
        @since ARP1.0
     */
     public func getDataSize() -> Int64? {
          return self.dataSize
     }

     /**
        Set the size of the attachment as a long

        @param dataSize Length in bytes of the octet-binary content ( should be same as data array length.)
        @since ARP1.0
     */
     public func setDataSize(dataSize: Int64) {
          self.dataSize = dataSize
     }

     /**
        Returns the filename of the attachment

        @return fileName Name of the attachment.
        @since ARP1.0
     */
     public func getFileName() -> String? {
          return self.fileName
     }

     /**
        Set the name of the file attachment

        @param fileName Name of the attachment.
        @since ARP1.0
     */
     public func setFileName(fileName: String) {
          self.fileName = fileName
     }

     /**
        Returns the mime type of the attachment

        @return mimeType
        @since ARP1.0
     */
     public func getMimeType() -> String? {
          return self.mimeType
     }

     /**
        Set the mime type of the attachment

        @param mimeType Mime-type of the attachment.
        @since ARP1.0
     */
     public func setMimeType(mimeType: String) {
          self.mimeType = mimeType
     }

     /**
        Returns the absolute url of the file attachment

        @return referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
        @since ARP1.0
     */
     public func getReferenceUrl() -> String? {
          return self.referenceUrl
     }

     /**
        Set the absolute url of the attachment

        @param referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
        @since ARP1.0
     */
     public func setReferenceUrl(referenceUrl: String) {
          self.referenceUrl = referenceUrl
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
