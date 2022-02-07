$(document).ready(function(){
      function readFromStorage(){
            if(localStorage.items){
                  return JSON.parse(localStorage.items)
            }
            return [];
      }
      function saveStorage(data){
            localStorage.items = JSON.stringify(data)
      }
      $("#addButton").click(function(){
                 
            let textBox = $("#textBox");
            let text = textBox.val().trim();
            if(text){
                  $(".toDo").append(`<div class = 'newDivStyle'> ${text} 
                  ${`<button class="clearButton"></button>`}</div>`)
                  textBox.val(''); 

                  // յուրաքանչյուր անգամ add անելիս առաջին անգամվա գրած տեքստն է ուղարկվում localStorage,

                  let data = readFromStorage();
                  data.push({
                        value : $(".newDivStyle").html()
                  })
                  saveStorage(data)
               
        } 
        $(".clearButton").click(function(){
              $(this).closest($(".newDivStyle")).fadeOut().remove();
        })
      });
            $( ".toDo, .inProgress, .done" ).sortable({
               connectWith: ".toDo, .inProgress, .done"
            });
         });
      



