
var quizform = document.getElementById("quizForm")


quizform.addEventListener("submit", function(event) {
    event.preventDefault();
  
    let score = 0;
    const answers = {
      q1: "HyperText Markup Language",
      q2: "color",
      q3: "<script src='script.js'></script>",
      q4: "push()"
    };
  
    for (let key in answers) {
      const selected = document.querySelector(`input[name="${key}"]:checked`);
      if (selected) {
       
        const val = selected.value.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
        if (val === answers[key]) {
          score++;
        }
      }
    }
  
    document.getElementById("score").textContent = score;
    document.getElementById("result").style.display = "block";
  });
  