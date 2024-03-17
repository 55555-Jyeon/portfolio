import React, { Component } from "react";
import Matter from "matter-js";

interface Word {
  body: Matter.Body;
  word: string;
}

class SkillComponent extends Component {
  private sceneRef: React.RefObject<HTMLCanvasElement>;
  private engine: Matter.Engine | undefined;
  private words: Word[] = [];
  private skillList: string[] = [
    "javascript",
    "typeScript",
    "react",
    "nextjs",
    "recoil",
    "zustand",
    "reactquery",
    "storybook",
    "styled-components",
    "emotion",
    "tailwind css",
    "scss",
    "mui",
    "chakara",
    "figma",
    "jira",
    "notion",
    "slack",
    "linear",
    "Vercel",
    "netlify",
  ];

  constructor(props: any) {
    super(props);
    this.sceneRef = React.createRef();
  }

  componentDidMount() {
    this.setupCanvas();
    document.addEventListener("mousemove", this.mouseMoved);
  }

  componentDidUpdate() {
    this.setupCanvas();
  }

  setupCanvas() {
    const canvas = this.sceneRef.current;
    if (!canvas) return;

    const { width, height } = canvas.getBoundingClientRect();
    this.engine = Matter.Engine.create();

    const ground = Matter.Bodies.rectangle(
      width / 2,
      height - 0.75 * height,
      width,
      10,
      {
        isStatic: true,
      }
    );
    const wallLeft = Matter.Bodies.rectangle(0, height / 2, 10, height, {
      isStatic: true,
    });
    const wallRight = Matter.Bodies.rectangle(width, height / 2, 10, height, {
      isStatic: true,
    });
    Matter.World.add(this.engine.world, [ground, wallLeft, wallRight]);

    for (let i = 0; i < this.skillList.length; i++) {
      const x = Math.random() * width;
      const y = -200;
      const word = this.skillList[i];
      const newWord: Word = {
        body: Matter.Bodies.rectangle(x, y, word.length * 15, 30),
        word,
      };
      this.words.push(newWord);
      Matter.World.add(this.engine.world, newWord.body);
    }

    Matter.Runner.run(this.engine);
    requestAnimationFrame(this.drawWords);
  }

  componentWillUnmount() {
    if (this.engine) {
      Matter.Engine.clear(this.engine);
    }
    document.removeEventListener("mousemove", this.mouseMoved);
  }

  mouseMoved = (event: MouseEvent) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    this.mousedMoved(mouseX, mouseY);
  };

  mousedMoved(mouseX: number, mouseY: number) {
    const canvas = this.sceneRef.current;
    if (!canvas) return;

    const moveDistance = 100; // 인근 사각형을 움직일 거리 설정

    for (let word of this.words) {
      // 마우스와 사각형의 거리 계산
      const distanceToMouse = Matter.Vector.magnitude(
        Matter.Vector.sub({ x: mouseX, y: mouseY }, word.body.position)
      );

      // 인근 사각형만 반응하도록 설정
      if (distanceToMouse < moveDistance) {
        // 거리가 일정 값 이하인 경우, 랜덤한 위치로 이동
        const newX = Math.random() * canvas.width;
        const newY = Math.random() * canvas.height;
        Matter.Body.setPosition(word.body, { x: newX, y: newY });
      }
    }
  }

  drawWords = () => {
    const canvas = this.sceneRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    for (let word of this.words) {
      const pos = word.body.position;
      const angle = word.body.angle;

      ctx.save();
      ctx.translate(pos.x, pos.y);
      ctx.rotate(angle);
      ctx.lineWidth = 3;

      const textSize = 20;
      ctx.font = `${textSize}px sans-serif`;

      const textWidth = ctx.measureText(word.word.toUpperCase()).width;
      const textHeight = textSize;

      const rectWidth = textWidth + 20;
      const rectHeight = textHeight + 20;

      ctx.beginPath();

      // 배경색
      if (
        word.word === "figma" ||
        word.word === "linear" ||
        word.word === "notion" ||
        word.word === "jira" ||
        word.word === "slack"
      ) {
        ctx.fillStyle = "#005134";
      } else if (
        word.word === "react" ||
        word.word === "nextjs" ||
        word.word === "storybook"
      ) {
        ctx.fillStyle = "#FFDB45";
      } else if (
        word.word === "vercel" ||
        word.word === "netlify" ||
        word.word === "mui" ||
        word.word === "chakara"
      ) {
        ctx.fillStyle = "#FFFCEC";
      } else {
        ctx.fillStyle = "#fff";
      }
      ctx.strokeStyle = "#005134";
      ctx.lineWidth = 2;
      const borderRadius = 20;
      ctx.moveTo(-rectWidth / 2 + borderRadius, -rectHeight / 2);
      ctx.arcTo(
        rectWidth / 2,
        -rectHeight / 2,
        rectWidth / 2,
        rectHeight / 2,
        borderRadius
      );
      ctx.arcTo(
        rectWidth / 2,
        rectHeight / 2,
        -rectWidth / 2,
        rectHeight / 2,
        borderRadius
      );
      ctx.arcTo(
        -rectWidth / 2,
        rectHeight / 2,
        -rectWidth / 2,
        -rectHeight / 2,
        borderRadius
      );
      ctx.arcTo(
        -rectWidth / 2,
        -rectHeight / 2,
        rectWidth / 2,
        -rectHeight / 2,
        borderRadius
      );
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // 글자색 설정
      if (
        word.word === "figma" ||
        word.word === "linear" ||
        word.word === "notion" ||
        word.word === "jira" ||
        word.word === "slack"
      ) {
        ctx.fillStyle = "#FFDB45"; // 글자색
      } else {
        ctx.fillStyle = "#005134"; // 글자색
      }

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(word.word.toUpperCase(), 0, 0);

      ctx.restore();
    }

    requestAnimationFrame(this.drawWords);
  };

  render() {
    return (
      <canvas
        ref={this.sceneRef}
        style={{
          width: "100vw",
          height: "calc(100vh - 60px)",
          zIndex: 10,
        }}
      />
    );
  }
}

export default SkillComponent;
