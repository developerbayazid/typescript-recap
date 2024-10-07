import { Player } from './classes/Player.js';
import { IsPlayer } from './interface/IsPlayer.js';

const player1 = new Player('Tamim', 23, 'Bangladesh');
const player2 = new Player('Shakib', 22, 'Bangladesh');
const player3 = new Player('Mushi', 33, 'Bangladesh');

console.log(player2.play());

const player: IsPlayer[] = [];

player.push(player1);
player.push(player2);
player.push(player3);
