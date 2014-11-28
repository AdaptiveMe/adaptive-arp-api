/**
 * Created by clozano on 27/11/14.
 */
declare module Adaptive {
    class ReflectionBase {
        name: string;
        description: string;
        constructor(name: string, description: string);
        getName(): string;
        getDescription(): string;
    }
    class ReflectionPackage extends ReflectionBase {
        _classes: ReflectionClass[];
        constructor(name: string, description: string);
        addClass(clazz: ReflectionClass): void;
        getClasses(): ReflectionClass[];
    }
    class ReflectionMember extends ReflectionBase {
    }
    class ReflectionClass extends ReflectionBase {
        _isarray: boolean;
        _isprimitive: boolean;
        _isenum: boolean;
        _fields: ReflectionField[];
        _methods: ReflectionMethod[];
        _package: ReflectionPackage;
        _type: string;
        _typeComponent: ReflectionClass;
        constructor(name: string, description: string, type: string, _methods: ReflectionMethod[], _fields: ReflectionField[], _package: ReflectionPackage);
        setTypeComponent(typeComponent: ReflectionClass): void;
        getFields(): ReflectionField[];
        getMethods(): ReflectionMethod[];
        getType(): string;
    }
    class ReflectionMethod extends ReflectionBase {
        _returnType: ReflectionClass;
        _isvoid: boolean;
        _parameters: ReflectionParameter[];
        constructor(name: string, description: string, _parameters: ReflectionParameter[], _returnType: ReflectionClass);
        isVoid(): boolean;
        getParameters(): ReflectionParameter[];
        getParameterCount(): number;
        getReturnType(): ReflectionClass;
    }
    class ReflectionParameter extends ReflectionBase {
        _type: ReflectionClass;
        constructor(name: string, description: string, _type: ReflectionClass);
        getType(): ReflectionClass;
    }
    class ReflectionField extends ReflectionBase {
        type: ReflectionClass;
        constructor(name: string, description: string, type: ReflectionClass);
        getType(): ReflectionClass;
    }
    function getReflection(): ReflectionPackage;
}
