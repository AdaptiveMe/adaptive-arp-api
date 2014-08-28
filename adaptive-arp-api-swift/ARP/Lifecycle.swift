//
//  Auto-generated from: me.adaptive.arp.api.Lifecycle
//
//  Lifecycle.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:36:07 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public class Lifecycle {

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
     public init() {
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
