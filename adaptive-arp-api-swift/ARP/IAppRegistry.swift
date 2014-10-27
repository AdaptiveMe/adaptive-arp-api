/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.IAppRegistry -> IAppRegistry.swift
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

import Foundation

public protocol IAppRegistry : IAdaptiveRP {


     /**
      * Function Declarations
      */
     func getApplicationAnalytics() -> IAnalytics?
     func getApplicationGlobalization() -> IGlobalization?
     func getApplicationLifecycle() -> ILifecycle?
     func getApplicationManagement() -> IManagement?
     func getApplicationPrinting() -> IPrinting?
     func getApplicationSettings() -> ISettings?
     func getApplicationUpdate() -> IUpdate?
     func getPlatformContext() -> IAppContext?
     func getPlatformContextWeb() -> IAppContextWebview?
     func getPlatformResourceHandler() -> IAppResourceHandler?
     func getSystemCapabilities() -> ICapabilities?
     func getSystemDevice() -> IDevice?
     func getSystemDisplay() -> IDisplay?
     func getSystemOS() -> IOS?
     func getSystemRuntime() -> IRuntime?

}
