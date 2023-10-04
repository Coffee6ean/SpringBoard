describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it("should verify that a new tr (server) appears in the table", function() {
    updateServerTable();

    
  });

  afterEach(function() {
    // teardown logic
    serverNameInput.value = "";
    expect(serverNameInput.value).toEqual("");
  });
});
