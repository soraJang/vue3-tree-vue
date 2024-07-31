import { defineComponent, ref, computed, inject, onMounted, watch, nextTick, openBlock, createElementBlock, withModifiers, createCommentVNode, withDirectives, createElementVNode, renderSlot, normalizeProps, guardReactiveProps, normalizeClass, vShow, toDisplayString, createTextVNode, withKeys, vModelText, provide, resolveComponent, Fragment, renderList, createVNode, withCtx, createSlots, mergeProps } from 'vue';

const _TREE_STATE_PROVIDER_INJECT_KEY = "VUE3_TREE_VUE_TREE_STATE";

const updateChildrenCheckState = (parent, state) => {
  if (!parent.children) return;
  parent.children.forEach(child => {
    child.checked = parent.checked;
    state.getNode(child.id).indeterminate = false;
    updateChildrenCheckState(child, state);
  });
};
const updateParentCheckState = (child, state) => {
  if (!child) return;
  const parent = state.getParent(child.id);
  if (!parent) return;
  const parentNode = state.getNode(parent.id);
  if (parent.children) {
    const isEveryChildChecked = parent.children.every(child => child.checked);
    const someUnChecked = parent.children.some(child => !child.checked);
    const someChecked = parent.children.some(child => child.checked || state.getNode(child.id).indeterminate);
    const intermediate = someChecked && someUnChecked;
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
};

var script$1 = defineComponent({
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
  setup(props, {
    emit,
    attrs
  }) {
    const checkbox = ref();
    const parent = computed(() => attrs.parent);
    const treeState = inject(_TREE_STATE_PROVIDER_INJECT_KEY);
    const setCheckboxState = () => checkbox.value.checked = props.item.checked;
    onMounted(() => {
      treeState.trackNode(props.item, parent.value);
      if (props.item.checked) {
        setCheckboxState();
        updateParentCheckState(props.item, treeState);
      } else {
        var _parent$value;
        props.item.checked = (_parent$value = parent.value) === null || _parent$value === void 0 ? void 0 : _parent$value.checked;
      }
    });
    const updateCheckState = () => {
      var _checkbox$value;
      props.item.checked = (_checkbox$value = checkbox.value) === null || _checkbox$value === void 0 ? void 0 : _checkbox$value.checked;
      props.item.indeterminate = false;
      updateParentCheckState(props.item, treeState);
      updateChildrenCheckState(props.item, treeState);
      treeState.emitItemCheckedChange();
    };
    watch(() => props.item.indeterminate, () => checkbox.value.indeterminate = props.item.indeterminate);
    watch(() => props.item.checked, () => setCheckboxState());
    watch(() => props.item.expanded, () => toggleExpand(false));
    watch(() => {
      var _props$item$children;
      return (_props$item$children = props.item.children) === null || _props$item$children === void 0 ? void 0 : _props$item$children.length;
    }, () => {
      var _props$item$children2;
      return (_props$item$children2 = props.item.children) === null || _props$item$children2 === void 0 ? void 0 : _props$item$children2.forEach(child => treeState === null || treeState === void 0 ? void 0 : treeState.trackNode(child, props.item));
    });
    const isRenaming = ref(false);
    const renameBox = ref();
    const beginRenaming = () => {
      if (!props.canRename) return;
      isRenaming.value = true;
      nextTick().then(() => {
        var _renameBox$value;
        return (_renameBox$value = renameBox.value) === null || _renameBox$value === void 0 ? void 0 : _renameBox$value.focus();
      });
    };
    const finishRenaming = () => {
      // v-on:blur and key(enter) can cause this to fire twice.
      // this check protects against that.
      if (!isRenaming) return;
      emit("on-rename", props.item);
    };
    const toggleExpand = (shouldSet = true) => {
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
      toggleExpand,
      treeState,
      updateCheckState,
      isRenaming,
      beginRenaming,
      finishRenaming,
      parent,
      checkbox
    };
  }
});

const _hoisted_1$1 = {
  key: 0,
  class: "guide-line"
};
const _hoisted_2$1 = {
  key: 0,
  class: "tree-item__checkbox-area"
};
const _hoisted_3 = ["disabled"];
const _hoisted_4 = {
  class: "d-flex"
};
const _hoisted_5 = {
  class: "tiny_horizontal_margin"
};
const _hoisted_6 = {
  class: "tiny_horizontal_margin"
};
const _hoisted_7 = {
  key: 0,
  for: "checkbox",
  class: "pointer"
};
const _hoisted_8 = {
  class: "tiny_horizontal_margin"
};
const _hoisted_9 = {
  class: "tiny_horizontal_margin"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "d-flex align-items-center",
    onContextmenu: _cache[8] || (_cache[8] = withModifiers($event => _ctx.$emit('onContextMenu', {
      item: _ctx.item,
      event: $event
    }), ["prevent"]))
  }, [_ctx.parent != null && !_ctx.hideGuideLines ? (openBlock(), createElementBlock("div", _hoisted_1$1)) : createCommentVNode("", true), withDirectives(createElementVNode("div", {
    onClick: _cache[0] || (_cache[0] = $event => _ctx.toggleExpand())
  }, [renderSlot(_ctx.$slots, "expander", normalizeProps(guardReactiveProps(_ctx.item)), () => [createElementVNode("span", {
    class: normalizeClass(["chevron-right", {
      'rotate-90': _ctx.item.expanded
    }])
  }, null, 2)])], 512), [[vShow, _ctx.lazyLoad || _ctx.item.children && _ctx.item.children.length > 0]]), createElementVNode("div", {
    class: normalizeClass(["pointer tree-item", {
      'selected-tree-item': !_ctx.isCheckable && _ctx.item.selected
    }]),
    style: {
      "width": "100%"
    }
  }, [!_ctx.isRenaming ? (openBlock(), createElementBlock("div", {
    key: 0,
    onDblclick: _cache[4] || (_cache[4] = (...args) => _ctx.beginRenaming && _ctx.beginRenaming(...args))
  }, [_ctx.isCheckable ? (openBlock(), createElementBlock("div", _hoisted_2$1, [createElementVNode("input", {
    onContextmenu: _cache[1] || (_cache[1] = withModifiers(() => {}, ["prevent"])),
    onChange: _cache[2] || (_cache[2] = (...args) => _ctx.updateCheckState && _ctx.updateCheckState(...args)),
    type: "checkbox",
    ref: "checkbox",
    disabled: _ctx.item.disabled,
    class: normalizeClass(_ctx.checkboxStyle)
  }, null, 42, _hoisted_3), createElementVNode("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [renderSlot(_ctx.$slots, "icon")]), createElementVNode("div", _hoisted_6, [renderSlot(_ctx.$slots, "prepend")])]), !_ctx.isRenaming ? (openBlock(), createElementBlock("label", _hoisted_7, toDisplayString(_ctx.item.name), 1)) : createCommentVNode("", true), createTextVNode("   "), renderSlot(_ctx.$slots, "append")])) : (openBlock(), createElementBlock("div", {
    key: 1,
    class: "d-flex",
    onClick: _cache[3] || (_cache[3] = $event => {
      var _ctx$treeState;
      return (_ctx$treeState = _ctx.treeState) === null || _ctx$treeState === void 0 ? void 0 : _ctx$treeState.emitItemSelected(_ctx.item);
    })
  }, [createElementVNode("div", _hoisted_8, [renderSlot(_ctx.$slots, "icon")]), createElementVNode("div", _hoisted_9, [renderSlot(_ctx.$slots, "prepend")]), renderSlot(_ctx.$slots, "name", {}, () => [createElementVNode("span", null, toDisplayString(_ctx.item.name), 1)]), createTextVNode("   "), renderSlot(_ctx.$slots, "append")]))], 32)) : withDirectives((openBlock(), createElementBlock("input", {
    key: 1,
    ref: "rename-box",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.item.name = $event),
    onKeyup: _cache[6] || (_cache[6] = withKeys((...args) => _ctx.finishRenaming && _ctx.finishRenaming(...args), ["enter"])),
    onBlur: _cache[7] || (_cache[7] = (...args) => _ctx.finishRenaming && _ctx.finishRenaming(...args))
  }, null, 544)), [[vModelText, _ctx.item.name]])], 2)], 32);
}

