var url = "https://www.rdj.one//wp-json/wp/v2/posts";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      data = JSON.parse(xhr.responseText);
      console.log(data)
      var blogPosts = '';
      for(i=0; i<data.length; i++){
      	blogPosts += ` <div class="patchNotes">
    <h3>${data[i].title.rendered}</h3>
    <img src="${data[i].jetpack_featured_media_url}">
  </div>`
      }
     document.querySelector(".patchNotes").innerHTML = blogPosts;
   }};

xhr.send();