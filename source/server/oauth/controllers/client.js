/**
 * Created by sylflo on 9/28/15.
 */
var Client = require('../models/client');

// Create endpoint /api/client for POST
exports.postClients = function(req, res) {
    var client = new Client();

    client.name = req.body.name;
    client.id = req.body.id;
    client.secret = req.body.secret;
    client.userId = req.user._id;

    client.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Client added to the locker!', data: client });
    });
};

// Create endpoint /api/clients for GET
exports.getClients = function(req, res) {

    // Use the Client model to find all clients
    Client.find({ userId: req.user._id }, function(err, clients) {
        if (err)
            res.send(err);

        res.json(clients);
    });
};