'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

   app.route('/tampil')
       .get(jsonku.tampilsemuaobat);
//tampil barang masuk
       app.route('/tampilbarangmasuk')
       .get(jsonku.tampilsemubarangmasuk);
       
       app.route('/tampilbarangkeluar')
       .get(jsonku.tampilsemubarangkeluar);

       app.route('/tampil/:id')
       .get(jsonku.tampilberdasarkanid);

       app.route('/tampilbarangmasuk/:id')
       .get(jsonku.tampilbarangmasukberdasarkanid);
       
       app.route('/tampilbarangkeluar/:id')
       .get(jsonku.tampilbarangkeluarberdasarkanid);

       app.route('/tambah')
       .post(jsonku.tambahObat);

       app.route('/tambahbarangmasuk')
       .post(jsonku.tambahDataBarangMasuk);

       app.route('/tambahbarangkeluar')
       .post(jsonku.tambahDataBarangKeluar);

       app.route('/ubah')
       .put(jsonku.ubahObat);

       app.route('/ubahbarangmasuk')
       .put(jsonku.ubahDataBarangMasuk);

       app.route('/ubahbarangkeluar')
       .put(jsonku.ubahDataBarangKeluar);

       app.route('/hapus')
        .delete(jsonku.hapusObat);

        app.route('/hapusbarangmasuk')
        .delete(jsonku.hapusDataBarangMasuk);

        app.route('/hapusbarangkeluar')
        .delete(jsonku.hapusDataBarangKeluar);

        app.route('/tampiladmin')
        .get(jsonku.tampilsemuaadmin);

        app.route('/tampiladmin/:id')
        .get(jsonku.tampiladminberdasarkanid);

        app.route('/tambahadmin')
        .post(jsonku.tambahDataAdmin);

        app.route('/ubahadmin')
        .put(jsonku.ubahDataAdmin);

        app.route('/hapusadmin')
        .delete(jsonku.hapusDataAdmin);

        app.route('/tampilsupplier')
        .get(jsonku.tampilsemuasupplier);

        app.route('/tampilsupplier/:id')
        .get(jsonku.tampilsupplierberdasarkanid);

        app.route('/tambahsupplier')
        .post(jsonku.tambahDataSupplier);

        app.route('/ubahsupplier')
        .put(jsonku.ubahDataSupplier);

        
        app.route('/hapussupplier')
        .delete(jsonku.hapusDataSupplier);


}