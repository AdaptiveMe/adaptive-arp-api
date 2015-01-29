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
 * Structure representing the data elements of an email.
 *
 * @author Francisco Javier Martin Bueno
 * @since ARP 2.0
 */
public class Email extends APIBean {

    /**
     * Array of Email recipients
     */
    private EmailAddress[] toRecipients;

    /**
     * Array of Email Carbon Copy recipients
     */
    private EmailAddress[] ccRecipients;

    /**
     * Array of Email Blind Carbon Copy recipients
     */
    private EmailAddress[] bccRecipients;

    /**
     * Array of attatchments
     */
    private EmailAttachmentData[] emailAttachmentData;

    /**
     * Message body
     */
    private String messageBody;

    /**
     * Message body mime type
     */
    private String messageBodyMimeType;

    /**
     * Subject of the email
     */
    private String subject;

    /**
     * Default constructor
     *
     * @since ARP 2.0
     */
    public Email() {
    }

    /**
     * Constructor used by the implementation
     *
     * @param toRecipients array of recipients
     * @param subject      of the email
     * @param messageBody  body of the email
     * @since ARP 2.0
     */
    public Email(EmailAddress[] toRecipients, String subject, String messageBody) {
        this.toRecipients = toRecipients;
        this.messageBody = messageBody;
        this.subject = subject;
    }

    /**
     * Constructor used by the implementation
     *
     * @param toRecipients        array of recipients
     * @param ccRecipients        array of cc recipients
     * @param bccRecipients       array of bcc recipients
     * @param emailAttachmentData array of attatchments
     * @param messageBody         body of the email
     * @param messageBodyMimeType mime type of the body
     * @param subject             of the email
     * @since ARP 2.0
     */
    public Email(EmailAddress[] toRecipients, EmailAddress[] ccRecipients, EmailAddress[] bccRecipients, EmailAttachmentData[] emailAttachmentData, String messageBody, String messageBodyMimeType, String subject) {
        this.toRecipients = toRecipients;
        this.ccRecipients = ccRecipients;
        this.bccRecipients = bccRecipients;
        this.emailAttachmentData = emailAttachmentData;
        this.messageBody = messageBody;
        this.messageBodyMimeType = messageBodyMimeType;
        this.subject = subject;
    }

    /**
     * Returns the array of recipients
     *
     * @return toRecipients array of recipients
     * @since ARP 2.0
     */
    public EmailAddress[] getToRecipients() {
        return toRecipients;
    }

    /**
     * Set the array of recipients
     *
     * @param toRecipients array of recipients
     * @since ARP 2.0
     */
    public void setToRecipients(EmailAddress[] toRecipients) {
        this.toRecipients = toRecipients;
    }

    /**
     * Returns the array of recipients
     *
     * @return ccRecipients array of cc recipients
     * @since ARP 2.0
     */
    public EmailAddress[] getCcRecipients() {
        return ccRecipients;
    }

    /**
     * Set the array of recipients
     *
     * @param ccRecipients array of cc recipients
     * @since ARP 2.0
     */
    public void setCcRecipients(EmailAddress[] ccRecipients) {
        this.ccRecipients = ccRecipients;
    }

    /**
     * Returns the array of recipients
     *
     * @return bccRecipients array of bcc recipients
     * @since ARP 2.0
     */
    public EmailAddress[] getBccRecipients() {
        return bccRecipients;
    }

    /**
     * Set the array of recipients
     *
     * @param bccRecipients array of bcc recipients
     * @since ARP 2.0
     */
    public void setBccRecipients(EmailAddress[] bccRecipients) {
        this.bccRecipients = bccRecipients;
    }

    /**
     * Returns an array of attachments
     *
     * @return emailAttachmentData array with the email attachments
     * @since ARP 2.0
     */
    public EmailAttachmentData[] getEmailAttachmentData() {
        return emailAttachmentData;
    }

    /**
     * Set the email attachment data array
     *
     * @param emailAttachmentData array of email attatchments
     * @since ARP 2.0
     */
    public void setEmailAttachmentData(EmailAttachmentData[] emailAttachmentData) {
        this.emailAttachmentData = emailAttachmentData;
    }

    /**
     * Returns the message body of the email
     *
     * @return message Body string of the email
     * @since ARP 2.0
     */
    public String getMessageBody() {
        return messageBody;
    }

    /**
     * Set the message body of the email
     *
     * @param messageBody message body of the email
     * @since ARP 2.0
     */
    public void setMessageBody(String messageBody) {
        this.messageBody = messageBody;
    }

    /**
     * Returns the myme type of the message body
     *
     * @return mime type string of the message boddy
     * @since ARP 2.0
     */
    public String getMessageBodyMimeType() {
        return messageBodyMimeType;
    }

    /**
     * Set the mime type for the message body
     *
     * @param messageBodyMimeType type of the body message
     * @since ARP 2.0
     */
    public void setMessageBodyMimeType(String messageBodyMimeType) {
        this.messageBodyMimeType = messageBodyMimeType;
    }

    /**
     * Returns the subject of the email
     *
     * @return subject string of the email
     * @since ARP 2.0
     */
    public String getSubject() {
        return subject;
    }

    /**
     * Set the subject of the email
     *
     * @param subject of the email
     * @since ARP 2.0
     */
    public void setSubject(String subject) {
        this.subject = subject;
    }
}
