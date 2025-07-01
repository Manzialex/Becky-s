
        document.getElementById("messageForm").addEventListener("submit", function(e){
            e.preventDefault();

            const name = document.getElementById("name").value;
            const number = document.getElementById("number").value;
            const subject = document.getElementById("subject").value;
            const query = document.getElementById("query").value;
            const whatsAppNumber = "256769474658";

            const message = `Hello, I'd like to make an inquiry:\n\nName: ${name}\nNumber: ${number}\nSubject: ${subject}\nQuery: ${query}`;
      const url = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`;

      window.open(url, '_blank');


        });


         var slide = document.getElementById("slide");
       var upArrow = document.getElementById("upArrow");
       var downArror = document.getElementById("downArrow");

       let x = 0;

       

        upArrow.onclick = function(){
        if(x > "-900")
        x = x - 300;
        slide.style.top = x + "px";
       }

       downArrow.onclick = function(){
            if(x < 0)
        x = x + 300;
        slide.style.top = x + "px";
       }
