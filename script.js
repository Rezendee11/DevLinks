function toggleMode(){
    
    const html = document.documentElement
    
    if (html.classList.contains('dark')){
        
      html.classList.remove('dark')
      html.classList.add('light')
        
    }else{
        html.classList.remove('light')
        html.classList.add('dark')
    }

//Pfp change
const img = document.querySelector("#profile img")

if (html.classList.contains("dark")){

img.setAttribute("src", "./assets/Avatar.png")
img.setAttribute("alt", "Foto de Pedro Rezende com 16 anos  de terno sorrindo")
    
}else{
    
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Pedro Rezende de óculos e com moletom verde")
 }
}
