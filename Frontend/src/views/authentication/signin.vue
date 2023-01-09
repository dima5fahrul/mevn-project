<template>
  <section class="signin">
    <div class="container-fluid">
      <div class="row align-items-center my-3 mx-5">
        <div class="col-lg-6 mb-4">
          <div class="d-flex">
            <img
              src="../../assets/home/Logo.svg"
              width="60"
              class="align-middle"
              alt=""
            />
            <h1 class="text-light mx-3 my-4 fw-semibold mb-4">Makos</h1>
          </div>
          <h2 class="text-light">Membantu menemukan tempat sewa impian anda</h2>
          <p class="text-light mt-3">
            Makos hadir untuk temukan rumah terbaik untukmu, untuk di jual
            ataupun di sewa dengan sumber terpercaya
          </p>
        </div>

        <div class="card offset-lg-1 col-lg-5 bg-light">
          <div class="d-block mt-5 mb-3 mx-4">
            <div class="col-lg text-success display-6 fw-bolder text-center">
              Daftar Akun
            </div>
            <label class="col-lg mt-3 ms-2">Nama</label>
            <input
              type="name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Masukkan Nama"
            />
            <label class="col-lg mt-3 ms-2">Username</label>
            <input
              type="username"
              class="form-control"
              id="exampleFormControlInput2"
              placeholder="Masukkan Username"
            />
            <label class="col-lg mt-3 ms-2">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput3"
              placeholder="Masukkan Email"
            />
            <label class="col-lg mt-3 ms-2">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput5"
              placeholder="Masukkan Password"
            />
            <label class="col-lg mt-3 ms-2">Konfirmasi Password</label>
            <input
              type="confirm-password"
              class="form-control"
              id="exampleFormControlInput6"
              placeholder="Konfirmasi Password"
            />
            <div class="text-center mt-3">
              <button
                type="button"
                class="btn btn-lg bg-success fs-6 text-light"
              >
                Daftar
              </button>
            </div>
            <div class="mt-2 d-flex justify-content-center already">
              <p>Sudah punya akun?</p>
              <a href="" class="mx-2 text-success">Masuk</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container text-center text-white">
      <p>© 2021 Makos. All Rights Reserved. Designed by SidoNgoding</p>
    </div>
  </section>
</template>

<style>
@import "style.css";
</style>
