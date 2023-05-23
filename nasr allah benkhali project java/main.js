// Selectionner les element de document par leur ID//

let addButton=document.getElementById('addButton');
let container=document.getElementById('tasks-div');
let inputfield=document.getElementById('input-el');

    




// ajouter un evenement lors de clic sur le boutton ADD//
addButton.addEventListener('click',function()
{
    // creer des elements html//
    let div=document.createElement('div');
    let paragraphe=document.createElement('p');
    let editButton=document.createElement('button');
    let delButton=document.createElement('button');
    
    //ajouter les classe css a les elements ajouter// 
    paragraphe.classList.add('p');
    editButton.classList.add('button');
    delButton.classList.add('button');
    div.classList.add('task');
    
    
    // ecrire les valeurs a afficher dans la page html//

    paragraphe.innerText=inputfield.value;
    editButton.innerText='EDIT';
    delButton.innerText='DEL';
    
    //inserer les elements creer au parent div//
    div.appendChild(paragraphe);
    div.appendChild(delButton);
    div.appendChild(editButton);
    container.appendChild(div);
    
    //modifier la valeur de input a null //
    inputfield.value="";
    

    //ajouter un evenement lors du click sur le paragraphe//
    paragraphe.addEventListener('click',function()
    {
        //changer la decoration lors du click //
        paragraphe.style.textDecoration="line-through";
        paragraphe.style.textDecorationColor="rgb(190, 100, 100)";
        paragraphe.style.textDecorationThickness="3.5px";

    })
 

    //ajouter un evenement pour le button DEL qui fait la supression// 
    delButton.addEventListener('click',function()
    {
        //methode de supression de lenfant de countainer(parent)//
        container.removeChild(div);
    })


    //ajouter un evenement pour le button edit qui fait la modification// 
    editButton.addEventListener('click',function()
    {
            //lors de la click la valeur de paragraphe va etre recu par le input et supprimer le paragrephe pour etre remplacer par un autre//
                inputfield.value=paragraphe.innerText;
                container.removeChild(div);
            
    })

    
});
