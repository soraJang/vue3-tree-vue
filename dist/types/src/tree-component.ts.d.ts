import { IsValidDropCallback, TreeState, TreeViewItem, _InternalItem } from "./types";
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    items: {
        type: PropType<TreeViewItem[]>;
        required: true;
        default: () => never[];
    };
    isCheckable: {
        type: BooleanConstructor;
    };
    hideGuideLines: {
        type: BooleanConstructor;
        default: boolean;
    };
    onDropValidator: {
        type: PropType<IsValidDropCallback | undefined>;
    };
    treeState: {
        type: PropType<TreeState>;
    };
    checkboxStyle: {
        type: StringConstructor;
    };
    lazyLoad: {
        type: BooleanConstructor;
    };
}, {
    parent: import("vue").ComputedRef<TreeViewItem>;
    internalItems: import("vue").ComputedRef<_InternalItem[]>;
    treeState: import("vue").Ref<TreeState | undefined>;
    addHoverClass: (event: DragEvent) => void;
    removeHoverClass: (event: DragEvent) => void;
    onDragNode: (item: TreeViewItem, event: DragEvent) => void;
    onDropNode: (dropHost: _InternalItem | undefined, event: DragEvent, isDropValid: IsValidDropCallback | undefined, state: TreeState | undefined) => Promise<void>;
    addRootHoverClass: (event: DragEvent, isRootNode: boolean) => void;
    removeRootHoverClass: (event: DragEvent, isRootNode: Boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("onContextMenu" | "onSelect" | "onCheck" | "onExpand" | "onCollapse")[], "onContextMenu" | "onSelect" | "onCheck" | "onExpand" | "onCollapse", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<TreeViewItem[]>;
        required: true;
        default: () => never[];
    };
    isCheckable: {
        type: BooleanConstructor;
    };
    hideGuideLines: {
        type: BooleanConstructor;
        default: boolean;
    };
    onDropValidator: {
        type: PropType<IsValidDropCallback | undefined>;
    };
    treeState: {
        type: PropType<TreeState>;
    };
    checkboxStyle: {
        type: StringConstructor;
    };
    lazyLoad: {
        type: BooleanConstructor;
    };
}>> & {
    onOnContextMenu?: ((...args: any[]) => any) | undefined;
    onOnSelect?: ((...args: any[]) => any) | undefined;
    onOnCheck?: ((...args: any[]) => any) | undefined;
    onOnExpand?: ((...args: any[]) => any) | undefined;
    onOnCollapse?: ((...args: any[]) => any) | undefined;
}, {
    items: TreeViewItem[];
    isCheckable: boolean;
    hideGuideLines: boolean;
    lazyLoad: boolean;
}, {}>;
export default _default;
