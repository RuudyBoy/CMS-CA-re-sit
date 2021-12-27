const baseUrl = "https://organicflowerpower.org/wp-json/wp/v2/posts";

const container = document.querySelector(".container");


async function getData() {
    try {
        const response = await fetch(baseUrl);

        const data = await response.json();

        console.log(data);


        for (let i = 0; i < data.length; i++) {

            
            if (i === 3) {
                break;
            } 
    
            container.innerHTML += ` 
            <div class="post"> 
            <h2>${data[i].title.rendered}</h2>
            <p> ${data[i].content.rendered} </p> 
           </div>`;
        }
    } catch (error) {
    postContainer.innerHTML ="";
    }
}



getData();
