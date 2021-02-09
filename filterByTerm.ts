type Links = Array<Link>

interface Link {
    url: string;
    description?: string;
    id?: number;
    [index: string]: any //string | number | undefined; - index may return string, number or undefinded
}

interface TranslatedLink extends Link {
    language: string;
}

function filterByTerm(input: Links, searchTerm: string, lookupKey: string = "url"): Links {
    if (!searchTerm) throw Error("searchTerm cannot be empty");
    if (!input.length) throw Error("inputArr cannot be empty");
    const regex = new RegExp(searchTerm, "i");
    return input.filter(function(arrayElement) {
        return arrayElement[lookupKey].match(regex);
    });
}

const obj1: Link = { url: "string 1"};
const obj2: Link = { url: "string 2"};
const obj3: Link = { url: "string 3"};

const arrOfLinks: Links = [obj1, obj2, obj3];

const term: string = "java";

const link1: TranslatedLink = {
    description: "TypeScript for beginners...",
    id: 1,
    url: "www.example.com",
    language: "en"
};

filterByTerm(arrOfLinks, term);