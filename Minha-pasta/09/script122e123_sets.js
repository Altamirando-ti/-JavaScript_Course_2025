'use strict';
const cl = console.log

// ------------------ 120. Sets ---------
cl('------------------ 120. Sets ---------');

const orderSet = new Set([
    'Pasta',
    'Pizza',
    'Risoto',
    'Pasta',
    'Pizza',
]);

cl(orderSet)

cl(orderSet.size)
cl(orderSet.has('Pasta'))
cl(orderSet.has('Bread'))
orderSet.add('Hamburger')
cl(orderSet)
orderSet.delete('Risoto')
cl(orderSet)
// orderSet.clear();
// cl(orderSet)

for(const order of orderSet) cl(order);

//Se eu quiser tirar valores duplicados de um array posso usar um SET
const staff = ['garçom', 'chefe', 'garçom', 'gerente', 'garçom']

const staffSet= new Set(staff)
cl(staffSet)

const staffUnique= [...staffSet]// Usando destruction e o spread operator para transformar o Set em um array novamente
cl(staffUnique)

/* ---Resumo: Arrays e Sets
Arrays -> ordered list of values -- > a orgem importa
Sets -> collection of unique values --> a ordem não importa e não pode haver repetição de valores
Sets são ótimos para eliminar valores duplicados de arrays, ou seja, quando queremos apenas os valores únicos 
de um array, podemos usar um Set para filtrar os valores duplicados.
Sets também são ótimos para quando queremos saber se um valor existe ou não em uma coleção, 
pois os Sets possuem um método chamado has() que nos permite verificar se um valor existe ou não no Set 
de forma rápida e eficiente.
*/

// ------------------ 121. New Operations to Make Sets Useful! ---------
cl('------------------ 121. New Operations to Make Sets Useful! ---------');

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

//Interseção
const commomFoods = italianFoods.intersection(mexicanFoods);
cl(commomFoods)

const arrayCommonFoods = [...commomFoods]
cl(arrayCommonFoods)

//União
const unionFoods = italianFoods.union(mexicanFoods)
// cl(unionFoods)
const arrayUnionFoods = [... unionFoods]
cl(arrayUnionFoods)
//outra maneira
const arrayFoods = [...italianFoods, ...mexicanFoods]
cl(arrayFoods)
const unionFoods2 = [...new Set(arrayFoods)]
cl(unionFoods2)

//Diferença
const diferenceItalianMexican = italianFoods.difference(mexicanFoods)
cl(diferenceItalianMexican)

const diferenceMexicanItalian = mexicanFoods.difference(italianFoods)
cl(diferenceMexicanItalian)

// "Simétrico" = oposto da intersecção

const symmetricItalianMexican = italianFoods.symmetricDifference(mexicanFoods)
cl(symmetricItalianMexican)

/* Outros 3 métodos: Que tem haver com conjuntos, especificamente o contém ou não contém
 1) subset of
 2) superset of
 3) disjoint from
 */

 cl(italianFoods.isDisjointFrom(mexicanFoods))// Significa a seguinte pergunta: O conjunto A não contém nenhum elemento de B? Falso.
