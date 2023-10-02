const Hapi = require("@hapi/hapi");
const routes = require("./routes");

// Membuat server
const init = async () => {
  const server = Hapi.server({
    port: 5000, // Port yang akan digunakan oleh server
    host: "localhost", // Host yang akan digunakan
  });

  // Menambahkan rute sederhana
  server.route(routes);

  // Menjalankan server
  await server.start();
  console.log("Server berjalan di", server.info.uri);
};

// Menjalankan fungsi init untuk memulai server
init();
