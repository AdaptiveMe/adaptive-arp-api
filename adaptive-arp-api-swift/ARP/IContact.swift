//
//  Auto-generated from: me.adaptive.arp.api.IContact
//
//  IContact.swift
//
//  Created by Carlos Lozano Diez on 28 Aug 2014 23:22:55 GMT.
//  Copyright (c) 2014 Carlos Lozano Diez. All rights reserved.
//

import Foundation

public protocol IContact : IBasePIM {


     /**
      * Function Declarations
      */
     func searchContacts(term : String, callback : IContactResultCallback)
     func searchContacts(term : String, callback : IContactResultCallback, filter : [Filter])
     func getContact(contact : ContactUid, callback : IContactResultCallback)
     func getContactPhoto(contact : ContactUid, callback : IContactPhotoResultCallback)
     func setContactPhoto(contact : ContactUid, pngImage : [Byte]) -> Bool
     func getContacts(callback : IContactResultCallback)
     func getContacts(callback : IContactResultCallback, fields : [FieldGroup])
     func getContacts(callback : IContactResultCallback, fields : [FieldGroup], filter : [Filter])

}
