import { IsValidDropCallback, TreeState, TreeViewItem, _InternalItem } from "../types";
export declare function useTreeViewItemMouseActions(): {
    addHoverClass: (event: DragEvent) => void;
    removeHoverClass: (event: DragEvent) => void;
    onDragNode: (item: TreeViewItem, event: DragEvent) => void;
    onDropNode: (dropHost: _InternalItem | undefined, event: DragEvent, isDropValid: IsValidDropCallback | undefined, state: TreeState | undefined) => Promise<void>;
    addRootHoverClass: (event: DragEvent, isRootNode: boolean) => void;
    removeRootHoverClass: (event: DragEvent, isRootNode: Boolean) => void;
};
