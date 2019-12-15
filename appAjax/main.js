//#region Aula 1

// var xhr = new XMLHttpRequest()

// xhr.open('GET','https://api.github.com/users/gabrielbriks');
// xhr.send(null);

// xhr.onreadystatechange = function(){
//   if(xhr.readyState === 4){
//     console.log(JSON.parse(xhr.responseText));
//   }

// }
//#endregion

//#region Aula 2


/**
 * Promises
 * As Promises são codigos que nao irão influenciar na linha do tempo do nosso 
 * código JavaScript, são funções que irão devolver o valor ou a reposta só depois de um
 * tempo 
 * 
 * Resolve & Reject:
 *Também são funções, utilizamos o 'Resolve' quando o resultado que nos obtemos foi de 
 sucesso;
 Já no caso do 'Reject', utilizamos ele quando o resultado obtido não foi de sucesso
 */

//  var minhaPromisse = function(){
//    return new Promise(function(resolve, reject){
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET','https://api.github.com/users/gabrielbriks');
//     xhr.send(null);

//     xhr.onreadystatechange = function(){
//       if(xhr.readyState === 4){
//         if(xhr.status === 200){
//           resolve(JSON.parse(xhr.responseText));
//         }else{
//           reject('erro na requisição');
//         }
//       }
//     }
    
//    });
//  }
//  minhaPromisse()
//  //é executado quando chamamos o resolve
//   .then(function(response){
//     console.log(response);
//   })
//   //é chamado quando chamamos o reject
//   .catch(function(error){
//     //warn : avisa para a gente o erro em vez do .log que so imprime
//     console.warn(error);
//   });
  






 //#endregion

//#region Aula 3 
/**
 * Utilizando a biblioteca Axios para as requisições http
 */
// axios.get('https://api.githasdadub.com/users/gabrielbriks')
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(){
//     console.warn('Error in request!');
//   });

//#endregion

//#region DESAFIO 


//#region DESAFIO 1
/**
 * DESAFIO 1 
 * Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch

 */
// function checarIdade(idade){
//   return new Promise(function (resolve, reject){

//     if(idade > 18){
//       resolve();
//     }
//     else{
//       reject();
//     }
//   });
  
  
// }
  

// checarIdade(13)
//   .then(function(){
//     setTimeout(() => {
//       console.log('Maior que 18');
//     }, 2000);
    
//   })
//   .catch(function(){
//     setTimeout(() => {
//       console.log('Menor que 18');
//     }, 2000);
//   });
//#endregion

var btnElement = document.querySelector('#buscar');
var inputElement = document.querySelector('input[name=nomeUser]');

btnElement.onclick = function(){
  var userGitText = inputElement.value;
  if(userGitText != null){
    alert('Git User: ' + userGitText);
   
    chamadaRequest(userGitText)
  }
}
function chamadaRequest(user){
  axios.get('https://api.github.com/users/'+user+'/repos')
  .then(function(response){
    console.log('chamadaRequest'+ response);
    AddInList(response);
      
  })
  .catch(function(){
    alert('error 404');
    console.warn('error in request');
  });
}


function AddInList(response){
  var retorno = response.data;
  for(item of retorno){
        console.log(item.name);
        var name = item.name;
        var liElement = document.createElement('li');
        document.querySelector('#list').appendChild(liElement).innerText = item.name;

      }  
}



//#endregion
