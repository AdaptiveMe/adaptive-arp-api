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

///<reference path="IAppResourceFormat.ts"/>
///<reference path="IAppResourcePayload.ts"/>
///<reference path="IAppResourceType.ts"/>

module Adaptive {

     /**
        Created by clozano on 05/09/2014.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export interface IAppResource {
          /**
             null
          */
          geType() : IAppResourcePayload;
          /**
             null
          */
          getData() : Array<number>;
          /**
             null
          */
          getDataPathLinked() : string;
          /**
             null
          */
          getDataStored() : Array<number>;
          /**
             null
          */
          getFormat() : IAppResourceFormat;
          /**
             null
          */
          getMd5() : string;
          /**
             null
          */
          getMimetype() : string;
          /**
             null
          */
          getName() : string;
          /**
             null
          */
          getPath() : string;
          /**
             null
          */
          getSize() : number;
          /**
             null
          */
          getSizeStored() : number;
          /**
             null
          */
          getTimestamp() : number;
          /**
             null
          */
          getType() : IAppResourceType;
          /**
             null
          */
          getUuid() : string;
     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
