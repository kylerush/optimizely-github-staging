(function(w, d){

  var i;

  if(w.branchName === 'master'){

    var editLinks = d.querySelectorAll('div.actions > a');

    for(i = 0; i < editLinks.length; i++){

      editLinks[i].parentNode.removeChild(editLinks[i]);

    }

  }

})(window, document);
