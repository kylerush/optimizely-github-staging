(function(w, d){

  var observer = new MutationObserver(function(mutations){

    w.getBranch(function(){

      w.updatePRStatus();

      observer.disconnect();

    });

  });

  observer.observe(d.querySelector('div.site'), {childList: true, subtree: true});

})(window, document);
