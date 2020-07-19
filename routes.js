'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

   app.route('/tampil')
       .get(jsonku.tampilsemuaobat);

       app.route('/tampil/:id')
       .get(jsonku.tampilberdasarkanid);

       app.route('/tambah')
       .post(jsonku.tambahObat);

       app.route('/ubah')
       .put(jsonku.ubahObat);

       app.route('/hapus')
        .delete(jsonku.hapusObat);

        app.route('/tampiladmin')
        .get(jsonku.tampilsemuaadmin);

        app.route('/tampiladmin/:id')
        .get(jsonku.tampiladminberdasarkanid);

        app.route('/tambahadmin')
        .post(jsonku.tambahDataAdmin);

        app.route('/ubahadmin')
        .put(jsonku.ubahDataAdmin);

}