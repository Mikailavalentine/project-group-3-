/*
//NEWER CODE
//API function

        // This is the area for the API key
        //This should be stored in the ENV
//API function

function getsource(id){
    $.ajax({
        url:`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}`,
        success:function(res){
            document.getElementById("sourceLink").innerHTML=res.sourceUrl;
            document.getElementById("sourceLink").href=res.sourceUrl;
        },
        error:function(err){
            console.log(err);
        }
    });
  }
  
  function getrecipe(q){
    $.ajax({
        url:`https://api.spoonacular.com/recipes/search?apiKey=${process.env.API_KEY}&number=1&query=${q}`,
        success:function(res){
            const output = document.getElementById("output");
  
            //The below line changes the displayed elements and creates the box which stores the pulled API recipe(s)           
            output.innerHTML = `<h1>${res.results[0].title}</h1><br><img src="${res.baseUri}${res.results[0].image}" width="400"/> <br> ready in ${res.results[0].readyInMinutes} minutes`;
            getsource(res.results[0].id);
        },
        error:function(err){
            console.log(err);
        }
    });
  }
*/
// OLD CODE 

  //API function

        // This is the area for the API key
        //This should be stored in the ENV
        const apiKey = "0043711dcf8a417e89708a1af0cfbaa7";
    
        function getsource(id){
            $.ajax({
                url:`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`,
                success:function(res){
                    document.getElementById("sourceLink").innerHTML=res.sourceUrl;
                    document.getElementById("sourceLink").href=res.sourceUrl;
                },
                error:function(err){
                    console.log(err);
                }
            });
        }

        function getrecipe(q){
            $.ajax({
                url:`https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&number=1&query=${q}`,
                success:function(res){
                    const output = document.getElementById("output");
                    
    //The below line changes the displayed elements and creates the box which stores the pulled API recipe(s)              
    output.innerHTML = `<h1>${res.results[0].title}</h1><br><img src="${res.baseUri}${res.results[0].image}" width="400"/> <br> ready in ${res.results[0].readyInMinutes} minutes`;
                    getsource(res.results[0].id);
                },
                error:function(err){
                    console.log(err);
                }
            });
        }