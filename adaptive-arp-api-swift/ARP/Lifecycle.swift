/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.Lifecycle -> Lifecycle.swift
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

public class Lifecycle : NSObject  {

     /**
      * Field Declarations
      */
     var state : State?

     /**
      * Enumeration Declarations
      */
     public enum State {
          case Starting, Started, Running, Paused, PausedIdle, PausedRun, Resuming, Stopping
     }

     /**
      * Initialization
      */
     public override init() {
          self.state = nil
     }

     public convenience init(state : State) {
          self.init()
          self.state = state
     }


     /**
      * Function Declarations
      */
     public func getState() -> State {
          return self.state!
     }

     public func setState(state : State) {
          self.state = state
     }


}
