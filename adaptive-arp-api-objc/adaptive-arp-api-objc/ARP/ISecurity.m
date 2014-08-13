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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/ISecurity.java
//
//

#include "IOSObjectArray.h"
#include "ISecureKVResultCallback.h"
#include "ISecurity.h"

@interface ARPISecurity : NSObject
@end

@implementation ARPISecurity

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "isDeviceModified", NULL, "Z", 0x401, NULL },
    { "setSecureKeyValuePairsWithARPSecureKeyPairArray:withNSString:withARPISecureKVResultCallback:", "setSecureKeyValuePairs", "V", 0x401, NULL },
    { "getSecureKeyValuePairsWithNSStringArray:withNSString:withARPISecureKVResultCallback:", "getSecureKeyValuePairs", "V", 0x401, NULL },
    { "deleteSecureKeyValuePairsWithNSStringArray:withNSString:withARPISecureKVResultCallback:", "deleteSecureKeyValuePairs", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPISecurity = { "ISecurity", "me.adaptive.arp.api", NULL, 0x201, 4, methods, 0, NULL, 0, NULL};
  return &_ARPISecurity;
}

@end
