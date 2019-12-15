//Mapeando arvore de elementos
var listElements = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//Criando um array para alimentar nossa lista de ToDos
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
 [ 
  'Fazer café',
  'Estudar JavaScript',
  'Acessar SkyLab'
];

//Metodo responsavel por renderizar nossa lista de ToDos
function renderTodos(){
  //limpando a lista de ToDos para renderizar alterações na lista
  listElements.innerHTML = '';

  for( todo of todos){
    //Criando elemento 'li' para adicionar dentro do 'ul'
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);
    
    //adicionando um link na palavra 'excluir'
    var linkElement = document.createElement('a');
    linkElement.setAttribute('href','#');
    var linkText = document.createTextNode('Excluir');
    
    //adicionando elemento 'excluir' aos itens da nossa lista;  
    linkElement.appendChild(linkText);

    //adicionando itens na lista
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    //pegando a posicao de cada item da lista de ToDos
    var pos = todos.indexOf(todo);

    //adicionando o evento de click para a funcao 'deleteTodo' com a posicao ao link 'excluir'
    linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

    //renderizando a lista de ToDos
    listElements.appendChild(todoElement);
  }
}
renderTodos();


function addTodo(){
  //buscando valor do input que sera adicionado a lista
  var todoText = inputElement.value;
  if(todoText != null){
    //adicionando o item do input dentro da lista
    todos.push(todoText);
    inputElement.value = '';
  }else{
    alert('Este campo é obrigatório!');
  }

  //atualizando lista(renderizando)
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage(){
  

  localStorage.setItem('list_todos',JSON.stringify(todos));
}