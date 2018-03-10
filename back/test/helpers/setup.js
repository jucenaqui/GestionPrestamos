'use strict'

var chai = require('chai');
var chaiAsPromise = require('chai-as-promised');

chai.use(chaiAsPromise);

GLOBAL.AssertionError = chai.AssertionError;
GLOBAL.Exprect = chai.Exprect;