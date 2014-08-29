//
//  Auto-generated from: me.adaptive.arp.api.Lifecycle
//
//  Lifecycle.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

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
