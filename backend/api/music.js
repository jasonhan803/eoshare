const shortid = require("shortid");
const faker = require("faker");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const photos = [
{
    id:shortid.generate(),
    thumbnail:"/cover1.jpg",
    price:3,
    creatorName:faker.name.findName(),
    creatorAccount:"musician1111",
    downloadLink:"link",
    musicName:"Yuna",
    albumName:"Chapters",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/cover2.jpg",
    price:getRandomInt(1,10),
    creatorName:faker.name.findName(),
    creatorAccount:"musician1111",
    downloadLink:"link",
    musicName:"Lighthouse",
    albumName:"On Fire",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/cover3.jpg",
    price:getRandomInt(1,10),
    creatorName:faker.name.findName(),
    creatorAccount:"musician1111",
    downloadLink:"link",
    musicName:"Closer",
    albumName:"Closer",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/cover4.jpg",
    price:getRandomInt(1,10),
    creatorName:faker.name.findName(),
    creatorAccount:"musician1111",
    downloadLink:"link",
    musicName:"Soundtrack",
    albumName:"Old is Gold",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/cover5.jpg",
    price:getRandomInt(1,10),
    creatorName:faker.name.findName(),
    creatorAccount:"musician1111",
    downloadLink:"link",
    musicName:"Sunshine",
    albumName:"NCM",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/cover6.jpg",
    price:getRandomInt(1,10),
    creatorName:faker.name.findName(),
    creatorAccount:"musician1111",
    downloadLink:"link",
    musicName:"Ghosts",
    albumName:"Ghosts",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/cover7.jpeg",
    price:getRandomInt(1,10),
    creatorName:faker.name.findName(),
    creatorAccount:"musician1111",
    downloadLink:"link",
    musicName:"Imagine Dragons",
    albumName:"Heroes",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/cover8.jpg",
    price:getRandomInt(1,10),
    creatorName:faker.name.findName(),
    creatorAccount:"musician1111",
    downloadLink:"link",
    musicName:"Awake",
    albumName:"Here with you",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/cover9.jpg",
    price:getRandomInt(1,10),
    creatorName:faker.name.findName(),
    creatorAccount:"musician1111",
    downloadLink:"link",
    musicName:"Experiment",
    albumName:"Experiment",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/cover10.jpg",
    price:getRandomInt(1,10),
    creatorName:faker.name.findName(),
    creatorAccount:"musician1111",
    downloadLink:"link",
    musicName:"High Hopes",
    albumName:"Pink",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/cover11.jpg",
    price:getRandomInt(1,10),
    creatorName:faker.name.findName(),
    creatorAccount:"musician1111",
    downloadLink:"link",
    musicName:"Alabama Shake",
    albumName:"Hills",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/cover12.jpg",
    price:getRandomInt(1,10),
    creatorName:faker.name.findName(),
    creatorAccount:"musician1111",
    downloadLink:"link",
    musicName:"Written in the stars",
    albumName:"Discovery",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/cover13.jpg",
    price:getRandomInt(1,10),
    creatorName:faker.name.findName(),
    creatorAccount:"musician1111",
    downloadLink:"link",
    musicName:"Awakening",
    albumName:"Awakening",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/cover14.png",
    price:getRandomInt(1,10),
    creatorName:faker.name.findName(),
    creatorAccount:"musician1111",
    downloadLink:"link",
    musicName:"Breathe",
    albumName:"Breathe",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/cover15.jpg",
    price:getRandomInt(1,10),
    creatorName:faker.name.findName(),
    creatorAccount:"musician1111",
    downloadLink:"link",
    musicName:"Culture",
    albumName:"Culture",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
]

module.exports = photos