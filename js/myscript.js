// Definition of the sayHello function. You're defining the function
function sayHello() {
    alert('Hi you'); //alert() is a function that someone defined.
}

function addTwoNumbers (x,y) {
    var total=(x+y);
    return total;
}

// This does not run anything yet. It has to be called. You can call the 
// function in console by typing addTwoNumbers(4,3);

// Call the sayHello function
// sayHello();

// The following doesn't work for me yet
$.get('https://ga-music.firebaseio.com/artists.json', doStuff);

function doStuff(stuff) {
    console.log(stuff);
}

// Define a function that computes the area of a circle

function computeCircleArea(radius) {
    alert(3.14 * (radius * radius)); // returns to the function call
    return;
}

// to call via variable return value gets returned to the variable

// Function that computes area of triangle
function calculateAreaOfTriangle (base, height) {
    return (height * base) * .5;
}

function calculateSimpleInterest(principal, interest, time) {
    var interest = principal * interest * time;
    console.log (interest); // It's working
}

function writeToConsole () {
    console.log('this is my console message')
}

function declareSomeVariables () {
    // Declare some strings
    var firstName = "Larry";
    var lastName = 'Babcock';
    var age = "42";
    var username = 'larryshawn'

    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(firstName + ' ' + lastName + " is " + age + " years old yo. His username is " + username + ".")
}

// ask the user for firt name
// ask the user for last name
// ask the user for year of birth
// alert ("Larry, you are 99 years old!")

function nameAge () {
var firstName = prompt("What is your first name?")
var lastName = prompt("what is your last name?")
var year = prompt("What year were you born?")
var age = 2015 - year;

alert(firstName + " " + lastName + ", you are " + age + " years old")
}

//(F - 32 x 5/9 = C)
function convertFarenCelcius (){
    var faren = parseInt(prompt("What's the temperature in Fahrenheit?"));
    // or faren = parseInt(faren)

    var celcius = (faren - 32) * (5/9);
    alert("Your temperature in celcius is " + celcius.toFixed(2));
}

function getToKnowYou() { 
    // // START HERE
    // alert(name + "is a cool dude.");
    // Say Hi, what's your name.
    var name = prompt("What is your name?");
    // Return Oh, Nice to meet you (name). My name's Larry, or my name is Larry too.
    if (name == "Larry") {
        var year = prompt('Oh, nice to meet you ' + name + '. My name is Larry as well. What year were you born ' + name + '?');
    }
    else {
        var year = prompt('Oh, nice to meet you ' + name + '. What year were you born ' + name + '?');
    }

    // Prompt What year were you born?
    // Return a case where it's youngsters and elderly and middle adulthood
    var age = 2015 - year;
    if (year > 1990) {
            alert('So you are ' + age + ' years old, huh? Wow, you are just a young\'n!');
        }
   else if (year < 1940) {
            alert('So you are ' + age + ' years old, huh? Wow, I just love you older people!');
        }
    else {
        alert('So you are ' + age + ' years old, huh? Just cruizin\' through life are we?');
    }
    // Case youngsters say "So you're AGE years old, huh? Wow, you're just a young'n!"
    // Case middle aged say "So you're AGE years old, huh? Just cruizin' through life eh?"
    // Case elderly say "So you're AGE years old, huh? I just love you older people!"
    // Say Haha...just kidding. So how long do you think we can carryon this conversation?
    var duration = prompt('Haha...just kidding. So how long do you think we can carry on this conversation?');
    // Case not long, for quite a while and forever.
    if (duration.indexOf('not')) {
        alert('yeah, you\'re probably right');
    }
    else if (duration.indexOf('quite')) {
        alert('Well, I certainly hope so.');
    }
    else if (duration.indexOf('forever')) {
        alert('I highly doubt that. I am just a man programing a computer here.');
    }
    // Case not long - say "yeah, you're probably right."
    // Case (any number of combination that would say long time, quite a while etc.) will return 
    // "well I certainly hope so."
    // Case forever, eterity, etc. use
    }

    // giveATour of your webpage like it was realEstate. put it on your porfolio project.

