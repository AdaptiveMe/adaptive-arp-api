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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/Table.java
//
//

#ifndef _ARPTable_H_
#define _ARPTable_H_

@class IOSObjectArray;

#import "JreEmulation.h"

@interface ARPTable : NSObject {
 @public
  NSString *name_;
  int columnCount_;
  int rowCount_;
  IOSObjectArray *columns_;
  IOSObjectArray *rows_;
}

- (id)initWithNSString:(NSString *)name;

- (NSString *)getName;

- (void)setNameWithNSString:(NSString *)name;

- (int)getColumnCount;

- (void)setColumnCountWithInt:(int)columnCount;

- (int)getRowCount;

- (void)setRowCountWithInt:(int)rowCount;

- (IOSObjectArray *)getColumns;

- (void)setColumnsWithARPColumnArray:(IOSObjectArray *)columns;

- (IOSObjectArray *)getRows;

- (void)setRowsWithARPRowArray:(IOSObjectArray *)rows;

- (void)copyAllFieldsTo:(ARPTable *)other;

@end

__attribute__((always_inline)) inline void ARPTable_init() {}

J2OBJC_FIELD_SETTER(ARPTable, name_, NSString *)
J2OBJC_FIELD_SETTER(ARPTable, columns_, IOSObjectArray *)
J2OBJC_FIELD_SETTER(ARPTable, rows_, IOSObjectArray *)

typedef ARPTable MeAdaptiveArpApiTable;

#endif // _ARPTable_H_
