let problems = [];

function addProblem() {
    const name = document.getElementById("problem").value;
    const topic = document.getElementById("topic").value;

    if (name === "") return;

    const li = document.createElement("li");
    li.textContent = name + " - " + topic;

    document.getElementById("list").appendChild(li);
}