function giveATour() { 
    // // START HERE
    // Say Hi, what's your name.
    var name = prompt('Hi, what\'s your name?');
    // Return Oh, welcome to my website, (name). It's my professional world. 
    //        My name's Larry, or my name is Larry too. 
    //        Let me take you on a front end journey. I hope you'll be intrigued.
    if (name == "Larry") {
        var year = prompt('Oh, nice to meet you ' + name + '. My name is Larry as well. What year were you born ' + name + '?');
    }
    else {
        var year = prompt('Oh, nice to meet you ' + name + '. What year were you born ' + name + '?');
    }
    // Prompt What year were you born?
    // Return a case where it's youngsters and elderly and middle adulthood
    // Case youngsters or similar - say "So you're AGE years old, huh? Wow, you're just a young'n!"
    // Case middle aged - say "So you're AGE years old, huh? Just cruizin' through life eh?"
    // Case elderly say "So you're AGE years old, huh? I just love you older people!"
    var age = 2015 - year;
    if (year > 1990) {
            alert('So you are ' + age + ' years old, huh? Wow, you are just a young\'n!');
        }
   else if (year < 1940) {
            alert('So you are ' + age + ' years old, huh? Wow, I just love you older people!');
        }
    else {
        alert('So you are ' + age + ' years old, huh? Just cruizin\' through life are we?');
    }
    // Say So (name), Let me take you on a front end journey. I hope you'll be intrigued. Here's a standard portfolio sitting here to show you the beautiful UI's I've built but you can browse through those guys later. You probably won't be able to tell what parts I've done by looking at the websites. Right now let me show you my personal toolkit. It can show you in greater detail just a few of the things I have done.

    alert('So ' + name + ' , let me take you on a front end journey. I hope you\'ll be intrigued.');
    alert('Feel free to check out the rest of my portfolio pieces here later. Meanwile, over here I have just a few snippits I should show you.');

    // Right over here is a bootstrap accordion where I had to extend bootstraps functionality a bit to make the over and down arrows swap and I just needed and make the entire bar clickable instead of just the words. These are things I wish bootstrap would have included just for the sake of the user.
    alert('Right over here is a bootstrap accordion where I had to extend bootstraps functionality a bit to make the over and down arrows swap and I just needed and make the entire bar clickable instead of just the words. \n\nThese are things I wish bootstrap would have included just for the sake of the user.');

    // Do something - show them the next portfolio piece - this is a function
    // Say "feel free to check out the rest of my portfolio pieces here later. Meanwile, over here I have just a few snippits I should show you. This is my toolkit. It contains snippits and a few 


    // Say Haha...just kidding. So how long do you think we can carryon this conversation?
    // Case not long, for quite a while and forever.
    // Case not long - say "yeah, you're probably right."
    // Case (any number of combination that would say long time, quite a while etc.) will return 
    // "well I certainly hope so."
    // Case forever, eterity, etc. use
    var duration = prompt('Haha...just kidding. So how long do you think we can carry on this conversation?');
    // Case not long, for quite a while and forever.
    if (duration.indexOf('not') !=-1) {
        alert('yeah, you\'re probably right');
    }
    else if (duration.indexOf('quite') !=-1) {
        alert('Well, I certainly hope so.');
    }
    else if (duration.indexOf('forever') !=-1) {
        alert('I highly doubt that. I am just a man programing a computer here.');
    }
    else if (duration.indexOf('years') !=-1) {
        alert('I hardly think we can keep it up for years.');
    }
    else { alert('I\'m not sure I understand. My programmer has more work to do here.')
    }
    alert('Enjoy ' + name + '. Contact me if your have any questions.');
}

    // giveATour of your webpage like it was realEstate. put it on your porfolio project.