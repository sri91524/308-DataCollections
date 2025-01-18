//ToDO - Part 1 - Refactoring the old code

// ToDo - Part 2- Declare a variable that stores the number of columns in each row of data within the CSV.
// ToDo - Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

// A CSV file, or “Comma-Separated Values” file is traditionally used to store tabular data. You may be familiar with CSVs through past use of programs such as Microsoft Excel or Google Sheets. While each of these programs save their data in different formats to preserve style (e.g., font color or cell backgrounds), at their core, they are storing CSV data.

let textToBeFormatted = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// let textToBeFormatted ="Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";


let rowValues = textToBeFormatted.split("\n");
let numberOfColumns = rowValues[0].split(",").length;

// initializing single dimension array for column values
// initializing two dimension array for storing CSV values 
let cellValues = [];
const CSVOutput = [];

// if there is no escape sequence \n
if(rowValues.length <= 1)
{
    alert("Please enter escape sequence \n for new rows");
}
else
{        
    //if there is no ',' delimiter in row1 then alert
    if( numberOfColumns <=1 )
    {
        alert("Please enter delimiter ',' to seperate cell values in row1");       
    }
    else
    { 
        for(let i = 0; i < rowValues.length; i++){
            cellValues = rowValues[i].split(",");
            
            CSVOutput[i] = [];

            for (let j = 0; j < numberOfColumns; j++)
            {                
                CSVOutput[i][j] = cellValues[j];
            }                       
        }   

    }
}

//console.table(`${CSVOutput.join("|")}`);

// TODO - For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.


    // [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    // { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    // { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    // { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]

    const objCSV = [];

    for(let i = 1; i < rowValues.length; i++)
    {
        objCSV[i-1] ={};
        for(let j = 0; j < numberOfColumns; j++)
        {            
            objCSV[i-1][CSVOutput[0][j].toLowerCase()] = CSVOutput[i][j] !==null ? CSVOutput[i][j] : "";
        }            
    } 

    // console.log(objCSV);

    //TODO - Part 3
    //Remove the last element from the sorted array.
    let SortRemovedArray = [];
    SortRemovedArray = objCSV.toSorted().slice(0,objCSV.length-1);    
    console.log(SortRemovedArray);
    //console.log(objCSV);

    //TODO - Insert the following object at index 1:
    let insertObject = {id: "48", name: "Barry", occupation: "Runner", age: "25" };
    let insertArray = [];
    insertArray = SortRemovedArray.toSpliced(1,0,insertObject);     
    
    console.log(insertArray);

    // //ToDo - Add the following object to the end of the array:
    //{ id: "7", name: "Bilbo", occupation: "None", age: "111" }
    let insertObjectEnd = {id: "7", name: "Bilbo", occupation: "None", age: "111" }; 
    
    insertArray.push(insertObjectEnd);
    
    console.log(insertArray.join(","));


    