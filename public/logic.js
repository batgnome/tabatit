var bod = document.getElementById("bod");
for(var j = 0; j <6; j++) {

    for(var i = 0; i < 13; i++) {
        var tab  = [];
        var button = document.createElement("button")
        button.setAttribute("id", j+","+i);
        button.addEventListener("click", function() {
            tab.push(this.id);
            tabify(tab[tab.length-1]);
        });
        var textB = document.createTextNode(i);
        button.appendChild(textB);
        bod.appendChild(button);
    }
    bod.appendChild(document.createElement("br"));
}

function tabify(tab) {
        var split = tab.split(",");
        split[0] = getGuitarString(split[0]);
        addNotes(split);
}
function addNotes(guitarString) {
    var divString = document.querySelectorAll(".guitar-tab");
    divString.forEach(e => {
        console.log(e);
        if(e.id == guitarString[0]) {
            if(guitarString[1] >= 10) {
                e.innerHTML += guitarString[1] + "-";
            }else {
                e.innerHTML += guitarString[1] + "--";
            }
        } else {
            e.innerHTML += "---";
        }
    });

}

function getGuitarString(string) {
  switch (Number(string)) {
            case 0:
                return "E";
                break;
            case 1:
                return "A";
                break;
            case 2:
                return "D";
                break;
            case 3:
                return "G";
                break;
            case 4:
               return "B";
                break;
            case 5:
                return "e";
                break;
            default:
                return "ERROR";
                console.log("error more than 6 strings");
                break;
        }
}

function findNote(l) {
    let a = l.charCodeAt(0) + 2;
    a = String.fromCharCode(a);
    console.log(a);
}