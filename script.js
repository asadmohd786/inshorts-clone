//For opening and closing  humburgerDrawer
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  //For Dark mode 
  function myFunc(){
        var buttonRef=document.getElementById("btn1");
        buttonRef.innerHTML="Dark Mode";
        var button=document.body;
        button.classList.toggle("dark-mode");
        if(button.classList.contains("dark-mode")){
            buttonRef.innerText="Light Mode";
        }
  }
  //for api calls
var divRef=document.getElementById("main");
let details= async(name)=>{
    const url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=80243f0ee80f4977a49ea79c419eeef5";
    const response= await fetch(url);
    const data=await response.json();
    //console.log(data.articles);   
showCards(data)}
details();
function showCards(data){
    data.articles.map(e => {
        //console.log(e)
        var div=document.createElement("div");
        div.style.display="flex";
        div.style.marginLeft="300px";
        div.style.marginRight="100px";
        div.style.marginTop="15px";
        div.style.padding="15px";
        div.style.boxShadow="7px 3px 10px 3px grey";
        var divide=document.createElement("div");
        divide.style.paddingTop="15px";
        var div1=document.createElement("div");
        var image=document.createElement("img");
        image.src=`${e.urlToImage}`;
        var span=document.createElement("p");
        span.innerHTML=e.publishedAt;
        var para=document.createElement("p");
        var title=document.createElement("p");
        title.innerHTML=e.title;
        title.style.color="red";
        var span_id=document.createElement("p");
        span_id.innerHTML=e.content;
        span.style.color="green";
        para.innerHTML=e.description;
        para.style.color="orange";
        div1.appendChild(image);
        divide.appendChild(title);
        divide.appendChild(span);
        span.classList.add("span");
        span.innerHTML=e.publishedAt;
        divide.style.marginLeft="20px"
        divide.appendChild(para);
        divide.appendChild(span_id);
        div.appendChild(div1);
        div.appendChild(divide);
        divRef.appendChild(div);
    }
)}