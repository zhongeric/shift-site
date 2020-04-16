//TODO: generate lights in background

// note: pictures should have a width of ~500px, height auto

let projects = [
  {
    name: "WeWord",
    author: "Noah Finer",
    description: "Can the Internet crowdsource stories?",
    url: "https://medium.com/shiftcreatorspace/can-the-internet-crowdsource-stories-a-story-of-losing-some-hope-regaining-it-then-losing-it-all-97ca9c0bbdaf",
    img: "assets/projects/weword.png",
  },
  {
    name: "Reflect",
    author: "Varun Jindal",
    description: "A quantitative way to reflect on life through a chrome extension!",
    url: "https://medium.com/shiftcreatorspace/reflecting-on-creating-4537e398cca9",
    img: "assets/projects/reflect.png",
  },
  {
    name: "Wellnest",
    author: "Thomas Searle",
    description: "A guided journaling application focused on mindfulness and wellbeing",
    url: "#",
    img: "assets/projects/wellnest.png",
  }, // MAYBE ADD CUSTOM BACKGROUND POSITION
  {
    name: "BrainTrain",
    author: "Ria Bazaz",
    description: "A workout generator that learns off of your workout style",
    url: "https://medium.com/@ria_38953/my-journey-as-a-creator-e5fc520e2818",
    img: "assets/projects/braintrain.jpg",
  },
  {
    name: "healthe",
    author: "Ria Bazaz",
    description: "Improve personal health and the health of the environment",
    url: "https://medium.com/@ria_38953/my-journey-as-a-creator-e5fc520e2818",
    img: "assets/projects/healthe.jpg",
  }, // SHOULD RIA HAVE 2 PICS???
  {
    name: "rcrd",
    author: "Patrick McElroy",
    description: "An app for people to store important information",
    url: "https://medium.com/shiftcreatorspace/building-rcrd-3c8eb5ded9d8",
    img: "assets/projects/rcrd.png", // MAYBE UPDATE THIS
  },
  {
    name: "Melomane",
    author: "Dana Dean",
    description: "Melomane is a platform that creates conversations around music",
    url: "https://medium.com/shiftcreatorspace/no-new-friends-ff730cce4f36",
    img: "assets/projects/melomane.png", // AHH
  },
  {
    name: "zoomTV",
    author: "Ryan Lieu",
    description: "TV guide for live events on the internet",
    url: "#",
    img: "assets/projects/zoomtv.png",
  }, // MAYBE ADD BACKGROUND POSITION
  {
    name: "Dangangronpa Engine",
    author: "Adris Jautakas",
    description: "Lets you (easily?) make a Danganronpa game. If you know what Danganronpa is, I'm sorry.",
    url: "https://medium.com/shiftcreatorspace/the-perks-of-being-a-weaboo-798630a69453",
    img: "assets/projects/weeb.png",
  },
  {
    name: "Unmissable",
    author: "Julia Dean",
    description: "Unmissable allows users to find more concerts through friends and following artists/locations",
    url: "https://medium.com/shiftcreatorspace/unmissable-7f797137c31c",
    img: "assets/projects/unmissable.png",
  },
  {
    name: "My Scattered Thoughts in a Form of Art",
    author: "Elizabeth Yang",
    description: "A collection of abstract art pieces/doodles that express the inner workings of what goes on in my head at the time I'm creating",
    url: "https://medium.com/@eeyangg/what-shift-really-taught-me-5f984faaa2f2",
    img: "assets/projects/art.jpg",
  },
  {
    name: "Sound Shapes",
    author: "Jason Pi",
    description: "Enabling tactile modulation of sound",
    url: "#",
    img: "assets/projects/blocks.png",
  },
  {
    name: "STEM Kit",
    author: "Sneha Ojha",
    description: "STEM kit to help expose young girls to engineering concepts",
    url: "https://medium.com/@sojha_88489/finding-project-resources-at-michigan-1a8ee23ab9e5",
    img: "assets/projects/stem.png",
  },
  {
    name: "Music Player",
    author: "Sam Hovie",
    description: "A minimalist mp3 player",
    url: "https://medium.com/@samhovie/my-experience-in-shift-f01d0fadbd24",
    img: "assets/projects/mp3.jpg"
  },
  {
    name: "Lichen",
    author: "Jacob Yoso",
    description: "A collective, a publication, platform focused on environmental science, art and activism",
    url: "https://medium.com/shiftcreatorspace/shift-2019-2020-2dd824c667d1",
    img: "assets/projects/lichen.png"
  }


]

let getProjectHTML = (project, idx) => {
  return `
    <a href="${project.url}" target="_blank" class="project" style="
                              animation-delay: ${idx*0.2}s;
                              transform:
                                scale(1)
                                translate(${Math.random()*20-10}px, ${Math.random()*20-10}px)
                                rotate(${Math.random()*4-2}deg)
                                ">
      <div class="project--image lazy" style="background-image: url('${project.img}')">
        <i class="fas fa-arrow-right arrow-link"></i>
      </div>


      <div class="project--text">
        <h4>${project.name}</h4>
        <h5>${project.author}</h5>
        <p>${project.description}</p>
      </div>
    </a>
  `
}

function lazyLoad() {
  let scroll = $(window).scrollTop() + window.innerHeight;
  $(".lazy").each(function(idx) {
    if($(this).offset().top <= scroll) {
      $(this).removeClass("lazy");
    }
  })
}

// in place shuffling
// from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

$(document).ready(function() {
  $(window).scroll(lazyLoad);
  shuffle(projects);

  projects.forEach((project, idx) => {
    $("#project-display").append(getProjectHTML(project, idx));
  });
  lazyLoad();
})
