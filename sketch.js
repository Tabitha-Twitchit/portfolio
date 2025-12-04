
class Walker{
  constructor(){
    this.x = width / 2;
    this.y = height / 2;
  }
  show(){
    stroke(0);
    point(this.x, this.y);  
  }
  step(){

    //The original more random vars
    let xStep = floor(random(3)) -1;
    let yStep = floor(random(3)) -1;
    this.x += xStep;
    this.y += yStep;
    // let choice = floor(random(4));
    // switch(choice){
    //   case 0:
    //     this.x++;
    //     break
    //     case 1:
    //       this.x--;
    //       break
    //       case 2:
    //         this.y++
    //         break
    //         case 3:
    //           this.y--
    //         }
          }
  
  }
        
function setup() {
  let bgCanvas = createCanvas(windowWidth, windowHeight);
  bgCanvas.position(0,0);
  bgCanvas.style('z-index', '2');
  // bgCanvas.parent("bg");
  walker = new Walker();
  background(255,0,0,0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  walker.step();
  walker.show();
}

