function toggleMode(){
    const html = document.documentElement
    const img = document.querySelector("#profile img")
    
    // Verifica ANTES de trocar as classes
    if (html.classList.contains('dark')){
        // Estava dark, vai virar light
        html.classList.remove('dark')
        html.classList.add('light')
        img.setAttribute("src", "./assets/avatar-light.png")
        img.setAttribute("alt", "Foto de Pedro Rezende de óculos e com moletom verde")
    } else {
        // Estava light, vai virar dark
        html.classList.remove('light')
        html.classList.add('dark')
        img.setAttribute("src", "./assets/avatar.png")
        img.setAttribute("alt", "Foto de Pedro Rezende com 16 anos de terno sorrindo")
    }
}
