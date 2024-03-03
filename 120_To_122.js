
//          Five assingment

const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
      "Oath In Felghana": ["USA", "Japan"],
      "Ark Of Napishtim": {
        US: "20 USD",
        JAP: "10 USD",
      },
      Origin: "30 USD",
    },
  };
  //                           One Line
  let {title: t, developer: d, releases:{["Oath In Felghana"]:[u, j]}} = game;


  // Write Your Destructuring Assignment/s Here
  console.log(`My Favourite Games Style Is ${t} Style`);
  // My Favourite Games Style Is YS Style
  console.log(`And I Love ${d} Games`);
  // And I Love Falcom Games
  console.log(`My Best Release Is ${["Oath In Felghana"]} It Released in ${u} & ${j}`);
  // My Best Release Is Oath In Felghana It Released in USA & Japan
  //                           Two Line
  let {["Ark Of Napishtim"]:{US:u_price,JAP:j_price},Origin:or} = game.releases;


  console.log(`Although I Love ${["Ark Of Napishtim"]}`);
  // Although I Love Ark Of Napishtim
  console.log(`${["Ark Of Napishtim"]} Price in USA Is ${u_price}`);
  // Ark Of Napishtim Price in USA Is 20 USD
  console.log(`${["Ark Of Napishtim"]} Price in Japan Is ${j_price}`);
  // Ark Of Napishtim Price in Japan Is 10 USD
  console.log(`Origin Price Is ${or}`);
  // Origin Price Is 30 USD