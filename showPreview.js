(function(){

  var d,
      insertAfter,
      branchName,
      injectPreview,
      injectWarning,
      previewHTML,
      aTag,
      spanTag,
      mergePullRequest,
      prURL;

  d = document;

  insertAfter = function(referenceNode, newNode) {

    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);

  };

  if( d.querySelector('.js-select-button.css-truncate-target') ){

    branchName = d.querySelector('.js-select-button.css-truncate-target').innerHTML;

  }

  prURL = /^\/optimizely\/marketing\-website\/pull\//;

  injectWarning = function(){

    var editURL,
        warningCont,
        warningDivCont,
        warningDivWrap,
        warningHeader,
        warningMessage,
        githubContainer,
        editLink,
        interFaceCont;

    editURL = /^\/optimizely\/marketing\-website\/(edit|blob)\/master/;

    if(editURL.test(d.location.pathname)){

      warningCont = d.createDocumentFragment();

      warningDivCont = warningCont.appendChild(d.createElement('div'));

      warningDivCont.setAttribute('class', 'flash-global flash-error');

      warningDivCont.setAttribute('id', 'optly-master-error');

      warningDivWrap = warningDivCont.appendChild(d.createElement('div'));

      warningDivWrap.setAttribute('class', 'container');

      warningHeader = warningDivWrap.appendChild(d.createElement('h2'));

      warningHeader.appendChild(d.createTextNode('STOP'));

      warningMessage = warningDivWrap.appendChild(d.createElement('p'));

      warningMessage.appendChild(d.createTextNode('You cannot make changes on the master branch. Please go back and create a new branch before making changes.'));

      //githubContainer = d.querySelector('#js-repo-pjax-container');

      githubContainer = d.querySelector('.pagehead.repohead.instapaper_ignore.readability-menu');

      editLink = d.querySelector('.octicon-button.js-update-url-with-hash');

      if(editLink){

        editLink.parentNode.removeChild(editLink);

      }

      if( githubContainer ){

        insertAfter(githubContainer, warningCont);

      }

      if( /^\/optimizely\/marketing\-website\/edit\/master\//.test(d.location.pathname) ){

        interFaceCont = d.querySelector('.repository-with-sidebar.repo-container.new-discussion-timeline');

        if(interFaceCont){

          interFaceCont.parentNode.removeChild(interFaceCont);

        }

      }

    }

  };

  injectWarning();

  injectPreview = function(){

    if( prURL.test(document.location.pathname) ){

        if( !document.querySelector('#optly-preview') ){

          //branchName = d.querySelectorAll('.css-truncate-target')[2].innerHTML;

          previewHTML = d.createDocumentFragment();

          aTag = previewHTML.appendChild(d.createElement('a'));

          spanTag = aTag.appendChild(d.createElement('span'));

          spanTag.setAttribute('class', 'octicon octicon-eye-watch');

          aTag.setAttribute('href', 'http://optimizely-marketing-site-staging.s3-website-us-east-1.amazonaws.com/' + branchName + '/');

          aTag.setAttribute('class', 'button .octicon-arrow-right');

          aTag.setAttribute('id', 'optly-preview');

          aTag.setAttribute('target', '_blank');

          aTag.appendChild(d.createTextNode(' Preview changes'));

          mergePullRequest = d.querySelector('.button.primary.merge-branch-action.js-details-target');

          insertAfter(mergePullRequest, previewHTML);

          d.querySelector('.js-details-container .merge-branch-description').innerHTML = 'Note: It takes 3 minutes to create the preview.';

        }

      }

    };

  injectPreview();

  if( prURL.test(d.location.pathname) ){

    setInterval(injectPreview, 500);

  }


})();
