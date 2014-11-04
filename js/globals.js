(function(w, d){

  w.getBranch = function(callback){

    var interval = setInterval(function(){

      var branchName;

      if( d.querySelector('.js-select-button.css-truncate-target') ){

        branchName = d.querySelector('.js-select-button.css-truncate-target').innerHTML;

      } else if(d.querySelectorAll('span.current-branch span')[1]){

        branchName = d.querySelectorAll('span.current-branch span')[1].innerHTML;

      }

      if(branchName){

        w.branchName = branchName;

        if(typeof callback === 'function'){

          callback(branchName);

        }

        clearInterval(interval);

      }

    }, 500);

  };

  w.getBranch();

  //alert('branchName: ' + branchName);

  w.insertAfter = function(referenceNode, newNode) {

    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);

  };

})(window, document);
