(function(w, d){

  if( d.querySelector('.js-select-button.css-truncate-target') ){

    w.branchName = d.querySelector('.js-select-button.css-truncate-target').innerHTML;

  } else if(d.querySelectorAll('span.current-branch span')[1]){

    w.branchName = d.querySelectorAll('span.current-branch span')[1].innerHTML;

  }

  //alert('branchName: ' + branchName);

  w.insertAfter = function(referenceNode, newNode) {

    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);

  };

})(window, document);
