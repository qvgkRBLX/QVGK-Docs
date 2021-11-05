const style = `.tag {
    color: #ffffff;
    line-height: .8rem;
    padding: 5px;
    margin-left: 7px !important;
    margin: 0 !important; 
    background-clip: padding-box;
    border-radius: 3px;
    display: inline-block;
    font-size: .7rem;
    font-family: "Roboto";
    font-weight: normal;
}
.wip {
    background-color: rgb(86,178,26)
}
.deprecated {
    background-color: rgb(181,0,0)
}
.abandoned {
	background-color: rgb(11,110,236)
}
.unreleased {
	background-color: rgb(48,22,107)
}
h4 {
    display: inline;
}`

var replaceStuff = [
    ["{deprecated}", '<p class="tag deprecated">deprecated</p>'],
    ["{abandoned}", '<p class="tag abandoned">abandoned</p>'],
	["{wip}", '<p class="tag wip">work in progress</p>'],
	["{unreleased}", '<p class="tag unreleased">unreleased</p>'],
];

function replace(element) {
    for (var i = 0; i < replaceStuff.length; i++) {
        var from = replaceStuff[i][0]
        var to = replaceStuff[i][1]
        if ((element.innerHTML && element.innerHTML.includes(from))) {
            element.innerHTML = element.innerHTML.replace(from, to)
            element.style.display = "inline"
        }
    }
}

const styleElement = document.createElement("style")
styleElement.innerHTML = style

document.head.appendChild(styleElement)

window.onload = function WindowLoad(event) {
    var elems = document.body.getElementsByTagName("p")
    for (var i = 0; i < elems.length; i++) {
        replace(elems.item(i))
    }
}
