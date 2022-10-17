
var mybooksArr =  JSON.parse(localStorage.getItem("MyBooks"));


displayData(mybooksArr);
   
function displayData(data) {

    // document.querySelector("#tbody").innerHTML = "";

    data.map(function(ele) {
  
    var box = document.createElement("tr");


    var td1 = document.createElement("td");
    td1.innerText = ele.BookName;

    var td2 = document.createElement("td");
    td2.innerText = ele.BookAutherName;

    var td3 = document.createElement("td");
    td3.innerText = ele.BookDescription;

    var td4 = document.createElement("td");
    td4.innerText = ele.BookAddeddate;

    var td5 = document.createElement("td");
    td5.innerText = ele.BookCategory;

    var td6 = document.createElement("td");
    td6.innerText = ele.BookPrice;

    


    box.append(td1,td2,td3,td4,td5,td6);

    document.querySelector("tbody").append(box);

      
})

}
