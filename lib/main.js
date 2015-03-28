var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");

var self = require("sdk/self");
var on = false;
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


require("sdk/tabs").on("ready", runScript);

function runScript(tab) {
    tab.attach({
      contentScriptFile: self.data.url("app.js")
    });
}

function handleChange(state) {
  if (state === false) {
    on = false;
  }
  else {
    on = true;
  }
  /*if (state.checked) {
    require("sdk/tabs").activeTab.attach({
      contentScriptFile: self.data.url("app.js")
    });
  }*/
}

function handleHide() {
  button.state('window', {checked: false});
}
