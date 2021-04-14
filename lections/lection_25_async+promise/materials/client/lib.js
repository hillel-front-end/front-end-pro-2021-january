function ajax({ method, url, success, body = {} }) {
  const xhr = new XMLHttpRequest();

  xhr.onload = function() {
      success(xhr.responseText);
  };

  xhr.onerror = function() {
      console.log('error');
  };

  xhr.open(method, url);

  method.toLowerCase() === 'post' ?
      xhr.send(body)
      :
      xhr.send();
}


