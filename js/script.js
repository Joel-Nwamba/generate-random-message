const messageContainer = document.getElementById("container");
const button = document.getElementById("btn");

const messageData = {
    beginnings: ["We cannot solve problems", "Learn as if you", "Stay away from those people who try to disparage your ambitions.", "When you give joy to other people,"],
    middles: ["with the kind of thinking we employed", "will live forever,", "Small minds will always do that", "you get more joy in return."],
    ends: ["when we came up with them.", "live like you will die tomorrow.", " but great minds will give you a feeling that you can become great too.","You should give a good thought to happiness that you can give out."]
}

button.addEventListener("click", generateMessage)


function generateMessage() {
  let message = "";
  for (let key in messageData) {
    let array = messageData[key];
    let randomMessage = Math.floor(Math.random() * array.length);
    let item = array[randomMessage];
    if (key === "beginnings") {
      message += `${item},`;
    } else if (key === "middles") {
      message += `${item},`;
    } else if (key === "ends") {
      message += `${item}`;
    }
  }
  button.addEventListener("click", function() {
    return messageContainer.textContent = message;
  })
}
console.log(generateMessage())