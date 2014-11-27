/**
 * Created by clozano on 27/11/14.
 */
module Adaptive {

    export class ReflectionBase {
        name:string;
        description:string;

        constructor(name:string, description:string) {
            this.name = name;
            this.description = description;
        }

        getName():string {
            return this.name;
        }

        getDescription():string {
            return this.description;
        }
    }

    export class ReflectionPackage extends ReflectionBase {
        _classes:Array<ReflectionClass> = new Array<ReflectionClass>();

        constructor(name:string, description:string) {
            super(name, description);
        }

        addClass(clazz:ReflectionClass):void {
            this._classes.push(clazz);
        }

        getClasses():Array<ReflectionClass> {
            return this._classes;
        }

    }

    export class ReflectionMember extends ReflectionBase {

    }

    export class ReflectionClass extends ReflectionBase {
        _isarray:boolean = false;
        _isprimitive:boolean = false;
        _isenum:boolean = false;
        _fields:Array<ReflectionField> = new Array<ReflectionField>();
        _methods:Array<ReflectionMethod> = new Array<ReflectionMethod>();
        _package:ReflectionPackage;
        _type:string = "null";
        _typeComponent:ReflectionClass;

        constructor(name:string, description:string, type:string, _methods:Array<ReflectionMethod>, _fields:Array<ReflectionField>, _package:ReflectionPackage) {
            super(name, description);
            this._package = _package;
            this._type = type;
            if (this._type == null) {
                this._type = "null";
            } else if (this._type == "string" || this._type == "number" || this._type == "boolean") {
                this._isprimitive = true;
            } else if (this._type.indexOf("Array") == 0) {
                this._isarray = true;
            } else if (this._type.indexOf("Enum") > -1) {
                this._isenum = true;
            }

            if (_methods != null) {
                this._methods = _methods;
            }
            if (_fields != null) {
                this._fields = _fields;
            }
        }

        setTypeComponent(typeComponent:ReflectionClass) {
            this._typeComponent = typeComponent;
        }

        getFields():Array<ReflectionField> {
            return this._fields;
        }

        getMethods():Array<ReflectionMethod> {
            return this._methods;
        }

        getType():string {
            return this._type;
        }

    }

    export class ReflectionMethod extends ReflectionBase {
        _returnType:ReflectionClass;
        _isvoid:boolean = true;
        _parameters:Array<ReflectionParameter> = new Array<ReflectionParameter>();

        constructor(name:string, description:string, _parameters:Array<ReflectionParameter>, _returnType:ReflectionClass) {
            super(name, description)
            if (_parameters != null) {
                this._parameters = _parameters;
            }
            if (_returnType == null) {
                this._isvoid = true;
                this._returnType = null;
            } else {
                this._isvoid = false;
                this._returnType = _returnType;
            }
        }

        isVoid():boolean {
            return this._isvoid;
        }

        getParameters():Array<ReflectionParameter> {
            return this._parameters;
        }

        getParameterCount():number {
            return this._parameters.length;
        }

        getReturnType():ReflectionClass {
            return this._returnType;
        }
    }

    export class ReflectionParameter extends ReflectionBase {
        _type:ReflectionClass;

        constructor(name:string, description:string, _type:ReflectionClass) {
            super(name, description)
            this._type = _type;
        }

        getType():ReflectionClass {
            return this._type;
        }
    }

    export class ReflectionField extends ReflectionBase {
        type:ReflectionClass;

        constructor(name:string, description:string, type:ReflectionClass) {
            super(name, description);
            this.type = type;
        }

        getType():ReflectionClass {
            return this.type;
        }
    }

    var _package : ReflectionPackage = null;

    export function getReflection() : ReflectionPackage {
        if (_package == null) {
            _package = new ReflectionPackage("Adaptive","Adaptive Runtime Platform JS API");
        }
        return _package;
    }
}
