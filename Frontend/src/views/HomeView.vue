<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg">
    <div>
      <img
        src="../assets/home/Layer_x0020_1.png"
        style="position: absolute; z-index: -1; margin-top: -35px"
        alt=""
      />
    </div>
    <div class="container">
      <a class="navbar-brand d-flex fw-bolder" href="#"
        ><img
          src="../assets/home/logo.svg"
          alt=""
          width="30"
          height="24"
          class="d-inlane-block align-text-top mx-2"
        />
        <p class="text-light">MAKOS</p>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto" style="font-weight: 400">
          <li class="nav-item">
            <a class="nav-link text-light" aria-current="page" href="#"
              >Beranda</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">Layanan</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">Fitur</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">Kontak</a>
          </li>
        </ul>

        <div>
          <button class="btn text-light mx-4">DAFTAR</button>
          <button class="btn btn-light text-success fw-bolder px-4">
            MASUK
          </button>
        </div>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->

  <!-- Jumbotron -->
  <section>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h5 class="display-5 fw-bolder text-light mb-4 mt-4">
              Temukan Persewaan Tempat Impian
            </h5>
            <p class="lead text-light mb-4">
              <b>Kos Impian</b> hadir untuk temukan rumah terbaik untukmu, untuk
              di jual ataupun di sewa dengan sumber terpercaya
            </p>
            <button class="btn btn-light text-success fw-bolder px-4">
              Sewa Kos Sekarang
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="24"
              fill="currentColor"
              class="bi bi-chevron-right text-light mx-3"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
          <div class="col-lg-6">
            <img
              src="../assets/home/Group 7.svg"
              alt=""
              width="704.39px"
              height="681.37px"
              style="position: absolute; margin-top: -159px; margin-left: -42px"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Jumbotron -->

  <!-- Layanan -->
  <section class="layanan">
    <div
      class="d-flex justify-content-center align-items-center flex-lg-row flex-column"
    >
      <div class="container text-center">
        <div class="row align-items-center p-5">
          <div class="col-lg">
            <h1 class="text-center text-success fw-semibold">Layanan Kami</h1>
            <p>Kos impian hadir menjadi solusi bagi kamu</p>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-4 card-container mb-3">
            <div class="card">
              <div class="card-bg">
                <div class="circle position-relative mx-auto mt-5">
                  <img
                    src="../assets/home/house 1.svg"
                    class="card-img-top position-absolute top-50 start-50 translate-middle"
                    alt="..."
                    width="45"
                    height="45"
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title fw-bolder">Sewa Kos</h5>
                  <p class="card-text text-center mt-3 mx-1">
                    Kos impian kini jadi kenyataan, Beli rumah baru dengan
                    fasilitas terbaik dengan lingkungan yang nyaman
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 card-container mb-3">
            <div class="card">
              <div class="card-bg">
                <div class="position-absolute top-100 start-100"></div>
                <div class="circle position-relative mx-auto mt-5">
                  <img
                    src="../assets/home/assets 1.svg"
                    class="card-img-top position-absolute top-50 start-50 translate-middle"
                    alt="..."
                    width="45"
                    height="45"
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title fw-bolder">Biaya Terjamin</h5>
                  <p class="card-text text-center mt-3 mx-1">
                    Sewa Kos yang indah untuk keluarga anda, pilihan terbaik
                    untuk tempat tinggal keluargamu
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 card-container mb-3">
            <div class="card">
              <div class="card-bg">
                <div class="position-absolute top-100 start-100"></div>
                <div class="circle position-relative mx-auto mt-5">
                  <img
                    src="../assets/home/town 1.svg"
                    class="card-img-top position-absolute top-50 start-50 translate-middle"
                    alt="..."
                    width="45"
                    height="45"
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title fw-bolder">Bermacam Tempat</h5>
                  <p class="card-text text-center mt-3 mx-1">
                    Beli Rumah sempurna dengan harga terbaik kualitas terjamin
                    dari sumber terpercaya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Layanan -->

  <!-- Fitur -->
  <section class="fitur">
    <div
      class="d-flex justify-content-center align-items-center flex-lg-row flex-column"
    >
      <div class="container text-center">
        <h1 class="text-white fw-semibold">Temukan Kos Impianmu</h1>
        <p class="text-white fw-normal text-center" style="margin: 0 190px">
          Sekarang Anda dapat menghemat semua hal stres, waktu, dan biaya
          tersembunyi, dengan ratusan rumah untuk anda
        </p>
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-kos-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-kos"
              type="button"
              role="tab"
              aria-controls="nav-kos"
              aria-selected="true"
            >
              Kos
            </button>
            <button
              class="nav-link"
              id="nav-rumah-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-rumah"
              type="button"
              role="tab"
              aria-controls="nav-rumah"
              aria-selected="false"
            >
              Rumah
            </button>
            <button
              class="nav-link"
              id="nav-apartment-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-apartment"
              type="button"
              role="tab"
              aria-controls="nav-apartment"
              aria-selected="false"
            >
              Apartemen
            </button>
          </div>
        </nav>

        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-kos"
            role="tabpanel"
            aria-labelledby="nav-kos-tab"
            tabindex="0"
          >
            <div class="row">
              <div class="col-lg-3 py-4 d-flex">
                <img
                  src="../assets/home/ant-design_home-outlined.svg"
                  alt=""
                  width="25"
                  class="ms-3"
                />
                <select
                  class="select form-select text-success fs-6"
                  aria-label="Default select example"
                >
                  <option selected class="text-black">Tipe Kos</option>
                  <option value="1">Besar</option>
                  <option value="2">Medium</option>
                  <option value="3">Kecil</option>
                </select>
              </div>

              <div class="col-lg-3 py-4 d-flex">
                <img
                  src="../assets/home/akar-icons_money.svg"
                  alt=""
                  width="25"
                  class="ms-3"
                />
                <select class="select form-select text-success range fs-6">
                  <option selected class="text-black">Range Harga</option>
                  <option value="1">&lt Rp500,000</option>
                  <option value="2">Rp500,000 - Rp800,000</option>
                  <option value="3">Rp800,000 - Rp1,100,000</option>
                  <option value="4">&gt Rp1,100,000</option>
                </select>
              </div>

              <div class="col-lg-3 py-4 d-flex">
                <input
                  type="email"
                  class="form-control search text-success fs-5"
                  id="exampleFormControlInput1"
                  placeholder="Cari berasarkan lokasi"
                />
              </div>

              <button
                class="btn col-lg-3 bg-success text-light fs-1 fw-semibold"
              >
                Cari
              </button>
            </div>
          </div>

          <div
            class="tab-pane fade show"
            id="nav-rumah"
            role="tabpanel"
            aria-labelledby="nav-rumah-tab"
            tabindex="0"
          >
            <div class="row">
              <div class="col-lg-3 py-4 d-flex">
                <img
                  src="../assets/home/ant-design_home-outlined.svg"
                  alt=""
                  width="25"
                  class="ms-3"
                />
                <select
                  class="select form-select text-success fs-6"
                  aria-label="Default select example"
                >
                  <option selected class="text-black">Tipe Rumah</option>
                  <option value="1">Besar</option>
                  <option value="2">Medium</option>
                  <option value="3">Kecil</option>
                </select>
              </div>

              <div class="col-lg-3 py-4 d-flex">
                <img
                  src="../assets/home/akar-icons_money.svg"
                  alt=""
                  width="25"
                  class="ms-3"
                />
                <select class="select form-select text-success range fs-6">
                  <option selected class="text-black">Range Harga</option>
                  <option value="1">&lt Rp2,000,000</option>
                  <option value="2">Rp2,000,000 - Rp3,500,000</option>
                  <option value="3">Rp3,500,000 - Rp5,000,000</option>
                  <option value="4">&gt Rp5,000,000</option>
                </select>
              </div>

              <div class="col-lg-3 py-4 d-flex">
                <input
                  type="email"
                  class="form-control search text-success fs-5"
                  id="exampleFormControlInput1"
                  placeholder="Cari berasarkan lokasi"
                />
              </div>

              <button
                class="btn col-lg-3 bg-success text-light fs-1 fw-semibold"
              >
                Cari
              </button>
            </div>
          </div>

          <div
            class="tab-pane fade show"
            id="nav-apartment"
            role="tabpanel"
            aria-labelledby="nav-apartment-tab"
            tabindex="0"
          >
            <div class="row">
              <div class="col-lg-3 py-4 d-flex">
                <img
                  src="../assets/home/ant-design_home-outlined.svg"
                  alt=""
                  width="25"
                  class="ms-3"
                />
                <select
                  class="select form-select text-success fs-6"
                  aria-label="Default select example"
                >
                  <option selected class="text-black">Tipe Apartemen</option>
                  <option value="1">Besar</option>
                  <option value="2">Medium</option>
                  <option value="3">Kecil</option>
                </select>
              </div>

              <div class="col-lg-3 py-4 d-flex">
                <img
                  src="../assets/home/akar-icons_money.svg"
                  alt=""
                  width="25"
                  class="ms-3"
                />
                <select class="select form-select text-success range fs-6">
                  <option selected class="text-black">Range Harga</option>
                  <option value="1">&lt Rp5,000,000</option>
                  <option value="2">Rp5,000,000 - Rp7,500,000</option>
                  <option value="3">Rp7,500,000 - Rp10,000,000</option>
                  <option value="4">&gt Rp10,000,000</option>
                </select>
              </div>

              <div class="col-lg-3 py-4 d-flex">
                <input
                  type="email"
                  class="form-control search text-success fs-5"
                  id="exampleFormControlInput1"
                  placeholder="Cari berasarkan lokasi"
                />
              </div>

              <button
                class="btn col-lg-3 bg-success text-light fs-1 fw-semibold"
              >
                Cari
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Fitur -->

  <!-- QnA -->
  <section class="QnA">
    <div class="container">
      <div
        class="d-flex justify-content-center align-items-lg-center flex-lg-row flex-column"
      >
        <div class="col-lg-6 mt-5 mx-5">
          <h1 class="text-light fw-semibold">
            Butuh Konsultasi..? Silahkan kontak kami Kami Siap Membantu
          </h1>
          <p class="text-light mt-4 fw-semibold">Kontak</p>
          <div class="d-block align-items-lg-center flex-lg-row flex-column">
            <div class="d-flex align-items-lg-center flex-lg-row flex-column">
              <img
                src="../assets/home/Alamat.svg"
                alt=""
                class="me-3"
                width="24"
                height="30"
              />
              <p class="my-2 text-light">
                Jl. Pelajar Pejuang 123 Majalaya Bandung Indonesia
              </p>
            </div>
            <div class="d-flex align-items-lg-center flex-lg-row flex-column">
              <img
                src="../assets/home/Telepon.svg"
                width="24"
                height="30"
                alt=""
                class="me-3"
              />
              <p class="my-2 text-light">022-6545-2041</p>
            </div>
            <div class="d-flex align-items-lg-center flex-lg-row flex-column">
              <img
                src="../assets/home/Email.svg"
                width="24"
                height="30"
                alt=""
                class="me-3"
              />
              <p class="my-2 text-light">makos@gmail.com</p>
            </div>
          </div>
          <p class="text-light mt-4 fw-semibold">Sosial Media</p>
          <div class="d-flex align-items-lg-center flex-lg-row flex-column">
            <img
              src="../assets/home/Facebook.svg"
              width="24"
              height="30"
              class="me-3"
              alt=""
            />
            <img
              src="../assets/home/Twitter.svg"
              width="24"
              height="30"
              class="me-3"
              alt=""
            />
            <img
              src="../assets/home/Instagram.svg"
              width="24"
              height="30"
              class="me-3"
              alt=""
            />
            <p class="text-white my-2">@makos_</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card mt-5" style="height: 450px">
            <div class="d-block m-5 bg-light text-center align-items-center">
              <h1 class="text-center text-success fw-semibold">
                Ada pertanyaan..?
              </h1>
              <input
                class="form-control py-4 mt-4"
                type="text"
                placeholder="Masukkan email anda"
                aria-label=".form-control-lg example"
              />
              <div class="textarea">
                <textarea
                  class="form-control mt-4"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Masukkan pertanyaan anda"
                ></textarea>
              </div>
              <button
                type="button"
                class="btn btn-success text-center py-3 px-5 fs-4 fw-semibold col-lg btn-lg mt-4"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End QnA -->

  <!-- Footer -->
  <section class="Footer">
    <div class="container">
      <div class="row mt-5 justify-content-between">
        <div class="col-lg-6 d-flex">
          <img src="../assets/home/Logo.svg" width="30" alt="" />
          <p class="text-light mt-3 mx-3 fw-semibold fs-3">Makos</p>
        </div>

        <div class="col-lg-6 d-flex" style="padding-left: 200px">
          <a
            href=""
            class="text-light fw-semibold my-4 mx-4"
            style="text-decoration: none"
            >Beranda</a
          >
          <a
            href=""
            class="text-light fw-semibold my-4 mx-4"
            style="text-decoration: none"
            >Layanan</a
          >
          <a
            href=""
            class="text-light fw-semibold my-4 mx-4"
            style="text-decoration: none"
            >Fitur</a
          >
          <a
            href=""
            class="text-light fw-semibold my-4 mx-4"
            style="text-decoration: none"
            >Kontak</a
          >
        </div>
      </div>
      <p class="text-center text-light mt-5 fw-normal">
        © 2021 Makos. All Rights Reserved. Designed by SidoNgoding
      </p>
    </div>
  </section>
  <!-- End Footer -->
</template>

<style>
@import "../assets/style.css";
</style>

<script>
export default {
  name: "Home",
};
</script>
