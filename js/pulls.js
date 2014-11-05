(function(w, d){

  var observer = new MutationObserver(function(){

    w.getBranch(function(){

      try {

        w.updatePRStatus();

      } catch(err) {

        w.console.log('caught error: ' + err);

      }

    });

  });

  observer.observe(d.querySelector('div.site'), {childList: true, subtree: true});

})(window, document);
