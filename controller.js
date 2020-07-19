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


//mengubah data berdasarkan id
exports.ubahObat = function (req, res) {
    var id = req.body.id_obat;
    var kode_obat= req.body.kode_obat;
    var nama_obat = req.body.nama_obat;
    var jenis_obat = req.body.jenis_obat;
    var harga = req.body.harga;
	var jumlah_stok = req.body.jumlah_stok;
	var tanggal_exp = req.body.tanggal_exp;

    connection.query('UPDATE obat SET kode_obat=?, nama_obat=?, jenis_obat=?, harga=?, jumlah_stok=?, tanggal_exp=? WHERE id_obat=?', [kode_obat,nama_obat,jenis_obat,harga,jumlah_stok,tanggal_exp, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data!", res)
            }
        });
}

//Menghapus data obat berdasarkan id
exports.hapusObat = function (req, res) {
    var id = req.body.id_obat;
    connection.query('DELETE FROM obat WHERE id_obat=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data!", res)
            }
        });
}



//menampilkan semua data admin
exports.tampilsemuaadmin = function (req, res) {
    connection.query('SELECT * FROM admin', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan admin berdasarkan id
exports.tampiladminberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM admin WHERE id_admin = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menambahkan data admin
exports.tambahDataAdmin = function (req, res) {
    var kode_admin = req.body.kode_admin;
    var nama_admin = req.body.nama_admin;
    var alamat = req.body.alamat;
    var no_tlp = req.body.no_tlp;

    connection.query('INSERT INTO admin (kode_admin,nama_admin,alamat,no_tlp) VALUES(?,?,?,?)',
        [kode_admin,nama_admin,alamat,no_tlp],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

//mengubah data admin berdasarkan id
exports.ubahDataAdmin = function (req, res) {
    var id = req.body.id_admin;
    var kode_admin = req.body.kode_admin;
    var nama_admin = req.body.nama_admin;
    var alamat = req.body.alamat;
    var no_tlp = req.body.no_tlp;

    connection.query('UPDATE admin SET kode_admin=?, nama_admin=?, alamat=?, no_tlp=? WHERE id_admin=?', [kode_admin,nama_admin,alamat,no_tlp, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data!", res)
            }
        });
}

//Menghapus data admin berdasarkan id
exports.hapusDataAdmin = function (req, res) {
    var id = req.body.id_admin;
    connection.query('DELETE FROM admin WHERE id_admin=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data!", res)
            }
        });
}


//menampilkan semua data supplier
exports.tampilsemuasupplier = function (req, res) {
    connection.query('SELECT * FROM supplier', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan supplier berdasarkan id
exports.tampilsupplierberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM supplier WHERE id_supplier = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menambahkan data supplier
exports.tambahDataSupplier = function (req, res) {
    var kode_supplier = req.body.kode_supplier;
    var nama_supplier = req.body.nama_supplier;
    var alamat = req.body.alamat;
    var no_tlp = req.body.no_tlp;

    connection.query('INSERT INTO supplier (kode_supplier,nama_supplier,alamat,no_tlp) VALUES(?,?,?,?)',
        [kode_supplier,nama_supplier,alamat,no_tlp],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

//mengubah data supplier berdasarkan id
exports.ubahDataSupplier = function (req, res) {
    var id = req.body.id_supplier;
    var kode_supplier = req.body.kode_supplier;
    var nama_supplier = req.body.nama_supplier;
    var alamat = req.body.alamat;
    var no_tlp = req.body.no_tlp;

    connection.query('UPDATE supplier SET kode_supplier=?,nama_supplier=?, alamat=?, no_tlp=? WHERE id_supplier=?', [kode_supplier,nama_supplier,alamat,no_tlp, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data!", res)
            }
        });
}