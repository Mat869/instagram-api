const express = require('express');

class Users {

    getAll(req, res) {
        res.send('works');
    }

}

module.exports = new Users();