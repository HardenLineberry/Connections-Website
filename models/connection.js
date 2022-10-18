const { DateTime } = require("luxon");
const {v4: uuidv4} = require("uuid");
const connections = [
{
    id: '1',
    category: 'Album Listening Sessions',
    title: 'Arctic Monkeys - The Car',
    content: 'The Car is the forthcoming seventh studio album by English rock band Arctic Monkeys.',
    author: 'John Smith',
    date: '8:00 PM Saturday, October 22nd, 2022',
    location: 'Woodward 135',
    condetails: 'We will listen to The Car for the first time as a group and discuss our first impressions.',
    image: '/images/thecar.jpg'
},
{
    id: '2',
    category: 'Album Listening Sessions',
    title: 'Carly Rae Jepson - The Loneliest Time',
    content: 'The Loneliest Time is the forthcoming sixth studio album by Canadian singer-songwriter Carly Rae Jepsen.',
    author: 'Francis Wilkerson',
    date: '8:00 PM Sunday, October 23rd, 2022',
    location: 'Woodward 135',
    condetails: 'We will listen to The Loneliest Time for the first time as a group and discuss our first impressions.',
    image: '/images/thelonliesttime.png'
},
{
    id: '3',
    category: 'Album Listening Sessions',
    title: 'Nickelback - Get Rollin\'',
    content: 'Get Rollin\' is the forthcoming tenth studio album by rock band Nickelback, and their first in five years.',
    author: 'Bobby Hill',
    date: '8:00 PM Saturday, November 19th, 2022',
    location: 'Woodward 140',
    condetails: 'We will listen to Get Rollin\' for the first time as a group and discuss our first impressions.',
    image: '/images/changes.jpg'
},
{
    id: '4',
    category: 'Share Music',
    title: 'Electronic',
    content: 'We will all meet up and play our electronic music that we have made. This is a great way to make local connections.',
    author: 'Matthew Stephenson',
    date: '8:00 PM Friday, October 28th, 2022',
    location: 'Woodward 135',
    condetails: 'Please bring a bluetooth device so you can connect to the speaker.',
    image: '/images/Electronic-Music.jpg'
},
{
    id: '5',
    category: 'Share Music',
    title: 'Hip-Hop',
    content: 'We will all meet up and play our hip-hop music that we have made. This is a great way to make local connections.',
    author: 'Lewis Smith',
    date: '8:00 PM Tuesday, November 1st, 2022',
    location: 'Woodward 135',
    condetails: 'Please bring a bluetooth device so you can connect to the speaker.',
    image: '/images/hip-hop-music.jpg'
},
{
    id: '6',
    category: 'Share Music',
    title: 'Pop',
    content: 'We will all meet up and play our pop music that we have made. This is a great way to make local connections.',
    author: 'Duncan Grey',
    date: '8:00 PM Tuesday, November 8th, 2022',
    location: 'Woodward 140',
    condetails: 'Please bring a bluetooth device so you can connect to the speaker.',
    image: '/images/pop-music.jpg'
}
];

exports.find = () => connections;

exports.findById = id => connections.find(connection=>connection.id === id);

exports.save = function (connection) {
    connection.id = uuidv4();
    connection.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    connections.push(connection);
}

exports.updateById = function(id, newconnection) {
    let connection = connections.find(connection=>connection.id === id);
    if(connection) {
        connection.title = newconnection.title;
        connection.content = newconnection.content;
        connection.category = newconnection.category;
        connection.author = newconnection.author;
        connection.date = newconnection.date;
        connection.location = newconnection.location;
        connection.condetails = newconnection.condetails;
        connection.image = newconnection.image;
        return true;
    } else {
        return false;
    }
    
}

exports.deleteById = function(id) {
    let index = connections.findIndex(connection => connection.id === id);
    if(index !== -1) {
        connections.splice(index, 1);
        return true;
    } else {
        return false;
    }
}