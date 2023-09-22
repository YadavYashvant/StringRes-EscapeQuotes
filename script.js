function escapeQuotes() {
    var input = document.getElementById('input').value;
    var output = input.replace(/'/g, "\\'");
    document.getElementById('output').innerHTML = output;
}

function copyToClipboard() {
    var copyText = document.getElementById("output");
    copyText.select();
    document.execCommand("copy");
    /* window.getSelection().removeAllRanges();
    alert("Copied the text: " + copyText.value); */
}