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
              Masuk Akun
            </div>
            <label class="col-lg mt-5 ms-2">Email</label>
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
            <div class="d-flex text-center mt-5">
              <button
                type="button"
                class="btn btn-lg btn-signin me-3 fs-6 text-light"
              >
                Masuk
              </button>
              <button type="button" class="btn btn-lg btn-login fs-6">
                Daftar
              </button>
            </div>
            <div class="mt-3 d-flex justify-content-center already">
              <p>Lupa kata sandi?</p>
              <a href="" class="mx-2 text-success">Verifikasi</a>
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
