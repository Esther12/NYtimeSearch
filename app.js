var apiKey = "PipsOGUzO5gh4GVMKIuvbFdYnvpY9pNS";
var filter = "";
//var articalURL = "https://api.nytimes.com/svc/search/v2//articlesearch.json?q=titanic&fq=" + filter +"&api-key=" + apiKey;
var queryURL = "";

    startYear = $("#startYear").val();
    endYear = $("#endYear").val();
    for(let i = (startYear*1); i < (endYear *1); i++){
        filter += `"` + i + `"`+ "%20";
    }
    console.log(filter);

var pubYear = "pub_year:(" + filter + ")";
var articalURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=titanic&fq=" + pubYear +"&api-key=" + apiKey;
console.log(articalURL);
$.ajax({
    url: articalURL,
    method:"GET"
}).then(function(response){

        console.log(response);
})