var game = new Phaser.Game(900, 600, Phaser.AUTO, '');

game.state.add('mainMenu', mainMenu);
game.state.add('Game', Game);

game.state.start('mainMenu');