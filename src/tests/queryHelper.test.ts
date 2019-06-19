import queryHelper from "..";
import chai, {expect} from "chai";
import 'mocha';

describe("Test helper object", () => {
  it("Should contains select, update, insert, delete", () => {
    const helper = queryHelper();
    expect(helper).to.exist;
    expect(helper).to.have.property("select");
    expect(helper).to.have.property("update");
    expect(helper).to.have.property("insert");
    expect(helper).to.have.property("delete");
  });
  
});

describe("Test queries format with default sql escape", () => {
  const helper = queryHelper();
  it("Should format INSERT query properly with default formatter", () => {
    const query = helper.insert({
      table: "MY_TABLE",
      fields: {
        STRING_VAL: "MY_VALUE",
        NUMBER_VAL: 1,
        DATE_VAL: new Date(2019, 5, 18, 19, 50)
      }
    });
    expect(query).to.be.equal("insert into MY_TABLE ( STRING_VAL, NUMBER_VAL, DATE_VAL ) values ( 'MY_VALUE', 1, '2019-06-18 19:50:00.000' )")
  });

  it("Should format UPDATE query properly with default formatter", () => {
    const query = helper.update({
      table: "MY_TABLE",
      fields: {
        STRING_UPDATED: "MY_STRING",
        NUMBER_UPDATED: 1
      },
      where: {
        ID: 1
      }
    });
    expect(query).to.be.equal("update MY_TABLE set STRING_UPDATED = 'MY_STRING', NUMBER_UPDATED = 1 where ID = 1");
  });

  it("Should format SELECT query properly with default formatter selecting all fields", () => {
    const query = helper.select({
      table: "MY_TABLE",
      where: {
        ID: 1
      }
    });
    expect(query).to.be.equal("select * from MY_TABLE where ID = 1");
  });

  it("Should format SELECT query properly with default formatter selecting specific fields", () => {
    const query = helper.select({
      table: "MY_TABLE",
      fields: ["ID", "FIRST_NAME", "LAST_NAME"],
      where: {
        ID: 1
      }
    })
    expect(query).to.be.equal("select ID, FIRST_NAME, LAST_NAME from MY_TABLE where ID = 1")
  });

  it("Should format DELETE query properly with default formatter", () => {
    const query = helper.delete({
      table: "MY_TABLE",
      where: {
        ID: 1
      }
    });
    expect(query).to.be.equal("delete from MY_TABLE where ID = 1");
  });

});