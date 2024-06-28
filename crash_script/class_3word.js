/*!
 * This file is part of Space Type Generator.
 * 
 * Copyright (c) Kiel Mutschelknaus
 * 
 * This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to
 * Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
 */

class DropWord {
  constructor(word, wordWidth, x, y,){
    this.word = word;

    this.w = wordWidth;
    this.h = pgTextSize * pgTextFactor[fontSelect];

    // this.coreX = x;
    // this.coreY = y;

    this.x = x + this.w/2;
    this.y = y - this.h/2;

    let options = {
      friction: 0,
      restitution: 0.6,
  }

    this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
    Composite.add(world, this.body);
  }

  run() {
    this.update();
    this.display();
  }
  
  update() {

  }

  display() {
    // this.displayFrame();
    this.displayWord();
  }

  displayFrame(){
    strokeWeight(1)
    stroke(strokeColor);
    noFill();

    let pos = this.body.position;
    let angle = this.body.angle;
    push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.w, this.h);
      line(-this.w/2, -this.h/2, this.w/2, this.h/2);
      line(-this.w/2, this.h/2, this.w/2, -this.h/2);
    pop();
  }

  displayWord(){
    fill(fillColor);
    noStroke();

    let pos = this.body.position;
    let angle = this.body.angle;
    push();
      translate(pos.x, pos.y);
      rotate(angle);

      textAlign(CENTER);
      text(this.word, 0, this.h/2);
    pop();
  }

  resetPos(){
    Matter.Body.setPosition(this.body, {x: this.x, y: this.y});
    Matter.Body.setAngle(this.body, 0);
    Matter.Body.setAngularSpeed(this.body, 0);
    Matter.Body.setAngularVelocity(this.body, 0);
    Matter.Body.setSpeed(this.body, 0);
  }

  removeIt(){
    Composite.remove(world, this.body);
  }
}