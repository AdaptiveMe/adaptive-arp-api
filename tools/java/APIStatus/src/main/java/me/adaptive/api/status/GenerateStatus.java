package me.adaptive.api.status;

import java.io.IOException;

/**
 * Created by clozano on 02/09/2014.
 */
public class GenerateStatus {

    public static void main(String[] args) throws IOException {
        String sourcePath = "/Users/clozano/Github/Runtimes/adaptive-arp-api/adaptive-arp-api-java/arp-api-specs/src/main/java";
        String targetPath = "/Users/clozano/Github/Runtimes/adaptive-arp-api/";
        String[] packages = {"me.adaptive.arp.api"};
        if (GenerateGlobalStatus.convert(sourcePath, targetPath, packages) && GenerateGlobalStatus.convertImpl(sourcePath, targetPath, packages)) {
            System.exit(0);
        } else {
            System.exit(-1);
        }

    }
}
