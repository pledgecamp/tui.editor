import isUndefined from 'tui-code-snippet/type/isUndefined';

export const isMac = /Mac/.test(navigator.platform);

export function includes(arr, targetItem) {
  return arr.indexOf(targetItem) !== -1;
}

const availableLinkAttributes = ['rel', 'target', 'contenteditable', 'hreflang', 'type'];

/**
 * sanitize attribute for link
 * @param {object} attribute - attribute for link
 * @returns {object} sanitized attribute
 */
export function sanitizeLinkAttribute(attribute) {
  if (!attribute) {
    return null;
  }

  const linkAttribute = {};

  availableLinkAttributes.forEach(key => {
    if (attribute[key] !== undefined) {
      linkAttribute[key] = attribute[key];
    }
  });

  return linkAttribute;
}
