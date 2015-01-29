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
#import <DatabaseColumn.h>
#import <DatabaseRow.h>
#import <Foundation/Foundation.h>

/**
Represents a data table composed of databaseColumns and databaseRows.

@author Ferran Vila Conesa
@since ARP 2.0
@version 1.0
*/
@interface DatabaseTable : APIBean

     /**
        Number of databaseColumns.
     */
     @property int *columnCount;
     /**
        Definition of databaseColumns.
        Array objects must be of DatabaseColumn type.
     */
     @property NSArray *databaseColumns;
     /**
        Rows of the table containing the data.
        Array objects must be of DatabaseRow type.
     */
     @property NSArray *databaseRows;
     /**
        Name of the table.
     */
     @property NSString *name;
     /**
        Number of databaseRows.
     */
     @property int *rowCount;

     /**
        Default constructor

        @since ARP 2.0
     */
     - (id) init;

     /**
        Constructor by default

        @param name The name of the table
        @since ARP 2.0
     */
     - (id) initWithName:(NSString*)name;

     /**
        Constructor using fields

        @param name            The name of the table
        @param columnCount     The number of databaseColumns
        @param rowCount        The number of databaseRows
        @param databaseColumns The databaseColumns of the table
        @param databaseRows    The databaseRows of the table
        @since ARP 2.0
     */
     - (id) initWithNameColumnCountRowCountDatabaseColumnsDatabaseRows:(NSString*)name columnCount:(int*)columnCount rowCount:(int*)rowCount databaseColumns:(NSArray*)databaseColumns databaseRows:(NSArray*)databaseRows;


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
