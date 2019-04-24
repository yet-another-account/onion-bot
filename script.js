jQuery.get('showerthoughts-bot.txt', function(data) {
    var lines = data.split("\n");
    $("#result").html(lines[Math.floor(Math.random() * lines.length)])
});

function disp() {
    $("#result").html(lines[Math.floor(Math.random() * lines.length)])
}
