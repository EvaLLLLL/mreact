/**
 * createElement
 */

export const createElement = (type, config, ...args) => {
  const props = Object.assign({}, config);
  const hasChildren = args.length > 0;
  const rawChildren = hasChildren ? [].concat(...args) : [];
  props.children = rawChildren
    .filter((child) => child !== null && child !== false)
    .map((child) =>
      child instanceof Object ? child : createTextElement(child)
    );

  return { type, props };
};

const TEXT_ELEMENT = "TEXT ELEMENT";

const createTextElement = (nodeValue) => {
  return createElement(TEXT_ELEMENT, { nodeValue });
};
