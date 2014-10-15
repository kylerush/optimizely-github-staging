(function(w, d){

  alert(insertAfter);

  if(typeof window.branchName === 'string' && window.branchName === 'master'){

    var warningCont,
        warningDivCont,
        warningDivWrap,
        warningHeader,
        warningMessage,
        githubContainer,
        editLinks,
        interFaceCont,
        i;

      //console.log('warning will be injeccted');

      warningCont = d.createDocumentFragment();

      warningDivCont = warningCont.appendChild(d.createElement('div'));

      warningDivCont.setAttribute('class', 'flash-global flash-error');

      warningDivCont.setAttribute('id', 'optly-master-error');

      warningDivWrap = warningDivCont.appendChild(d.createElement('div'));

      warningDivWrap.setAttribute('class', 'container');

      warningHeader = warningDivWrap.appendChild(d.createElement('h2'));

      warningHeader.appendChild(d.createTextNode('REMINDER'));

      warningMessage = warningDivWrap.appendChild(d.createElement('p'));

      warningMessage.appendChild(d.createTextNode('You can view, but you cannot edit on the master branch. If you need to make changes, please create a new branch.'));

      githubContainer = d.querySelector('.pagehead.repohead.instapaper_ignore.readability-menu');

      if( githubContainer && !d.querySelector('#optly-master-error') ){

        insertAfter(githubContainer, warningCont);

      }

  }

})(window, document);
