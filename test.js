let url = 'http://localhost:5000/api/services'

fetch(url)
    .then(response => response.json())
    .then(data => {
        // Faça algo com os dados retornados
        console.log(data);
        viewData(data)
    })
    .catch(error => {
        // Trate erros de requisição
        console.error('Ocorreu um erro:', error);
    });

const viewData = (data) => {
    data.forEach(element => {
        console.log(element._id)
        console.log(element.name)
        console.log(element.price)
        console.log(element.description)


        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        const div = document.querySelector('.content')

        h2.textContent = element.name
        p.textContent = element.description
        div.appendChild(h2)
        div.appendChild(p)
    });
}