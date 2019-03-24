import { create } from "jss";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";

const styleNode = document.createComment("jss-insertion-point");
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: "jss-insertion-point"
});

export { generateClassName, jss };
