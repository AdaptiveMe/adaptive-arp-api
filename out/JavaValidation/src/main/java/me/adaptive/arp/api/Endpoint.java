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

package me.adaptive.arp.api;

/**
   Structure representing a remote or local service access end-point.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class Endpoint {

     /**
        The remote serice host (alias or IP).
     */
     private String host;
     /**
        The remote service path (to be added to the host and port url).
     */
     private String path;
     /**
        The remote service accessible port.
     */
     private int port;
     /**
        The proxy url - if needed - to access the remote service. If IP and port are used, use the following syntax: "http://<IP>:<Port>".
     */
     private String proxy;
     /**
        The remote service scheme.
     */
     private String scheme;

     /**
        Constructor used by the implementation
     */
     public Endpoint() {
     }

     /**
        Constructor used by the implementation

        @param host
        @param path
        @param port
        @param proxy
        @param scheme
        @since ARP1.0
     */
     public Endpoint(String host, String path, int port, String proxy, String scheme) {
          this();
          this.host = host;
          this.path = path;
          this.port = port;
          this.proxy = proxy;
          this.scheme = scheme;
     }
     /**
        Returns the host

        @return host
        @since ARP1.0
     */
     public String getHost() {
          return this.host;
     }

     /**
        Set the host

        @param host
        @since ARP1.0
     */
     public void setHost(String host) {
          this.host = host;
     }

     /**
        Returns the path

        @return path
        @since ARP1.0
     */
     public String getPath() {
          return this.path;
     }

     /**
        Set the path

        @param path
        @since ARP1.0
     */
     public void setPath(String path) {
          this.path = path;
     }

     /**
        Returns the port

        @return port
        @since ARP1.0
     */
     public int getPort() {
          return this.port;
     }

     /**
        Set the port

        @param port
        @since ARP1.0
     */
     public void setPort(int port) {
          this.port = port;
     }

     /**
        Return the proxy

        @return proxy
        @since ARP1.0
     */
     public String getProxy() {
          return this.proxy;
     }

     /**
        Set the proxy

        @param proxy
        @since ARP1.0
     */
     public void setProxy(String proxy) {
          this.proxy = proxy;
     }

     /**
        Returns the scheme

        @return scheme
        @since ARP1.0
     */
     public String getScheme() {
          return this.scheme;
     }

     /**
        Set the scheme

        @param scheme
        @since ARP1.0
     */
     public void setScheme(String scheme) {
          this.scheme = scheme;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
