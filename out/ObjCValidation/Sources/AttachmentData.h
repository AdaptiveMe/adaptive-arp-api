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

#import <Foundation/Foundation.h>

/**
Structure representing the binary attachment data.

@author Carlos Lozano Diez
@since 1.0
@version 1.0
*/
@interface AttachmentData : NSObject

     /**
        The raw data for the current file attachment (byte array)
        Array objects must be of byte type.
     */
     @property NSArray *data;
     /**
        The data size (in bytes) of the current file attachment
     */
     @property long *dataSize;
     /**
        The name of the current file attachment
     */
     @property NSString *fileName;
     /**
        The mime type of the current attachment
     */
     @property NSString *mimeType;
     /**
        The relative path where the contents for the attachment file could be located.
     */
     @property NSString *referenceUrl;

     /**
        Convenience constructor.
     */
     - (id) init;

     /**
        Constructor used by the implementation

        @param data         raw data of the file attachment
        @param dataSize     size of the file attachment
        @param fileName     name of the file attachment
        @param mimeType     mime type of the file attachment
        @param referenceUrl relative url of the file attachment
        @since ARP1.0
     */
     - (id) initWithDataDataSizeFileNameMimeTypeReferenceUrl:(NSArray*)data dataSize:(long*)dataSize fileName:(NSString*)fileName mimeType:(NSString*)mimeType referenceUrl:(NSString*)referenceUrl;


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
