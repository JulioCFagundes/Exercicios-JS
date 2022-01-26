listofbook = [
    {
        Category: "Ficção",
        books: ["As Crônicas de Nárnia", "Harry Potter", "O Chamado de Cthulhu", "A Cor Que Caiu Do Céu"],
        author: ["C.S. Lewis", "J.K. Rowling", "H.P. Lovecraft", "H.P. Lovecraft"]
    }, {
         Category: "Educação",
         books: ["Números o império Racional", "Otimização Contínua", "Um Curso de Cálculo"],
         author: ["PET Matemática UFPR", "Elizabeth Wegner Karas e Roberto Ribeiro", "Hamilton Guidorizzi"]
    }, {
        Category: "Inteligência emocional",
        books: ["O Vendedor de Sonhos", "No Jardim do Pensador", "12 SEmanas Para Mudar Uma Vida"],
        author: ["Augusto Cury", "Silas Barbosa Dias", "Augusto Cury"]
    }

]

//Essa função retorna o número de categorias listadas. Como tenho uma categoria por objeto, basta contar quantos objetos existem na listofbook.
function Categories_quantity(listofbook) {
    let i = 0
    for(value of listofbook)
    {
    i += 1
    }
    return `No total, temos ${i} categorias de livros.`
}
//printando o return da função
console.log(Categories_quantity(listofbook))



//essa função cria uma lista com cada autor distinto listado. O return comentado vem em formato de string caso queira retornar uma mensagem formatada de um jeito legal.
function Autores(listofbooks) {
    let i = 0
    let authors_list = ['']
    while(i < listofbook.length){
        for(authors of listofbook[i].author)  {
                if(authors_list.includes(authors) == false){
                    authors_list.push(authors)
                }
            }
        
        i++
    }
    authors_list.shift()
    //return `Temos um total de ${authors_list.length} autores distintos`
    return authors_list
}
//declaração de uma variável que retorna uma lista com cada autor distinto
const lista_autores = (Autores(listofbook))


const authors_name = ['Augusto Cury', "J.K. Rowling" ]

function devolucao(lista_autores, listofbook) {
    
    let index_autor 
    for(name of authors_name) {
        for(let i = 0; i < listofbook.length; i++){

            while(listofbook[i].author.includes(name)){
                index_autor = listofbook[i].author.indexOf(name)

                listofbook[i].books.splice(index_autor,1)
                listofbook[i].author.splice(index_autor,1)

            }
        }
 
    }

    return 'Livros para devolver: ' + listofbook.book + ', dos autores:' + listofbook.author
}
//retorna uma lista com os livros que ainda precisam ser devolvidos. Caso o parâmetro "lista_autores" tenha todos os nomes, o retorno será uma lista vazia
console.log(devolucao(authors_name, listofbook))



/* MÉTODO DO PROFESSOR */

const BooksByCategory = [
     { 
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiosaki e Sharon L. Lechter"
            }

        ]


    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            }

        ]
    }
];

const totalCategories = BooksByCategory.length
for(let category of BooksByCategory){
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}


function countAuthors(){
    let authors = []

    for(let category of BooksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }
    return 'Total de autores: '+ authors.length
}
console.log(countAuthors(BooksByCategory))


function booksOfAugusto(){
    let books = []

    for(let category of BooksByCategory){
        for(let book of category.books){
            if(book.author == "Augusto Cury"){
                books.push(book.title)
            }
        }
    }
    return 'Livros de Augusto Cury: '+ books.join(", ")
}

console.log(booksOfAugusto())