script$1.render = render$1;

function useTreeViewItemMouseActions() {
  const addHoverClass = event => {
    const target = event.currentTarget;
    if (target) {
      target.classList.add('tree-item__drag-over');
    }
  };
  const addRootHoverClass = (event, isRootNode) => {
    if (!isRootNode) return;
    const target = event.currentTarget;
    if (target) {
      target.classList.add('root__drag-over');
    }
  };
  const removeRootHoverClass = (event, isRootNode) => {
    if (!isRootNode) return;
    const target = event.currentTarget;
    if (target) {
      target.classList.remove('root__drag-over');
    }
  };
  const removeHoverClass = event => {
    const target = event.currentTarget;
    if (target) {
      target.classList.remove('tree-item__drag-over');
    }
  };
  const onDragNode = (item, event) => {
    if (event.dataTransfer) {
      event.dataTransfer.setData('text/plain', JSON.stringify(item));
    }
  };
  const onDropNode = async (dropHost, event, isDropValid, state) => {
    if (event.dataTransfer) {
      removeHoverClass(event);
      const droppedNode = JSON.parse(event.dataTransfer.getData('text/plain'));
      if (!isDropValid || !(await isDropValid(droppedNode, dropHost))) return;
      if (dropHost && droppedNode.id === dropHost.id) {
        return;
      }
      state.detach(droppedNode.id);
      if (dropHost && !dropHost.children) dropHost.children = [];
      if (dropHost) dropHost.children.push(droppedNode);else state.attach(droppedNode); // Dropping into root
    }
  };

  return {
    addHoverClass,
    removeHoverClass,
    onDragNode,
    onDropNode,
    addRootHoverClass,
    removeRootHoverClass
  };
}

