const listaDePaises = [{
    name: 'Francia',
    year: 2018
},
{
    name: 'Alemania',
    year: 2014
},
{
    name: 'España',
    year: 2010
},
{
    name: 'Italia',
    year: 2006
},
{
    name: 'Brasil',
    year: 2002
},
{
    name: 'Francia',
    year: 1998
},
{
    name: 'Brasil',
    year: 1994
},
{
    name: 'Alemania',
    year: 1990
},
{
    name: 'Argentina',
    year: 1986
},
{
    name: 'Italia',
    year: 1982
},
{
    name: 'Argentina',
    year: 1978
},
{
    name: 'Alemania',
    year: 1974
},
{
    name: 'Brasil',
    year: 1970
},
{
    name: 'Inglaterra',
    year: 1966
},
{
    name: 'Brasil',
    year: 1962
},
{
    name: 'Brasil',
    year: 1958
},
{
    name: 'Alemania',
    year: 1954
},
{
    name: 'Uruguay',
    year: 1950
},
{
    name: 'Italia',
    year: 1938
},
{
    name: 'Italia',
    year: 1934
},
{
    name: 'Uruguay',
    year: 1930
},
{
    name: 'Inglaterra',
    year: 1966
},
{
    name: 'Guatemala',
    year: 1962
},
{
    name: 'Brasil',
    year: 1958
},
{
    name: 'Alemania',
    year: 1954
},
{
    name: 'Uruguay',
    year: 1950
},
{
    name: 'Italia',
    year: 1938
},
{
    name: 'Italia',
    year: 1934
},
{
    name: 'Uruguay',
    year: 1930
},
];
const listadoPaises = document.getElementById('listado');
console.log(listadoPaises);

function listar(paises){
    paises.forEach(function (pais){
        listadoPaises.innerHTML += `<li>
                                        <div class="row">
                                            <div class="col-3">
                                                <span>Pais:</span>${pais.name}
                                            </div>
                                            <div class="col-9">
                                                <span>Año:</span>${pais.year}
                                            </div>
                                        </div>
                                    </li>`
    }); 
}
listar(listaDePaises);

function buscadorPais(eventoJS){
    const criterioDeBusqueda = eventoJS.target.value.toLowerCase();
    console.log(criterioDeBusqueda);
    console.log(eventoJS);
}
buscadorPais(listaDePaises);