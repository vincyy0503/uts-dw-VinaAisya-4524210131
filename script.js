console.log("Hasil kartu");

const namaInput = document.querySelector("#namaHewan");
const jenisInput = document.querySelector("#jenisHewan");
const umurInput = document.querySelector("#umurHewan");
const warnaInput = document.querySelector("#warnaKartu");
const deskInput = document.querySelector("#deskripsiHewan");

const card = document.querySelector(".card");
const previewNama = document.querySelector("#preview-nama");
const previewJenis = document.querySelector("#preview-jenis");
const previewUmur = document.querySelector("#preview-umur");
const previewDesk = document.querySelector("#preview-deskripsi");
const previewGambar = document.querySelector("#preview-gambar");

namaInput.addEventListener("input", () => {
  previewNama.textContent = namaInput.value || "Nama Hewan";
});

umurInput.addEventListener("input", () => {
  previewUmur.textContent = umurInput.value
    ? `Umur: ${umurInput.value} tahun`
    : "Umur: - tahun";
});

deskInput.addEventListener("input", () => {
  previewDesk.textContent = deskInput.value || "Deskripsi hewan akan muncul di sini ";
});

warnaInput.addEventListener("change", () => {
  card.style.backgroundColor = warnaInput.value;
});

jenisInput.addEventListener("change", () => {
  const jenis = jenisInput.value;
  previewJenis.textContent = jenis ? jenis.charAt(0).toUpperCase() + jenis.slice(1) : "Jenis Hewan";

  switch (jenis) {
    case "kucing":
      previewGambar.src = "kucingku.jpg";
      break;
    case "anjing":
      previewGambar.src = "anjingku.jpg";
      break;
    case "kelinci":
      previewGambar.src = "kelinciku.jpg";
      break;
    default:
      previewGambar.src = "default.png";
  }
});
