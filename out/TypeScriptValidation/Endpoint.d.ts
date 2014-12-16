/**
--| ADAPTIVE RUNTIME PLATFORM |----------------------------------------------------------------------------------------

(C) Copyright 2013-2015 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the
License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless required by appli-
-cable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,  WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the  License  for the specific language governing
permissions and limitations under the License.

Original author:

    * Carlos Lozano Diez
            <http://github.com/carloslozano>
            <http://twitter.com/adaptivecoder>
            <mailto:carlos@adaptive.me>

Contributors:

    * See source code files for contributors.

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       Structure representing a remote or local service access end-point.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Endpoint {
        /**
           The remote serice host (alias or IP).
        */
        host: string;
        /**
           The remote service path (to be added to the host and port url).
        */
        path: string;
        /**
           The remote service accessible port.
        */
        port: number;
        /**
           The proxy url - if needed - to access the remote service. If IP and port are used, use the following syntax: "http://<IP>:<Port>".
        */
        proxy: string;
        /**
           The remote service scheme.
        */
        scheme: string;
        /**
           Constructor used by the implementation

           @param host
           @param path
           @param port
           @param proxy
           @param scheme
           @since ARP1.0
        */
        constructor(host: string, path: string, port: number, proxy: string, scheme: string);
        /**
           Returns the host

           @return host
           @since ARP1.0
        */
        getHost(): string;
        /**
           Set the host

           @param host
           @since ARP1.0
        */
        setHost(host: string): void;
        /**
           Returns the path

           @return path
           @since ARP1.0
        */
        getPath(): string;
        /**
           Set the path

           @param path
           @since ARP1.0
        */
        setPath(path: string): void;
        /**
           Returns the port

           @return port
           @since ARP1.0
        */
        getPort(): number;
        /**
           Set the port

           @param port
           @since ARP1.0
        */
        setPort(port: number): void;
        /**
           Return the proxy

           @return proxy
           @since ARP1.0
        */
        getProxy(): string;
        /**
           Set the proxy

           @param proxy
           @since ARP1.0
        */
        setProxy(proxy: string): void;
        /**
           Returns the scheme

           @return scheme
           @since ARP1.0
        */
        getScheme(): string;
        /**
           Set the scheme

           @param scheme
           @since ARP1.0
        */
        setScheme(scheme: string): void;
    }
}
