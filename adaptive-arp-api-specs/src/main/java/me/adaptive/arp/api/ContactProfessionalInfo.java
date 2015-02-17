/*
 * =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
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
 *     * Ferran Vila Conesa
 *                 <http://github.com/fnva>
 *                 <http://twitter.com/ferran_vila>
 *                 <mailto:ferran.vila.conesa@gmail.com>
 *
 *     * Aryslan
 *                 <http://github.com/Aryslan>
 *                 <http://twitter.com/Aryslan>
 *                 <mailto:ddbc@gft.com>
 *
 *     * Francisco Javier Martin Bueno
 *                 <https://github.com/kechis>
 *                 <mailto:kechis@gmail.com>
 *
 * =====================================================================================================================
 */

package me.adaptive.arp.api;

/**
 * Structure representing the professional info data elements of a contact.
 *
 * @author Francisco Javier Martin Bueno
 * @since v2.0
 */
public class ContactProfessionalInfo extends APIBean {

    /**
     * The company of the job
     */
    private String company;

    /**
     * The job title
     */
    private String jobTitle;

    /**
     * The job description
     */
    private String jobDescription;

    /**
     * Default constructor
     *
     * @since v2.0
     */
    public ContactProfessionalInfo() {
    }

    /**
     * Constructor used by implementation to set the ContactProfessionalInfo.
     *
     * @param jobTitle       The job title
     * @param jobDescription The job description
     * @param company        The company of the job
     * @since v2.0
     */
    public ContactProfessionalInfo(String jobTitle, String jobDescription, String company) {
        this.company = company;
        this.jobTitle = jobTitle;
        this.jobDescription = jobDescription;
    }

    /**
     * Returns the company of the job
     *
     * @return company
     * @since v2.0
     */
    public String getCompany() {
        return company;
    }

    /**
     * Set the company of the job
     *
     * @param company The company of the job
     * @since v2.0
     */
    public void setCompany(String company) {
        this.company = company;
    }

    /**
     * Returns the title of the job
     *
     * @return title
     * @since v2.0
     */
    public String getJobTitle() {
        return jobTitle;
    }

    /**
     * Set the title of the job
     *
     * @param jobTitle The job title
     * @since v2.0
     */
    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    /**
     * Returns the description of the job
     *
     * @return description
     * @since v2.0
     */
    public String getJobDescription() {
        return jobDescription;
    }

    /**
     * Set the description of the job
     *
     * @param jobDescription The job description
     * @since v2.0
     */
    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }

}
