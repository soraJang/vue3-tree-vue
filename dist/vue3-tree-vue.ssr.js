'use strict';var vue=require('vue');function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}var _TREE_STATE_PROVIDER_INJECT_KEY = "VUE3_TREE_VUE_TREE_STATE";var updateChildrenCheckState = function updateChildrenCheckState(parent, state) {
  if (!parent.children) return;
  parent.children.forEach(function (child) {
    child.checked = parent.checked;
    state.getNode(child.id).indeterminate = false;
    updateChildrenCheckState(child, state);
  });
};
var updateParentCheckState = function updateParentCheckState(child, state) {
  if (!child) return;
  var parent = state.getParent(child.id);
  if (!parent) return;
  var parentNode = state.getNode(parent.id);
  if (parent.children) {
    var isEveryChildChecked = parent.children.every(function (child) {
      return child.checked;
    });
    var someUnChecked = parent.children.some(function (child) {
      return !child.checked;
    });
    var someChecked = parent.children.some(function (child) {
      return child.checked || state.getNode(child.id).indeterminate;
    });
    var intermediate = someChecked && someUnChecked;
    if (isEveryChildChecked) {
      parentNode.checked = true;
      parentNode.indeterminate = false;
    } else if (intermediate) {
      parentNode.checked = false;
      parentNode.indeterminate = true;
    } else {
      parentNode.checked = false;
      parentNode.indeterminate = false;
    }
  }
  updateParentCheckState(parent, state);
};var script$1 = vue.defineComponent({
  inheritAttrs: true,
  props: {
    item: {
      type: Object,
      required: true
    },
    isCheckable: {
      type: Boolean
    },
    canRename: {
      type: Boolean
    },
    checkboxStyle: {
      type: String
    },
    lazyLoad: {
      type: Boolean
    },
    hideGuideLines: {
      type: Boolean
    }
  },
  emits: ["on-rename", "onContextMenu"],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      attrs = _ref.attrs;
    var checkbox = vue.ref();
    var parent = vue.computed(function () {
      return attrs.parent;
    });
    var treeState = vue.inject(_TREE_STATE_PROVIDER_INJECT_KEY);
    var setCheckboxState = function setCheckboxState() {
      return checkbox.value.checked = props.item.checked;
    };
    vue.onMounted(function () {
      treeState.trackNode(props.item, parent.value);
      if (props.item.checked) {
        setCheckboxState();
        updateParentCheckState(props.item, treeState);
      } else {
        var _parent$value;
        props.item.checked = (_parent$value = parent.value) === null || _parent$value === void 0 ? void 0 : _parent$value.checked;
      }
    });
    var updateCheckState = function updateCheckState() {
      var _checkbox$value;
      props.item.checked = (_checkbox$value = checkbox.value) === null || _checkbox$value === void 0 ? void 0 : _checkbox$value.checked;
      props.item.indeterminate = false;
      updateParentCheckState(props.item, treeState);
      updateChildrenCheckState(props.item, treeState);
      treeState.emitItemCheckedChange();
    };
    vue.watch(function () {
      return props.item.indeterminate;
    }, function () {
      return checkbox.value.indeterminate = props.item.indeterminate;
    });
    vue.watch(function () {
      return props.item.checked;
    }, function () {
      return setCheckboxState();
    });
    vue.watch(function () {
      return props.item.expanded;
    }, function () {
      return toggleExpand(false);
    });
    vue.watch(function () {
      var _props$item$children;
      return (_props$item$children = props.item.children) === null || _props$item$children === void 0 ? void 0 : _props$item$children.length;
    }, function () {
      var _props$item$children2;
      return (_props$item$children2 = props.item.children) === null || _props$item$children2 === void 0 ? void 0 : _props$item$children2.forEach(function (child) {
        return treeState === null || treeState === void 0 ? void 0 : treeState.trackNode(child, props.item);
      });
    });
    var isRenaming = vue.ref(false);
    var renameBox = vue.ref();
    var beginRenaming = function beginRenaming() {
      if (!props.canRename) return;
      isRenaming.value = true;
      vue.nextTick().then(function () {
        var _renameBox$value;
        return (_renameBox$value = renameBox.value) === null || _renameBox$value === void 0 ? void 0 : _renameBox$value.focus();
      });
    };
    var finishRenaming = function finishRenaming() {
      // v-on:blur and key(enter) can cause this to fire twice.
      // this check protects against that.
      if (!isRenaming) return;
      emit("on-rename", props.item);
    };
    var toggleExpand = function toggleExpand() {
      var shouldSet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      /// `expanded` can be set programmatically. When this is the case `shouldSet` is false
      /// see watch(props.item.expanded)
      /// the component should not bother flipping the expanded or firing the 
      /// expanded/collapsed events.

      if (shouldSet) {
        props.item.expanded = !props.item.expanded;
        if (props.item.expanded) treeState.emitItemExpanded(props.item);else treeState.emitItemCollapsed(props.item);
      }
    };
    return {
      toggleExpand: toggleExpand,
      treeState: treeState,
      updateCheckState: updateCheckState,
      isRenaming: isRenaming,
      beginRenaming: beginRenaming,
      finishRenaming: finishRenaming,
      parent: parent,
      checkbox: checkbox
    };
  }
});var _hoisted_1$1 = {
  key: 0,
  class: "guide-line"
};
var _hoisted_2$1 = {
  key: 0,
  class: "tree-item__checkbox-area"
};
var _hoisted_3 = ["disabled"];
var _hoisted_4 = {
  class: "d-flex"
};
var _hoisted_5 = {
  class: "tiny_horizontal_margin"
};
var _hoisted_6 = {
  class: "tiny_horizontal_margin"
};
var _hoisted_7 = {
  key: 0,
  for: "checkbox",
  class: "pointer"
};
var _hoisted_8 = {
  class: "tiny_horizontal_margin"
};
var _hoisted_9 = {
  class: "tiny_horizontal_margin"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    class: "d-flex align-items-center",
    onContextmenu: _cache[8] || (_cache[8] = vue.withModifiers(function ($event) {
      return _ctx.$emit('onContextMenu', {
        item: _ctx.item,
        event: $event
      });
    }, ["prevent"]))
  }, [_ctx.parent != null && !_ctx.hideGuideLines ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1)) : vue.createCommentVNode("", true), vue.withDirectives(vue.createElementVNode("div", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.toggleExpand();
    })
  }, [vue.renderSlot(_ctx.$slots, "expander", vue.normalizeProps(vue.guardReactiveProps(_ctx.item)), function () {
    return [vue.createElementVNode("span", {
      class: vue.normalizeClass(["chevron-right", {
        'rotate-90': _ctx.item.expanded
      }])
    }, null, 2)];
  })], 512), [[vue.vShow, _ctx.lazyLoad || _ctx.item.children && _ctx.item.children.length > 0]]), vue.createElementVNode("div", {
    class: vue.normalizeClass(["pointer tree-item", {
      'selected-tree-item': !_ctx.isCheckable && _ctx.item.selected
    }]),
    style: {
      "width": "100%"
    }
  }, [!_ctx.isRenaming ? (vue.openBlock(), vue.createElementBlock("div", {
    key: 0,
    onDblclick: _cache[4] || (_cache[4] = function () {
      return _ctx.beginRenaming && _ctx.beginRenaming.apply(_ctx, arguments);
    })
  }, [_ctx.isCheckable ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$1, [vue.createElementVNode("input", {
    onContextmenu: _cache[1] || (_cache[1] = vue.withModifiers(function () {}, ["prevent"])),
    onChange: _cache[2] || (_cache[2] = function () {
      return _ctx.updateCheckState && _ctx.updateCheckState.apply(_ctx, arguments);
    }),
    type: "checkbox",
    ref: "checkbox",
    disabled: _ctx.item.disabled,
    class: vue.normalizeClass(_ctx.checkboxStyle)
  }, null, 42, _hoisted_3), vue.createElementVNode("div", _hoisted_4, [vue.createElementVNode("div", _hoisted_5, [vue.renderSlot(_ctx.$slots, "icon")]), vue.createElementVNode("div", _hoisted_6, [vue.renderSlot(_ctx.$slots, "prepend")])]), !_ctx.isRenaming ? (vue.openBlock(), vue.createElementBlock("label", _hoisted_7, vue.toDisplayString(_ctx.item.name), 1)) : vue.createCommentVNode("", true), vue.createTextVNode("   "), vue.renderSlot(_ctx.$slots, "append")])) : (vue.openBlock(), vue.createElementBlock("div", {
    key: 1,
    class: "d-flex",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      var _ctx$treeState;
      return (_ctx$treeState = _ctx.treeState) === null || _ctx$treeState === void 0 ? void 0 : _ctx$treeState.emitItemSelected(_ctx.item);
    })
  }, [vue.createElementVNode("div", _hoisted_8, [vue.renderSlot(_ctx.$slots, "icon")]), vue.createElementVNode("div", _hoisted_9, [vue.renderSlot(_ctx.$slots, "prepend")]), vue.renderSlot(_ctx.$slots, "name", {}, function () {
    return [vue.createElementVNode("span", null, vue.toDisplayString(_ctx.item.name), 1)];
  }), vue.createTextVNode("   "), vue.renderSlot(_ctx.$slots, "append")]))], 32)) : vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
    key: 1,
    ref: "rename-box",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return _ctx.item.name = $event;
    }),
    onKeyup: _cache[6] || (_cache[6] = vue.withKeys(function () {
      return _ctx.finishRenaming && _ctx.finishRenaming.apply(_ctx, arguments);
    }, ["enter"])),
    onBlur: _cache[7] || (_cache[7] = function () {
      return _ctx.finishRenaming && _ctx.finishRenaming.apply(_ctx, arguments);
    })
  }, null, 544)), [[vue.vModelText, _ctx.item.name]])], 2)], 32);
}script$1.render = render$1;function useTreeViewItemMouseActions() {
  var addHoverClass = function addHoverClass(event) {
    var target = event.currentTarget;
    if (target) {
      target.classList.add('tree-item__drag-over');
    }
  };
  var addRootHoverClass = function addRootHoverClass(event, isRootNode) {
    if (!isRootNode) return;
    var target = event.currentTarget;
    if (target) {
      target.classList.add('root__drag-over');
    }
  };
  var removeRootHoverClass = function removeRootHoverClass(event, isRootNode) {
    if (!isRootNode) return;
    var target = event.currentTarget;
    if (target) {
      target.classList.remove('root__drag-over');
    }
  };
  var removeHoverClass = function removeHoverClass(event) {
    var target = event.currentTarget;
    if (target) {
      target.classList.remove('tree-item__drag-over');
    }
  };
  var onDragNode = function onDragNode(item, event) {
    if (event.dataTransfer) {
      event.dataTransfer.setData('text/plain', JSON.stringify(item));
    }
  };
  var onDropNode = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dropHost, event, isDropValid, state) {
      var droppedNode;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!event.dataTransfer) {
              _context.next = 15;
              break;
            }
            removeHoverClass(event);
            droppedNode = JSON.parse(event.dataTransfer.getData('text/plain'));
            _context.t0 = !isDropValid;
            if (_context.t0) {
              _context.next = 8;
              break;
            }
            _context.next = 7;
            return isDropValid(droppedNode, dropHost);
          case 7:
            _context.t0 = !_context.sent;
          case 8:
            if (!_context.t0) {
              _context.next = 10;
              break;
            }
            return _context.abrupt("return");
          case 10:
            if (!(dropHost && droppedNode.id === dropHost.id)) {
              _context.next = 12;
              break;
            }
            return _context.abrupt("return");
          case 12:
            state.detach(droppedNode.id);
            if (dropHost && !dropHost.children) dropHost.children = [];
            if (dropHost) dropHost.children.push(droppedNode);else state.attach(droppedNode); // Dropping into root
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onDropNode(_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
  return {
    addHoverClass: addHoverClass,
    removeHoverClass: removeHoverClass,
    onDragNode: onDragNode,
    onDropNode: onDropNode,
    addRootHoverClass: addRootHoverClass,
    removeRootHoverClass: removeRootHoverClass
  };
}function uuidv4() {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, function (c) {
    return (Number.parseFloat(c) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> Number.parseFloat(c) / 4).toString(16);
  });
}

