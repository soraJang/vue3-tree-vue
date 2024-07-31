import { PropType } from "vue";
import { TreeState, TreeViewItem, _InternalItem } from "./types";
declare const _default: import("vue").DefineComponent<{
    item: {
        type: PropType<_InternalItem>;
        required: true;
    };
    isCheckable: {
        type: BooleanConstructor;
    };
    canRename: {
        type: BooleanConstructor;
    };
    checkboxStyle: {
        type: StringConstructor;
    };
    lazyLoad: {
        type: BooleanConstructor;
    };
    hideGuideLines: {
        type: BooleanConstructor;
    };
}, {
    toggleExpand: (shouldSet?: boolean) => void;
    treeState: TreeState;
    updateCheckState: () => void;
    isRenaming: import("vue").Ref<boolean>;
    beginRenaming: () => void;
    finishRenaming: () => void;
    parent: import("vue").ComputedRef<TreeViewItem>;
    checkbox: import("vue").Ref<HTMLInputElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-rename" | "onContextMenu")[], "on-rename" | "onContextMenu", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    item: {
        type: PropType<_InternalItem>;
        required: true;
    };
    isCheckable: {
        type: BooleanConstructor;
    };
    canRename: {
        type: BooleanConstructor;
    };
    checkboxStyle: {
        type: StringConstructor;
    };
    lazyLoad: {
        type: BooleanConstructor;
    };
    hideGuideLines: {
        type: BooleanConstructor;
    };
}>> & {
    "onOn-rename"?: ((...args: any[]) => any) | undefined;
    onOnContextMenu?: ((...args: any[]) => any) | undefined;
}, {
    isCheckable: boolean;
    canRename: boolean;
    lazyLoad: boolean;
    hideGuideLines: boolean;
}, {}>;
export default _default;
