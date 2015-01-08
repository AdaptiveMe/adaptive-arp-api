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

package me.adaptive.arp.api;

/**
   Structure representing the binary attachment data.

   @author Francisco Javier Martin Bueno
   @since ARP1.0
   @version 1.0
*/
public class EmailAttachmentData extends APIBean {

     /**
        The raw data for the current file attachment (byte array)
     */
     private byte[] data;
     /**
        The name of the current file attachment
     */
     private String fileName;
     /**
        The mime type of the current attachment
     */
     private String mimeType;
     /**
        The relative path where the contents for the attachment file could be located.
     */
     private String referenceUrl;
     /**
        The data size (in bytes) of the current file attachment
     */
     private long size;

     /**
        Default Constructor

        @since ARP1.0
     */
     public EmailAttachmentData() {
     }

     /**
        Constructor with fields

        @param data         raw data of the file attachment
        @param size         size of the file attachment
        @param fileName     name of the file attachment
        @param mimeType     mime type of the file attachment
        @param referenceUrl relative url of the file attachment
        @since ARP1.0
     */
     public EmailAttachmentData(byte[] data, long size, String fileName, String mimeType, String referenceUrl) {
          super();
          this.data = data;
          this.size = size;
          this.fileName = fileName;
          this.mimeType = mimeType;
          this.referenceUrl = referenceUrl;
     }

     /**
        Returns the raw data in byte[]

        @return data Octet-binary content of the attachment payload.
        @since ARP1.0
     */
     public byte[] getData() {
          return this.data;
     }

     /**
        Set the data of the attachment as a byte[]

        @param data Sets the octet-binary content of the attachment.
        @since ARP1.0
     */
     public void setData(byte[] data) {
          this.data = data;
     }

     /**
        Returns the filename of the attachment

        @return fileName Name of the attachment.
        @since ARP1.0
     */
     public String getFileName() {
          return this.fileName;
     }

     /**
        Set the name of the file attachment

        @param fileName Name of the attachment.
        @since ARP1.0
     */
     public void setFileName(String fileName) {
          this.fileName = fileName;
     }

     /**
        Returns the mime type of the attachment

        @return mimeType
        @since ARP1.0
     */
     public String getMimeType() {
          return this.mimeType;
     }

     /**
        Set the mime type of the attachment

        @param mimeType Mime-type of the attachment.
        @since ARP1.0
     */
     public void setMimeType(String mimeType) {
          this.mimeType = mimeType;
     }

     /**
        Returns the absolute url of the file attachment

        @return referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
        @since ARP1.0
     */
     public String getReferenceUrl() {
          return this.referenceUrl;
     }

     /**
        Set the absolute url of the attachment

        @param referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
        @since ARP1.0
     */
     public void setReferenceUrl(String referenceUrl) {
          this.referenceUrl = referenceUrl;
     }

     /**
        Returns the size of the attachment as a long

        @return size Length in bytes of the octet-binary content.
        @since ARP1.0
     */
     public long getSize() {
          return this.size;
     }

     /**
        Set the size of the attachment as a long

        @param size Length in bytes of the octet-binary content ( should be same as data array length.)
        @since ARP1.0
     */
     public void setSize(long size) {
          this.size = size;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
