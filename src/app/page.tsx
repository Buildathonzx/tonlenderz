'use client';

import Image from "next/image";
import { useEffect } from "react";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from 'next-themes';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            className="dark:invert animate-bounce"
            src="/images/tonlenderz.jpeg"
            alt="Custom logo"
            width={180}
            height={38}
            priority
          />
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="card w-80 h-60 bg-white dark:bg-gray-700 bg-opacity-10 rounded-2xl p-6 shadow-lg transform transition-transform hover:scale-105" data-aos="fade-up">
              <div className="card-header text-2xl font-bold">Assets Diversification</div>
              <div className="card-content flex justify-center items-center mt-4">
                <div className="bg-gray-700 dark:bg-gray-900 rounded-full w-40 h-10 flex justify-center items-center">
                  <span className="text-gray-500">**********</span>
                </div>
              </div>
              <div className="card-footer flex justify-between items-center mt-4">
                <span>Blockchain Investment</span>
                <div className="button bg-white dark:bg-gray-800 bg-opacity-20 rounded-lg px-4 py-2 cursor-pointer">BTC $260K</div>
              </div>
            </div>
            <div className="highlight w-80 h-60 bg-gradient-to-r from-green-400 to-blue-500 dark:from-green-700 dark:to-blue-800 rounded-2xl p-6 shadow-lg transform transition-transform hover:scale-105" data-aos="fade-up">
              <div className="card-header text-2xl font-bold">DeFi</div>
              <div className="card-content flex justify-center items-center mt-4">
                <span>For Digital Currency</span>
              </div>
            </div>
            <div className="card w-80 h-60 bg-white dark:bg-gray-700 bg-opacity-10 rounded-2xl p-6 shadow-lg transform transition-transform hover:scale-105" data-aos="fade-up">
              <div className="card-header text-2xl font-bold">Safe Portfolio Matrix</div>
              <div className="card-content flex justify-center items-center mt-4">
                <div className="bg-gray-700 dark:bg-gray-900 rounded-full w-40 h-10 flex justify-center items-center">
                  <span className="text-gray-500">**********</span>
                </div>
              </div>
              <div className="card-footer flex justify-between items-center mt-4">
                <span>Wallet address</span>
                <div className="button bg-white dark:bg-gray-800 bg-opacity-20 rounded-lg px-4 py-2 cursor-pointer">0x4167...a3q72</div>
              </div>
            </div>
            <div className="card w-80 h-40 bg-white dark:bg-gray-700 bg-opacity-10 rounded-2xl p-6 shadow-lg transform transition-transform hover:scale-105" data-aos="fade-up">
              <div className="card-header text-2xl font-bold">What People Say</div>
              <div className="card-content flex justify-between items-center mt-4">
                <div>
                  <span>Sold to over 75m</span>
                  <div className="flex items-center mt-2">
                    <i className="fab fa-bitcoin text-green-500"></i>
                    <span className="ml-2">Marian McDaniel</span>
                  </div>
                </div>
                <div className="button bg-white dark:bg-gray-800 bg-opacity-20 rounded-lg px-4 py-2 cursor-pointer">$90K</div>
              </div>
            </div>
            <div className="highlight w-80 h-40 bg-gradient-to-r from-green-400 to-blue-500 dark:from-green-700 dark:to-blue-800 rounded-2xl p-6 shadow-lg transform transition-transform hover:scale-105" data-aos="fade-up">
              <div className="card-header text-2xl font-bold">Wow Allocation Blockchain</div>
              <div className="card-content flex justify-between items-center mt-4">
                <span>Token Tracker 24h +7d</span>
                <div className="flex items-center">
                  <div className="button bg-white dark:bg-gray-800 bg-opacity-20 rounded-lg px-4 py-2 cursor-pointer mr-2">Ton</div>
                  <div className="button bg-white dark:bg-gray-800 bg-opacity-20 rounded-lg px-4 py-2 cursor-pointer">Wallet</div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/Buildathonzx/tonlenderz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to documentation →
          </a>
        </footer>
      </div>
    </ThemeProvider>
  );
}
