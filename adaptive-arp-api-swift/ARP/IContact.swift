/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*  Auto-generated from: me.adaptive.arp.api.IContact -> IContact.swift
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

public protocol IContact : IBasePIM {


     /**
      * Function Declarations
      */
     func getContact(contact : ContactUid, callback : IContactResultCallback)
     func getContactPhoto(contact : ContactUid, callback : IContactPhotoResultCallback)
     func getContacts(callback : IContactResultCallback)
     func getContacts(callback : IContactResultCallback, fields : [IContactFieldGroup])
     func getContacts(callback : IContactResultCallback, fields : [IContactFieldGroup], filter : [IContactFilter])
     func searchContacts(term : String, callback : IContactResultCallback)
     func searchContacts(term : String, callback : IContactResultCallback, filter : [IContactFilter])
     func setContactPhoto(contact : ContactUid, pngImage : [Byte]) -> Bool

}
