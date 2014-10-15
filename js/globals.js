(function(w, d){

  if( d.querySelector('.js-select-button.css-truncate-target') ){

    window.branchName = d.querySelector('.js-select-button.css-truncate-target').innerHTML;

  }

  window.insertAfter = function(referenceNode, newNode) {

    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);

  };

})(window, document);
