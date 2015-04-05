/*
 * module-bin
 * https://github.com/qiu8310/module-bin
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var assert = require('assert');

/**
 *
 * Resolve required module's bin file. Ff can't resolve, throw exception.
 *
 * @alias moduleBin
 * @param {String} mod          - module's name
 * @param {String} [bin = mod]  - module's bin name, if not set, then use the module's name
 * @returns {string} resolved module bin's absolute path.
 * @throws Can't resolve module mod
 */
module.exports = function(mod, bin) {
  var main, parts, ref;
  bin = bin || mod;

  assert.equal(typeof mod, 'string');
  assert.equal(typeof bin, 'string');

  try {
    main = require.resolve(mod);
    parts = main.split(path.sep);
    while ((ref = parts.pop())) {
      if (ref === mod && parts[parts.length - 1] === 'node_modules') {
        parts.push('.bin', bin);
        return path.join.apply(path, parts);
      }
    }
  } catch (e) {}

  throw new Error('Can\'t resolve module ' + mod);
};
