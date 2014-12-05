package me.adaptive.arp.api;

/**
 * Created by clozano on 05/12/14.
 */
public interface IFileDataStoreResultCallback extends IFileDataResultCallback {
    /**
     * Result of data storage operation.
     *
     * @param file File reference to stored data.
     * @since ARP1.0
     */
    void onResult(IFile file);
}
