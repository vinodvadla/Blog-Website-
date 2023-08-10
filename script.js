let tl = gsap.timeline();
tl.from(".content img", {
  y: -1200,
  duration: 1,
});

tl.from("li", {
  y: -200,
  stagger: 0.3,
  opacity: 0,
});
tl.from(".h1", {
  y: -500,
  delay: 0.2,
  stagger: 0.3,
  opacity: 0,
});
tl.from(".left,.right,.center", {
  y: 300,
  duration: 1,
  opacity: 0,
  delay: 0.2,
  scrollTrigger: ".left,.right,.center",
});
tl.from(".scroll", {
  y: -30,
  stagger: 0.1,
  repeat: -1,
  yoyo: true,
  opacity: 0,
});

let arr = [
  {
    title: "New BMW 5 Series LWB revealed,likely to come to India",
    img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230808055641_1.jpg&w=215&h=141&q=75&c=1",
    data: "It was originally taken from a Latin text Nonummy blandit arcu sollicitudin urna condimentum ante. Phasellus mauris nisl suscipit ultrices facilisi cum hendrerit cum urna habitant montes erat nulla est cubilia fames habitasse ullamcorper habitasse ipsum consequat Dictumst hymenaeos.written by a Roman Scholar, Sceptic and Philosopher by the name of Marcus Tullius Cicero, who influenced the Latin language greatly.",
  },
  {
    title: "Tata confirms four new electric SUVs by early 2024",
    img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230808064322_Tata_Harrier_EV.jpg&w=215&h=141&q=75&c=1",
    data: "It was originally taken from a Latin text written by a Roman Scholar, Sceptic and Philosopher by the name of Marcus Tullius Cicero, who influenced the Latin language greatly.",
  },
  {
    title: "Mahindra on track to launch 5 EVs by October 2026",
    img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230804064826_wertyuio.jpg&w=215&h=141&q=75&c=1",
    data: "It was originally taken from a Latin text written by a Roman Scholar, Sceptic and Philosopher by the name of Marcus Tullius Cicero, who influenced the Latin language greatly.",
  },
];
let main = document.getElementById("main");
let container = document.createElement("div");
container.classList.add("card-container");
main.appendChild(container);
arr.map((e) => {
  let card = document.createElement("div");
  card.classList.add("card");
  let img = document.createElement("img");
  img.src = e.img;
  container.appendChild(card);
  card.appendChild(img);
  let div = document.createElement("div");
  let h2 = document.createElement("h2");
  h2.innerHTML = e.title;
  card.appendChild(div);
  h2.classList.add("title");
  div.appendChild(h2);

  let p = document.createElement("p");
  p.innerHTML = e.data;
  p.classList.add("data");
  div.appendChild(p);
});
