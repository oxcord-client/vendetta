import findInTree from "@utils/findInTree";
import { SearchFilter } from "@/def";

export default function findInReactTree(tree: { [key: string]: any }, filter: SearchFilter): any {
    return findInTree(tree, filter, {
        walkable: ["props", "children", "child", "sibling"],
    });
}