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
            default: return "unknown";
        }
    };

    /*
        Complete the definiton of the englishDictionary function
    */
    let frenchDictionary = function (number)
    {
        switch (number){
            case 1: return "un";
            case 2: return "deux";
            case 3: return "trois";
            default: return "inconnu";
        }    
    };

        if (lang === 'E') return englishDictionary;
        if (lang === 'F') return frenchDictionary;

        return function () { return "invalid language"};
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
