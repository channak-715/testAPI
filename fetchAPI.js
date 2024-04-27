
/*


    */
/* 
map ជាមុងារ​ប្រសម្រាប់​ បង្កើត array​ ថ្មី ដែលកែប្រែរួច ដោយប្រើ callback function 
    កែប្រែ element នៃ old array បង្កើត  new array

var usa = ["2024-1-10","2023-2-12","2022-3-11"];

var kh = usa.map(change);
console.log(kh);

function change(element){
    var ch = element.split("-");
    return `${ch[1]}/${ch[2]}/${ch[0]}`;
}
*/

/*=====================================map====================
 map is មុខងារ​សម្រាប់​ កែប្រែ element of array
const num = [2, 3, 6 ,6]

num.forEach((element, index, array)=>{
    array[index] = element * 2;
});

num.forEach(
    (element)=>{
        console.log(element);
    }
);
*/

/* filter()  == create a new array by filtering out elements 
    មុខងារ​សម្រាប់ កាត់កែប្រែ element 

    reduce() == reduce element of a array to a single value

    ===========================================

    promises // async/Await  // try/catch
*/

/*
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .then(data => console.log(data.name))
    .catch(error => console.error(error));

    */

    async function fetchData(){

        try{
            const pokemonname = document.getElementById("name").value.toLowerCase();

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);

            if(!response.ok){
                throw new Error("channak is NOT found");
            }

            const data = await response.json();
            const pokemonImg = data.sprites.front_default;
            const imgpokemon = document.getElementById("imgpokemon");
            imgpokemon.src = pokemonImg;
            imgpokemon.style.display = "block";

        }catch(error){
            console.error(error);
        }
    }