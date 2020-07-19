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

//menampilkan  data obat berdasarkan id
exports.tampilberdasarkanid= function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM obat WHERE id_obat = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};


//menambahkan data obat
exports.tambahObat = function (req, res) {
    var kode_obat =req.body.kode_obat;
    var nama_obat = req.body.nama_obat;
    var jenis_obat = req.body.jenis_obat;
    var harga = req.body.harga;
    var jumlah_stok = req.body.jumlah_stok;
    var tanggal_exp = req.body.tanggal_exp;

    connection.query('INSERT INTO obat (kode_obat,nama_obat,jenis_obat,harga,jumlah_stok,tanggal_exp) VALUES(?,?,?,?,?,?)',
        [kode_obat,nama_obat, jenis_obat, harga, jumlah_stok, tanggal_exp],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};