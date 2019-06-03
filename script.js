const messages = randomize([
	{
		type: 'text',
		text: "hey naomi it’s honestly been so nice to get to know you for the past two years \n" +
    "you’re honestly a genuinely amazing person and always gets things done regardless of how annoying us kids may be \n" +
    "thank you for sticking through our weird talks and bad moments bc i don’t think without you i would’ve done any projects on time LOL\n" +
    "you’re the best!",
		author: 'Rukaiyaa Arssath',
	},
	{
		type: 'text',
		text: "Thank you for being the best program manager ever! You always made sure we had fun while still keeping us on task. You were very understanding and always made sure to check up with your students to make sure they are okay. I always appreciated that about you. Thank you for being you!",
		author: 'Betsabe Bajana',
	},
]);

function renderPic(item) {
	return `<img src="./images/${item.name}">`;
}

function anonymize(name) {
	const names = name.split(' ');
	return names[0] + ' ' + names[1][0];
}

function renderText(item) {
	return `
		<h1>${item.text}</h1>
		<h1>- ${anonymize(item.author)}</h1>
	`;
}

function render(item) {
	if (item.type === 'pic') {
		return renderPic(item);
	} else {
		return renderText(item);
	}
}

const fadeLength = 1000;
const messageLength = 10000;

let index = 0;
const $content = $('#content');
const item = render(messages[index]);
$content.hide();
$content.html(item);
$content.fadeIn(fadeLength);

setInterval(function() {
	index = (index + 1) % messages.length;
	const item = render(messages[index]);
	$content.fadeOut(fadeLength, function() {
		$content.html(item);
	}).fadeIn(fadeLength);
}, messageLength);

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function randomize(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.floor(Math.random() * (arr.length - i)) + i;
    swap(arr, i, randomIndex);
  }
  return arr;
}

