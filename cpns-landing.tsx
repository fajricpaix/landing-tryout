import Image from "next/image"
import Link from "next/link"
import CardComponents from "./components/content/Card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center gap-x-2">
          <Image
            src="/logo.webp"
            width='0'
            height='0'
            sizes='100vw'
            className='w-10 h-auto'
            alt="CPNS Preparation"
          />
          <span className="text-sm font-semibold leading-5">CANDRAMAWA<br />STUDIO</span>
        </Link>
      </header>

      <main className="flex-1">
        {/* Banner */}
        <section className="w-full py-8 md:py-24 lg:py-32 xl:py-24 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-4 lg:gap-12 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-3 md:space-y-6">
                  <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                    Bank Soal Latihan Test <span className="text-blue-600">CPNS</span> 2025
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Platform persiapan CPNS terlengkap dengan ribuan soal latihan, simulasi ujian, dan bimbingan dari mentor berpengalaman. Tingkatkan peluang lolos seleksi CPNS hingga 90%.
                  </p>
                  <figure className="w-32 md:w-44 overflow-hidden rounded-full">
                    <Link href="#" className="max-w-[500px]">
                      <Image
                        src="/playstore.webp"
                        width='0'
                        height='0'
                        sizes='100vw'
                        alt="CPNS Preparation"
                        className="w-full"
                      />
                    </Link>
                  </figure>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">

                </div>
              </div>
              <div className="flex items-center justify-center">
                <figure className="max-w-[500px]">
                  <Image
                    src="/banner.webp"
                    width='0'
                    height='0'
                    sizes='100vw'
                    alt="CPNS Preparation"
                    className="w-full aspect-square overflow-hidden rounded-xl object-contain"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Fitur Unggulan Platform Kami</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dapatkan pengalaman belajar terbaik dengan fitur-fitur canggih yang dirancang khusus untuk persiapan
                  CPNS
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <CardComponents
                title="Bank Soal Lengkap"
                description="Ribuan soal terbaru sesuai kisi-kisi CPNS dengan pembahasan detail dari ahli"
                iconSrc="BookOpen"
                list1="TWK, TIU, TKP lengkap"
                list2="Soal SKD dan SKB"
                list3="Update berkala"
              />

              <CardComponents
                title="Simulasi Ujian Real"
                description="Rasakan pengalaman ujian CPNS sesungguhnya dengan sistem CAT yang akurat"
                list1="Timer otomatis"
                list2="Interface seperti ujian asli"
                list3="Analisis hasil detail"
              />

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-16 bg-primary text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Siap Menjadi PNS Impianmu?</h2>
                <p className="mx-auto max-w-[600px] md:text-lg">
                  Bergabunglah dengan ribuan peserta lainnya dan tingkatkan peluang lolos CPNS hingga 90%
                </p>
              </div>
              <figure className="w-32 md:w-44 overflow-hidden rounded-full">
                <Link href="#" className="max-w-[500px]">
                  <Image
                    src="/playstore.webp"
                    width='0'
                    height='0'
                    sizes='100vw'
                    alt="CPNS Preparation"
                    className="w-full"
                  />
                </Link>
              </figure>
              <div className="w-full max-w-sm space-y-2">
                <p className="font-semibold text-sm">
                  Gratis Tanpa biaya tersembunyi.{" "}
                  <Link href="/terms" className="underline underline-offset-2">
                    Syarat & Ketentuan
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex py-6 w-full justify-center items-center px-4 md:px-6 border-t">
        <p className="text-xs font-semibold text-gray-600">© 2025 Candramasa Studio. Semua hak dilindungi.</p>
      </footer>
    </div>
  )
}
