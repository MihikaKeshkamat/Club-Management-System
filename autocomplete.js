let availableKey=[
    'Android Club',
    'Cloud Zone',
    'Mozilla Firefox Club Vit Bhopal',
    'GeeksforGeeks Student Chapter',
    'Health-O-Tech',
    'Open-Source Club',
    'SEDS Nebula',
    'TechnoMech Club',
    'Linux Club',
    'Microsoft Technical Club',
    'IOT Club',
    'AI Club',
    'AIEM Club',
    'Software Development Club',
    'The Bioengineering Club',
    'E-Cell',
    'GDSC',
    'Blockchain',
    'Edu4U Club',
    'SAEINDIA Collegiate Club',
    'Coding Block',
    'Data Science Club',
    'Electrical Vehicle Club',
    'Fin Tech Club',
    'CISCO Community',
    'D2C Igniters Club',
    'Virtual Reality and Gaming Club',
    'Robotic Club',
    'e-Commerce Club',
    'VITronix',
    'English Literary Club',
    'Gujarati Club',
    'Mharo Rajasthan Club',
    'Cooking and Feasting Club',
    'Meraki-The Fine Arts Club',
    'Defence Warriors Club',
    'Fusion Club',
    'E Green Campus Club',
    'Nature and Trekking Club',
    'Ekfraseis Dramatics Society',
    'Dance Club',
    'Marathi Club',
    'Antique Arcade Club',
    'Insights Club',
    'VITB MUN Cub',
    'Music and Band Club',
    'Linpack Club',
    'Ramanujan Club',
    'iOS Club',
    'Anime Club',
    'Hindi Club',
];
const resultsBox=document.querySelector(".result-box");
const inputBox= document.getElementById("input-box");
inputBox.onkeyup=function(){
    let result=[];
    let input=inputBox.value;
    if(input.length){
        result=availableKey.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase())
        });
        console.log(result);
    } 
    display(result); 
    if(!result.length){
        resultsBox.innerHTML='';
    }
}
function display(result){
    const content=result.map((list)=>{
        return "<li onclick=selectInput(this)>"+list+"</li>"
    });
    resultsBox.innerHTML = "<ul>"+content.join('')+"</ul>";
}
function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML=''; 
    //get the selected option 
    const selectedOption = list.innerHTML;
    //define redirected urls
    const redirectionURLs={
        'English Literary Club': 'ela.html',
    };
    if (redirectionURLs.hasOwnProperty(selectedOption)){
        window.location.href=redirectionURLs[selectedOption];
    }
}; 



