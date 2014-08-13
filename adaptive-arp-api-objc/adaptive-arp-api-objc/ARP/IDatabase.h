/*
 * =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
 *
 * (C) Copyright 2013-2014 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 * Original author:
 *
 *     * Carlos Lozano Diez
 *                 <http://github.com/carloslozano>
 *                 <http://twitter.com/adaptivecoder>
 *                 <mailto:carlos@adaptive.me>
 *
 * Contributors:
 *
 *     *
 *
 * =====================================================================================================================
 */

//
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IDatabase.java
//
//

#ifndef _ARPIDatabase_H_
#define _ARPIDatabase_H_

@class ARPDatabase;
@class ARPTable;
@class IOSObjectArray;
@protocol ARPIDatabaseResultCallback;
@protocol ARPITableResultCallback;

#import "JreEmulation.h"
#include "IBaseData.h"

@protocol ARPIDatabase < ARPIBaseData, NSObject, JavaObject >
- (void)createDatabaseWithARPDatabase:(ARPDatabase *)database
       withARPIDatabaseResultCallback:(id<ARPIDatabaseResultCallback>)callback;

- (void)deleteDatabaseWithARPDatabase:(ARPDatabase *)database
       withARPIDatabaseResultCallback:(id<ARPIDatabaseResultCallback>)callback;

- (BOOL)existsDatabaseWithARPDatabase:(ARPDatabase *)database;

- (void)getDatabaseWithARPDatabase:(ARPDatabase *)database
    withARPIDatabaseResultCallback:(id<ARPIDatabaseResultCallback>)callback;

- (void)createTableWithARPDatabase:(ARPDatabase *)database
                      withARPTable:(ARPTable *)table
       withARPITableResultCallback:(id<ARPITableResultCallback>)callback;

- (void)deleteTableWithARPDatabase:(ARPDatabase *)database
                      withARPTable:(ARPTable *)table
       withARPITableResultCallback:(id<ARPITableResultCallback>)callback;

- (BOOL)existsTableWithARPDatabase:(ARPDatabase *)database
                      withARPTable:(ARPTable *)table;

- (void)executeSqlQueryWithARPDatabase:(ARPDatabase *)database
                          withNSString:(NSString *)query
                     withNSStringArray:(IOSObjectArray *)replacements
           withARPITableResultCallback:(id<ARPITableResultCallback>)callback;

- (void)executeSqlStatementWithARPDatabase:(ARPDatabase *)database
                              withNSString:(NSString *)statement
                         withNSStringArray:(IOSObjectArray *)replacements
               withARPITableResultCallback:(id<ARPITableResultCallback>)callback;

- (void)executeSqlTransactionsWithARPDatabase:(ARPDatabase *)database
                            withNSStringArray:(IOSObjectArray *)statements
                                  withBoolean:(BOOL)rollbackFlag
                  withARPITableResultCallback:(id<ARPITableResultCallback>)callback;

@end

__attribute__((always_inline)) inline void ARPIDatabase_init() {}

#define MeAdaptiveArpApiIDatabase ARPIDatabase

#endif // _ARPIDatabase_H_
