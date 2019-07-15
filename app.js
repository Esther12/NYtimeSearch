var apiKey = "PipsOGUzO5gh4GVMKIuvbFdYnvpY9pNS";
var filter = "";
var pubYear;
var query = "";
//var articalURL = "https://api.nytimes.com/svc/search/v2//articlesearch.json?q=titanic&fq=" + filter +"&api-key=" + apiKey;
var queryURL = "";
$("#submitForm").on("click",function(){
    // debugger;
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();
    var query = $("#searchTerm").val();
    if(startYear.trim() == "" && endYear.trim() == ""){
        pubYear ="";
    }else{
        for(let i = (startYear*1); i < (endYear *1); i++){
            filter += `"` + i + `"`+ "%20";
        }
        console.log(filter);
    
        pubYear = "pub_year:(" + filter + ")";
    }

var articalURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ query.trim() +"&fq=" + pubYear.trim() +"&api-key=" + apiKey;
console.log(articalURL);
$.ajax({
    url: articalURL,
    method:"GET"
}).then(function(response){
    var html = "";
    var data = response.response.docs;
    var displayNum = $("#num").val();
    console.log(`.. about to dsplay ${displayNum} entries for`, data );
    let numberofData = 0;
    if(displayNum == 0){
        numberofData = 20;
    }
    else{
        numberofData = displayNum;
    }
    for(let i = 0; i < numberofData; i++){
        html += `<tr>`+
                `<th scope = "row"> ${i+1} </th>`+
                `<td>${data[i].headline.main}</td>`+
                `<td>${data[i].byline.original}</td>`+
                `</tr>`;
    }
    $("#dataTable").append(html);
        
})

})
