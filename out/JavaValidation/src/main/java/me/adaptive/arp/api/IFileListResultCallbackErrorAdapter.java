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

import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.JsonPrimitive;
import com.google.gson.JsonSerializationContext;
import com.google.gson.JsonSerializer;
import java.lang.reflect.Type;

/**
   IFileListResultCallbackError custom serializer/deserializer.
*/
public class IFileListResultCallbackErrorAdapter implements JsonDeserializer<IFileListResultCallbackError>, JsonSerializer<IFileListResultCallbackError> {

     @Override
     public IFileListResultCallbackError deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context) throws JsonParseException {
          String value = null;
          try {
               value = json.getAsJsonObject().get("value").getAsString();
          } catch(Exception ex) {
               ex.printStackTrace();
          }
          if (value==null) {
               value = "Unknown";
          }
          return IFileListResultCallbackError.valueOf(IFileListResultCallbackError.class, value);
     }

     @Override
     public JsonElement serialize(IFileListResultCallbackError src, Type typeOfSrc, JsonSerializationContext context) {
          JsonObject jsonObject = new JsonObject();
          if (src != null) {
               jsonObject.add("value", new JsonPrimitive(src.name()));
          } else {
               jsonObject.add("value", new JsonPrimitive("Unknown"));
          }
          return jsonObject;
     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
