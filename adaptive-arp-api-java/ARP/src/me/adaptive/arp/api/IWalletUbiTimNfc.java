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
 *              <http://github.com/fnva>
 *              <http://twitter.com/ferran_vila>
 *              <mailto:ferran.vila.conesa@gmail.com>
 *
 * =====================================================================================================================
 */

package me.adaptive.arp.api;

import java.io.Serializable;

/**
 * @author Ferran Vila Conesa
 * @see me.adaptive.arp.api.IWallet
 * @since ARP1.0
 */
public interface IWalletUbiTimNfc extends IWallet, Serializable {

    /**
     * Enumeration for the UBI TIM NFC configuration settings.
     */
    public enum UbiTimNfcProperty {
        PROPERTY_AID_NAME_LENGTH,
        PROPERTY_APPLICATION_ID,
        PROPERTY_APPLICATION_LABEL,
        PROPERTY_DEBUG_MODE,
        PROPERTY_TIMER_PERIOD,
        PROPERTY_VIBRATION_DURATION,
        SECURITY_ERROR_DEVICE_ROOTED,
        SECURITY_ERROR_LOCK_DISABLED,
        SECURITY_ERROR_UNKNOWN,
        SECURITY_ERROR_USB_DEBUG_ENABLED
    }

    /**
     * Enumeration for Engine Error responses returned by the listener.
     */
    public enum UbiTimNfcEngineErrorResponses {
        ENGINE_ALREADY_STARTED,
        OPERATION_CANCELED_BY_USER,
        OPERATION_ERROR_CARD,
        OPERATION_ERROR_CARDLET_NOT_FOUND,
        OPERATION_ERROR_CARDLET_SECURITY,
        OPERATION_ERROR_ILLEGAL_ARGUMENT,
        OPERATION_ERROR_UNREGISTERED_FEATURE,
        OPERATION_FAILED,
        WALLET_NOT_FOUND,
        ERROR_UNKNOWN
    }

    /**
     * Enumeration for Payment Error responses.
     */
    public enum UbiTimNfcPaymentErrorResponses {
        ERROR_DUAL_TAP,
        ERROR_REMOVE_DEVICE_FROM_POS,
        OPERATION_CANCELED_BY_USER,
        OPERATION_ERROR_APPLET_NOT_FOUND,
        OPERATION_ERROR_ILLEGAL_ARGUMENT,
        OPERATION_ERROR_UNREGISTERED,
        OPERATION_FAILED,
        WALLET_NOT_FOUND,
        ERROR_UNKNOWN
    }

    /**
     * Checks the presence/installation of the Wallet app by the given
     * "walletPackageName".
     *
     * @param walletPackageName Wallet App package name.
     * @return "true" if its installed, "false" otherwise.
     * @author Ferran Vila Conesa
     * @since ARP1.0
     */
    boolean isWalletAppInstalled(String walletPackageName);

    /**
     * Checks if the device has the NFC interface active.
     *
     * @return "true" if the interface is enabled, "false" otherwise.
     * @author Ferran Vila Conesa
     * @since ARP1.0
     */
    boolean isNfcEnabled();

    /**
     * Launches the Settings section of the device in which the user can enable
     * the NFC interface.
     *
     * @author Ferran Vila Conesa
     * @since ARP1.0
     */
    void startNfcSettings();

    /**
     * Sets the application NFC parameters ad hoc by using the given properties
     * object.
     *
     * @param tags Array of me.adaptive.arp.api.WalletUbiTimNfcTag
     * @author Ferran Vila Conesa
     * @since ARP1.0
     */
    void setNfcPaymentProperties(WalletUbiTimNfcTag... tags);

    /**
     * Performs security checks (the device does not have root privileges,
     * is not protected by lock and is not in USB debugging mode).
     *
     * @param listener Asynchronous listener for the Engine Start Method
     * @author Ferran Vila Conesa
     * @see me.adaptive.arp.api.WalletUbiTimNfcEngineListener
     * @since ARP1.0
     */
    void startNfcPaymentEngine(WalletUbiTimNfcEngineListener listener);

    /**
     * Stops the NFC payment engine. This should be also called on
     * application destroy.
     *
     * @param listener Asynchronous listener for the Engine Stop Method
     * @author Ferran Vila Conesa
     * @since ARP1.0
     */
    void stopNfcPaymentEngine(WalletUbiTimNfcEngineListener listener);

    /**
     * Returns the last 4 digits of the Primary Account Number (PAN) from the
     * SIM obfuscating the first 16. It is required to call first the
     * me.adaptive.arp.api.IWalletUbiTimNfc.startNfcPaymentEngine method to
     * get the value, otherwise a null value is returned.
     *
     * @return The PAN Number
     * @author Ferran Vila Conesa
     * @since ARP1.0
     */
    String getPrimaryAccountNumber();

    /**
     * Activates an NFC payment with the Point Of Sale (POS). If the NFC is
     * not enabled in the device, the user is redirected to the NFC settings
     * to enable it. It is required to call first the me
     * .adaptive.arp.api.IWalletUbiTimNfc.startNfcPaymentEngine method.
     *
     * @param listener Asynchronous listener for the Payment Start Method
     * @author Ferran Vila Conesa
     * @since ARP1.0
     */
    void startNfcPayment(WalletUbiTimNfcPaymentListener listener);

    /**
     * Disables any NFC payment and resets the timer. If the transaction is
     * already started at the POS side this method can not finish the
     * payment, but only reset the timer. It is required to call first the me
     * .adaptive.arp.api.IWalletUbiTimNfc.startNfcPaymentEngine method that
     * assigns the appropiate PaymentListener to receive the notifications.
     *
     * @param listener Asynchronous listener for the Payment Cancel Method
     * @author Ferran Vila Conesa
     * @since ARP1.0
     */
    void cancelNfcPayment(WalletUbiTimNfcPaymentListener listener);
}
