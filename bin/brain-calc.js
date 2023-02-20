#!/usr/bin/env node

import { generateRound, description } from '../src/games/calc.js';
import runGame from '../src/index.js';

const game = { generateRound, description };
runGame(game);
