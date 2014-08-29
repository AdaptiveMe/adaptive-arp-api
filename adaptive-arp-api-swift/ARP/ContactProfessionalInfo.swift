//
//  Auto-generated from: me.adaptive.arp.api.ContactProfessionalInfo
//
//  ContactProfessionalInfo.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

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
     public func getCompany() -> String {
          return self.company
     }

     public func setCompany(company : String) {
          self.company = company
     }

     public func getJobTitle() -> String {
          return self.jobTitle
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
