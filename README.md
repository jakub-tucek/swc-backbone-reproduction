This repo is minimum reproducible code for a bug in SWC, introduced somewhere around 1.2.130.

Passes with 1.2.129, breaks on 1.2.130+


To run reproduce the issue you can run following command (build & executes):

```
npm run test
```


1.3.170

```
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
class Collection {
}
class Model {
}
Model.prototype.idAttribute = 'id';
Collection.prototype.model = Model;
Collection.prototype.modelId = function(attrs) {
    return attrs[this.model.prototype.idAttribute || 'id'];
};
Collection.prototype.get = function(obj) {
    if (obj == null) return void 0;
    return this.modelId(obj);
};
class CardCollection extends Collection {
    model() {
        return Model;
    }
}
exports.CardCollection = CardCollection;
const collection = new CardCollection();
collection.get('someId');

//# sourceMappingURL=test.js.map
```

1.3.129

```
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardCollection = void 0;
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var Collection = function Collection() {
    "use strict";
    _classCallCheck(this, Collection);
};
var Model = function Model() {
    "use strict";
    _classCallCheck(this, Model);
};
Model.prototype.idAttribute = 'id';
Collection.prototype.model = Model;
Collection.prototype.modelId = function(attrs) {
    return attrs[this.model.prototype.idAttribute || 'id'];
};
Collection.prototype.get = function(obj) {
    if (obj == null) return void 0;
    return this.modelId(obj);
};
var CardCollection = /*#__PURE__*/ function(Collection) {
    "use strict";
    _inherits(CardCollection, Collection);
    var _super = _createSuper(CardCollection);
    function CardCollection() {
        _classCallCheck(this, CardCollection);
        return _super.apply(this, arguments);
    }
    _createClass(CardCollection, [
        {
            key: "model",
            value: function model() {
                return Model;
            }
        }
    ]);
    return CardCollection;
}(Collection);
exports.CardCollection = CardCollection;
var collection = new CardCollection();
collection.get('someId');

//# sourceMappingURL=test.js.map
```
