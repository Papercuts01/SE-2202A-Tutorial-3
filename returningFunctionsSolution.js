let getDictionary = function (lang)
{
    /*
        Returns a function that maps out 1,2,3 to their names in English ("E") or French ("F").
    */

    let englishDictionary = function (number)
    {
        switch (number){
            case 1: return "one";
            case 2: return "two";
            case 3: return "three";
            default: return "unknown"; // Returns an "unknown" if inputs are beyond the switch statement
        }
    };

    let frenchDictionary = function (number)
    {
        switch (number){
            case 1: return "un";
            case 2: return "deux";
            case 3: return "trois";
            default: return "inconnu"; // Returns "inconnu" if inputs are beyond the switch statement
        }    
    };

        if (lang === 'E') return englishDictionary;
        if (lang === 'F') return frenchDictionary;

        return function () { return "invalid language"}; // Returns an "invalid language" if a invalid language is submitted
};


let english = getDictionary('E'); 
let french = getDictionary('F');


// DO NOT change the lines below
console.log(english(1));
console.log(french(1));
console.log(english(2));
console.log(french(2));
console.log(english(3));
console.log(french(3));
