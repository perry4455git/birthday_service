const { assert } = require("chai");
const sinon = require("sinon");
const { readFriends } = require("../bs");
const fs = require("fs");

describe("friendStore", () => {
  describe("readFriends", () => {
    it("should throw exception if filepath is not passed", () => {
      assert.throws(() => readFriends(), "filepath is missing");
    });

    it("should return friend list from file", () => {
      const friends = [
        {
          firstName: "perry",
          lastName: "z",
          dateOfBirth: 1997 / 10 / 19,
          email: "perry.z@gmail.com",
        },
        {
          firstName: "anne",
          lastName: "stew",
          dateOfBirth: 1995 / 03 / 09,
          email: "stew.ann@foobar.com",
        },
      ];
      const fake_readFileSync = sinon.fake.returns(friends);
      sinon.replace(fs, "readFileSync", fake_readFileSync);

      const result = readFriends("./friends.json");
      assert.isArray(result);
      assert.equal(result.length, friends.length);
      assert.isTrue(fake_readFileSync.calledOnce);
    });
  });
});