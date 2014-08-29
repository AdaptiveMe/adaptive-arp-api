//
//  Auto-generated from: me.adaptive.arp.api.IContact
//
//  IContact.swift
//
//  Released under Apache Public License v2.0
//
//  -----------| aut viam inveniam aut faciam |-----------
//   Copyright (c) 2014 Carlos Lozano Diez ta Adaptive.me
//   All rights reserved.                 www.adaptive.me
//  ------------------------------------------------------

import Foundation

public protocol IContact : IBasePIM {


     /**
      * Function Declarations
      */
     func searchContacts(term : String, callback : IContactResultCallback)
     func searchContacts(term : String, callback : IContactResultCallback, filter : [IContactFilter])
     func getContact(contact : ContactUid, callback : IContactResultCallback)
     func getContactPhoto(contact : ContactUid, callback : IContactPhotoResultCallback)
     func setContactPhoto(contact : ContactUid, pngImage : [Byte]) -> Bool
     func getContacts(callback : IContactResultCallback)
     func getContacts(callback : IContactResultCallback, fields : [IContactFieldGroup])
     func getContacts(callback : IContactResultCallback, fields : [IContactFieldGroup], filter : [IContactFilter])

}
