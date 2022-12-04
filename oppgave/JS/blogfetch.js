getBlogPost()
function getBlogPost(e) {

fetch(`https://www.rdj.one//wp-json/wp/v2/posts/25`)
.then((response) => response.json())
.then((data) => {
console.log(data);
document.querySelector(".blogPost").innerHTML = `
<div class="blogInfo">
<h1>${(data.title.rendered)}</h1>
<p>${data.content.rendered}</p>
</div>`;
})
e.preventDefault();
}