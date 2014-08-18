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
      prURL,
      injectPreviewInterval;

  d = document;

  insertAfter = function(referenceNode, newNode) {

    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);

  };

  if( d.querySelector('.js-select-button.css-truncate-target') ){

    branchName = d.querySelector('.js-select-button.css-truncate-target').innerHTML;

  }

  prURL = /^\/optimizely\/marketing\-website\/pull\//;

  pullsURL = /^\/optimizely\/marketing\-website\/pulls$/;

  injectWarning = function(){

    //console.log('inject warning running');

    var editURL,
        warningCont,
        warningDivCont,
        warningDivWrap,
        warningHeader,
        warningMessage,
        githubContainer,
        editLinks,
        interFaceCont,
        i;

    //editURL = /^\/optimizely\/marketing\-website\/(edit|blob)\/master/;

    editURL = /^\/optimizely\/marketing\-website\/(edit|blob)\/master/;

    homeURL = /^\/optimizely\/marketing\-website$/;

    if( editURL.test(d.location.pathname) || homeURL.test(d.location.pathname) ){

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

      //githubContainer = d.querySelector('#js-repo-pjax-container');

      githubContainer = d.querySelector('.pagehead.repohead.instapaper_ignore.readability-menu');

      editLinks = d.querySelectorAll('.actions > a');

      if( editLinks.length > 0 ){

        for(i = 0; i < editLinks.length; i++){

          editLinks[i].parentNode.removeChild(editLinks[i]);

        }

      }

      if( githubContainer && !d.querySelector('#optly-master-error') ){

        insertAfter(githubContainer, warningCont);

        //console.log('editing interface');

      } else {

        //console.log('not able to edit interface');

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

  setInterval(injectWarning, 500);

  injectPreview = function(){

    //console.log('inject preview running');

    if( prURL.test(document.location.pathname) ){

      //console.log('on pr page');

        if( !document.querySelector('#optly-preview') ){

          //console.log('branch name: ' + branchName);

          try{

            branchName = d.querySelectorAll('.css-truncate-target')[2].innerHTML;

            //console.log('branch name: ' + branchName);

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

          } catch(err) {



          }

        } else {

          clearInterval(injectPreviewInterval);

        }

      }

    };

  injectPreview();

  if( pullsURL.test(d.location.pathname) || prURL.test(d.location.pathname) ){

    injectPreviewInterval = setInterval(injectPreview, 500);

  }

})();
