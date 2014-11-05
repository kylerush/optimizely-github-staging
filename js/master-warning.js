(function(w, d){

  w.getBranch(function(){

    var reminderCont,
        reminderDivCont,
        reminderDivWrap,
        reminderHeader,
        reminderMessage,
        githubContainer;

    reminderCont = d.createDocumentFragment();

    reminderDivCont = reminderCont.appendChild(d.createElement('div'));

    reminderDivCont.setAttribute('id', 'optly-master-error');

    reminderDivWrap = reminderDivCont.appendChild(d.createElement('div'));

    reminderDivWrap.setAttribute('class', 'container');

    reminderHeader = reminderDivWrap.appendChild(d.createElement('h2'));

    reminderMessage = reminderDivWrap.appendChild(d.createElement('p'));

    if(typeof window.branchName === 'string' && window.branchName === 'master'){

        reminderDivCont.setAttribute('class', 'flash-global flash-error');

        reminderHeader.appendChild(d.createTextNode('WARNING'));

        reminderMessage.appendChild(d.createTextNode('You can view, but you cannot edit on the master branch. If you need to make changes, please create a new branch.'));

        githubContainer = d.querySelector('.pagehead.repohead.instapaper_ignore.readability-menu');

        if( githubContainer && !d.querySelector('#optly-master-error') ){

          d.querySelector('div.site').insertBefore(reminderCont, githubContainer);

        }

    }

  });

})(window, document);
