package me.adaptive.arp.api;

/**
 * Created by clozano on 05/12/14.
 */
public interface INetworkStatusListener extends IBaseListener {

    /**
     * Called when network connection changes somehow.
     *
     * @param network Change to this network.
     * @since ARP1.0
     */
    public void onResult(ICapabilities.Net network);

    /**
     * Status received with warning
     *
     * @param network Change to this network.
     * @param warning
     * @since ARP1.0
     */
    public void onWarning(ICapabilities.Net network, Warning warning);

    /**
     * No data received - error condition, not authorized or hardware not available.
     *
     * @param error
     * @since ARP1.0
     */
    public void onError(Error error);

    /**
     * Errors
     */
    public enum Error {
        NoPermission, Unknown
    }

    /**
     * Warnings
     */
    public enum Warning {
        IpAddressNotAssigned, IpAddressChanged, Unknown
    }
}
