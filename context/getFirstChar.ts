export default function isFirstCharVowel(word: string) {
    var firstChar = word.charAt(0).toLowerCase();
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(firstChar);
}
