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

    * @version v2.1.2

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <Foundation/Foundation.h>

/**
This class represents a resource provided by the platform from the application's secure payload.

@author Carlos Lozano Diez
@since v2.1.3
@version 1.0
*/
@interface ResourceData : NSObject

     /**
        Marker to indicate whether the resource is cooked in some way (compressed, encrypted, etc.) If true, the
implementation must uncompress/unencrypt following the cookedType recipe specified by the payload.
     */
     @property bool *cooked;
     /**
        This is the length of the payload after cooking. In general, this length indicates the amount
of space saved with regard to the rawLength of the payload.
     */
     @property long *cookedLength;
     /**
        If the data is cooked, this field should contain the recipe to return the cooked data to its original
uncompressed/unencrypted/etc format.
     */
     @property NSString *cookedType;
     /**
        The payload data of the resource in ready to consume format.
        Array objects must be of byte type.
     */
     @property NSArray *data;
     /**
        The id or path identifier of the resource.
     */
     @property NSString *id;
     /**
        The raw length of the payload before any cooking occurred. This is equivalent to the size of the resource
after uncompressing and unencrypting.
     */
     @property long *rawLength;
     /**
        The raw type of the payload - this is equivalent to the mimetype of the content.
     */
     @property NSString *rawType;

     /**
        Default constructor.

        @since v2.1.3
     */
     - (id) init;

     /**
        Convenience constructor.

        @param id           The id or path of the resource retrieved.
        @param data         The payload data of the resource (uncooked).
        @param rawType      The raw type/mimetype of the resource.
        @param rawLength    The raw length/original length in bytes of the resource.
        @param cooked       True if the resource is cooked.
        @param cookedType   Type of recipe used for cooking.
        @param cookedLength The cooked length in bytes of the resource.
        @since v2.1.3
     */
     - (id) initWithIdDataRawTypeRawLengthCookedCookedTypeCookedLength:(NSString*)id data:(NSArray*)data rawType:(NSString*)rawType rawLength:(long*)rawLength cooked:(bool*)cooked cookedType:(NSString*)cookedType cookedLength:(long*)cookedLength;


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
