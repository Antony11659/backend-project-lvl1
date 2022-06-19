#!/usr/bin/env node

import greeting, { userName } from "../src/cli";

console.log("Welcome to the Brain Games!");

greeting(userName)
