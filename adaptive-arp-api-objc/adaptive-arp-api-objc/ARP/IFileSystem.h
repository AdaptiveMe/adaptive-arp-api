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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IFileSystem.java
//
//

#ifndef _ARPIFileSystem_H_
#define _ARPIFileSystem_H_

@protocol ARPIFile;
@protocol ARPIFilePath;
@protocol ARPIFileResultCallback;

#import "JreEmulation.h"
#include "IBaseData.h"

@protocol ARPIFileSystem < ARPIBaseData, NSObject, JavaObject >
- (unichar)getSeparator;

- (NSString *)getPathWithARPIFilePath:(id<ARPIFilePath>)path;

- (NSString *)getPathWithARPIFile:(id<ARPIFile>)file;

- (BOOL)isSameFileWithARPIFile:(id<ARPIFile>)source
                  withARPIFile:(id<ARPIFile>)dest;

- (BOOL)isSamePathWithARPIFilePath:(id<ARPIFilePath>)source
                  withARPIFilePath:(id<ARPIFilePath>)dest;

- (void)createWithNSString:(NSString *)name
withARPIFileResultCallback:(id<ARPIFileResultCallback>)callback;

- (void)createWithNSString:(NSString *)path
              withNSString:(NSString *)name
withARPIFileResultCallback:(id<ARPIFileResultCallback>)callback;

- (void)createWithARPIFilePath:(id<ARPIFilePath>)path
                  withNSString:(NSString *)name
    withARPIFileResultCallback:(id<ARPIFileResultCallback>)callback;

- (id<ARPIFilePath>)toPathWithARPIFile:(id<ARPIFile>)path;

- (id<ARPIFilePath>)getApplicationFolder;

- (id<ARPIFilePath>)getApplicationCacheFolder;

- (id<ARPIFilePath>)getApplicationDocumentsFolder;

@end

__attribute__((always_inline)) inline void ARPIFileSystem_init() {}

#define MeAdaptiveArpApiIFileSystem ARPIFileSystem

#endif // _ARPIFileSystem_H_
