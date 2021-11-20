var elText = document.querySelector(".text")
var salaries = {
	"Akmal": 1200,
	"Salim": 5200,
	"Karima": 1800,
}
function sumSalaries(nambers) {
   var resalt = 0
 for (var namber of Object.values(nambers)) {
    resalt = resalt + namber
 }
 return resalt
}
alert(sumSalaries(salaries))
console.log(sumSalaries(salaries)) // Natija: 8200 -> chiqishi kk