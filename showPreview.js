(function(){

  var d,
      branchName,
      previewHTML,
      aTag,
      spanTag,
      insertAfter,
      mergePullRequest;

  d = document;

  branchName = d.querySelectorAll('.css-truncate-target')[2].innerHTML;

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

  insertAfter = function(referenceNode, newNode) {

    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);

  };

  insertAfter(mergePullRequest, previewHTML);

  document.querySelector('.js-details-container .merge-branch-description').innerHTML = 'Note: It takes 3 minutes to create the preview.';

})();
