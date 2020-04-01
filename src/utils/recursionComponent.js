import { endsWith } from "lodash";
import { ROOT_COMPONENT_NAME } from "../enums/rootComponetType";

function recursionComponent(VueComponent, tag) {
  if (endsWith(VueComponent.$vnode.tag, tag)) {
    return VueComponent;
  } else if (endsWith(VueComponent.$vnode.tag, ROOT_COMPONENT_NAME)) {
    return false;
  } else {
    return recursionComponent(VueComponent.$parent, tag);
  }
}

export default recursionComponent;
