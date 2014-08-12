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
 *              <https://github.com/fnva>
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
 * @see me.adaptive.arp.api.IWalletUbiTimNfc
 * @since ARP1.0
 */
public interface WalletUbiTimNfcPaymentListener extends Serializable {

    /**
     * Fired when the NFC Payment has been started successfully. (after
     * calling the IWalletUbiTimNfc.startNfcPayment method).
     *
     * @author Ferran Vila Conesa
     * @see me.adaptive.arp.api.IWalletUbiTimNfc
     * @since ARP1.0
     */
    public void onPaymentStarted();

    /**
     * Fired when the NFC Payment has been canceled successfully. (after
     * calling the IWalletUbiTimNfc.cancelNfcPayment method).
     *
     * @param response Error returned
     * @author Ferran Vila Conesa
     * @see me.adaptive.arp.api.IWalletUbiTimNfc
     * @since ARP1.0
     */
    public void onPaymentCanceled(IWalletUbiTimNfc.UbiTimNfcPaymentErrorResponses response);

    /**
     * Fired during an NFC Payment indicating the remaining seconds. (after
     * calling the IWalletUbiTimNfc.startNfcPayment method).
     *
     * @param remainingSeconds Remaining seconds for executing the Payment
     * @author Ferran Vila Conesa
     * @see me.adaptive.arp.api.IWalletUbiTimNfc
     * @since ARP1.0
     */
    public void onUpdateCountDown(int remainingSeconds);

    /**
     * Fired during an NFC Payment indicating that the payment timer has
     * expired. (after calling the IWalletUbiTimNfc.startNfcPayment method).
     *
     * @author Ferran Vila Conesa
     * @see me.adaptive.arp.api.IWalletUbiTimNfc
     * @since ARP1.0
     */
    public void onCountDownFinished();

    /**
     * Fired when the NFC Payment has failed. (after calling the
     * IWalletUbiTimNfc.startNfcPayment method).
     *
     * @param response Error returned
     * @author Ferran Vila Conesa
     * @see me.adaptive.arp.api.IWalletUbiTimNfc
     * @since ARP1.0
     */
    public void onPaymentFailed(IWalletUbiTimNfc.UbiTimNfcPaymentErrorResponses response);

    /**
     * Fired when the NFC Payment has been completed successfully. (after calling the
     * IWalletUbiTimNfc.startNfcPayment method).
     *
     * @param paymentSuccess Object with the payment result
     * @author Ferran Vila Conesa
     * @see me.adaptive.arp.api.WalletUbiTimNfcPaymentResponse
     * @see me.adaptive.arp.api.IWalletUbiTimNfc
     * @since ARP1.0
     */
    public void onPaymentSuccess(WalletUbiTimNfcPaymentResponse paymentSuccess);
}
