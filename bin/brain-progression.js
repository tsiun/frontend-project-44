#!/usr/bin/env node

import runGame from "../src/index.js";
import { description, makeRound } from "../src/games/progression.js";

runGame(description, makeRound);