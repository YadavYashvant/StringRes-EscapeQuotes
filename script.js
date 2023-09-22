function escapeQuotes() {
    var input = document.getElementById('input').value;
    var output = input.replace(/'/g, "\\'");
    document.getElementById('output').innerHTML = output;
}