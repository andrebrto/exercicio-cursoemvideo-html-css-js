function verificar(){
    var date = new Date();
    var currentyear = date.getFullYear();
    var year = document.getElementById('ano')
    var resp = document.getElementById('res')

    if(year.value.length == 0 || year.value > currentyear){
        window.alert('ERROOO NA APLICAÇÃO , DIGITE SEU ANO DE NASCIMENTO!!')
    } else {
        var sex = document.getElementsByName('radsex')
        var age = currentyear - (Number(year.value));
        var genre = ''
        var image = document.createElement("img")
        image.setAttribute('id' , 'foto')

        if(sex[0].checked){
            genre = 'Homem'
            if(age >= 0 && age <= 10 ){
                image.setAttribute('src' , './images/foto-bebe-m.png')
            }else if(age < 21 ){
                image.setAttribute('src' , './images/foto-jovem-m.png')
            }else if(age < 50){
                image.setAttribute('src' , './images/foto-adulto-m.png')
            }else{
                image.setAttribute('src' , './images/foto-idoso-m.png')
            }
        }else if(sex[1].checked){
            genre = 'Mulher'
            if(age > 0 && age <= 10 ){
                image.setAttribute('src' , './images/foto-bebe-f.png')
            }else if(age < 21){
                image.setAttribute('src' , './images/foto-jovem-f.png')
            }else if(age < 50){
                image.setAttribute('src' , './images/foto-adulto-f.png')
            }else{
                image.setAttribute('src' , './images/foto-idoso-f.png')
            }
        }
        resp.style.textAlign = 'center'
        resp.style.fontWeight = 'bolder'
        resp.style.padding = '8px'
        resp.innerHTML = `Detectamos ${genre} de ${age} anos de idade!`;
        resp.appendChild(image);
    }
}    
    