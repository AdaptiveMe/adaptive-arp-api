/// <reference path="IAppResourceFormat.d.ts" />
/// <reference path="IAppResourcePayload.d.ts" />
/// <reference path="IAppResourceType.d.ts" />
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

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       This interface manages the application resources on the bundle

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    interface IAppResource {
        /**
           Returns the payload of the resource decripted
           @return Payload
           @since ARP1.0
        */
        getData(): number[];
        /**
           Returns the data path of the resource
           @return The data path of the resource
           @since ARP1.0
        */
        getDataPathLinked(): string;
        /**
           Returns the stored payload of the resource
           @return Stored payload
           @since ARP1.0
        */
        getDataStored(): number[];
        /**
           Returns the format of the resource
           @return Format of the resource
           @since ARP1.0
        */
        getFormat(): IAppResourceFormat;
        /**
           Returns the MD5 encoding of the resource
           @return MD5 encoding of the resource
           @since ARP1.0
        */
        getMd5(): string;
        /**
           Returns the Mime-Type of the resource
           @return The mime-type
           @since ARP1.0
        */
        getMimetype(): string;
        /**
           Returns the name of the resource
           @return Name of the resource
           @since ARP1.0
        */
        getName(): string;
        /**
           Returns the path of the resource
           @return Path of the resource
           @since ARP1.0
        */
        getPath(): string;
        /**
           Returns the payload type of the resource
           @return Payload type
           @since ARP1.0
        */
        getPayloadType(): IAppResourcePayload;
        /**
           Returns the size of the resource
           @return Size of the resource
           @since ARP1.0
        */
        getSize(): number;
        /**
           Returns the Size of the stored resource
           @return Size of the Stored Resource
           @since ARP1.0
        */
        getSizeStored(): number;
        /**
           Returns the timestamp of the resource
           @return Timestamp of the resource
           @since ARP1.0
        */
        getTimestamp(): number;
        /**
           Returns the type of the resource
           @return Type of the resource
           @since ARP1.0
        */
        getType(): IAppResourceType;
        /**
           Returns the unique identifier of the resource
           @return Unique Identifier
           @since ARP1.0
        */
        getUuid(): string;
    }
}
