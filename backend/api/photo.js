const shortid = require("shortid");
const faker = require("faker")

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const photos = [
{
    id:shortid.generate(),
    thumbnail:"/public/imageone.jpg",
    price:getRandomInt(10,1000),
    creatorName:faker.name.findName(),
    creatorAccount:"photographer",
    downloadLink:"link",
    title:"Autumn in Korea",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/public/imagetwo.jpg",
    price:getRandomInt(10,1000),
    creatorName:faker.name.findName(),
    creatorAccount:"photographer",
    downloadLink:"link",
    title:"Deer",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/public/imagethree.jpg",
    price:getRandomInt(10,1000),
    creatorName:faker.name.findName(),
    creatorAccount:"photographer",
    downloadLink:"link",
    title:"Beautiful Japan",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/public/imagefour.jpg",
    price:getRandomInt(10,1000),
    creatorName:faker.name.findName(),
    creatorAccount:"photographer",
    downloadLink:"link",
    title:"Not Drowning",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/public/imagefive.jpg",
    price:getRandomInt(10,1000),
    creatorName:faker.name.findName(),
    creatorAccount:"photographer",
    downloadLink:"link",
    title:"Healthy not Healthy",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/public/imagesix.jpg",
    price:getRandomInt(10,1000),
    creatorName:faker.name.findName(),
    creatorAccount:"photographer",
    downloadLink:"link",
    title:"Snow White",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/public/imageseven.jpg",
    price:getRandomInt(10,1000),
    creatorName:faker.name.findName(),
    creatorAccount:"photographer",
    downloadLink:"link",
    title:"Sunset",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/public/imageeight.jpg",
    price:getRandomInt(10,1000),
    creatorName:faker.name.findName(),
    creatorAccount:"photographer",
    downloadLink:"link",
    title:"Clear Sky",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/public/imagenine.jpg",
    price:getRandomInt(10,1000),
    creatorName:faker.name.findName(),
    creatorAccount:"photographer",
    downloadLink:"link",
    title:"Flower Girl",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},
{
    id:shortid.generate(),
    thumbnail:"/public/imageten.jpg",
    price:getRandomInt(10,1000),
    creatorName:faker.name.findName(),
    creatorAccount:"photographer",
    downloadLink:"link",
    title:"Wow",
    seed:getRandomInt(10,1000),
    download:getRandomInt(10,1000),
    earning:getRandomInt(10,1000),
    status:"active",
},

]

module.exports = photos