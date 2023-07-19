// Task 1

let favFilm = prompt("What is your favorite film?")

function FavoriteFilm(film)
{
    if (film == "Kill Bill")
    {
        alert("Yep, this is my favorite film")
    } else {
        alert("Try one more time")
    }
}
FavoriteFilm(favFilm)

// Task 2

let myArray = ['a', 'b', 'c']
myArray[0] = 'word'
myArray[1] = 'its a good day!'
myArray[2] = 'o'
alert(myArray)