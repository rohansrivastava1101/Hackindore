


document.body.onkeydown = function(key) {
    console.log("IN the Function");
    if (key.keyCode == 32)
    {   console.log("IN the IF")
        var searchInput = document.getElementById('text-box').value.trim();
        var words = searchInput.split(' ');
        var searchWord = words[words.length - 1];
        callAjax(searchWord, words)
        return;
    }
    return;
}

function callAjax(word, text) {
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText)
        text[text.length-1] = xhttp.responseText
        document.getElementById("text-box").value = text.join(" ") + " "
      }
    };
    xhttp.open("GET", `http://127.0.0.1:5000/translate/${word}`, true);
    xhttp.send();
}
