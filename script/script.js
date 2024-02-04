document.querySelector('button').addEventListener('click',getfetch);


function getfetch(){
    const input = document.querySelector('input').value.toLowerCase().trim();
    const url = `https://dragonball-api.com/api/characters/?name=${input}`;
    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('h2').innerText = data[0].name;
        document.querySelector('.ki').innerText = `ki : ${data[0].ki}`;
        document.querySelector('.max-ki').innerText = `max-ki : ${data[0].maxKi}`;
        document.querySelector('.gender').innerText = `gender : ${data[0].gender}`;
        document.querySelector('.race').innerText = `race : ${data[0].race}`;
        document.querySelector('img').src = data[0].image;
        

        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
      document.querySelector('input').value = "";
}