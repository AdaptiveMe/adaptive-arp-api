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
   Structure representing the professional info data elements of a contact.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class ContactProfessionalInfo : NSObject {

     /**
        The company of the job
     */
     var company : String?
     /**
        The job description
     */
     var jobDescription : String?
     /**
        The job title
     */
     var jobTitle : String?

     /**
        Constructor used by the implementation
     */
     public override init() {
          super.init()
     }

     /**
        Constructor used by implementation to set the ContactProfessionalInfo.

        @param jobTitle
        @param jobDescription
        @param company
        @since ARP1.0
     */
     public init(jobTitle: String, jobDescription: String, company: String) {
          super.init()
          self.jobTitle = jobTitle
          self.jobDescription = jobDescription
          self.company = company
     }

     /**
        Returns the company of the job

        @return company
        @since ARP1.0
     */
     public func getCompany() -> String? {
          return self.company
     }

     /**
        Set the company of the job

        @param company
        @since ARP1.0
     */
     public func setCompany(company: String) {
          self.company = company
     }

     /**
        Returns the description of the job

        @return description
        @since ARP1.0
     */
     public func getJobDescription() -> String? {
          return self.jobDescription
     }

     /**
        Set the description of the job

        @param jobDescription
        @since ARP1.0
     */
     public func setJobDescription(jobDescription: String) {
          self.jobDescription = jobDescription
     }

     /**
        Returns the title of the job

        @return title
        @since ARP1.0
     */
     public func getJobTitle() -> String? {
          return self.jobTitle
     }

     /**
        Set the title of the job

        @param jobTitle
        @since ARP1.0
     */
     public func setJobTitle(jobTitle: String) {
          self.jobTitle = jobTitle
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
