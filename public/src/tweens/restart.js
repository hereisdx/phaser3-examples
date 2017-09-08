var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var arrow;
var tween;
var text;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('arrow', 'assets/sprites/arrow.png');
}

function create ()
{
    text = this.add.text(30, 20, '0', { font: '16px Courier', fill: '#00ff00' });

    arrow = this.add.image(100, 300, 'arrow');

    tween = this.tweens.add({
        targets: arrow,
        x: 700,
        y: 300,
        ease: 'Linear',
        duration: 3000
    });

    this.input.events.on('POINTER_DOWN_EVENT', function () {

        tween.restart();

    });
}

function update ()
{
    if (tween.isPlaying())
    {
        text.setText('Progress: ' + tween.progress);
    }
    else
    {
        text.setText('Click to restart: ' + tween.state);
    }
}
