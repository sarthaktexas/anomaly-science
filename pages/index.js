import { useEffect } from 'react'
import HeadObject from '../components/head'
import Link from 'next/link'

export default function Home() {
  useEffect(() => {
    console.log('Made by Sarthak Mohanty for Anomaly Science. Copyright Sarthak Mohanty 2021. All Rights Reserved.')
  })

  return (
    <div className="">
      <HeadObject />
      <main className="font-sans">
        <img className="w-20 h-20 pl-4 pt-4 pointer-events-none" src="/logo.svg" />
        <section className="text-2xl pt-12">
          <h1 className="font-anomaly text-4xl">anomaly</h1>
          <h2>(əˈnɒməli) noun</h2>
          <p className="pt-5">Something that deviates from what is standard, normal, or expected.</p>
        </section>
        <section className="flex flex-col space-y-5 pt-28">
          <p>Anomaly Science is here to redefine what it means to create. We are here to deviates from what is standard, normal, or expected in the world of STEM, and build a better future for makers. We make it possible to bring any idea to life.</p>
          <p>We are still in our early stages, currently based out of Cincinnati, with fully-online operations. First round of projects starting soon.</p>
          <Link href="https://discord.gg/uJqPVk85vC">
            <a className="mt-5 font-anomaly uppercase text-2xl px-10 py-2 bg-white text-black text-center rounded-full w-48">
              Register
            </a>
          </Link>
        </section>
        <footer className="uppercase text-center pt-20 px-10">
          <div className="font-bold opacity-20">Copyright Anomaly Science 2021 All Rights Reserved</div>
          <div className="pt-2 pb-4 text-xs opacity-10">Copyright 2021 Sarthak Mohanty</div>
        </footer>
      </main>
    </div>
  )
}
