function verify(){
    //DOM
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano').value;
    var res = document.getElementById('res');//

    //condições para o resultado
    if(fano.length==0||fano > ano||fano<1904){
          alert('Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = (ano-fano);
        var genêro = ''
        var img = document.getElementById('foto')

        //homem
        if (fsex[0].checked){
            res.innerHTML = `Indentificamos um homem com ${idade} anos`
           if(idade>=0 && idade<=13){
             img.src = 'https://thumbs.dreamstime.com/b/close-up-da-crian%C3%A7a-masculina-bonito-46809247.jpg'
           }else if(idade>=14&&idade<=21){
               img.src = 'https://img.freepik.com/fotos-gratis/retrato-de-um-adolescente-sorridente_171337-893.jpg?w=2000'
           }
           else if(idade<=30){
            img.src = 'https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg'
           }else if(idade>=60&&idade<=118){
               img.src = 'https://media.istockphoto.com/id/912073272/pt/foto/happy-senior-man-sitting-at-home.jpg?s=612x612&w=0&k=20&c=MibpEi0DRrCFJmmKdXY0dBjkp6w2BWDa-ZA-hfR_6Qs='
           }
        
       //mulher
        }if(fsex[1].checked){
            res.innerHTML = `Indentificamos uma mulher com ${idade}`
            if(idade>=0 && idade<=13){
                img.src = 'https://media.istockphoto.com/id/844057720/pt/foto/portrait-of-happy-baby-girl-playing-with-toys-in-playroom.jpg?s=612x612&w=0&k=20&c=O9qyQkpPrwwPOx8eqpts0BgBR0s4PzCvA7NkOY_XbDQ='
          }else if(idade>=14&&idade<=21){
             img.src = 'https://img-21.ccm2.net/856KUZ2vTyJ1JN8iJp8pCMNDTFw=/d03b4ff710034eada90a11bf9f9d8cde/ccm-faq/5628-PS23RQIPKCDbpdPs-s-.png'
          }else if(idade<=30){
             img.src = 'https://img.freepik.com/fotos-gratis/mulher-de-negocios-elegante-e-confiante-sorrindo_176420-19466.jpg?w=2000'
          }else if(idade>=60&&idade<=118){
             img.src = 'https://img.freepik.com/fotos-premium/mulher-negra-senior-orgulhosa-com-cabelo-afro_53876-159911.jpg?w=2000'
          }
          
      }
  }
        }