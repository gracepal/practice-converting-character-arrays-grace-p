/************************************************************
Task 1: Decode the Following Reversed Messages
----------------------------------------------
Use .split(''), reverse.(‘’) and .join('') to convert messages between strings and
arrays dynamically. Then log the messages.
*/

let message1 = ` !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC`;
let message2 = `!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB`;
let message3 = `!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY`;
let message4 = `.rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ`;

let messages = [message1, message2, message3, message4];
for (let message of messages) {
  let decrypted = message.split('').reverse().join('');
  console.log(`Decrypted message: \n${decrypted}\n`);
}

/************************************************************
Task 2: Write your own reverse messages
---------------------------------------
1. First, write your own short messages of inspiration (without reversing them).
2. Then, use .split(''), reverse.(‘’) and .join('') to convert messages between
strings and arrays dynamically so that you have a reverse output.
3. Then log the messages.
*/

let message5 = `Don't dwell on being "behind. You just haven't put in the work, effort, time, energy, focus. Pay the price other people pay, and you will get there.`;
let message6 = `Consistency over intensity.`;
let message7 = `Be ready for when opportunity comes.`;
let message8 = `Just do it.`;

messages = [message5, message6, message7, message8];
for (let message of messages) {
  let encrypted = message.split('').reverse().join('');
  console.log(`Encrypted message: \n${encrypted}\n`);
}

/************************************************************
Sample Output:
--------------
➜  practice-converting-character-arrays-grace-p git:(main) ✗ node main.js
Decrypted message:
Coding may seem hard at first, but if you persist, you'll get it! You can also use coding skills in a variety of settings! Keep going, and you'll be okay!

Decrypted message:
But code writing will feel hard at first. Take time, you‘ll get better with practice!

Decrypted message:
You don't have to feel like a professional. If you have trouble, you are no different from other people!

Decrypted message:
Just start today. Don't wait for the perfect moment. If you can only write small programs, they still matter.

Encrypted message:
.ereht teg lliw uoy dna ,yap elpoep rehto ecirp eht yaP .sucof ,ygrene ,emit ,troffe ,krow eht ni tup t'nevah tsuj uoY .dniheb" gnieb no llewd t'noD

Encrypted message:
.ytisnetni revo ycnetsisnoC

Encrypted message:
.semoc ytinutroppo nehw rof ydaer eB

Encrypted message:
.ti od tsuJ
*/
