/**
--| ADAPTIVE RUNTIME PLATFORM |----------------------------------------------------------------------------------------

(C) Copyright 2013-2015 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the
License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless required by appli-
-cable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,  WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the  License  for the specific language governing
permissions and limitations under the License.

Original author:

    * Carlos Lozano Diez
            <http://github.com/carloslozano>
            <http://twitter.com/adaptivecoder>
            <mailto:carlos@adaptive.me>

Contributors:

    * See source code files for contributors.

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

/**
Structure representing the data elements of an email.

@author Carlos Lozano Diez
@since 1.0
@version 1.0
*/
public class Email : NSObject {

     /**
        Array of attatchments
     */
     var attachmentData : [AttachmentData]?
     /**
        Array of Email Blind Carbon Copy recipients
     */
     var bccRecipients : [EmailAddress]?
     /**
        Array of Email Carbon Copy recipients
     */
     var ccRecipients : [EmailAddress]?
     /**
        Message body
     */
     var messageBody : String?
     /**
        Message body mime type
     */
     var messageBodyMimeType : String?
     /**
        Subject of the email
     */
     var subject : String?
     /**
        Array of Email recipients
     */
     var toRecipients : [EmailAddress]?

}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
