//
//  Auto-generated from: me.adaptive.arp.api.ContactProfessionalInfo
//
//  ContactProfessionalInfo.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:55 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public class ContactProfessionalInfo {

     /**
      * Field Declarations
      */
     var company : String
     var jobTitle : String
     var jobDescription : String

     /**
      * Initialization
      */
     public convenience init(jobTitle : String, jobDescription : String, company : String) {
          self.init()
          self.jobTitle = jobTitle
          self.jobDescription = jobDescription
          self.company = company
     }

     public init() {
          self.company = ""
          self.jobTitle = ""
          self.jobDescription = ""
     }


     /**
      * Function Declarations
      */
     public func setCompany(company : String) {
          self.company = company
     }

     public func getJobTitle() -> String {
          return self.jobTitle
     }

     public func getCompany() -> String {
          return self.company
     }

     public func setJobTitle(jobTitle : String) {
          self.jobTitle = jobTitle
     }

     public func getJobDescription() -> String {
          return self.jobDescription
     }

     public func setJobDescription(jobDescription : String) {
          self.jobDescription = jobDescription
     }


}
