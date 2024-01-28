// Fetch recent posts from the WordPress.com site
// Replace 'YOUR_BLOG_ID' with your actual Blogger blog ID
const blogId = '1077219881104311123';

// Fetch recent posts from the Blogger API
fetch(`https://www.googleapis.com/blogger/v3/blogs/1077219881104311123/posts?key=AIzaSyD0YC5GfFOWIN0iONA_XmXxrcakUt0eH68`)
  .then(response => response.json())
  .then(data => {
    const main =  document.querySelector("main");
    if (data.items && data.items.length > 0) {
        for(let i = 0; i<data.items.length; i++){
            const article = document.createElement("article");    
            article.className="blog-article";   
            const title = document.createElement("h2");    
 
            title.textContent=(data.items[i].title);    
            
            const imageUrls = extractImageUrls(data.items[i].content);

            if (imageUrls.length > 0) {
                imageUrls.forEach(function (imageUrl) {
                    const imgElement = document.createElement('img');
                    imgElement.src = imageUrl;
                    imgElement.addEventListener('click', function() {
                        fullImage(this.src);
                    });

                    article.append(imgElement);
                })
            }

            const postText = removeHTMLTags(data.items[i].content);
            const articleText = document.createElement("p")
            articleText.textContent=postText;
            article.append(title);
            article.append(articleText);
            main.append(article);
            
        }

    } else {        
        console.log('No posts found.');
    }   
  })
  .catch(error => console.error('Error fetching data:', error));

function removeHTMLTags(html) {
const doc = new DOMParser().parseFromString(html, 'text/html');
return doc.body.textContent || "";
}

function extractImageUrls(html) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const images = doc.body.querySelectorAll('img');
    const imageUrls = Array.from(images).map(img => img.src);
    return imageUrls;
}

function fullImage (alt){
    const fullImage = document.querySelector(".full-image");
    const fullImageContainer = document.querySelector(".full-container");

    if(fullImageContainer.style.display!="flex"){
        fullImage.src=alt;
        fullImageContainer.style.display="flex";
        fullImage.style.display="inline";
        fullImageContainer.style.opacity = "0";
        setTimeout(function () {
        // Gradually increase opacity to 1 for fade-in effect

        fullImage.style.transform="scale(1)";

        fullImageContainer.style.opacity = "1";
        }, 0);

    } else{
        fullImageContainer.style.opacity="0";
        fullImage.style.transform="scale(0.5)";
        setTimeout(function(){
            fullImage.style.display="none";
            fullImageContainer.style.display="none";

        }, 200);

    }

    
}