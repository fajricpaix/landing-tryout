import Image from "next/image"
import Link from "next/link"


export default function Banners() {
  return <section className="w-full py-8 md:py-24 lg:py-32 xl:py-24 bg-[#e5e3ff]">
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
              priority
            />
            </figure>
        </div>
      </div>
    </div>
  </section>
}
