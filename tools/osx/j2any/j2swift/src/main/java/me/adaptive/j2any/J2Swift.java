package me.adaptive.j2any;

import me.adaptive.j2any.j2swift.J2SwiftConverter;

import java.io.IOException;

/**
 * Created by clozano on 27/08/2014.
 */
public class J2Swift {

    public static void main(String[] args) throws IOException {
        String sourcePath = "/Users/clozano/Github/Runtime/adaptive-arp-api/adaptive-arp-api-java/arp-api-specs/src/main/java";
        String targetPath = "/Users/clozano/Github/Runtime/adaptive-arp-api/adaptive-arp-api-swift/ARP";
        String targetPathJS = "/Users/clozano/Github/Runtime/adaptive-arp-api/adaptive-arp-api-js";
        String[] packages = {"me.adaptive.arp.api"};
        if (J2SwiftConverter.convert(sourcePath, targetPath, targetPathJS, packages)) {
            System.exit(0);
        } else {
            System.exit(-1);
        }
    }
}
