// start slingin' some d3 here.
var Enemy = function() {
  this.top = randomGenerator();
  this.left = randomGenerator();
  this.radius = 10;
};

var createEnemies = function(n){
  var enemies = [];
  for( var i =0; i < n; i++){
    var enemy = new Enemy();
    enemies.push(enemy);
  }
  return enemies;
};

var randomGenerator = function(){
  return Math.floor(Math.random()*790);
};

var svg = d3.select("body").append("svg")
   .attr("width", 800)
   .attr("height", 800);

var drag = d3.behavior.drag()
            .on("dragstart", dragstart)
            .on("drag", dragmove)
            .on("dragend", dragend);

function init(input, color) {
  // console.log("hi");
  var circle = svg.selectAll("circle")
            .data(input)
            .enter()
            .append("circle")
            .attr('class', 'enemy')
            .attr("cx", function(d) { return d.top })
            .attr("cy", function(d) { return d.left })
            .attr("r", function(d) { return d.radius })
            .style('fill', color);

  svg.append('circle')
    .attr("cx", function(d) { return 400; })
    .attr("cy", function(d) { return 400 })
    .attr("r", function(d) { return 10 })
    .attr('class', 'player')
    .style('fill', 'green')
    .call(drag);
}
var radius = 10;
var width = 800;
var height = 800;

function dragstart(d){
  d3.select(this)
    .style("fill", "gold")
}
function dragmove(d) {
  d3.select(this)
      .attr("cx", d3.event.x)
      .attr("cy", d3.event.y);
}
function dragend(d){
  d3.select(this)
    .style("fill", "green")
}

function update(){
  svg.selectAll("circle.enemy")
    .transition()
    .duration(1000)
    .attr("cx", randomGenerator)
    .attr("cy", randomGenerator);
}

init(createEnemies(10), "red");
// init(new Player(), 'green');

setInterval(function(){
  update();
}, 2000);


