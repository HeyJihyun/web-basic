// document.onload = start();

function start(){
    let text;
    do{
        text = prompt('텍스트를 입력해 주세요.');
    }while(text === null || text.length === 0);
    document.getElementById("text").innerHTML = text;
    document.getElementById("btn").innerHTML = `<button onclick = changecolor('red')>빨강</button><button onclick = changecolor('blue')>파랑</button><button onclick = changecolor('green')>초록</button>`;
}

function changecolor(color){
    let div = document.getElementById("text");
    alert(color + '색으로 변경됩니다.')
    div.style.color = color;
} 