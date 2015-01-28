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

    * @version v2.0.4

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <APIBean.h>
#import <Foundation/Foundation.h>

/**
Structure representing a database reference.

@author Ferran Vila Conesa
@since ARP1.0
@version 1.0
*/
@interface Database : APIBean

     /**
        Indicates if database was created or needs to be created as Compressed.
     */
     @property bool *compress;
     /**
        Database Name (name of the .db local file).
     */
     @property NSString *name;

     /**
        Default constructor

        @since ARP1.0
     */
     - (id) init;

     /**
        Default constructor. The compress param is setted to false.

        @param name Name of the table.
        @since ARP1.0
     */
     - (id) initWithName:(NSString*)name;

     /**
        Constructor using fields.

        @param name     Name of the DatabaseTable.
        @param compress Compression enabled.
        @since ARP1.0
     */
     - (id) initWithNameCompress:(NSString*)name compress:(bool*)compress;


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
