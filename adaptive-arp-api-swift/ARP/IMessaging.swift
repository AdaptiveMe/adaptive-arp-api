//
//  Auto-generated from: me.adaptive.arp.api.IMessaging
//
//  IMessaging.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IMessaging : IBasePIM {


     /**
      * Function Declarations
      */
     func sendEmail(data : Email, callback : IMessagingCallback)
     func sendSMS(number : String, text : String, callback : IMessagingCallback)

}
