// '#JS' 

/*Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in

Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:

0 - Rat
1 - Ox
2 - Tiger
3 - Rabbit
4 - Dragon
5 - Snake
6 - Horse
7 - Goat
8 - Monkey
9 - Rooster
10 - Dog
11 - Pig
*/

let year = prompt ("Please enter your birth year, so I can calculate your Chinese Zodiac!");
let chineseZodiac = (year - 4) % 12;
if (Number.isNaN(year)) {
    alert ("Please specify numeric value for the birth year!")
} else {
    if (chineseZodiac == 0) {
        alert ("You are a Rat in the Chinese Zodiac")
    }
        else if (chineseZodiac == 1) {
            alert ("You are an Ox in the Chinese Zodiac")
        }
        else if (chineseZodiac == 2) {
            alert ("You are a Tiger in the Chinese Zodiac")
        }
        else if (chineseZodiac == 3) {
            alert ("You are a Rabbit in the Chinese Zodiac")
        }
        else if (chineseZodiac == 4) {
            alert ("You are a Dragon in the Chinese Zodiac")
        }
        else if (chineseZodiac == 5) {
            alert ("You are a Snake in the Chinese Zodiac")
        }
        else if (chineseZodiac == 6) {
            alert ("You are a Horse in the Chinese Zodiac")
        }
        else if (chineseZodiac == 7) {
            alert ("You are a Goat in the Chinese Zodiac")
        }
        else if (chineseZodiac == 8) {
            alert ("You are a Monkey in the Chinese Zodiac")
        }
        else if (chineseZodiac == 9) {
            alert ("You are a Rooster in the Chinese Zodiac")
        }
        else if (chineseZodiac == 10) {
            alert ("You are a Dog in the Chinese Zodiac")
        }
        else if (chineseZodiac == 11) {
            alert ("You are a Pig in the Chinese Zodiac")
        }
}
console.log (year);