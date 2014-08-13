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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/Table.java
//
//

#include "IOSObjectArray.h"
#include "Table.h"

@implementation ARPTable

- (id)initWithNSString:(NSString *)name {
  if (self = [super init]) {
    self->name_ = name;
  }
  return self;
}

- (NSString *)getName {
  return name_;
}

- (void)setNameWithNSString:(NSString *)name {
  self->name_ = name;
}

- (int)getColumnCount {
  return columnCount_;
}

- (void)setColumnCountWithInt:(int)columnCount {
  self->columnCount_ = columnCount;
}

- (int)getRowCount {
  return rowCount_;
}

- (void)setRowCountWithInt:(int)rowCount {
  self->rowCount_ = rowCount;
}

- (IOSObjectArray *)getColumns {
  return columns_;
}

- (void)setColumnsWithARPColumnArray:(IOSObjectArray *)columns {
  self->columns_ = columns;
}

- (IOSObjectArray *)getRows {
  return rows_;
}

- (void)setRowsWithARPRowArray:(IOSObjectArray *)rows {
  self->rows_ = rows;
}

- (void)copyAllFieldsTo:(ARPTable *)other {
  [super copyAllFieldsTo:other];
  other->columnCount_ = columnCount_;
  other->columns_ = columns_;
  other->name_ = name_;
  other->rowCount_ = rowCount_;
  other->rows_ = rows_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithNSString:", "Table", NULL, 0x1, NULL },
    { "getName", NULL, "Ljava.lang.String;", 0x1, NULL },
    { "setNameWithNSString:", "setName", "V", 0x1, NULL },
    { "getColumnCount", NULL, "I", 0x1, NULL },
    { "setColumnCountWithInt:", "setColumnCount", "V", 0x1, NULL },
    { "getRowCount", NULL, "I", 0x1, NULL },
    { "setRowCountWithInt:", "setRowCount", "V", 0x1, NULL },
    { "getColumns", NULL, "[Lme.adaptive.arp.api.Column;", 0x1, NULL },
    { "setColumnsWithARPColumnArray:", "setColumns", "V", 0x1, NULL },
    { "getRows", NULL, "[Lme.adaptive.arp.api.Row;", 0x1, NULL },
    { "setRowsWithARPRowArray:", "setRows", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "name_", NULL, 0x2, "Ljava.lang.String;", NULL,  },
    { "columnCount_", NULL, 0x2, "I", NULL,  },
    { "rowCount_", NULL, 0x2, "I", NULL,  },
    { "columns_", NULL, 0x2, "[Lme.adaptive.arp.api.Column;", NULL,  },
    { "rows_", NULL, 0x2, "[Lme.adaptive.arp.api.Row;", NULL,  },
  };
  static J2ObjcClassInfo _ARPTable = { "Table", "me.adaptive.arp.api", NULL, 0x1, 11, methods, 5, fields, 0, NULL};
  return &_ARPTable;
}

@end
