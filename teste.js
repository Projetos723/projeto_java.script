
// document.addEventListener('DOMContentLoaded', function () {
// const form = document.querySelector('form');

// form.addEventListener('submit', function(event){
//     event.preventDefault();

// const nome = document.getElementById('nome').value
// const telefone = document.getElementById('fone').value
// const email = document.getElementById('email').value
// const duvida = document.getElementById('duv').value

// if(nome == 'Astrogildo Silva' 
//     && telefone == '11999998888' 
//     && email == 'teste@teste.com' 
//     && duvida == 'Gostaria de saber o preço de um lençol'){
//     alert(`Olá, ${nome}! Aguarde nosso retorno em breve.`)

// }else{
//     alert('Dados incompletos!')
// }
// document.querySelector('form').reset()
// })


document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const telefone = document.getElementById('fone').value.trim();
        const email = document.getElementById('email').value.trim();
        const duvida = document.getElementById('duv').value.trim();


            // Para testar via console
        // Mostra no console os valores digitados
        // console.log('Nome:', nome);
        // console.log('Telefone:', telefone);
        // console.log('Email:', email);
        // console.log('Dúvida:', duvida);

        if (
            nome === 'Astrogildo Silva' &&
            telefone === '11999998888' &&
            email === 'teste@teste.com' &&
            duvida === 'Gostaria de saber o preço de um lençol'
        ) {
            alert(`Olá, ${nome}! Aguarde nosso retorno em breve.`);
            form.reset();
        } else {
            alert('Dados incompletos ou incorretos!');
        }
    });
});
