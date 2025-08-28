#!/usr/bin/env node

import runGame from "../src/index.js";
import { description, makeRound } from "../src/games/calc.js";

runGame(description, makeRound);
