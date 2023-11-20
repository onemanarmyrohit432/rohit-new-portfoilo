$(() => {
    $("#imgbtn").click(() => {
        $("#imgbtn").slideToggle(2000);
        img.style.display = "block";
        $("#hover").mouseover(() => {
            hover.style.display = "none";
            Rohit.style.display = "block";
        })
    });

    $("#about").click(() => {
        info.style.display = "block";
        Myinfo.style.display = "block";
        $("#aboutme").toggle(3000);
    });
    $("#work").click(() => {
        button.style.display = "block";
        text.style.display = "block";
        button.style.display = "flex";
        $("#buttons").fadeToggle(3000);
    })
});
 function FlagClick() {
     $.ajax({
         method:"get",
         url:"./shopper.html",
         success:(data)=>{
             var info=JSON.parse(data.responseText);
             console.log(info);
             $("#Flag").html("data.res.text")
         }
    })

     $.ajax({
         method: "get",
         url: "./shopper.html",
         success: (data) => {
             $("#Flag").html(data);
         }
    })
 }




const scriptURL = 'https://script.google.com/macros/s/AKfycbzuImlNPOswfsciHjsKcktX0JpiuqitXDLCWU1OonEAt49apTXjr-O5P-dM3N6ODuAGLQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Thanks To Connect with Me"
      setTimeout(function(){
          msg.innerHTML = "";
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})