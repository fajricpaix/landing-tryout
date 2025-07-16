import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Trophy, Clock, CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-blue-600">CPNS Prep</span>
        </Link>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="w-fit bg-blue-100 text-blue-800 hover:bg-blue-200">🎯 Persiapan CPNS 2024</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Wujudkan Impian Jadi <span className="text-blue-600">PNS</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Platform persiapan CPNS terlengkap dengan ribuan soal latihan, simulasi ujian, dan bimbingan dari
                    mentor berpengalaman. Tingkatkan peluang lolos seleksi CPNS hingga 90%.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <svg className="w-5 h-5" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M138.282667 98.56c-9.813333 10.24-15.616 26.026667-15.616 46.549333v733.738667c0 20.565333 5.802667 36.394667 15.616 46.549333l2.517333 2.389334 417.792-410.922667v-9.728L140.8 96.128l-2.56 2.389333h0.042667z" fill="#00C5FF" p-id="1596"></path><path d="M697.813333 653.909333l-139.264-137.045333v-9.728l139.264-136.96 3.2 1.706667 164.992 92.202666c47.104 26.325333 47.104 69.461333 0 95.829334l-164.992 92.202666-3.2 1.792z" fill="#FFBD00" p-id="1597"></path><path d="M701.013333 652.117333L558.506667 512l-420.266667 413.44c15.530667 16.213333 41.216 18.218667 70.101333 2.090667l492.629334-275.413334" fill="#EB2C4E" p-id="1598"></path><path d="M701.013333 371.882667L208.384 96.469333c-28.885333-16.128-54.570667-14.122667-70.101333 2.048L558.549333 512l142.464-140.117333z" fill="#00F076" p-id="1599"></path>
                    </svg>
                    Download di PlayStore
                  </Button>
                  <Button variant="outline" size="lg">
                    Lihat Paket Premium
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width="400"
                  height="400"
                  alt="CPNS Preparation"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                />
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
              <Card>
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-blue-600" />
                  <CardTitle>Bank Soal Lengkap</CardTitle>
                  <CardDescription>
                    Ribuan soal terbaru sesuai kisi-kisi CPNS dengan pembahasan detail dari ahli
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      TWK, TIU, TKP lengkap
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Soal SKD dan SKB
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Update berkala
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="h-10 w-10 text-blue-600" />
                  <CardTitle>Simulasi Ujian Real</CardTitle>
                  <CardDescription>
                    Rasakan pengalaman ujian CPNS sesungguhnya dengan sistem CAT yang akurat
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Timer otomatis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Interface seperti ujian asli
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Analisis hasil detail
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Siap Menjadi PNS Impianmu?</h2>
                <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Bergabunglah dengan ribuan peserta lainnya dan tingkatkan peluang lolos CPNS hingga 90%
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <p className="text-xs text-blue-100">
                  Gratis tryout pertama. Tanpa biaya tersembunyi.{" "}
                  <Link href="/terms" className="underline underline-offset-2">
                    Syarat & Ketentuan
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-600">© {new Date().getFullYear()} CPNS Prep. Semua hak dilindungi.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Syarat Layanan
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Kebijakan Privasi
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Bantuan
          </Link>
        </nav>
      </footer>
    </div>
  )
}
