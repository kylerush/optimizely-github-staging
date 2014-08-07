(function(){

  var d,
      branchName,
      previewHTML,
      divTag,
      aTag,
      spanTag,
      pTag,
      divClear;

  d = document;

  branchName = d.querySelectorAll('.css-truncate-target')[2].innerHTML;

  previewHTML = d.createDocumentFragment();

  divTag = previewHTML.appendChild(d.createElement('div'));

  divTag.setAttribute('id', 'optly-preview-url');

  aTag = divTag.appendChild(d.createElement('a'));

  spanTag = aTag.appendChild(d.createElement('span'));

  spanTag.setAttribute('class', 'octicon octicon-eye-watch');

  aTag.setAttribute('href', 'http://optimizely-marketing-site-staging.s3-website-us-east-1.amazonaws.com/' + branchName + '/');

  aTag.setAttribute('class', 'button .octicon-arrow-right');

  aTag.setAttribute('target', '_blank');

  aTag.appendChild(d.createTextNode(' Preview changes'));

  pTag = divTag.appendChild(d.createElement('p'));

  pTag.setAttribute('class', 'merge-branch-description');

  pTag.appendChild(d.createTextNode('Please wait 2 minutes after changes to preview.'));

  divClear = previewHTML.appendChild(d.createElement('div'));

  divClear.setAttribute('id', 'optly-clear');

  //pTag.appendChild(document.createTextNode('(Please wait 2 minutes after making your changes)'));

  d.querySelector('.merge-message').appendChild(previewHTML);

})();
