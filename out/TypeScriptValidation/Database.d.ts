/// <reference path="APIBean.d.ts" />
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
declare module Adaptive {
    /**
       Structure representing a database reference.

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    class Database extends APIBean {
        /**
           Indicates if database was created or needs to be created as Compressed.
        */
        compress: boolean;
        /**
           Database Name (name of the .db local file).
        */
        name: string;
        /**
           Constructor using fields.

           @param name     Name of the DatabaseTable.
           @param compress Compression enabled.
           @since ARP1.0
        */
        constructor(name: string, compress: boolean);
        /**
           Returns if the table is compressed

           @return Compression enabled
           @since ARP1.0
        */
        getCompress(): boolean;
        /**
           Sets if the table is compressed or not.

           @param compress Compression enabled
           @since ARP1.0
        */
        setCompress(compress: boolean): void;
        /**
           Returns the name.

           @return The name of the table.
           @since ARP1.0
        */
        getName(): string;
        /**
           Sets the name of the table.

           @param name The name of the table.
           @since ARP1.0
        */
        setName(name: string): void;
    }
}
