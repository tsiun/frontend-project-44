#!/usr/bin/env node

import runGame from "../src/index.js";
import { description, makeRound } from "../src/games/even.js";

runGame(description, makeRound);