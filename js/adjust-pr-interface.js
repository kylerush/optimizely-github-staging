(function(w, d){

  w.updatePRStatus = function(){

    var previewHTML,
        aTag,
        spanTag,
        branchStatusDiv,
        mergePullRequest,
        observer,
        branchStatus,
        updateBranchMessage,
        mergeBranchDescription;

    previewHTML = d.createDocumentFragment();

    aTag = previewHTML.appendChild(d.createElement('a'));

    spanTag = aTag.appendChild(d.createElement('span'));

    spanTag.setAttribute('class', 'octicon octicon-eye-watch');

    aTag.setAttribute('href', 'http://optimizely-marketing-site-staging.s3-website-us-east-1.amazonaws.com/' + branchName + '/');

    aTag.setAttribute('class', 'button .octicon-arrow-right');

    aTag.setAttribute('id', 'optly-preview');

    aTag.setAttribute('target', '_blank');

    aTag.appendChild(d.createTextNode(' Preview changes'));

    branchStatusDiv = d.querySelector('div.branch-action');

    mergePullRequest = d.querySelector('.button.merge-branch-action.js-details-target');

    w.insertAfter(mergePullRequest, previewHTML);

    branchStatus = d.querySelector('div.branch-status');

    mergeBranchDescription = d.querySelector('.js-details-container .merge-branch-description');

    updateBranchMessage = function(element){

      if( element.classList.contains('status-pending') ){

        mergeBranchDescription.innerHTML = 'Your build is processing. The preview link will appear if your build passes. This usually takes a few minutes.';

      } else if( element.classList.contains('status-failure') ) {

        mergeBranchDescription.innerHTML = 'There was a problem with your build. Please contact marketing eng.';

      } else if( element.classList.contains('status-success') ){

        mergeBranchDescription.innerHTML = 'Your preview is ready!';

      }

    };

    updateBranchMessage(branchStatus);

    observer = new MutationObserver(function(mutations){

      mutations.forEach(function(mutation){

        updateBranchMessage(mutation.target);

      });

    });

    observer.observe(branchStatus, {attributes: true});

    //branch-action branch-action-state-unstable js-mergable-state
    //branch-action branch-action-state-clean js-mergable-state
    //branch-action branch-action-state-unstable js-mergable-state
    //branch-status edit-comment-hide status-pending
    //branch-status edit-comment-hide status-pending

  };

})(window, document);
