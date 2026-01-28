#!/usr/bin/env node

import chalk from 'chalk';
import { getRandomContent } from './index.js';

const purple = chalk.hex('#C27AFF');
const green = chalk.hex('#05DF72');
const yellow = chalk.hex('#FFDF20');
const orange = chalk.hex('#FF8904');
const cyan = chalk.cyan;

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function showMessage() {
  console.error('\n');
  console.error(cyan('// Frontend Masters'));
  console.error(cyan('// Level up your skills'));
  console.error('');

  const item = getRandomContent();
  const isTip = item.type === 'Tip';
  
  const title = isTip ? '💡 FRONTEND MASTERS' : '🎓 FEATURED PATH';
  const label = isTip ? 'Tip: ' : '';

  await sleep(200);
  console.error(yellow('┌─────────────────────────────────────────────────────────────────┐'));
  
  // Center the title
  const titleStr = title;
  const tPadLeft = Math.floor((65 - titleStr.length) / 2);
  const tPadRight = 65 - titleStr.length - tPadLeft;
  console.error(yellow('│') + ' '.repeat(tPadLeft) + chalk.bold.white(titleStr) + ' '.repeat(tPadRight) + yellow('│'));
  
  console.error(yellow('│') + '                                                                 ' + yellow('│'));
  
  // Format category centered
  const categoryStr = `Category: ${item.category}`;
  const paddingLeft = Math.floor((65 - categoryStr.length) / 2);
  const paddingRight = 65 - categoryStr.length - paddingLeft;
  console.error(yellow('│') + ' '.repeat(paddingLeft) + orange(categoryStr) + ' '.repeat(paddingRight) + yellow('│'));
  
  console.error(yellow('│') + '                                                                 ' + yellow('│'));
  console.error(yellow('└─────────────────────────────────────────────────────────────────┘'));
  
  console.error('\n');
  console.error(chalk.bold.white(label + item.content));
  console.error('\n');
  
  await sleep(100);
  console.error(purple(isTip ? '🚀 Start the Path:' : '🚀 Start Learning:'));
  console.error(chalk.underline.cyan(item.link));
  
  console.error('\n');
  console.error(purple('═══════════════════════════════════════════════════════════════════'));
  console.error('\n');
  console.error('  ' + chalk.bold.white('👉 Browse all learning paths:'));
  console.error('  ' + chalk.underline.cyan('https://frontendmasters.com/learn/'));
  console.error('\n');
  console.error(purple('═══════════════════════════════════════════════════════════════════'));
  console.error('\n');
}

showMessage().catch(console.error);
