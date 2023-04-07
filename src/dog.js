// Access DOM elements
const header = document.getElementById("h1");
const note = document.getElementById("note");
const doThis = document.getElementById("do");
const after = document.getElementById("clear");
const pic = document.getElementById("image");
const commentForm = document.getElementById("commentForm");
const comment = document.getElementById("comment");
const affen = document.getElementById("affen");
const akita = document.getElementById("akita");
const bbd = document.getElementById("bbd");
const frb = document.getElementById("frb");
const chi = document.getElementById("chi");
const corgi = document.getElementById("corgi");
const dalma = document.getElementById("dalma");
const dober = document.getElementById("dober");
const elk = document.getElementById("elk");
const frise = document.getElementById("frise");
const gsheph = document.getElementById("gsheph");
const ghound = document.getElementById("ghound");
const husky = document.getElementById("husky");
const wolfH = document.getElementById("wolfh");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    header.innerHTML = "WELCOME";
  }, 1000);
  setTimeout(() => {
    header.innerHTML = "WELCOME TO";
  }, 2000);
  setTimeout(() => {
    header.innerHTML = "WELCOME TO DOGWORLD";
  }, 3000);
  setTimeout(() => {
    note.innerHTML = "Get";
  }, 4000);
  setTimeout(() => {
    note.innerHTML = "Get familiar";
  }, 4500);
  setTimeout(() => {
    note.innerHTML = "Get familiar with";
  }, 5000);
  setTimeout(() => {
    note.innerHTML = "Get familiar with dog";
  }, 5500);
  setTimeout(() => {
    note.innerHTML = "Get familiar with dog breeds";
  }, 6000);
  setTimeout(() => {
    note.innerHTML = "Get familiar with dog breeds as";
  }, 6500);
  setTimeout(() => {
    note.innerHTML = "Get familiar with dog breeds as you";
  }, 7000);
  setTimeout(() => {
    note.innerHTML = "Get familiar with dog breeds as you explore!";
  }, 7500);

  setTimeout(() => {
    doThis.innerHTML = "Click a breed name";
  }, 8000);
  setTimeout(() => {
    doThis.innerHTML = "Click a breed name to see its picture!";
  }, 8500);
  setTimeout(() => {
    after.innerHTML = "Do not ";
  }, 9000);
  setTimeout(() => {
    after.innerHTML = "Do not hesitate to ";
  }, 9500);
  setTimeout(() => {
    after.innerHTML = "Do not hesitate to leave a comment!";
  }, 10000);
});

//ONCLICK EVENTS
affen.addEventListener("click", () => {
  //GET matching photo of an Affenpinscher
  fetch("https://dog.ceo/api/breed/affenpinscher/images")
    .then((response) => response.json())
    .then(
      (data) => {
        let affenImg = document.createElement("img");
        affenImg.src = `${data.message[23]}`;
        affenImg.alt = "Affenpinscher";
        affenImg.width = "720";
        affenImg.height = "400";
        pic.replaceChildren(affenImg);
      },
      
    );
});

akita.addEventListener("click", () => {
  //GET matching photo of an Akita
  fetch("https://dog.ceo/api/breed/akita/images")
    .then((response) => response.json())
    .then(
      (data) => {
        let affenImg = document.createElement("img");
        affenImg.src = `${data.message[3]}`;
        affenImg.alt = "Akita";
        affenImg.width = "720";
        affenImg.height = "400";
        pic.replaceChildren(affenImg);
      },
      
    );
});

bbd.addEventListener("click", () => {
  //GET matching photo of a British Bulldog
  fetch("https://dog.ceo/api/breed/bulldog/images")
    .then((response) => response.json())
    .then(
      (data) => {
        let affenImg = document.createElement("img");
        affenImg.src = `${data.message[21]}`;
        affenImg.alt = "British Bulldog";
        affenImg.width = "720";
        affenImg.height = "400";
        pic.replaceChildren(affenImg);
      },
      
    );
});

frb.addEventListener("click", () => {
  //GET matching photo of a French Bulldog
  fetch("https://dog.ceo/api/breed/bulldog/images")
    .then((response) => response.json())
    .then(
      (data) => {
        let affenImg = document.createElement("img");
        affenImg.src = `${data.message[191]}`;
        affenImg.alt = "French Bulldog";
        affenImg.width = "720";
        affenImg.height = "400";
        pic.replaceChildren(affenImg);
      },
      
    );
});

chi.addEventListener("click", () => {
  //GET matching photo of a Chihuahua
  fetch("https://dog.ceo/api/breed/chihuahua/images")
    .then((response) => response.json())
    .then(
      (data) => {
        let affenImg = document.createElement("img");
        affenImg.src = `${data.message[5]}`;
        affenImg.alt = "Chihuahua";
        affenImg.width = "720";
        affenImg.height = "400";
        pic.replaceChildren(affenImg);
      },
      
    );
});

