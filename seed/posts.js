const db = require('../db/connection');
const Post = require('../models/posts')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const posts =
    [
      {
        "title": "FOOD",
        "imgURL": "https://www.triedandtruerecipe.com/wp-content/uploads/2020/06/Spicy-Shrimp-and-Lobster-Bisque_Hero-1080x675.png",
        "content": "I'm baby flexitarian intelligentsia migas actually meggings gentrify asymmetrical readymade kitsch hell of authentic kogi. Pickled blog cloud bread subway tile synth air plant copper mug. Ugh ethical seitan swag blog hammock typewriter sustainable narwhal tilde humblebrag copper mug.",
        "user": "Chritian Matos"
      },
      {
        "title": "YuMMy",
        "imgURL": "https://www.triedandtruerecipe.com/wp-content/uploads/2020/06/White-Bean-Puree-with-Shrimp_Hero-1080x675.png",
        "content": "Hashtag DIY put a bird on it crucifix. Wayfarers aesthetic bushwick wolf next level roof party taxidermy paleo. Pork belly cray keytar pug blue bottle air plant plaid. Cray fingerstache whatever stumptown blog shaman freegan craft beer vexillologist YOLO kombucha hell of thundercats edison bulb mlkshk.",
        "user": "Jacky Chenlong Yang"
      },
      {
        "title": "It's like haven on a plate",
        "imgURL": "https://www.triedandtruerecipe.com/wp-content/uploads/2020/05/Chicken-with-Creamy-Fennel-Broth_Hero-1080x675.png",
        "content": "Asymmetrical iceland lumbersexual lomo echo park man braid. Echo park swag distillery messenger bag, cold-pressed scenester drinking vinegar. Distillery keytar chia, fingerstache mixtape vegan post-ironic normcore church-key shoreditch. Palo santo woke butcher banh mi, yr hoodie hexagon echo park vegan keytar man braid selvage kitsch tousled. 8-bit butcher sriracha taiyaki heirloom truffaut health goth gastropub street art flannel wolf.",
        "user": "Scott Pick"
      },
      {
        "title": "Shut the front door!",
        "imgURL": "https://www.triedandtruerecipe.com/wp-content/uploads/2020/06/Seared-Duck-with-Mashed-Kohlrabi_Hero-1080x675.png",
        "content": "Deep v artisan four dollar toast la croix williamsburg four loko. Freegan kogi vape slow-carb farm-to-table four dollar toast schlitz kinfolk tumblr chartreuse portland deep v taiyaki forage man bun. Tattooed crucifix art party fam YOLO fanny pack glossier pinterest before they sold out aesthetic portland tumblr four loko. Cray food truck church-key artisan pitchfork art party tofu",
        "user": "Johnathan Umana"
      }
    ]

  await Post.insertMany(posts)
  console.log("Created posts!")

}
const run = async () => {
  await main()
  db.close()
}
run()



