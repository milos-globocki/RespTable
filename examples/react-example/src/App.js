import React from 'react';
import { Table } from '../src/compiled-files-here/index.esm';
// import '../src/compiled-files-here/index.cjs';
import '../src/workaround/stacking.css';
import '../src/workaround/table.css';
// import '../src/workaround/flipping.js';

function App() {
  const colsExampleTable = ["Name", "Manufacturer", "Type", "Calories", "Protein (g)", "Fat (g)", "Sodium (mg)", "Fibre (g)", "Carbo (g)", "Sugar (g)", "Shelf", "Potassium (mg)", "Vitamins", "Weight (oz)", "Cups"];
  const rowsExampleTable = [
    ["100%_Bran", "N", "cold", 70, 4, 1, 130, 10.0, 5.0, 6.0, 3, 280, 25, 1.0, 0.33],
    ["100%_Natural_Bran", "Q", "cold", 120, 3, 5, 15, 2.0, 8.0, 8.0, 3, 135, 0, 1.0, null],
    ["All-Bran", "K", "cold", 70, 4, 1, 260, 9.0, 7.0, 5.0, 3, 320, 25, 1.0, 0.33],
    ["All-Bran_with_Extra_Fiber", "K", "cold", 50, 4, 0, 140, 14.0, 8.0, 0.0, 3, 330, 25, 1.0, 0.5],
    ["Almond_Delight", "R", "cold", 110, 2, 2, 200, 1.0, 14.0, 8.0, 3, null, 25, 1.0, 0.75],
    ["Apple_Cinnamon_Cheerios", "G", "cold", 110, 2, 2, 180, 1.5, 10.5, 10.0, 1, 70, 25, 1.0, 0.75],
    ["Apple_Jacks", "K", "cold", 110, 2, 0, 125, 1.0, 11.0, 14.0, 2, 30, 25, 1.0, 1.0],
    ["Basic_4", "G", "cold", 130, 3, 2, 210, 2.0, 18.0, 8.0, 3, 100, 25, 1.33, 0.75],
    ["Bran_Chex", "R", "cold", 90, 2, 1, 200, 4.0, 15.0, 6.0, 1, 125, 25, 1.0, 0.67],
    ["Bran_Flakes", "P", "cold", 90, 3, 0, 210, 5.0, 13.0, 5.0, 3, 190, 25, 1.0, 0.67],
    ["Cap'n'Crunch", "Q", "cold", 120, 1, 2, 220, 0.0, 12.0, 12.0, 2, 35, 25, 1.0, 0.75],
    ["Cheerios", "G", "cold", 110, 6, 2, 290, 2.0, 17.0, 1.0, 1, 105, 25, 1.0, 1.25],
    ["Cinnamon_Toast_Crunch", "G", "cold", 120, 1, 3, 210, 0.0, 13.0, 9.0, 2, 45, 25, 1.0, 0.75],
    ["Clusters", "G", "cold", 110, 3, 2, 140, 2.0, 13.0, 7.0, 3, 105, 25, 1.0, 0.5],
    ["Cocoa_Puffs", "G", "cold", 110, 1, 1, 180, 0.0, 12.0, 13.0, 2, 55, 25, 1.0, 1.0],
    ["Corn_Chex", "R", "cold", 110, 2, 0, 280, 0.0, 22.0, 3.0, 1, 25, 25, 1.0, 1.0],
    ["Corn_Flakes", "K", "cold", 100, 2, 0, 290, 1.0, 21.0, 2.0, 1, 35, 25, 1.0, 1.0],
    ["Corn_Pops", "K", "cold", 110, 1, 0, 90, 1.0, 13.0, 12.0, 2, 20, 25, 1.0, 1.0],
    ["Count_Chocula", "G", "cold", 110, 1, 1, 180, 0.0, 12.0, 13.0, 2, 65, 25, 1.0, 1.0],
    ["Cracklin'_Oat_Bran", "K", "cold", 110, 3, 3, 140, 4.0, 10.0, 7.0, 3, 160, 25, 1.0, 0.5],
    ["Cream_of_Wheat_(Quick)", "N", "hot", 100, 3, 0, 80, 1.0, 21.0, 0.0, 2, null, 0, 1.0, 1.0],
    ["Crispix", "K", "cold", 110, 2, 0, 220, 1.0, 21.0, 3.0, 3, 30, 25, 1.0, 1.0],
    ["Crispy_Wheat_&_Raisins", "G", "cold", 100, 2, 1, 140, 2.0, 11.0, 10.0, 3, 120, 25, 1.0, 0.75],
    ["Double_Chex", "R", "cold", 100, 2, 0, 190, 1.0, 18.0, 5.0, 3, 80, 25, 1.0, 0.75],
    ["Froot_Loops", "K", "cold", 110, 2, 1, 125, 1.0, 11.0, 13.0, 2, 30, 25, 1.0, 1.0],
    ["Frosted_Flakes", "K", "cold", 110, 1, 0, 200, 1.0, 14.0, 11.0, 1, 25, 25, 1.0, 0.75],
    ["Frosted_Mini-Wheats", "K", "cold", 100, 3, 0, 0, 3.0, 14.0, 7.0, 2, 100, 25, 1.0, 0.88],
    ["Fruit_&_Fibre_Dates", "P", "cold", 120, 3, 2, 160, 5.0, 12.0, 10.0, 3, 200, 25, 1.25, 0.67],
    ["Fruitful_Bran", "K", "cold", 120, 3, 0, 240, 5.0, 14.0, 12.0, 3, 190, 25, 1.33, 0.67],
    ["Fruity_Pebbles", "P", "cold", 110, 1, 1, 135, 0.0, 13.0, 12.0, 2, 25, 25, 1.0, 0.75],
    ["Golden_Crisp", "P", "cold", 100, 2, 0, 45, 0.0, 11.0, 15.0, 1, 40, 25, 1.0, 0.88],
    ["Golden_Grahams", "G", "cold", 110, 1, 1, 280, 0.0, 15.0, 9.0, 2, 45, 25, 1.0, 0.75],
    ["Grape_Nuts_Flakes", "P", "cold", 100, 3, 1, 140, 3.0, 15.0, 5.0, 3, 85, 25, 1.0, 0.88],
    ["Grape-Nuts", "P", "cold", 110, 3, 0, 170, 3.0, 17.0, 3.0, 3, 90, 25, 1.0, 0.25],
    ["Great_Grains_Pecan", "P", "cold", 120, 3, 3, 75, 3.0, 13.0, 4.0, 3, 100, 25, 1.0, 0.33],
    ["Honey_Graham_Ohs", "Q", "cold", 120, 1, 2, 220, 1.0, 12.0, 11.0, 2, 45, 25, 1.0, 1.0],
    ["Honey_Nut_Cheerios", "G", "cold", 110, 3, 1, 250, 1.5, 11.5, 10.0, 1, 90, 25, 1.0, 0.75],
    ["Honey-comb", "P", "cold", 110, 1, 0, 180, 0.0, 14.0, 11.0, 1, 35, 25, 1.0, 1.33],
    ["Just_Right_Crunchy_Nugget", "K", "cold", 110, 2, 1, 170, 1.0, 17.0, 6.0, 3, 60, 100, 1.0, null],
    ["Just_Right_Fruit_&_Nut", "K", "cold", 140, 3, 1, 170, 2.0, 20.0, 9.0, 3, 95, 100, 1.3, 0.75],
    ["Kix", "G", "cold", 110, 2, 1, 260, 0.0, 21.0, 3.0, 2, 40, 25, 1.0, 1.5],
    ["Life", "Q", "cold", 100, 4, 2, 150, 2.0, 12.0, 6.0, 2, 95, 25, 1.0, 0.67],
    ["Lucky_Charms", "G", "cold", 110, 2, 1, 180, 0.0, 12.0, 12.0, 2, 55, 25, 1.0, 1.0],
    ["Maypo", "A", "hot", 100, 4, 1, 0, 0.0, 16.0, 3.0, 2, 95, 25, 1.0, null],
    ["Muesli_Raisins,_Dates", "R", "cold", 150, 4, 3, 95, 3.0, 16.0, 11.0, 3, 170, 25, null, null],
    ["Muesli_Raisins,_Peaches", "R", "cold", 150, 4, 3, 150, 3.0, 16.0, 11.0, 3, 170, 25, null, null],
    ["Mueslix_Crispy_Blend", "K", "cold", 160, 3, 2, 150, 3.0, 17.0, 13.0, 3, 160, 25, 1.5, 0.67],
    ["Multi-Grain_Cheerios", "G", "cold", 100, 2, 1, 220, 2.0, 15.0, 6.0, 1, 90, 25, 1.0, 1.0],
    ["Nut&Honey_Crunch", "K", "cold", 120, 2, 1, 190, 0.0, 15.0, 9.0, 2, 40, 25, 1.0, 0.67],
    ["Nutri-Grain_Almond", "K", "cold", 140, 3, 2, 220, 3.0, 21.0, 7.0, 3, 130, 25, 1.33, 0.67],
    ["Nutri-grain_Wheat", "K", "cold", 90, 3, 0, 170, 3.0, 18.0, 2.0, 3, 90, 25, 1.0, null],
    ["Oatmeal_Raisin_Crisp", "G", "cold", 130, 3, 2, 170, 1.5, 13.5, 10.0, 3, 120, 25, 1.25, 0.5],
    ["Post_Nat._Raisin_Bran", "P", "cold", 120, 3, 1, 200, 6.0, 11.0, 14.0, 3, 260, 25, 1.33, 0.67],
    ["Product_19", "K", "cold", 100, 3, 0, 320, 1.0, 20.0, 3.0, 3, 45, 100, 1.0, 1.0],
    ["Puffed_Rice", "Q", "cold", 50, 1, 0, 0, 0.0, 13.0, 0.0, 3, 15, 0, 0.5, 1.0],
    ["Puffed_Wheat", "Q", "cold", 50, 2, 0, 0, 1.0, 10.0, 0.0, 3, 50, 0, 0.5, null],
    ["Quaker_Oat_Squares", "Q", "cold", 100, 4, 1, 135, 2.0, 14.0, 6.0, 3, 110, 25, 1.0, 0.5],
    ["Quaker_Oatmeal", "Q", "hot", 100, 5, 2, 0, 2.7, null, null, 1, 110, 0, 1.0, 0.67],
    ["Raisin_Bran", "K", "cold", 120, 3, 1, 210, 5.0, 14.0, 12.0, 2, 240, 25, 1.33, 0.75],
    ["Raisin_Nut_Bran", "G", "cold", 100, 3, 2, 140, 2.5, 10.5, 8.0, 3, 140, 25, 1.0, 0.5],
    ["Raisin_Squares", "K", "cold", 90, 2, 0, 0, 2.0, 15.0, 6.0, 3, 110, 25, 1.0, 0.5],
    ["Rice_Chex", "R", "cold", 110, 1, 0, 240, 0.0, 23.0, 2.0, 1, 30, 25, 1.0, 1.13],
    ["Rice_Krispies", "K", "cold", 110, 2, 0, 290, 0.0, 22.0, 3.0, 1, 35, 25, 1.0, 1.0],
    ["Shredded_Wheat", "N", "cold", 80, 2, 0, 0, 3.0, 16.0, 0.0, 1, 95, 0, 0.83, null],
    ["Shredded_Wheat_'n'Bran", "N", "cold", 90, 3, 0, 0, 4.0, 19.0, 0.0, 1, 140, 0, 1.0, 0.67],
    ["Shredded_Wheat_spoon", "N", "cold", 90, 3, 0, 0, 3.0, 20.0, 0.0, 1, 120, 0, 1.0, 0.67],
    ["Smacks", "K", "cold", 110, 2, 1, 70, 1.0, 9.0, 15.0, 2, 40, 25, 1.0, 0.75],
    ["Special_K", "K", "cold", 110, 6, 0, 230, 1.0, 16.0, 3.0, 1, 55, 25, 1.0, 1.0],
    ["Strawberry_Fruit_Wheats", "N", "cold", 90, 2, 0, 15, 3.0, 15.0, 5.0, 2, 90, 25, 1.0, null],
    ["Total_Corn_Flakes", "G", "cold", 110, 2, 1, 200, 0.0, 21.0, 3.0, 3, 35, 100, 1.0, 1.0],
    ["Total_Raisin_Bran", "G", "cold", 140, 3, 1, 190, 4.0, 15.0, 14.0, 3, 230, 100, 1.5, 1.0],
    ["Total_Whole_Grain", "G", "cold", 100, 3, 1, 200, 3.0, 16.0, 3.0, 3, 110, 100, 1.0, 1.0],
    ["Triples", "G", "cold", 110, 2, 1, 250, 0.0, 21.0, 3.0, 3, 60, 25, 1.0, 0.75],
    ["Trix", "G", "cold", 110, 1, 1, 140, 0.0, 13.0, 12.0, 2, 25, 25, 1.0, 1.0],
    ["Wheat_Chex", "R", "cold", 100, 3, 1, 230, 3.0, 17.0, 3.0, 1, 115, 25, 1.0, 0.67],
    ["Wheaties", "G", "cold", 100, 3, 1, 200, 3.0, 17.0, 3.0, 1, 110, 25, 1.0, 1.0],
    ["Wheaties_Honey_Gold", "G", "cold", 110, 2, 1, 200, 1.0, 16.0, 8.0, 1, 60, 25, 1.0, 0.75]
  ];

  const firstFourRows = rowsExampleTable.slice(0, 4);
  
  return (
    <div>
      <h1>React Example: Responsive Table Library</h1>
      <Table columns={colsExampleTable} rows={firstFourRows}/>
      {/* <Table columns={colsExampleTable} rows={firstFourRows} className={"flipping"}/> */}
    </div>
  );
}




export default App;
