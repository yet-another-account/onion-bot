var lines;


jQuery.get('onion-bot.txt', function(data) {
    lines = data.split("\n");
    $("#result").html(lines[Math.floor(Math.random() * lines.length)])
});

function disp() {
    $("#result").html(lines[Math.floor(Math.random() * lines.length)])
}
