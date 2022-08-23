const data={
    "parts":[{
        "img":"../dist/img/jojopart1.jpg",
        "name":"Phantom Blood",
        "content":"The story follows Jonathan Joestar as he matures with and eventually combats his adoptive brother, the cunning and merciless Dio Brando. Dio eventually becomes a vampire, leading to Jonathan fighting him for humanity’s sake."
    },
    {
        "img":"../dist/img/jojopart2.jpg",
        "name":"Battle Tendency",
        "content":"Taking place in 1938-39, the story follows the misadventures of Joseph Joestar (a.k.a. JoJo), grandson of Jonathan, as he masters his innate Ripple abilities in order to combat hostile, ancient super-beings named the Pillar Men, creators of the Stone Mask that plot to become the ultimate lifeforms. Along the way, Joseph trains with other warriors of the Ripple."
    },
    {
        "img":"../dist/img/jojopart3.png",
        "name":"Stardust Crusaders",
        "content":"From 1988 to 1989, the story follows Jotaro Kujo and his friends as they journey from Tokyo to Cairo, Egypt, to save the life of his mother, Holy Kujo, by defeating his family’s resurrected archenemy, DIO. Jotaro travels with his grandfather, Joseph Joestar, as well as Muhammad Avdol, Noriaki Kakyoin, Jean Pierre Polnareff, and Iggy. The group fights several of DIO’s minions and Stand users along the way."
    },
    {
        "img":"../dist/img/jojopart4.png",
        "name":"Diamond is Unbreakable",
        "content":"In 1999, an older Jotaro Kujo travels to coastal Morioh, Japan, in order to meet high school freshman Josuke Higashikata who is the illegitimate child of Joseph Joestar. Meanwhile, the Arrow, manifesting latent Stand abilities, travels throughout Morioh; as Josuke and his friends seek out the culprits of a series of homicides."
    },
    {
        "img":"../dist/img/jojopart5.png",
        "name":"Vento Aureo",
        "content":"Set in 2001 Italy, the story follows Giorno Giovanna and his dream to rise within the Neapolitan mafia and defeat the boss of Passione, the most powerful and influential gang, in order to become a Gang-Star. With the aid of a capo and his men, and fueled by his own resolve, Giorno sets out to fulfill his goal of absolving the mafia of its corruption."
    },
    {
        "img":"../dist/img/jojopart6.jpeg",
        "name":"Stone Ocean",
        "content":"In 2011, Florida; Jolyne Cujoh, daughter of Jotaro, is wrongfully accused of a crime she didn't commit and sent to a maximum security prison. While imprisoned, she struggles within a longstanding plot agreed between dead villain DIO and ideologue Enrico Pucci."
    },
    {
        "img":"../dist/img/jojopart7.jpg",
        "name":"Steel Ball Run",
        "content":"Set in the United States in 1890, the story follows Johnny Joestar, a paraplegic ex-jockey, and Gyro Zeppeli, master in a mystic art named the Spin, as they compete with a vast number of others in the Steel Ball Run race: a mad-dash across America for a grand prize of 50 million dollars."
    },
    {
        "img":"../dist/img/jojopart8.jpg",
        "name":"JoJolion",
        "content":"The story begins in 2011 and follows Josuke Higashikata, a young man afflicted by retrograde amnesia, in his search to uncover his identity in Morioh Town, a coastal Japanese town affected by the Tohoku earthquakeW. However, his digging pulls him and his adoptive family into the unfinished business between his previous life and an impending inhuman threat."
    }]
};

const tabList=document.querySelector('[role="tablist"]');
const tabs=tabList.querySelectorAll('[role="tab"]');


tabList.addEventListener('keydown',changeFocus);
tabs.forEach((tab)=>{
    tab.addEventListener('click',changePannel);
});

let tabfocus=0;
function changeFocus(e){
    const keyLeft=37;
    const keyRight=39;
    if(e.keyCode===keyLeft || e.keyCode===keyRight){
        tabs[tabfocus].setAttribute("tabindex",-1);

        if(e.keyCode===keyLeft){
            tabfocus--;
            if (tabfocus<0) {
                tabfocus=tabs.length-1;
            }
        }else{
            tabfocus++;
            if (tabfocus>=tabs.length) {
                tabfocus=0;
            }
        }
    }
    tabs[tabfocus].setAttribute("tabindex",0);
    tabs[tabfocus].focus();
}
let count=1;
let  prevValue=-1;
function changePannel(e){
    const currTab=e.target;
    const currValue=currTab.value;
    if (prevValue!=currValue) {
    const tabsCont=currTab.parentNode;
    const imgContent=document.getElementById("img");
    const content=tabsCont.parentNode.querySelector('[id="content"]');
    
    tabsCont.querySelector('[aria-selected="true"]').setAttribute("aria-selected", false);
    currTab.setAttribute("aria-selected", true);

    img="background:linear-gradient(to right,rgba(39, 39, 39, 0.8), rgba(39, 39, 39, 0.35)), url("+data.parts[currValue].img+") center/cover no-repeat" ;
    imgContent.style.cssText=img;
    content.querySelector("p").textContent=data.parts[currValue].content;
    content.querySelector("h2").textContent=data.parts[currValue].name;

        if(count==1){          
            content.classList.add("animate__rotateInDownRight");
            count++;
        }
        else if(count%2==0){
            content.classList.add("animate__rotateInDownRight");
            content.classList.remove("animate__rotateInDownLeft");
            count++;
        }else{
            content.classList.remove("animate__rotateInDownRight");
            content.classList.add("animate__rotateInDownLeft");
            count++;
        }
    }
    
    
    prevValue=currValue;
}

