'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res)
};

//menampilkan semua data obat
exports.tampilsemuaobat = function (req, res) {
    connection.query('SELECT * FROM obat', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};