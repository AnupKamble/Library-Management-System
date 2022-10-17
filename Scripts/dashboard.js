

var booksArr = JSON.parse(localStorage.getItem("BookList")) || [];

var bookmarkArr = JSON.parse(localStorage.getItem("Boomarks")) || [];

var mybooksArr =  JSON.parse(localStorage.getItem("MyBooks")) || [];



displayData(booksArr);
   
function displayData(data) {

    
document.querySelector("#body").innerHTML = "";
    data.map(function(ele,idx) {
  
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

    var td7 = document.createElement("td");
    td7.innerText = "Buy";
    td7.style.background = "green";
    td7.style.cursor = "pointer";
    td7.setAttribute("id","selectedbooks");
    td7.addEventListener("click",function() {
        booksArr.splice(idx,1);
        localStorage.setItem("BookList",JSON.stringify(booksArr));

          
        mybooksArr.push(ele);
        localStorage.setItem("MyBooks",JSON.stringify(mybooksArr));

        event.target.parentNode.remove();
        // event.target.parentNode.innerHTML ="";
    })

    var td8 = document.createElement("td");
    td8.innerText = "Add";
    td8.style.background = "red";
    td8.style.cursor = "pointer";
    td8.setAttribute("id","book");
    td8.addEventListener("click", function() {

        booksArr.splice(idx,1);
        localStorage.setItem("BookList",JSON.stringify(booksArr));

        bookmarkArr.push(ele);
        localStorage.setItem("Boomarks",JSON.stringify(bookmarkArr));

        event.target.parentNode.remove();
    })



    box.append(td1,td2,td3,td4,td5,td6,td7,td8);

    document.querySelector("#body").append(box);

      
})

}

document.querySelector("#filter").addEventListener("change",sort);

function sort() {

      var select = document.querySelector("#filter").value;

      if ( select === "")
      return 1;
      else 
      return ele.category === select;

      displayData(select);
}


