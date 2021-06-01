hero = ["Ivan"];
native = ["York", "Of"];
destination = ["Poltava", "In"];

rainbow = hero.concat(native, destination);

rainbowRevers = rainbow.slice().reverse();

heroChanged = hero.slice();
heroChanged.splice(0, 1, "Richard");

nativeRevers = native.slice().reverse();

destinationChanged = destination.slice();

destinationChanged.splice(0, 1, "Battle");
destinationChanged.push("Vain");
destinationChanged.unshift("Gave");

result = heroChanged.concat(nativeRevers, destinationChanged);

console.log(rainbow);
console.log(rainbowRevers);
console.log(heroChanged);
console.log(nativeRevers);
console.log(destinationChanged);

console.log(result);

colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

for (i = 0, rainbowFinal = []; i < colors.length; i++) {
  rainbowFinal.push(`<div class="column">
<div class="circle" style="background-color:${colors[i]};"></div>
<div class="text">${result[i]}</div>
</div>`);
}

console.log(rainbowFinal);

document.write(` <div class="row">
${rainbowFinal.join("")}
</div>`);
