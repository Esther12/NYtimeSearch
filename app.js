var apiKey = "PipsOGUzO5gh4GVMKIuvbFdYnvpY9pNS";
var filter = "";
var articalURL = "https://api.nytimes.com/svc/search/v2//articlesearch.json?q=titanic&fq=" + filter +"&api-key=" + apiKey;
var queryURL = "";

$.ajax({
    url: articalURL,
    method:"GET"
}).then(function(response){

        console.log(response);
})