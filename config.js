        // This is the area for the API key
        const apiKey = "0043711dcf8a417e89708a1af0cfbaa7";
    

        // THIS RUNS THE API 
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
                    //Below line changes the displayed search box
                    output.innerHTML = `<h1>${res.results[0].title}</h1><br><img src="${res.baseUri}${res.results[0].image}" width="400"/> <br> ready in ${res.results[0].readyInMinutes} minutes`;
                    getsource(res.results[0].id);
                },
                error:function(err){
                    console.log(err);
                }
            });
        }