// TODO: Watch children length: When node is deleted: Remove from graph.
/**
 * Initialises the root state of a tree.
 * @param itemSelectedEventHandler A callback when an item is selected.
 * @param itemSelectedEventHandler A callback when an item is checked.
 * @returns 
 */
function useGraph(items, itemSelectedEventHandler, itemCheckedEventHandler, itemExpandedEventHandler, itemCollapsedEventHandler) {
  var childParentLookUp = {};
  var nodeLookUp = {};
  var getParent = function getParent(childId) {
    return childParentLookUp[childId];
  };
  var trackNode = function trackNode(node, parentNode) {
    if (!node.id) {
      node.id = uuidv4();
    }
    nodeLookUp[node.id] = node;
    childParentLookUp[node.id] = parentNode;
  };
  var detach = function detach(id) {
    var parent = childParentLookUp[id];
    if (parent == null) {
      items.value = items.value.filter(function (item) {
        return item.id != id;
      });
    } else {
      var _parent$children;
      parent.children = (_parent$children = parent.children) === null || _parent$children === void 0 ? void 0 : _parent$children.filter(function (child) {
        return child.id != id;
      });
    }
    delete childParentLookUp[id];
  };
  var attach = function attach(item) {
    items.value.push(item);
    trackNode(item, undefined);
  };
  var emitItemSelected = function emitItemSelected(node) {
    if (node.disabled === true) {
      return;
    }
    itemSelectedEventHandler(node);
    Object.values(nodeLookUp).forEach(function (node) {
      return node.selected = false;
    });
    node.selected = true;
  };
  var emitItemCheckedChange = function emitItemCheckedChange() {
    return itemCheckedEventHandler(Object.values(nodeLookUp).filter(function (node) {
      return node.checked && !node.disabled;
    }));
  };
  var getNode = function getNode(id) {
    return nodeLookUp[id];
  };
  return {
    getNode: getNode,
    getParent: getParent,
    trackNode: trackNode,
    detach: detach,
    emitItemCheckedChange: emitItemCheckedChange,
    emitItemSelected: emitItemSelected,
    emitItemExpanded: itemExpandedEventHandler,
    emitItemCollapsed: itemCollapsedEventHandler,
    attach: attach
  };
}var script = vue.defineComponent({
  name: 'tree-view',
  props: {
    items: {
      type: Array,
      required: true,
      default: function _default() {
        return [];
      }
    },
    isCheckable: {
      type: Boolean
    },
    hideGuideLines: {
      type: Boolean,
      default: false
    },
    onDropValidator: {
      type: Function
    },
    treeState: {
      type: Object
    },
    checkboxStyle: {
      type: String
    },
    lazyLoad: {
      type: Boolean
    }
  },
  components: {
    'treeview-item': script$1
  },
  emits: ['onContextMenu', 'onSelect', 'onCheck', 'onExpand', 'onCollapse'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      attrs = _ref.attrs;
    var reactiveItems = vue.ref([]);
    vue.watch(function () {
      return props.items;
    }, function () {
      return reactiveItems.value = props.items;
    }, {
      immediate: true
    });
    var parent = vue.computed(function () {
      return attrs.parent;
    });
    var internalItems = vue.computed(function () {
      return reactiveItems.value.map(function (item) {
        return item;
      });
    });
    var treeState = vue.ref();
    // Create a tree state object for only root nodes.
    treeState.value = vue.inject(_TREE_STATE_PROVIDER_INJECT_KEY, undefined);
    if (!treeState.value) {
      treeState.value = useGraph(reactiveItems, function (selectedItem) {
        return emit('onSelect', selectedItem);
      }, function (checkedItems) {
        return emit('onCheck', checkedItems);
      }, function (expandedItem) {
        return emit('onExpand', expandedItem);
      }, function (collapsedItem) {
        return emit('onCollapse', collapsedItem);
      });
      vue.provide(_TREE_STATE_PROVIDER_INJECT_KEY, treeState.value);
    }
    return _objectSpread2(_objectSpread2({}, useTreeViewItemMouseActions()), {}, {
      parent: parent,
      internalItems: internalItems,
      treeState: treeState
    });
  }
});var _hoisted_1 = ["id"];
var _hoisted_2 = {
  style: {
    "list-style": "none"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_treeview_item = vue.resolveComponent("treeview-item");
  var _component_tree_view = vue.resolveComponent("tree-view");
  return vue.openBlock(), vue.createElementBlock("div", null, [vue.createElementVNode("ul", {
    id: "explorer",
    class: vue.normalizeClass(["explorer tree-item-node-parent", {
      'no-guide': _ctx.hideGuideLines
    }]),
    onDragover: [_cache[3] || (_cache[3] = vue.withModifiers(function () {}, ["stop", "prevent"])), _cache[5] || (_cache[5] = vue.withModifiers(function ($event) {
      return _ctx.addRootHoverClass($event, _ctx.parent == null);
    }, ["stop"]))],
    onDragenter: _cache[4] || (_cache[4] = vue.withModifiers(function () {}, ["stop", "prevent"])),
    onDragleave: _cache[6] || (_cache[6] = vue.withModifiers(function ($event) {
      return _ctx.removeRootHoverClass($event, _ctx.parent == null);
    }, ["stop"])),
    onDrop: _cache[7] || (_cache[7] = vue.withModifiers(function ($event) {
      _ctx.onDropNode(undefined, $event, _ctx.onDropValidator, _ctx.treeState);
      _ctx.removeRootHoverClass($event, _ctx.parent == null);
    }, ["prevent", "stop"]))
  }, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.internalItems, function (treeViewItem) {
    return vue.openBlock(), vue.createElementBlock("li", {
      key: treeViewItem.id,
      id: treeViewItem.id,
      class: "tree-item-node"
    }, [vue.createVNode(_component_treeview_item, {
      class: "pointer tree-view-item",
      item: treeViewItem,
      parent: _ctx.parent,
      hideGuideLines: _ctx.hideGuideLines,
      onDragover: [_cache[0] || (_cache[0] = vue.withModifiers(function () {}, ["stop", "prevent"])), vue.withModifiers(_ctx.addHoverClass, ["stop"])],
      onDragenter: _cache[1] || (_cache[1] = vue.withModifiers(function () {}, ["stop", "prevent"])),
      draggable: _ctx.onDropValidator != undefined,
      onDragstart: vue.withModifiers(function ($event) {
        return _ctx.onDragNode(treeViewItem, $event);
      }, ["stop"]),
      onDragleave: vue.withModifiers(_ctx.removeHoverClass, ["stop"]),
      onDrop: vue.withModifiers(function ($event) {
        return _ctx.onDropNode(treeViewItem, $event, _ctx.onDropValidator, _ctx.treeState);
      }, ["prevent", "stop"]),
      checkboxStyle: _ctx.checkboxStyle,
      isCheckable: _ctx.isCheckable,
      treeState: _ctx.treeState,
      lazyLoad: _ctx.lazyLoad,
      onContextmenu: vue.withModifiers(function ($event) {
        return _ctx.$emit('onContextMenu', {
          item: treeViewItem,
          event: $event
        });
      }, ["prevent"])
    }, {
      icon: vue.withCtx(function () {
        return [vue.renderSlot(_ctx.$slots, "item-prepend-icon", vue.normalizeProps(vue.guardReactiveProps(treeViewItem)))];
      }),
      prepend: vue.withCtx(function () {
        return [vue.renderSlot(_ctx.$slots, "item-prepend", vue.normalizeProps(vue.guardReactiveProps(treeViewItem)))];
      }),
      expander: vue.withCtx(function () {
        return [vue.renderSlot(_ctx.$slots, "item-expander", vue.normalizeProps(vue.guardReactiveProps(treeViewItem)))];
      }),
      name: vue.withCtx(function () {
        return [vue.renderSlot(_ctx.$slots, "item-name", vue.normalizeProps(vue.guardReactiveProps(treeViewItem)))];
      }),
      append: vue.withCtx(function () {
        return [vue.renderSlot(_ctx.$slots, "item-append", vue.normalizeProps(vue.guardReactiveProps(treeViewItem)))];
      }),
      _: 2
    }, 1032, ["item", "parent", "hideGuideLines", "draggable", "onDragstart", "onDragleave", "onDrop", "onDragover", "checkboxStyle", "isCheckable", "treeState", "lazyLoad", "onContextmenu"]), treeViewItem.children && treeViewItem.children.length > 0 ? (vue.openBlock(), vue.createElementBlock("div", {
      key: 0,
      class: vue.normalizeClass(["node-child", {
        'nested': _ctx.parent != null,
        'root': _ctx.parent == undefined,
        'hide': !treeViewItem.expanded,
        'hide-guidelines': _ctx.hideGuideLines
      }])
    }, [vue.createVNode(_component_tree_view, {
      items: treeViewItem.children,
      hideGuideLines: _ctx.hideGuideLines,
      isNested: true,
      onDropValidator: _ctx.onDropValidator,
      lazyLoad: _ctx.lazyLoad,
      checkboxStyle: _ctx.checkboxStyle,
      parent: treeViewItem,
      isCheckable: _ctx.isCheckable,
      onOnContextMenu: _cache[2] || (_cache[2] = function ($event) {
        return _ctx.$emit('onContextMenu', $event);
      })
    }, vue.createSlots({
      _: 2
    }, [vue.renderList(_ctx.$slots, function (_, slot) {
      return {
        name: slot,
        fn: vue.withCtx(function (props) {
          return [vue.renderSlot(_ctx.$slots, slot, vue.normalizeProps(vue.guardReactiveProps(props)))];
        })
      };
    })]), 1032, ["items", "hideGuideLines", "onDropValidator", "lazyLoad", "checkboxStyle", "parent", "isCheckable"])], 2)) : vue.createCommentVNode("", true)], 8, _hoisted_1);
  }), 128))], 34), vue.createElementVNode("li", _hoisted_2, [_ctx.parent ? vue.renderSlot(_ctx.$slots, "child-append", vue.normalizeProps(vue.mergeProps({
    key: 0
  }, _ctx.parent))) : vue.createCommentVNode("", true)])]);
}script.render = render;var component = (function () {
  var installable = script;
  installable.install = function (app) {
    app.component('vue3-tree-vue', installable);
  };
  return installable;
})();var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default':component});// Attach named exports directly to component. IIFE/CJS will
// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)
Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    exportName = _ref2[0],
    exported = _ref2[1];
  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;