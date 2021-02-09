"use strict";
function filterByTerm(input, searchTerm, lookupKey) {
    if (lookupKey === void 0) { lookupKey = "url"; }
    if (!searchTerm)
        throw Error("searchTerm cannot be empty");
    if (!input.length)
        throw Error("inputArr cannot be empty");
    var regex = new RegExp(searchTerm, "i");
    return input.filter(function (arrayElement) {
        return arrayElement[lookupKey].match(regex);
    });
}
var obj1 = { url: "string 1" };
var obj2 = { url: "string 2" };
var obj3 = { url: "string 3" };
var arrOfLinks = [obj1, obj2, obj3];
var term = "java";
var link1 = {
    description: "TypeScript for beginners...",
    id: 1,
    url: "www.example.com",
    language: "en"
};
filterByTerm(arrOfLinks, term);
