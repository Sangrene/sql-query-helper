import { chainKeyEqualsValue, chainKeys, closeKeysOrValueParenthesis } from "../lib/stringUtils"
import chai, {expect} from "chai";
import 'mocha';
import { escape } from "sqlstring";


describe("Test formatting keys and values fields", () => {
  it("Should format fields KEY = VALUE, KEY = VALUE ...", () => {
    const chain = chainKeyEqualsValue({
      fields : {
        NAME: "name",
        NUMBER: 1,
        DATE: new Date(2019, 5, 18, 19, 50)
      }
    });
    const chain2 = chainKeyEqualsValue({
      formatter: escape,
      fields : {
        NAME: "name",
        NUMBER: 1,
        DATE: new Date(2019, 5, 18, 19, 50)
      }
    });
    expect(chain).to.be.equal("NAME = 'name', NUMBER = 1, DATE = '2019-06-18 19:50:00.000'");
    expect(chain2).to.be.equal("NAME = 'name', NUMBER = 1, DATE = '2019-06-18 19:50:00.000'");

  })

  it("Should format keys (for SELECT) like KEY1, KEY2, KEY3 ...", () => {
    const chain = chainKeys(["ID", "NUMBER", "DATE"]);
    expect(chain).to.be.equal("ID, NUMBER, DATE");
  })

  it("Should correctly format closing parenthesis", () => {
    const str = closeKeysOrValueParenthesis(" A, B, C,");
    expect(str).to.be.equal("( A, B, C )");
  })
})
