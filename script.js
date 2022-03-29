function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var faixaEtaria = ''
        var artigo =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

            if(fsex[0].checked){
                genero = 'homem'
                    if(idade >=0 && idade <= 2){
                        img.setAttribute('src', 'img/homem_bebe.png') //bebê
                        faixaEtaria = 'bebê'
                        document.body.style.background = '#213533'
                        
                    } else if (idade <= 9){

                        img.setAttribute('src', 'img/homem_crianca.png') //crianca
                        faixaEtaria = 'criança'
                        document.body.style.background = '#897252'

                    }else if(idade <= 14){
                        img.setAttribute('src', 'img/homem_pre_adolescente.png') //pre-adolecente
                        faixaEtaria = 'pré-adolescente'
                        document.body.style.background = '#524d47'

                    } else if(idade <= 19){
                        img.setAttribute('src', 'img/homem_adolescente.png') //adolecente
                        faixaEtaria = 'adolescente'
                        document.body.style.background = '#6c7e64'

                    }else if(idade <= 25){
                        img.setAttribute('src', 'img/homem_jovem.png') // jovem
                        faixaEtaria = 'jovem'
                        document.body.style.background = '#8d97a3'

                    }else if(idade <= 59){
                        img.setAttribute('src', 'img/homem_adulto.png') // adulto
                        faixaEtaria = 'adulto'
                        document.body.style.background = '#909090'

                    }else{
                        img.setAttribute('src', 'img/homem_idoso.png') //idoso
                        faixaEtaria = 'idoso'
                        document.body.style.background = '#5a473c'
                    }


            } else if (fsex[1].checked){
                genero = 'mulher'

                if(idade >=0 && idade <= 2){
                    img.setAttribute('src', 'img/mulher_bebe.png') //bebê
                    faixaEtaria = 'bebê'
                    document.body.style.background = '#7a5054'
                    
                } else if (idade <= 9){
                    img.setAttribute('src', 'img/mulher_crianca.png') //crianca
                    faixaEtaria = 'criança'
                    document.body.style.background = '#91906d'

                }else if(idade <= 14){
                    img.setAttribute('src', 'img/mulher_pre_adolescente.png') //pre-adolecente
                    faixaEtaria = 'pré-adolescente'
                    document.body.style.background = '#999591'

                } else if(idade <= 19){
                    img.setAttribute('src', 'img/mulher_adolescente.png') //adolecente
                    faixaEtaria = 'adolescente'
                    document.body.style.background = '#e07962'

                }else if(idade <= 25){
                    img.setAttribute('src', 'img/mulher_jovem.png') // jovem
                    faixaEtaria = 'jovem'
                    document.body.style.background = '#9d7349'

                }else if(idade <= 59){
                    img.setAttribute('src', 'img/mulher_adulta.png') // adulto
                    faixaEtaria = 'adulta'
                    document.body.style.background = '#88a098'

                }else{
                    img.setAttribute('src', 'img/mulher_idosa.png') //idoso
                    faixaEtaria = 'idosa'
                    document.body.style.background = '#918c7f'
                }

                
            }
    }
    res.style.textAlign ='center'

    if(fsex[1].checked){

        artigo = 'uma'
        res.innerHTML = `É ${artigo} ${genero} ${faixaEtaria} com ${idade} anos de idade <br> <br>`

        if (idade == 1){
            res.innerHTML = `É ${artigo} ${genero} ${faixaEtaria} com ${idade} ano de idade  <br> <br>` 
        }else if(idade == 0){
            res.innerHTML = `É ${artigo} ${genero} ${faixaEtaria} com menos de 1 ano de idade  <br> <br>` 
        }
    } else{

        artigo = 'um'
        res.innerHTML = `É ${artigo} ${genero} ${faixaEtaria} com ${idade} anos de idade  <br> <br>`

        if (idade == 1){
            res.innerHTML = `É ${artigo} ${genero} ${faixaEtaria} com ${idade} ano de idade  <br> <br>` 

        }else if(idade == 0){
            res.innerHTML = `É ${artigo} ${genero} ${faixaEtaria} com menos de 1 ano de idade  <br> <br>` 
        }

    }

    res.appendChild(img)
}