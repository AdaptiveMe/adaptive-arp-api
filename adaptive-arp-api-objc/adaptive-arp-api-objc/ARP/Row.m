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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/Row.java
//
//

#include "IOSObjectArray.h"
#include "Row.h"

@implementation ARPRow

- (id)initWithNSObjectArray:(IOSObjectArray *)values {
  if (self = [super init]) {
    self->values_ = values;
  }
  return self;
}

- (IOSObjectArray *)getValues {
  return values_;
}

- (void)setValuesWithNSObjectArray:(IOSObjectArray *)values {
  self->values_ = values;
}

- (void)copyAllFieldsTo:(ARPRow *)other {
  [super copyAllFieldsTo:other];
  other->values_ = values_;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "initWithNSObjectArray:", "Row", NULL, 0x1, NULL },
    { "getValues", NULL, "[Ljava.lang.Object;", 0x1, NULL },
    { "setValuesWithNSObjectArray:", "setValues", "V", 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "values_", NULL, 0x2, "[Ljava.lang.Object;", NULL,  },
  };
  static J2ObjcClassInfo _ARPRow = { "Row", "me.adaptive.arp.api", NULL, 0x1, 3, methods, 1, fields, 0, NULL};
  return &_ARPRow;
}

@end
