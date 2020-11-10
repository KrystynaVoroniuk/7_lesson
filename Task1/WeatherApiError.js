class WeatherApiError extends Error {
    constructor(message) {
      super(message);
      this.name = "WeatherApiError";
    }
  }

  let input = document.getElementById("myTextarea");
  let start = document.getElementById("myButton");
  start.addEventListener('click', change);

  let src ='https://api.openweathermap.org/data/2.5/weather?q=Kharkiv&appid=779222b5c67e8d3dfd38dae89311dd4f';

  function change(){
      let reg = /Kharkiv/g;
      let url = src.replace(reg, input.value);
      fetch(url)
      .then(response =>{
        if(response.status === 200){
            let data = response.json();
            return data;
          
        } else{
            throw new WeatherApiError("При выполнении запроса была введена неверная информация");
        }
    
      }
          
      )
      .then((data)=>{
        mass = [];
        function recursive(data) { 
         
            for (let i in data) { 
                let value = data[i]; 
    
                if (typeof value == "object") { 
                    mass.push(i); 
                    recursive(value); 
                } else { 
                    mass.push(`${i} = ${value}`); 
                } 
             
        } 
    } 
    recursive(data);
    
    mass.forEach(item =>{
        if(item != 0){
        let list = document.createElement("li");
        document.querySelector(".ul1").append(list);
        list.innerHTML += item;
        list.className = "ul1";
        if(item.match(/[=]/g)){
            list.style.backgroundColor = "grey";
        
    } 
}})

    }
    )
      .catch(function(error) {
        if (error instanceof WeatherApiError) {
            alert(error.message);
          } else {
            alert("Сайт временно не доступен");
        
          }
      });
    
    
 }
      
