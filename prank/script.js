function startScan(){

const name = document.getElementById("username").value
const terminal = document.getElementById("terminal")
const final = document.getElementById("final")

terminal.innerHTML = ""
final.innerHTML =""
const lines = [

"Initializing cyber terminal...",
"Connecting to secure network...",
"Searching account: " + name,
"Scanning Telegram data nodes...",
"Scanning Instagram activity...",
"Scanning TikTok profile metadata...",
"Analyzing WiFi network signals...",
"Checking system vulnerabilities...",
"Decrypting packets...",
"Generating analysis report...",
"Finalizing process..."

]
let i = 0

const scan = setInterval(()=>{

if(i < lines.length){

terminal.innerHTML += lines[i] + "<br>"
terminal.scrollTop = terminal.scrollHeight
i++

}else{

clearInterval(scan)

setTimeout(()=>{
final.innerHTML = "😎 RELAX — IT'S JUST A PRANK!"
},1500)

}

},1000)

}