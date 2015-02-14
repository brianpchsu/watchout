// start slingin' some d3 here.
var Enemy = function() {
  this.top = randomGenerator();
  this.left = randomGenerator();
  this.radius = 10;
};

var Player = function() {
  this.top = 400;
  this.left = 400;
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

function init(input, color) {
  // console.log("hi");
  var circle = svg.selectAll("circle")
            .data(input)
            .enter()
            .append("circle")
            .attr("cx", function(d) { return d.top })
            .attr("cy", function(d) { return d.left })
            .attr("r", function(d) { return d.radius })
            .style('fill', color);
}

function update(){
  svg.selectAll("circle")
    .transition()
    .duration(1000)
    .attr("cx", randomGenerator)
    .attr("cy", randomGenerator);
}

init(createEnemies(10), "red");
init(new Player(), 'green');

setInterval(function(){
  update();
}, 1000);

var Player = function() {
  this.top = 400;
  this.left = 400;
  this.radius = 10;
};
function addPlayer (input){
  var rect = svg.selectAll("rect")
            .data(input)
            .enter()
            .append("rect")
            .attr("rx", function(d) { return d.top })
            .attr("ry", function(d) { return d.left })
            .attr("width", 10)
            .attr("height", 10)
            .style('fill', 'green');
}
var player = new Player();
addPlayer(player);
