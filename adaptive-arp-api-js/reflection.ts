/**
 * Created by clozano on 27/11/14.
 */
module Adaptive {

    export class ReflectionBase {
        name: string;
        description:string;

        constructor(name:string, description:string) {
            this.name = name;
            this.description = description;
        }

        getName(): string {
            return this.name;
        }

        getDescription(): string {
            return this.description;
        }
    }

    export class ReflectionPackage extends ReflectionBase {
        _classes :Array<ReflectionClass> = new Array<ReflectionClass>();

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
        _isarray: boolean = false;
        _isprimitive:boolean = false;
        _isenum:boolean = false;
        _fields:Array<ReflectionField> = new Array<ReflectionField>();
        _methods:Array<ReflectionMethod> = new Array<ReflectionMethod>();
        _package:ReflectionPackage;

        constructor(name:string, description:string, _package:ReflectionPackage) {
            super(name,description);
            this._package = _package;
            _package.addClass(this);
        }

        getFields():Array<ReflectionField> {
            return this._fields;
        }

        getMethods():Array<ReflectionMethod> {
            return this._methods;
        }

    }

    export class ReflectionConstructor {

    }

    export class ReflectionMethod {

    }

    export class ReflectionField extends ReflectionBase {
        type: ReflectionClass;

        constructor(name:string, description:string, type:ReflectionClass) {
            super(name,description);
            this.type = type;
        }

        getType():ReflectionClass {
            return this.type;
        }
    }
}