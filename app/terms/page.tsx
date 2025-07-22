import Banners from "@/components/layout/banner"
import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import TermsComponents from "@/components/layout/terms"


export default function TermPage() {
  return <div className="flex flex-col min-h-[100dvh]">
      <Header />

      <main className="flex-1">
        {/* Banner */}
        <Banners />

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <h3 className="text-2xl font-semibold">Syarat dan Ketentuan Penggunaan</h3>

            <ul className="list-decimal pl-6 space-y-3 mt-8">
              <li className="font-bold text-lg">
                Persetujuan
                <p className="font-normal">
                  Dengan menggunakan aplikasi TES CPNS SSCASN 2025 BANK SOAL Baru & Terlengkap (selanjutnya disebut “Aplikasi”), Anda dianggap telah membaca, memahami, dan menyetujui semua syarat dan ketentuan yang berlaku.
                </p>
              </li>
              <li className="font-bold text-lg">
                Tujuan Penggunaan
                <p className="font-normal">
                  Aplikasi ini disediakan sebagai media pembelajaran dan latihan soal CPNS. Semua konten di dalam aplikasi ditujukan hanya untuk membantu pengguna dalam persiapan menghadapi ujian CPNS dan bukan sebagai jaminan kelulusan.
                </p>
              </li>
              <li className="font-bold text-lg">
                Hak Kekayaan Intelektual
                <ul className="list-disc pl-4 font-normal">
                  <li>Seluruh materi, termasuk soal, desain, ikon, dan fitur yang ada dalam Aplikasi ini adalah milik Candramawa Studio.</li>
                  <li>Dilarang menggandakan, menyalin, atau mendistribusikan sebagian atau seluruh materi tanpa izin tertulis dari Candramawa Studio.</li>
                </ul>
              </li>
              <li className="font-bold text-lg">
                Privasi dan Data Pengguna
                <ul className="list-disc pl-4 font-normal">
                  <li>Aplikasi ini tidak memerlukan pendaftaran atau login untuk digunakan.</li>
                  <li>Tidak ada pengumpulan data pribadi seperti nama, email, atau nomor telepon pengguna.</li>
                  <li>Aplikasi hanya menggunakan koneksi internet untuk menampilkan konten dan menggunakan Google Analytics untuk analisis umum, seperti jenis device dan sistem operasi yang digunakan.</li>
                  <li>Data analitik tersebut bersifat agregat dan anonim, semata-mata untuk keperluan pengembangan dan perbaikan layanan aplikasi.</li>
                </ul>
              </li>
              <li className="font-bold text-lg">
                Batasan Tanggung Jawab
                <ul className="list-disc pl-4 font-normal">
                  <li>TES CPNS SSCASN 2025 BANK SOAL Baru & Terlengkap tidak bertanggung jawab atas kesalahan materi atau kerugian apapun yang timbul akibat penggunaan aplikasi ini.</li>
                  <li>Pengguna memahami bahwa aplikasi ini hanya sebagai sarana latihan dan pembelajaran mandiri, dan bukan penyelenggara resmi ujian CPNS.</li>
                </ul>
              </li>
              <li className="font-bold text-lg">
                Perubahan Syarat dan Ketentuan
                <p className="font-normal">Candramawa Studio berhak mengubah, menambah, atau mengurangi syarat dan ketentuan ini sewaktu-waktu. Perubahan akan langsung berlaku setelah diunggah pada Aplikasi ini.</p>
              </li>
              <li className="font-bold text-lg">
                Hukum yang Berlaku
                <p className="font-normal">Syarat dan ketentuan ini diatur berdasarkan hukum yang berlaku di Republik Indonesia.</p>
              </li>
              <li className="font-bold text-lg">
                Kontak
                <p className="font-normal">Untuk pertanyaan, kritik, atau saran terkait Aplikasi ini, silakan hubungi: <br /> 📧 candramawa.std@gmail.com</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Terms n Condition */}
        <TermsComponents />
      </main>

      <Footer />
    </div>
}
