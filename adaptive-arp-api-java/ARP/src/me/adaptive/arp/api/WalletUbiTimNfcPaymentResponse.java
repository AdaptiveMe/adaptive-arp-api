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
 * @see me.adaptive.arp.api.WalletUbiTimNfcPaymentListener
 * @since ARP1.0
 */
public class WalletUbiTimNfcPaymentResponse implements Serializable {

    /**
     * The final amount of the executed payment.
     */
    private double amount;

    /**
     * The milliseconds since 1970 of the payment result time.
     */
    private long timestamp;

    /**
     * Constructor used by the implementation to set the Payment Response.
     *
     * @param amount    Payment amount.
     * @param timestamp Payment timestamp.
     * @author Ferran Vila Conesa
     * @since ARP1.0
     */
    public WalletUbiTimNfcPaymentResponse(double amount, long timestamp) {

        this.amount = amount;
        this.timestamp = timestamp;
    }

    /**
     * Gets the amount of the payment.
     *
     * @return The amount of the payment.
     * @author Ferran Vila Conesa
     * @since ARP1.0
     */
    public double getAmount() {
        return amount;
    }

    /**
     * Sets the amount of the payment.
     *
     * @param amount The amount of the payment.
     * @author Ferran Vila Conesa
     * @since ARP1.0
     */
    public void setAmount(double amount) {
        this.amount = amount;
    }

    /**
     * Gets the timestamp of the payment.
     *
     * @return The timestamp of the payment.
     * @author Ferran Vila Conesa
     * @since ARP1.0
     */
    public long getTimestamp() {
        return timestamp;
    }

    /**
     * Sets the timestamp of the payment.
     *
     * @param timestamp The timestamp of the payment.
     * @author Ferran Vila Conesa
     * @since ARP1.0
     */
    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }
}