function uuidv4() {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c => (Number.parseFloat(c) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> Number.parseFloat(c) / 4).toString(16));
}
// TODO: Watch children length: When node is deleted: Remove from graph.
/**
 * Initialises the root state of a tree.
 * @param itemSelectedEventHandler A callback when an item is selected.
 * @param itemSelectedEventHandler A callback when an item is checked.
 * @returns
 */
function useGraph(items, itemSelectedEventHandler, itemCheckedEventHandler, itemExpandedEventHandler, itemCollapsedEventHandler) {
  const childParentLookUp = {};
  const nodeLookUp = {};
  const getParent = childId => childParentLookUp[childId];
  const trackNode = (node, parentNode) => {
    if (!node.id) {
      node.id = uuidv4();
    }
    nodeLookUp[node.id] = node;
    childParentLookUp[node.id] = parentNode;
  };
  const detach = id => {
    const parent = childParentLookUp[id];
    if (parent == null) {
      items.value = items.value.filter(item => item.id != id);
    } else {
      var _parent$children;
      parent.children = (_parent$children = parent.children) === null || _parent$children === void 0 ? void 0 : _parent$children.filter(child => child.id != id);
    }
    delete childParentLookUp[id];
  };
  const attach = item => {
    items.value.push(item);
    trackNode(item, undefined);
  };
  const emitItemSelected = node => {
    if (node.disabled === true) {
      return;
    }
    itemSelectedEventHandler(node);
    Object.values(nodeLookUp).forEach(node => node.selected = false);
    node.selected = true;
  };
  const emitItemCheckedChange = () => itemCheckedEventHandler(Object.values(nodeLookUp).filter(node => node.checked && !node.disabled));
  const getNode = id => nodeLookUp[id];
  return {
    getNode,
    getParent,
    trackNode,
    detach,
    emitItemCheckedChange,
    emitItemSelected,
    emitItemExpanded: itemExpandedEventHandler,
    emitItemCollapsed: itemCollapsedEventHandler,
    attach
  };
}

