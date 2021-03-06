var mapSet = function(position, map){
  var newMap = document.createElement('table');
  var newTbody = document.createElement('tbody');

  position.appendChild(newMap);
  newMap.appendChild(newTbody);

  for(var i = 0; i < map.length; i++){
    var newTr = document.createElement('tr');

    for(var j = 0; j < map[i].length; j++){
      var newTd = document.createElement('td');
      newTr.appendChild(newTd);
    }
    newTbody.appendChild(newTr);
  }
}

var mapReset = function(map){
  var td = document.getElementsByTagName('td');
  var k = 0;

  for(var i = 0; i < map.length; i++){
    for(var j = 0; j < map[i].length; j++){
      switch(map[i][j]){
        case 'lt':
          td[k].className = 'lt';
          break;          
        case 'rt':
          td[k].className = 'rt';
          break;          
        case 'lb':
          td[k].className = 'lb';
          break;          
        case 'rb':
          td[k].className = 'rb';
          break;          
        case 'l':
          td[k].className = 'l';
          break;          
        case 'r':
          td[k].className = 'r';
          break;
        case 't':
          td[k].className = 't';
          break;
        case 'b':
          td[k].className = 'b';
          break;
        case 'o':
          td[k].className = 'o';
          break;
        default:
          break;
      }
      k++;
    }
  }
}


var clickEvent = function(element, color, turn, map, cTurn){
  var x = element.parentNode.rowIndex;
  var y = element.cellIndex;

  if(color === turn && map[x][y] !== 'black' && map[x][y] !== 'white'){
    socket.emit('checkPoint', {turn:turn, x:x, y:y});
    cTurn = true;
  }else{
    console.log('님 차례가 아닙니다');
  }
};

var changeTurn = function(color){
  var showTurn = document.getElementsByClassName('turn');
  var mshowTurn = document.getElementsByClassName('m-users')[0].getElementsByTagName('li');

  if(color === "black"){
    showTurn[0].style.backgroundPosition = "-300px 0";
    mshowTurn[0].style.background = "none";
    mshowTurn[1].style.backgroundColor = "#ddd";
  }else{
    showTurn[0].style.backgroundPosition = "-270px 0";
    mshowTurn[0].style.backgroundColor = "#ddd";
    mshowTurn[1].style.background = "none";
  }
};
