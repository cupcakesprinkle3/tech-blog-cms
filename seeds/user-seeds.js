const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        id: 1,
        username: 'mb-test',
        email: 'mb-test@email.com',
        password: 'password'
    },
    {
        id: 2,
        username: 'alesmonde0',
        email: 'nwestnedge0@cbc.ca',
        password: 'password123'
    },
    {
        id: 3,
        username: 'jwilloughway1',
        email: 'rmebes1@sogou.com',
        password: 'password123'
    },
    {
        id: 4,
        username: 'iboddam2',
        email: 'cstoneman2@last.fm',
        password: 'password123'
    },
    {
        id: 5,
        username: 'dstanmer3',
        email: 'ihellier3@goo.ne.jp',
        password: 'password123'
    },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;