var script = defineComponent({
  name: 'tree-view',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => {
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
  setup(props, {
    emit,
    attrs
  }) {
    const reactiveItems = ref([]);
    watch(() => props.items, () => reactiveItems.value = props.items, {
      immediate: true
    });
    const parent = computed(() => attrs.parent);
    const internalItems = computed(() => reactiveItems.value.map(item => item));
    const treeState = ref();
    // Create a tree state object for only root nodes.
    treeState.value = inject(_TREE_STATE_PROVIDER_INJECT_KEY, undefined);
    if (!treeState.value) {
      treeState.value = useGraph(reactiveItems, selectedItem => emit('onSelect', selectedItem), checkedItems => emit('onCheck', checkedItems), expandedItem => emit('onExpand', expandedItem), collapsedItem => emit('onCollapse', collapsedItem));
      provide(_TREE_STATE_PROVIDER_INJECT_KEY, treeState.value);
    }
    return {
      ...useTreeViewItemMouseActions(),
      parent,
      internalItems,
      treeState
    };
  }
});

const _hoisted_1 = ["id"];
const _hoisted_2 = {
  style: {
    "list-style": "none"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_treeview_item = resolveComponent("treeview-item");
  const _component_tree_view = resolveComponent("tree-view");
  return openBlock(), createElementBlock("div", null, [createElementVNode("ul", {
    id: "explorer",
    class: normalizeClass(["explorer tree-item-node-parent", {
      'no-guide': _ctx.hideGuideLines
    }]),
    onDragover: [_cache[3] || (_cache[3] = withModifiers(() => {}, ["stop", "prevent"])), _cache[5] || (_cache[5] = withModifiers($event => _ctx.addRootHoverClass($event, _ctx.parent == null), ["stop"]))],
    onDragenter: _cache[4] || (_cache[4] = withModifiers(() => {}, ["stop", "prevent"])),
    onDragleave: _cache[6] || (_cache[6] = withModifiers($event => _ctx.removeRootHoverClass($event, _ctx.parent == null), ["stop"])),
    onDrop: _cache[7] || (_cache[7] = withModifiers($event => {
      _ctx.onDropNode(undefined, $event, _ctx.onDropValidator, _ctx.treeState);
      _ctx.removeRootHoverClass($event, _ctx.parent == null);
    }, ["prevent", "stop"]))
  }, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.internalItems, treeViewItem => {
    return openBlock(), createElementBlock("li", {
      key: treeViewItem.id,
      id: treeViewItem.id,
      class: "tree-item-node"
    }, [createVNode(_component_treeview_item, {
      class: "pointer tree-view-item",
      item: treeViewItem,
      parent: _ctx.parent,
      hideGuideLines: _ctx.hideGuideLines,
      onDragover: [_cache[0] || (_cache[0] = withModifiers(() => {}, ["stop", "prevent"])), withModifiers(_ctx.addHoverClass, ["stop"])],
      onDragenter: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop", "prevent"])),
      draggable: _ctx.onDropValidator != undefined,
      onDragstart: withModifiers($event => _ctx.onDragNode(treeViewItem, $event), ["stop"]),
      onDragleave: withModifiers(_ctx.removeHoverClass, ["stop"]),
      onDrop: withModifiers($event => _ctx.onDropNode(treeViewItem, $event, _ctx.onDropValidator, _ctx.treeState), ["prevent", "stop"]),
      checkboxStyle: _ctx.checkboxStyle,
      isCheckable: _ctx.isCheckable,
      treeState: _ctx.treeState,
      lazyLoad: _ctx.lazyLoad,
      onContextmenu: withModifiers($event => _ctx.$emit('onContextMenu', {
        item: treeViewItem,
        event: $event
      }), ["prevent"])
    }, {
      icon: withCtx(() => [renderSlot(_ctx.$slots, "item-prepend-icon", normalizeProps(guardReactiveProps(treeViewItem)))]),
      prepend: withCtx(() => [renderSlot(_ctx.$slots, "item-prepend", normalizeProps(guardReactiveProps(treeViewItem)))]),
      expander: withCtx(() => [renderSlot(_ctx.$slots, "item-expander", normalizeProps(guardReactiveProps(treeViewItem)))]),
      name: withCtx(() => [renderSlot(_ctx.$slots, "item-name", normalizeProps(guardReactiveProps(treeViewItem)))]),
      append: withCtx(() => [renderSlot(_ctx.$slots, "item-append", normalizeProps(guardReactiveProps(treeViewItem)))]),
      _: 2
    }, 1032, ["item", "parent", "hideGuideLines", "draggable", "onDragstart", "onDragleave", "onDrop", "onDragover", "checkboxStyle", "isCheckable", "treeState", "lazyLoad", "onContextmenu"]), treeViewItem.children && treeViewItem.children.length > 0 ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["node-child", {
        'nested': _ctx.parent != null,
        'root': _ctx.parent == undefined,
        'hide': !treeViewItem.expanded,
        'hide-guidelines': _ctx.hideGuideLines
      }])
    }, [createVNode(_component_tree_view, {
      items: treeViewItem.children,
      hideGuideLines: _ctx.hideGuideLines,
      isNested: true,
      onDropValidator: _ctx.onDropValidator,
      lazyLoad: _ctx.lazyLoad,
      checkboxStyle: _ctx.checkboxStyle,
      parent: treeViewItem,
      isCheckable: _ctx.isCheckable,
      onOnContextMenu: _cache[2] || (_cache[2] = $event => _ctx.$emit('onContextMenu', $event))
    }, createSlots({
      _: 2
    }, [renderList(_ctx.$slots, (_, slot) => {
      return {
        name: slot,
        fn: withCtx(props => [renderSlot(_ctx.$slots, slot, normalizeProps(guardReactiveProps(props)))])
      };
    })]), 1032, ["items", "hideGuideLines", "onDropValidator", "lazyLoad", "checkboxStyle", "parent", "isCheckable"])], 2)) : createCommentVNode("", true)], 8, _hoisted_1);
  }), 128))], 34), createElementVNode("li", _hoisted_2, [_ctx.parent ? renderSlot(_ctx.$slots, "child-append", normalizeProps(mergeProps({
    key: 0
  }, _ctx.parent))) : createCommentVNode("", true)])]);
}

script.render = render;

var entry_esm = (() => {
  const installable = script;
  installable.install = app => {
    app.component('vue3-tree-vue', installable);
  };
  return installable;
})();

export { entry_esm as default };