corgi.addEventListener("click", () => {
  //GET matching photo of a Corgi
  fetch("https://dog.ceo/api/breed/corgi/images")
    .then((response) => response.json())
    .then(
      (data) => {
        let affenImg = document.createElement("img");
        affenImg.src = `${data.message[11]}`;
        affenImg.alt = "Corgi";
        affenImg.width = "720";
        affenImg.height = "400";
        pic.replaceChildren(affenImg);
      },
      
    );
});

dalma.addEventListener("click", () => {
  //GET matching photo of an Dalmatian
  fetch("https://dog.ceo/api/breed/dalmatian/images")
    .then((response) => response.json())
    .then(
      (data) => {
        let affenImg = document.createElement("img");
        affenImg.src = `${data.message[1]}`;
        affenImg.alt = "Dalmatian";
        affenImg.width = "720";
        affenImg.height = "400";
        pic.replaceChildren(affenImg);
      },
      
    );
});

dober.addEventListener("click", () => {
  //GET matching photo of a Doberman
  fetch("https://dog.ceo/api/breed/doberman/images")
    .then((response) => response.json())
    .then(
      (data) => {
        let affenImg = document.createElement("img");
        affenImg.src = `${data.message[1]}`;
        affenImg.alt = "Doberman";
        affenImg.width = "720";
        affenImg.height = "400";
        pic.replaceChildren(affenImg);
      },
    
    );
});

elk.addEventListener("click", () => {
  //GET matching photo of an Elk
  fetch("https://dog.ceo/api/breed/elkhound/images")
    .then((response) => response.json())
    .then(
      (data) => {
        let affenImg = document.createElement("img");
        affenImg.src = `${data.message[3]}`;
        affenImg.alt = "Elkhound";
        affenImg.width = "720";
        affenImg.height = "400";
        pic.replaceChildren(affenImg);
      },
      
    );
});

frise.addEventListener("click", () => {
  //GET matching photo of a Frise
  fetch("https://dog.ceo/api/breed/frise/images")
    .then((response) => response.json())
    .then(
      (data) => {
        let affenImg = document.createElement("img");
        affenImg.src = `${data.message[4]}`;
        affenImg.alt = "Frise";
        affenImg.width = "720";
        affenImg.height = "400";
        pic.replaceChildren(affenImg);
      },
      
    );
});

gsheph.addEventListener("click", () => {
  //GET matching photo of a German Shepherd
  fetch("https://dog.ceo/api/breed/germanshepherd/images")
    .then((response) => response.json())
    .then(
      (data) => {
        let affenImg = document.createElement("img");
        affenImg.src = `${data.message[6]}`;
        affenImg.alt = "German Shepherd";
        affenImg.width = "720";
        affenImg.height = "400";
        pic.replaceChildren(affenImg);
      },
    
    );
});

ghound.addEventListener("click", () => {
  //GET matching photo of a Grey Hound
  fetch("https://dog.ceo/api/breed/greyhound/images")
    .then((response) => response.json())
    .then(
      (data) => {
        let affenImg = document.createElement("img");
        affenImg.src = `${data.message[13]}`;
        affenImg.alt = "Grey Hound";
        affenImg.width = "720";
        affenImg.height = "400";
        pic.replaceChildren(affenImg);
      },
      
    );
});

husky.addEventListener("click", () => {
  //GET matching photo of a Husky
  fetch("https://dog.ceo/api/breed/husky/images")
    .then((response) => response.json())
    .then(
      (data) => {
        let affenImg = document.createElement("img");
        affenImg.src = `${data.message[3]}`;
        affenImg.alt = "Husky";
        affenImg.width = "720";
        affenImg.height = "400";
        pic.replaceChildren(affenImg);
      },
      
    );
});

wolfH.addEventListener("click", () => {
  //GET matching photo of a Wolf Hound
  fetch("https://dog.ceo/api/breed/wolfhound/images")
    .then((response) => response.json())
    .then(
      (data) => {
        let affenImg = document.createElement("img");
        affenImg.src = `${data.message[10]}`;
        affenImg.alt = "Wolf hound";
        affenImg.width = "720";
        affenImg.height = "400";
        pic.replaceChildren(affenImg);
      },
    
    );
});

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.getElementById("input").value;
  let newComment = document.createElement("li");
  newComment.innerHTML = input;
  if (input != "") {
  comment.appendChild(newComment);
  } else {
    alert("Write something!")
  }

  commentForm.reset();
});
