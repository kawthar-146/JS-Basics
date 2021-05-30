var actionShow = document.getElementById('show');
var actionHide = document.getElementById('hide');
actionShow.onclick = actionClick.bind(this, true);
actionHide.onclick = actionClick.bind(this, false);
var text = document.getElementById('texte');
function actionClick(visible){
    if (visible){
      text.style.display= "block";
     }
      else {
      text.style.display= "none";
     }
  } 

