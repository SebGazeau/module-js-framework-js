// Illustration des différents types de données
function illustrateDataTypes() {
    // Type de données String
    const stringValue = "Bonjour";
    console.log("String :", stringValue);
  
    // Type de données Number
    const numberValue = 42;
    console.log("Number :", numberValue);
  
    // Type de données Boolean
    const booleanValue = true;
    console.log("Boolean :", booleanValue);
  
    // Type de données Null
    const nullValue = null;
    console.log("Null :", nullValue);
  
    // Type de données Undefined
    let undefinedValue;
    console.log("Undefined :", undefinedValue);
  
    // Type de données Object
    const objectValue = {
      nom: "Jean",
      age: 30
    };
    console.log("Object :", objectValue);
  
    // Type de données Array
    const arrayValue = [1, 2, 3, 4];
    console.log("Array :", arrayValue);
  
    // Type de données Symbol
    const symbolValue = Symbol("symbole");
    console.log("Symbol :", symbolValue);
  
    // Type de données BigInt
    const bigIntValue = BigInt(9007199254740991);
    console.log("BigInt :", bigIntValue);
  }
  
  illustrateDataTypes();