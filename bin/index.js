#! /usr/bin/env node

var spawn=require("child_process").spawn;
spawn("sh", ["./gitish.sh"], {stdio: "inherit"});
