let result = {
  tag: "",
  free: true,
  role: false,
  user: "bhavyasingla009",
  email: "bhavyasingla009@gmail.com",
  score: 0.64,
  state: "deliverable",
  domain: "gmail.com",
  reason: "valid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "",
  format_valid: true,
};

submitbtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("clicked");
  resultCont.innerHTML = `<img width ="123" src="img/loading.svg" alt="">`;
  let key = "ema_live_PVue3prl18nIywRoq2t2y4Y8x3o1gQInjnPQm5vn";
  let email = document.getElementById("Username").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();
  let str = ``;
  for (key of Object.keys(result)) {
    if (result[key] !== "" && result[key] !== " ") {
      str = str + `<div>${key}:${result[key]}</div>`;
    }
  }
  console.log(str);
  resultCont.innerHTML = str;
});
