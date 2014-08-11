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
public interface WalletUbiTimNfcEngineListener extends Serializable {

    /**
     * Fired when there is an error while starting the NFC Payment engine. (after calling the
     * IWalletUbiTimNfc.startNfcPaymentEngine method).
     *
     * @param response Error returned
     * @author Ferran Vila Conesa
     * @see me.adaptive.arp.api.IWalletUbiTimNfc
     * @since ARP1.0
     */
    public void onEngineStartError(IWalletUbiTimNfc.UbiTimNfcEngineErrorResponses response);

    /**
     * Fired when the NFC Payment engine has started successfully. (after calling the
     * IWalletUbiTimNfc.startNfcPaymentEngine method).
     *
     * @author Ferran Vila Conesa
     * @see me.adaptive.arp.api.IWalletUbiTimNfc
     * @since ARP1.0
     */
    public void onEngineStartSuccess();

    /**
     * Fired when there is an error while stoping the NFC Payment engine.
     * (after calling the IWalletUbiTimNfc.stopNfcPaymentEngine method).
     *
     * @param response Error returned
     * @author Ferran Vila Conesa
     * @see me.adaptive.arp.api.IWalletUbiTimNfc
     * @since ARP1.0
     */
    public void onEngineStopError(IWalletUbiTimNfc.UbiTimNfcEngineErrorResponses response);

    /**
     * Fired when the NFC Payment engine has stop successfully. (after calling
     * the IWalletUbiTimNfc.stopNfcPaymentEngine method).
     *
     * @author Ferran Vila Conesa
     * @see me.adaptive.arp.api.IWalletUbiTimNfc
     * @since ARP1.0
     */
    public void onEngineStopSuccess();
}
