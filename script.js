const jokeBtn=document.querySelector(".joke-generator")
jokeBtn.addEventListener('click',()=>{
    getJoke();
})

async function getJoke() {
      const url = "https://v2.jokeapi.dev/joke/Any?type=single";
      try {
        const res = await fetch(url);
        const data = await res.json();
        document.getElementById("joke-section").textContent = data.joke || "No joke found!";
      } catch (error) {
        document.getElementById("joke-section").textContent = "Failed to fetch a joke 😞";
        console.error(error);
      }
    }