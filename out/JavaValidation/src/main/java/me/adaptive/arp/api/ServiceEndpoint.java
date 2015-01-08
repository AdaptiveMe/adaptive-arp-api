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

    * Ferran Vila Conesa
             <http://github.com/fnva>
             <http://twitter.com/ferran_vila>
             <mailto:ferran.vila.conesa@gmail.com>

    * See source code files for contributors.

Release:

    * @version v2.0.3

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

package me.adaptive.arp.api;

/**
   Structure representing a remote or local service access end-point.

   @author Aryslan
   @since ARP1.0
   @version 1.0
*/
public class ServiceEndpoint extends APIBean {

     /**
        The remote service host (alias or IP).
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
        Default Constructor

        @since ARP1.0
     */
     public ServiceEndpoint() {
     }

     /**
        Constructor with parameters

        @param host   Remote service host
        @param path   Remote service Path
        @param port   Remote service Port
        @param proxy  Proxy url "http://IP_ADDRESS:PORT_NUMBER"
        @param scheme Remote service scheme
        @since ARP1.0
     */
     public ServiceEndpoint(String host, String path, int port, String proxy, String scheme) {
          super();
          this.host = host;
          this.path = path;
          this.port = port;
          this.proxy = proxy;
          this.scheme = scheme;
     }

     /**
        Returns the Remote service host

        @return Remote service host
        @since ARP1.0
     */
     public String getHost() {
          return this.host;
     }

     /**
        Set the Remote service host

        @param host Remote service host
        @since ARP1.0
     */
     public void setHost(String host) {
          this.host = host;
     }

     /**
        Returns the Remote service Path

        @return Remote service Path
        @since ARP1.0
     */
     public String getPath() {
          return this.path;
     }

     /**
        Set the Remote service Path

        @param path Remote service Path
        @since ARP1.0
     */
     public void setPath(String path) {
          this.path = path;
     }

     /**
        Returns the Remote service Port

        @return Remote service Port
        @since ARP1.0
     */
     public int getPort() {
          return this.port;
     }

     /**
        Set the Remote service Port

        @param port Remote service Port
        @since ARP1.0
     */
     public void setPort(int port) {
          this.port = port;
     }

     /**
        Return the Proxy url

        @return Proxy url
        @since ARP1.0
     */
     public String getProxy() {
          return this.proxy;
     }

     /**
        Set the Proxy url

        @param proxy Proxy url
        @since ARP1.0
     */
     public void setProxy(String proxy) {
          this.proxy = proxy;
     }

     /**
        Returns the Remote service scheme

        @return Remote service scheme
        @since ARP1.0
     */
     public String getScheme() {
          return this.scheme;
     }

     /**
        Set the Remote service scheme

        @param scheme Remote service scheme
        @since ARP1.0
     */
     public void setScheme(String scheme) {
          this.scheme = scheme;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
