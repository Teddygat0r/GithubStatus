
var gitData;
const work = [false, false, false, false, false, false, false, false, false, false];

function makeGreen(id) {
    let temp = document.getElementById(id).className;
    document.getElementById(id).className = temp.substring(0, temp.lastIndexOf(' ')) + " work";

    return true;
}

function makeRed(id) {
    let temp = document.getElementById(id).className;
    document.getElementById(id).className = temp.substring(0, temp.lastIndexOf(' ')) + " broke";

    return true;
}

const color = () => {
    for(var i = 0; i < work.length; i++){
        switch(i){
            case 0:
                id = "GitOperations";
                if(work[i])
                    makeGreen(id);
                else
                    makeRed(id);
                break;
            case 1:
                id = "APIRequests";
                if(work[i])
                    makeGreen(id);
                else
                    makeRed(id);
                break;
            case 2:
                id = "Webhooks";
                if(work[i])
                    makeGreen(id);
                else
                    makeRed(id);
                break;
            case 3:
                id = "Issues";
                if(work[i])
                    makeGreen(id);
                else
                    makeRed(id);
                break;
            case 4:
                id = "PullRequests";
                if(work[i])
                    makeGreen(id);
                else
                    makeRed(id);
                break;
            case 5:
                id = "GithubActions";
                if(work[i])
                    makeGreen(id);
                else
                    makeRed(id);
                break;
            case 6:
                id = "GithubPackages";
                if(work[i])
                    makeGreen(id);
                else
                    makeRed(id);
                break;
            case 7:
                id = "GithubPages";
                if(work[i])
                    makeGreen(id);
                else
                    makeRed(id);
                break;
            case 8:
                id = "Codespaces";
                if(work[i])
                    makeGreen(id);
                else
                    makeRed(id);
                break;
            case 9:
                id = "Copilot";
                if(work[i])
                    makeGreen(id);
                else
                    makeRed(id);
                break;
            
        }
    }
}

const parseData = () => {
    const children = gitData.getElementsByClassName('components-container one-column')[0].childNodes;
    for(let i = 0; i < work.length; i++){
        if(children.item(2 * i + 1).innerHTML.indexOf("Operational") > 0){
            work[i] = true;
        } else {
            work[i] = false;
        }
    }
}

const loadStuff = async () => {
    
    const res = await fetch('https://www.githubstatus.com/')
        .then((res) => res.text())
        .then((html) => {
            const parser = new DOMParser();
            gitData = parser.parseFromString(html, "text/html");
            
        })
        .catch((err) => {console.warn("you fucked up");});
    parseData();
    color();
}



loadStuff();

