import Image from "next/image"
import Link from "next/link"


export default function TermsComponents() {
  return <section className="w-full py-12 md:py-16 bg-primary text-white">
    <div className="container px-4 md:px-6 mx-auto">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Siap Menjadi PNS Impianmu?</h2>
          <p className="mx-auto max-w-[600px] md:text-lg">
            Bergabunglah dengan ribuan peserta lainnya dan tingkatkan peluang lolos CPNS hingga 90%
          </p>
        </div>
        <figure className="w-32 md:w-44 overflow-hidden rounded-full">
          <Link target="_blank" href="https://play.google.com/store/apps/details?id=com.candramawa.try_out" className="max-w-[500px]">
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
}
