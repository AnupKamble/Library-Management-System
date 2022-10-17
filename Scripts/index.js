var form = document.querySelector("#form");
form.addEventListener("submit",myfunction);
function myfunction() {    

event.preventDefault();

var booksArr = JSON.parse(localStorage.getItem("BookList")) || []; 


var bookObj = {
    
BookName:form.name.value,
BookAutherName:form.author.value,
BookDescription:form.desc.value,
BookAddeddate:form.added.value,
BookCategory:form.category.value,
BookPrice: form.price.value,
}


booksArr.push(bookObj);
//  console.log(booksArr);

localStorage.setItem("BookList",JSON.stringify(booksArr));
window.location.href ="dashboard.html";
}
