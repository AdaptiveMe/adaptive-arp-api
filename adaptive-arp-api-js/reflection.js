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
        function ReflectionClass(name, description, _package) {
            _super.call(this, name, description);
            this._isarray = false;
            this._isprimitive = false;
            this._isenum = false;
            this._fields = new Array();
            this._methods = new Array();
            this._package = _package;
            _package.addClass(this);
        }
        ReflectionClass.prototype.getFields = function () {
            return this._fields;
        };
        ReflectionClass.prototype.getMethods = function () {
            return this._methods;
        };
        return ReflectionClass;
    })(ReflectionBase);
    Adaptive.ReflectionClass = ReflectionClass;
    var ReflectionConstructor = (function () {
        function ReflectionConstructor() {
        }
        return ReflectionConstructor;
    })();
    Adaptive.ReflectionConstructor = ReflectionConstructor;
    var ReflectionMethod = (function () {
        function ReflectionMethod() {
        }
        return ReflectionMethod;
    })();
    Adaptive.ReflectionMethod = ReflectionMethod;
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
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=reflection.js.map