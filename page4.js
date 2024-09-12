const pollTitle = localStorage.getItem("h3Value");
document.querySelector(".pollTitle").innerHTML = pollTitle;

let pollOptions = [];

if (pollTitle === "Vote for GDSC Head") {
    pollOptions = ["Candidate 1", "Candidate 2", "Candidate 3", "Candidate 4"];
} else {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith('pollOption')) {
            pollOptions.push(localStorage.getItem(key));
        }
    }
}

const form = document.getElementById('pollForm');
pollOptions.forEach((option, index) => {
    const label = document.createElement('label');
    label.textContent = option;

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'poll';
    radio.value = option;

    label.prepend(radio);
    form.appendChild(label);
    form.appendChild(document.createElement('br'));
});
function validate()
{
    const selectedOption = document.querySelector('input[name="poll"]:checked').value;
    localStorage.setItem("selectedPollOption", selectedOption);

    const allOptions = [];
    document.querySelectorAll('input[name="poll"]').forEach(option => {
        allOptions.push(option.value);
    });
    localStorage.setItem("allPollOptions", JSON.stringify(allOptions));
    location.href="page5.html";
}

localStorage.clear();