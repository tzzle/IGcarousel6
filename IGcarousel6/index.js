function light() {
    document.getElementById("body").style.backgroundColor = "#F9F5F6";
    document.getElementById("tggl1").style.display = 'none';
    document.getElementById("tggl2").style.display = 'inline';
    document.getElementById("list-item").style.color = 'black';
}

function dark() {
    document.getElementById("body").style.backgroundColor = "#27374D";
    document.getElementById("tggl1").style.display = 'inline';
    document.getElementById("tggl2").style.display = 'none';
    document.getElementById("list-item").style.color = '#F9F5F6';
}