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

#import <EmailAttachmentData.h>

/**

@author Francisco Javier Martin Bueno
@since ARP1.0
@version 1.0
*/
@implementation EmailAttachmentData


     /**
        Default Constructor

        @since ARP1.0
     */
     - (id) init {
          self = [self init];
          return self;
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
     - (id) initWithDataSizeFileNameMimeTypeReferenceUrl:(NSArray*)data size:(long*)size fileName:(NSString*)fileName mimeType:(NSString*)mimeType referenceUrl:(NSString*)referenceUrl {
          self = [self init];
          if (self) {
               [self setData:data];
               [self setSize:size];
               [self setFileName:fileName];
               [self setMimeType:mimeType];
               [self setReferenceUrl:referenceUrl];
          }
          return self;
     }



@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
