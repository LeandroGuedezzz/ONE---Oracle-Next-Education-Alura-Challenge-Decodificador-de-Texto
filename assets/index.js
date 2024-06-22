const txtImput = document.querySelector('.input-txt');
const output = document.querySelector('.content');
const btnCripto = document.querySelector('#encriptar');
const btnDesencriptar = document.querySelector('#desencriptar');
const btn = document.querySelector('.btnc');

let copyButtonCreated = false; 

function criaBtn() {
  if (!copyButtonCreated) {
    const btnCopyCreate = document.createElement('button');
    btnCopyCreate.setAttribute('id', 'copiar');
    btnCopyCreate.setAttribute('class', 'button');
    btnCopyCreate.innerText = 'Copiar';
    btn.appendChild(btnCopyCreate);

    btnCopyCreate.addEventListener('click', copiar); 
    copyButtonCreated = true; 
  }
}

function criptografar(){
    const texto = txtImput.value;

    var txtCriptografado = texto.replace(/a/g,'zks').replace(/e/g,'wpb').replace(/i/g,'hjp').replace(/o/g,'lwt').replace(/u/g,'rcq');

    output.innerHTML = txtCriptografado;

    criaBtn()
   
};

function descriptografar(){
    const texto = txtImput.value;

    var txtDescriptografado = texto.replace(/zks/g,'a').replace(/wpb/g,'e').replace(/hjp/g,'i').replace(/lwt/g,'o').replace(/rcq/g,'u');
    output.innerHTML= txtDescriptografado;
};

function copiar() {
    navigator.clipboard.writeText(output.innerText);
};

btnCripto.addEventListener('click', criptografar);
btnDesencriptar.addEventListener('click',descriptografar);


