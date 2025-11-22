#!/usr/bin/env node

import chalk from 'chalk';

const purple = chalk.hex('#C27AFF');
const green = chalk.hex('#05DF72');
const yellow = chalk.hex('#FFDF20');
const orange = chalk.hex('#FF8904');
const cyan = chalk.cyan;

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function showMessage() {
  console.error('\n');

  console.error(cyan('// Optimize your stack'));
  console.error(cyan('// Save big this Black Friday'));
  console.error('');

  process.stderr.write(orange('⚡ Compiling savings'));
  for (let i = 0; i < 3; i++) {
    await sleep(200);
    process.stderr.write('.');
  }
  console.error('');
  
  await sleep(300);
  console.error(green('✓ ') + 'Deployment successful\n');

  await sleep(200);

  console.error(yellow('┌─────────────────────────────────────────────────────────────────┐'));
  console.error(yellow('│') + chalk.bold.white('              🎉 BLACK FRIDAY SALE 🎉                          ') + yellow('│'));
  console.error(yellow('│') + '                                                                 ' + yellow('│'));
  console.error(yellow('│') + '           ' + green.bold('$100 OFF') + ' yearly membership                            ' + yellow('│'));
  console.error(yellow('│') + '                                                                 ' + yellow('│'));
  console.error(yellow('│') + '   → Offer:  ' + purple('$100 discount') + '                                       ' + yellow('│'));
  console.error(yellow('│') + '   → Valid:  ' + orange('This week only') + '                                     ' + yellow('│'));
  console.error(yellow('│') + '   → Status: ' + green.bold('ACTIVE') + '                                            ' + yellow('│'));
  console.error(yellow('└─────────────────────────────────────────────────────────────────┘'));

  console.error('\n');
  console.error(chalk.bold.white('Level up your skills for less'));
  console.error(chalk.gray("Don't miss out on this year's biggest savings!"));
  console.error('\n');

  const features = [
    'Master your stack with $100 off your first year',
    'Learn from industry leaders in JavaScript, React, CSS, DevOps & more',
    'Get unlimited access to 250+ expert-led courses',
    'Build your skills with curated paths and personalized learning'
  ];

  for (const feature of features) {
    await sleep(150);
    console.error(green('✓ ') + feature);
  }

  console.error('\n');
  console.error(purple('═══════════════════════════════════════════════════════════════════'));
  console.error('\n');
  console.error('  ' + chalk.bold.white('👉 Claim Your Discount:'));
  console.error('  ' + chalk.underline.cyan('https://frontendmasters.com/join/?code=blackfriday_signup&utm_source=fm&utm_medium=terminal&utm_campaign=blackfriday_npm'));
  console.error('\n');
  console.error(purple('═══════════════════════════════════════════════════════════════════'));
  console.error('\n');
}

showMessage().catch(console.error);