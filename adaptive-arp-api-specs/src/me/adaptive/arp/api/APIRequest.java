package me.adaptive.arp.api;

/**
 * Created by clozano on 05/12/14.
 */
public class APIRequest {

    /**
     * { methodName: "coolMethod", parameterTypes: [{},{},{},{}], parameters: [{},{},{},{}] }
     */

    private String methodName;
    private String[] parameterTypes;
    private Object[] parameters;

    public APIRequest() {
        
    }

    public String getMethodName() {
        return methodName;
    }

    public void setMethodName(String methodName) {
        this.methodName = methodName;
    }

    public String[] getParameterTypes() {
        return parameterTypes;
    }

    public void setParameterTypes(String[] parameterTypes) {
        this.parameterTypes = parameterTypes;
    }

    public Object[] getParameters() {
        return parameters;
    }

    public void setParameters(Object[] parameters) {
        this.parameters = parameters;
    }
}
