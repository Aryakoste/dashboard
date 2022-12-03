let menuDropArr = ["Overview", "Projects", "Campaigns", "Followers"];

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
  document.getElementById("myDropdown2").classList.add("show")
}
  

  window.onclick = function(event) {
    if (!event.target.matches('.select-drp')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

let sidebarStyle = document.querySelector('.sidebar').style.display;

const openSidebar = () => {
   sidebarStyle = "block";
}

document.querySelector('main').addEventListener('click', () => {
  if(!sidebarStyle == "none"){
    document.querySelector('.sidebar').style.display = "none";
  }
})

menuDropArr.map((data) => {
    let div = document.createElement('div');
    div.innerText = data;
    let menuItem = document.querySelector('.menu-drop-items-1');
    menuItem.appendChild(div);
})

document.querySelector('.item-1').addEventListener('click', () => {
      var el = document.querySelector('.menu-drop-items-1');
      console.log(el.classList)   
      if(!el.classList.contains('active'))
          el.classList.add('active');
      else
          el.classList.remove('active');
})

document.querySelector('.menu-icon').addEventListener('click', () => {
      var el = document.querySelector('.sidebar');
      el.classList.toggle('show');
});

document.querySelector('.close-side').addEventListener('click', () => {
  var el = document.querySelector('.sidebar');
  el.classList.toggle("show");
});



