'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  const rules = sourceString.split(';');

  for (const rule of rules) {
    if (rule.trim().length === 0) {
      continue;
    }

    const splitIndex = rule.indexOf(':');

    if (splitIndex !== -1) {
      const property = rule.slice(0, splitIndex).trim();
      const value = rule.slice(splitIndex + 1).trim();

      styles[property] = value;
    }
  }

  return styles;
}

module.exports = convertToObject;
