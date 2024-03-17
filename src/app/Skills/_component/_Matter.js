const { background } = require("@chakra-ui/react");

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let words = [];
let ground, wallLeft, wallRight;
let skillList = [
  "Javascript",
  "TypeScript",
  "React",
  "NextJS",
  "Styled-Components",
  "emotion",
  "tailwind CSS",
  "SCSS",
  "MUI",
  "Chakara",
  "StoryBook",
  "Discord",
  "notion",
  "slack",
  "Linear",
  "Vercel",
  "Netlify",
];

function setup() {
  createCanvas(windowWidth, windowHeight - 60);
  engine = Engine.create();

  ground = Bodies.rectangle(width / 2, height - 20, width, 10, {
    isStatic: true,
  });
  wallLeft = Bodies.rectangle(0, height / 2, 10, height, {
    isStatic: true,
  });
  wallRight = Bodies(width, height / 2, 10, height, {
    isStatic: true,
  });
  World.add(engine.world, [ground, wallLeft, wallRight]);

  for (let i = 0; i < skillList.length; i++) {
    words.push(new words(random(width), -200, skillList[i]));
  }
}

function draw() {
  background("#060606");
  Engine.update(engine);
  for (let word of words) {
    word.show();
  }

  class Word {
    constructor(x, y, word) {
      this.body = Bodies.rectangle(x, y, word.length * 20, 40);
      this.word = word;
      World.add(engine.world, this.body);
    }

    show() {
      let pos = this.body.position;
      let angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      recMode(CENTER);
      fill(255);
      stroke("#0f0f0f");
      strokeWeight(3);
      rect(0, 0, this.word.length * 40 + 80, 100, 60);
      noStroke();
      fill("#0f0f0f");
      textSize(40);
      textAlign(CENTER, CENTER);
      text(this.word.toUpperCase(), 0, 0);
      pop();
    }
  }
}

function mousedMoved() {
  for (let word of words) {
    if (
      distance(mouseX, mouseY, word.body.position.x, word.body.position.y) < 50
    ) {
      Body.applyForce(
        word.body,
        { x: word.body.position.x, y: word.body.position.y },
        { x: random(-0.2, 0.2), y: random(-0.2, 0.2) }
      );
    }
  }
}
