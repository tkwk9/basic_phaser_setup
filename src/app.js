import "phaser";
import "./app.scss";
import space3 from "./assets/space3.png";
import red from "./assets/red.png";
import phaser3logo from "./assets/phaser3-logo.png";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 800,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 500 },
    },
  },
  scene: {
    preload: preload,
    create: create,
  },
};

window.game = new Phaser.Game(config);

function preload() {
  this.load.image("sky", space3);
  this.load.image("logo", phaser3logo);
  this.load.image("red", red);
}

function create() {
  this.add.image(400, 300, "sky");

  const particles = this.add.particles("red");

  const emitter = this.add.particles(0, 0, "red", {
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: "ADD",
  });

  const logo = this.physics.add.image(400, 100, "logo");

  logo.setVelocity(100, 200);
  logo.setBounce(1, 1);
  logo.setCollideWorldBounds(true);

  emitter.startFollow(logo);
}
