var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by clozano on 27/11/14.
 */
var Adaptive;
(function (Adaptive) {
    var ReflectionBase = (function () {
        function ReflectionBase(name, description) {
            this.name = name;
            this.description = description;
        }
        ReflectionBase.prototype.getName = function () {
            return this.name;
        };
        ReflectionBase.prototype.getDescription = function () {
            return this.description;
        };
        return ReflectionBase;
    })();
    Adaptive.ReflectionBase = ReflectionBase;
    var ReflectionPackage = (function (_super) {
        __extends(ReflectionPackage, _super);
        function ReflectionPackage(name, description) {
            _super.call(this, name, description);
            this._classes = new Array();
        }
        ReflectionPackage.prototype.addClass = function (clazz) {
            this._classes.push(clazz);
        };
        ReflectionPackage.prototype.getClasses = function () {
            return this._classes;
        };
        return ReflectionPackage;
    })(ReflectionBase);
    Adaptive.ReflectionPackage = ReflectionPackage;
    var ReflectionMember = (function (_super) {
        __extends(ReflectionMember, _super);
        function ReflectionMember() {
            _super.apply(this, arguments);
        }
        return ReflectionMember;
    })(ReflectionBase);
    Adaptive.ReflectionMember = ReflectionMember;
    var ReflectionClass = (function (_super) {
        __extends(ReflectionClass, _super);
        function ReflectionClass(name, description, type, _methods, _fields, _package) {
            _super.call(this, name, description);
            this._isarray = false;
            this._isprimitive = false;
            this._isenum = false;
            this._fields = new Array();
            this._methods = new Array();
            this._type = "null";
            this._package = _package;
            this._type = type;
            if (this._type == null) {
                this._type = "null";
            }
            else if (this._type == "string" || this._type == "number" || this._type == "boolean") {
                this._isprimitive = true;
            }
            else if (this._type.indexOf("Array") == 0) {
                this._isarray = true;
            }
            else if (this._type.indexOf("Enum") > -1) {
                this._isenum = true;
            }
            if (_methods != null) {
                this._methods = _methods;
            }
            if (_fields != null) {
                this._fields = _fields;
            }
        }
        ReflectionClass.prototype.setTypeComponent = function (typeComponent) {
            this._typeComponent = typeComponent;
        };
        ReflectionClass.prototype.getFields = function () {
            return this._fields;
        };
        ReflectionClass.prototype.getMethods = function () {
            return this._methods;
        };
        ReflectionClass.prototype.getType = function () {
            return this._type;
        };
        return ReflectionClass;
    })(ReflectionBase);
    Adaptive.ReflectionClass = ReflectionClass;
    var ReflectionMethod = (function (_super) {
        __extends(ReflectionMethod, _super);
        function ReflectionMethod(name, description, _parameters, _returnType) {
            _super.call(this, name, description);
            this._isvoid = true;
            this._parameters = new Array();
            if (_parameters != null) {
                this._parameters = _parameters;
            }
            if (_returnType == null) {
                this._isvoid = true;
                this._returnType = null;
            }
            else {
                this._isvoid = false;
                this._returnType = _returnType;
            }
        }
        ReflectionMethod.prototype.isVoid = function () {
            return this._isvoid;
        };
        ReflectionMethod.prototype.getParameters = function () {
            return this._parameters;
        };
        ReflectionMethod.prototype.getParameterCount = function () {
            return this._parameters.length;
        };
        ReflectionMethod.prototype.getReturnType = function () {
            return this._returnType;
        };
        return ReflectionMethod;
    })(ReflectionBase);
    Adaptive.ReflectionMethod = ReflectionMethod;
    var ReflectionParameter = (function (_super) {
        __extends(ReflectionParameter, _super);
        function ReflectionParameter(name, description, _type) {
            _super.call(this, name, description);
            this._type = _type;
        }
        ReflectionParameter.prototype.getType = function () {
            return this._type;
        };
        return ReflectionParameter;
    })(ReflectionBase);
    Adaptive.ReflectionParameter = ReflectionParameter;
    var ReflectionField = (function (_super) {
        __extends(ReflectionField, _super);
        function ReflectionField(name, description, type) {
            _super.call(this, name, description);
            this.type = type;
        }
        ReflectionField.prototype.getType = function () {
            return this.type;
        };
        return ReflectionField;
    })(ReflectionBase);
    Adaptive.ReflectionField = ReflectionField;
    var _package = null;
    function getReflection() {
        if (_package == null) {
            _package = new ReflectionPackage("Adaptive", "Adaptive Runtime Platform JS API");
        }
        return _package;
    }
    Adaptive.getReflection = getReflection;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=reflection.js.map