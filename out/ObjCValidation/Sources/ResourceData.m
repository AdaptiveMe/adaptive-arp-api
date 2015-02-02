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

#import <ResourceData.h>

/**

@author Carlos Lozano Diez
@since v2.1.3
@version 1.0
*/
@implementation ResourceData


     /**
        Default constructor.

        @since v2.1.3
     */
     - (id) init {
          self = [self init];
          return self;
     }

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
     - (id) initWithIdDataRawTypeRawLengthCookedCookedTypeCookedLength:(NSString*)id data:(NSArray*)data rawType:(NSString*)rawType rawLength:(long*)rawLength cooked:(bool*)cooked cookedType:(NSString*)cookedType cookedLength:(long*)cookedLength {
          self = [self init];
          if (self) {
               [self setId:id];
               [self setData:data];
               [self setRawType:rawType];
               [self setRawLength:rawLength];
               [self setCooked:cooked];
               [self setCookedType:cookedType];
               [self setCookedLength:cookedLength];
          }
          return self;
     }



@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
