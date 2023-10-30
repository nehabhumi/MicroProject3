const foodData = require('./food.json');
// const fs = require('fs');

// const jsonData = fs.readFileSync('./food.json', 'utf8');
// const foodData = JSON.parse(jsonData);

function listAllFoodItems(data) {
    return data.map(item => item.foodname);
  }
console.log("List All Food Items");
console.log(listAllFoodItems(foodData));

function listAllvegetables(data, category){
    return data.filter(item=>item.category === category).map(item => item.foodname);
}
const vegetableFoods = listAllvegetables(foodData, "Vegetable");

console .log("List all food vegetable");
console.log(vegetableFoods);

function listAllfooditem(data,category){
    return data.filter(item=>item.category === category).map(item => item.foodname);
}
console.log("List all food fruite");
console.log(listAllfooditem(foodData, "Fruit"));

function listAllprotienitem(data,category){
    return data.filter(item=>item.category === category).map(item => item.foodname);
}
console.log("List all protien");
console.log(listAllprotienitem(foodData, "Protein"));

function listAllnutsitem(data,category){
    return data.filter(item=>item.category === category).map(item => item.foodname);
}
console.log("List all nuts");
console.log(listAllnutsitem(foodData, "Nuts"));

function listAllgrainitem(data,category){
    return data.filter(item=>item.category === category).map(item => item.foodname);
}
console.log("List all grain");
console.log(listAllgrainitem(foodData, "Grain"));

function listAlldairyitem(data,category){
    return data.filter(item=>item.category === category).map(item => item.foodname);
}
console.log("List all dairy");
console.log(listAlldairyitem(foodData, "Dairy"));

function listFoodItemsWithCaloriesAbove(data, caloriesThreshold) {
    return data
      .filter(item => item.calorie > caloriesThreshold)
      .map(item => item.foodname);
  }
  
  // Usage
  const caloriesThreshold = 100;
  console.log("List all food items with calories above 100:");
  console.log(listFoodItemsWithCaloriesAbove(foodData, caloriesThreshold));

//--------------//
  function listFoodItemsWithCaloriesbelow(data, caloriesThreshol) {
    return data
      .filter(item => item.calorie < caloriesThreshol)
      .map(item => item.foodname);
  }
  
  // Usage
  const caloriesThreshol = 100;
  console.log("List all food items with calories below 100:");
  console.log(listFoodItemsWithCaloriesbelow(foodData, caloriesThreshol));

  //----------------------//

function listFoodItemsByProteinContent(data) {
    const sortedData = data.slice().sort((a, b) => b.protein - a.protein);
    return sortedData.map(item => item.foodname);
}
console.log("List all food items with the highest protein content to lowest:");
console.log(listFoodItemsByProteinContent(foodData));
  
//-----------------//
function listFoodItemsByCarbContent(data) {
    // Sort the data in ascending order based on carbohydrate content
    const sortedData = data.slice().sort((a, b) => a.carbohydrate - b.carbohydrate);
    
    // Extract and return the names of the items
    return sortedData.map(item => item.foodname);
  }
  
  // Usage
  console.log("List all food items with the lowest carbohydrate content to highest:");
  console.log(listFoodItemsByCarbContent(foodData));
  
