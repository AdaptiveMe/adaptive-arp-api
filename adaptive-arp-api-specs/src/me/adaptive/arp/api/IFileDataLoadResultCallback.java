package me.adaptive.arp.api;

/**
 * Created by clozano on 05/12/14.
 */
public interface IFileDataLoadResultCallback extends IFileDataResultCallback {

    /**
     * Result of data retrieval operation.
     *
     * @param data Data loaded.
     * @since ARP1.0
     */
    void onResult(byte[] data);
}
