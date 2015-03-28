var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");

var self = require("sdk/self");
var pageMod = require("sdk/page-mod");

var button = ToggleButton({
  id: "RepWho",
  label: "RepWho",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onChange: handleChange
});

pageMod.PageMod({
  include: "*",
  contentScriptFile: [data.url("congressMember.js"),
                      data.url("data/app.js")]

});




function handleChange(state) {
  if (state.checked) {
    require("sdk/tabs").activeTab.attach({
      contentScriptFile: self.data.url("../static/app.js")
    });
    console.log("works");
  }
}

function handleHide() {
  button.state('window', {checked: false});
}
