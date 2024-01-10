const btnNode = document.querySelector(".btn");

const addText = () => {
  fetch("http://www.boredapi.com/api/activity/")
    .then((data) => data.json())
    .then((res) => {
      const textAPI = res.activity;
      document.querySelector(".text").innerHTML = `<p>${textAPI}</p> `;
    });
  changeStyle();
  changeTitle();
};

const changeStyle = () => {
  const containerNode = document.querySelector(".container");
  if (containerNode.classList !== "green") {
    containerNode.classList.add("green");
  }
};

const changeTitle = () => {
  const titleNode = document.querySelector(".title");
  titleNode.innerHTML = "Ура, теперь не скучно 🔥";
};

btnNode.addEventListener("click", addText);
