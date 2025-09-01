#!/usr/bin/env node

import runGame from "../src/index.js";
import { description, makeRound } from "../src/games/prime.js";

runGame(description, makeRound);