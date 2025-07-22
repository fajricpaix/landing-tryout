import CardComponents from "@/components/content/card"
import Banners from "@/components/layout/banner"
import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import TermsComponents from "@/components/layout/terms"


export default function HomePage() {
  return <div className="flex flex-col min-h-[100dvh]">
      <Header />

      <main className="flex-1">
        {/* Banner */}
        <Banners />

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24">
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

        {/* Terms n Condition */}
        <TermsComponents />
      </main>

      <Footer />
    </div>
}
