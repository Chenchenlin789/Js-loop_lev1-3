//lev2.1
//Nehmen wir an, wir haben 100 Bilder in unserem Ordner.
// Wir wollen ein Array von Bildern erstellen und die Dateinamen standardisieren.
// Gib in der Konsole image_001.jpg bis image_100.jpg aus

function imageArray2() {
  for (let i = 0; i <= 100; i++)
    if (i < 10) {
      document.body.innerHTML += `image_00${i}.jpg <br>`;
    } else if (i < 100) {
      document.body.innerHTML += `image_0${i}.jpg <br>`;
    } else if (i == 100) {
      document.body.innerHTML += `image_${i}.jpg`;
    }
}
imageArray2();

//lev2_2: loop with input
// Wir haben in unserem HTML ein Inputfeld, in dem der User eine Zahl eingeben soll.
// Schreibe eine Funktion, mit der du am Ende in deinem HTML das Wort “Loop” ausgibst.
// Die Anzahl der Buchstaben “o” variiert durch die Eingabe des Users.

// L OOOOOOO P
function loopMe() {
  // L
  let output = "L";

  // oooooo
  let inputValue = document.getElementById("inputNumber").value;
  for (let i = 0; i < inputValue; i++) {
    output += "o";
  }
  // P
  output += "p";
  document.getElementById("result").innerHTML = output;
}

//lev3_3: lo0op with input
// Jetzt wollen wir eine Fehlermeldung ausgeben, wenn der User 0 eingibt
// Zusätzlich überprüfen wir, ob der User eine gerade Zahl eingegeben hat

function loopMe2() {
  // L
  let output1 = "L";

  // oooooo
  let inputValue = document.getElementById("inputNumber1").value;

  if (inputValue == 0) {
    document.getElementById("result1").innerHTML = "ERROR";
  } else if (inputValue % 2 !== 0) {
    for (let i = 0; i < inputValue; i++) {
      if (i % 2 == 0) {
        output1 += "o";
      } else {
        output1 += "0";
      }
    }
  } else {
    for (let i = 0; i < inputValue; i++) {
      output1 += "o";
    }
  }
  output1 += "p";
  document.getElementById("result1").innerHTML = output1;
}

//lev3_1 for loop string Array
// Erstelle eine Funktion, die einen Text in einem Abstand von 100 Zeichen trennt.
// Füge nach den 100 Zeichen “ - 1 of gesamte-Nachrichten”, “ - 2 of gesamte-Nachrichten” usw … hinzu.
// Jedes Element dieser Zeichenkette (100 Zeichen + - 1 of x ) soll in ein Array gepusht werden.

let text = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `;

let textArray = [];
console.log(Math.ceil(text.length / 100));

for (let i = 0; i < text.length; i += 100) {
  //   console.log(text[i]);
  console.log(text.slice(i, i + 100) + ` - ${i / 100 + 1} of 27`);
}

//lev3_2: for loop Zahlen in Array teilen
let numArr = [5, 22, 15, 100, 55];
numArr.forEach((elt) => {
  for (let i = 2; i <= elt / 2; i++)
    if (elt % i == 0) {
      console.log(
        `${elt} laesst sich durch ${i} teilen! Das Ergenis ist ${elt / i}`
      );
    }
});
