        var a = 50;
        var b = 50;
        var c = 0;
        const main = document.getElementById("main1");
        const maan = document.getElementById("main2");
        const winn = document.getElementById("win");
        
        
        function play() {
            document.getElementById("hide").classList.toggle("visible");
            c=c+10;
        }
    
        function move() {
            if (c > 1) {
            console.log(a);
            a = a + 3;
            main.style.height=a+"%";
            b = b - 3;
            maan.style.height=b+"%";
        }}
        
        function movi() {
            if (c > 1) {
            console.log(b);
            b=b+3;
            maan.style.height=b+"%";
            a=a-3;
            main.style.height=a+"%";
        }}
        
        function winner() {
            if (a === 98) {
                c=0;
                winn.classList.remove("visible");
                text.innerText="RED WIN";
                text.style.color="red";
            } 
            if (b === 98) {
                c=0;
                winn.classList.remove("visible");
                text.innerText="BLUE WIN";
                text.style.color="blue";
            }
        }
    