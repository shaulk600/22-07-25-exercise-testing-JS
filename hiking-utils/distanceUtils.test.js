// import test from "node:test"

import { kmToMeters, a } from "./distanceUtils.js";
import { before, after, describe, test, } from "node:test";
import assert from "node:assert";

describe('function kmToMeters test', () => {
    test(" test - kmToMeters basic 1 ", () => {
        const kilometer1 = 2000;
        assert.deepEqual(kmToMeters(kilometer1), 2)
    })

    test(" test - kmToMeters basic 2 ", () => {
        const kilometer2 = "2000";
        assert.deepEqual(kmToMeters(kilometer2), undefined)
    })

    test(" test - kmToMeters basic 3 ", () => {
        const kilometer3 = [2000, 4000];
        assert.deepEqual(kmToMeters(kilometer3), undefined)
        assert.ok(kilometer3.length >= 0)
    })

    test(" test - kmToMeters basic 4 ", () => {
        const kilometer4 = { number: 2000 };
        assert.equal(typeof kilometer4, "object")
        assert.deepEqual(kmToMeters(kilometer4), undefined)
    })
    //npm run startTest

});

// test('input error testing function a ', () => {
//     assert.doesNotThrow(() => a('abc'),)
// })
// test('input error testing function a.2 ', () => {

//     assert.strictEqual(() => a('-5'), RangeError)
// })