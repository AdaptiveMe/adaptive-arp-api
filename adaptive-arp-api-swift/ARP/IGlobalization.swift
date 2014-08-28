//
//  Auto-generated from: me.adaptive.arp.api.IGlobalization
//
//  IGlobalization.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:55 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol IGlobalization : IBaseApplication {


     /**
      * Function Declarations
      */
     func getLocaleSupportedDescriptors() -> [String]
     func getResourceLiteral(key : String, locale : Locale) -> String
     func getResourceLiterals(locale : Locale) -> Map

}
