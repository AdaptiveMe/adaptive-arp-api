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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IFilePath.java
//
//

#include "IFile.h"
#include "IFilePath.h"
#include "IFileSystem.h"

@interface ARPIFilePath : NSObject
@end

@implementation ARPIFilePath

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "getFileSystem", NULL, "Lme.adaptive.arp.api.IFileSystem;", 0x401, NULL },
    { "isAbsolute", NULL, "Z", 0x401, NULL },
    { "getRoot", NULL, "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "getFileName", NULL, "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "getParent", NULL, "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "getNameCount", NULL, "I", 0x401, NULL },
    { "getNameWithInt:", "getName", "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "startsWithWithARPIFilePath:", "startsWith", "Z", 0x401, NULL },
    { "startsWithWithNSString:", "startsWith", "Z", 0x401, NULL },
    { "endsWithWithARPIFilePath:", "endsWith", "Z", 0x401, NULL },
    { "endsWithWithNSString:", "endsWith", "Z", 0x401, NULL },
    { "normalize", NULL, "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "resolveWithARPIFilePath:", "resolve", "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "resolveWithNSString:", "resolve", "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "resolveSiblingWithARPIFilePath:", "resolveSibling", "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "resolveSiblingWithNSString:", "resolveSibling", "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "relativizeWithARPIFilePath:", "relativize", "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "toAbsolutePath", NULL, "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "toFile", NULL, "Lme.adaptive.arp.api.IFile;", 0x401, NULL },
    { "equalPathWithARPIFilePath:", "equalPath", "Z", 0x401, NULL },
    { "description", "toString", "Ljava.lang.String;", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIFilePath = { "IFilePath", "me.adaptive.arp.api", NULL, 0x201, 21, methods, 0, NULL, 0, NULL};
  return &_ARPIFilePath;
}

@end
