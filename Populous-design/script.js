window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};


const scrollerContainer = document.querySelector(".slider");
const nextBtn = document.querySelector("#next-btn");
const backBtn = document.querySelector("#back-btn")

scrollerContainer.addEventListener("wheel", (evt) =>{
   evt.preventDefault();
   scrollerContainer.scrollLeft += evt.deltaX;
    scrollerContainer.style.scrollBehavior = "auto"
})

nextBtn.addEventListener("click", ()=>{
   scrollerContainer.scrollLeft += 900
   scrollerContainer.style.scrollBehavior = "smooth"
})

backBtn.addEventListener("click", ()=>{
   scrollerContainer.scrollLeft -= 900
   scrollerContainer.style.scrollBehavior = "smooth"
})



const moves = document.querySelectorAll(".move");  
const buttons = document.querySelectorAll(".btn");  

moves.forEach((move, index) => {
    move.addEventListener("mousemove", function(e) {
        const rect = move.getBoundingClientRect();

        // Get cursor's exact position relative to the span
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        // Show the corresponding button and set its position near the cursor
        buttons[index].style.display = "block";
        buttons[index].style.position = "absolute";

        // Adjust position to follow the cursor exactly (with slight padding adjustment)
        buttons[index].style.top = `${y - (buttons[index].offsetHeight / 2) + 1}px`;
        buttons[index].style.left = `${x - (buttons[index].offsetWidth / 2)}px`;
    });

    move.addEventListener("mouseleave", function() {
        buttons[index].style.display = "none";  
    });
});
