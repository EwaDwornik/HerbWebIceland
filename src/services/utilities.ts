let nextIdHerb = 0;

export function generateIdHerb() {
    return nextIdHerb++;
}

let nextIdWorkshop = 0;

export function generateIdWorkshop() {
    return nextIdWorkshop++;
}

export function deleteSpace (word: string) {
    return word = word.replaceAll(' ','');
}
