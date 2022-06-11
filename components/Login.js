import Link from 'next/link';
import Head from 'next/head';
import { signIn } from 'next-auth/client';
import React from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Header2 from './Header2';

export default function Login() {
  return (
    <div className="fixed z-20 w-full top-0">
      <Head>
        <title>Login with Google</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div
            style={{ height: '100vh' }}
            className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
          >
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <Header2 />

            <main
              style={{ marginTop: '-50px' }}
              className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-48"
            >
              <div
                style={{
                  height: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}
                className="sm:text-center lg:text-left"
              >
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Google Docs</span>{' '}
                  <span className="block text-blue-600 xl:inline">
                    online word processor
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Google Docs is an online word processor included as part of
                  the free, web-based allows users to create and edit documents
                  online - clone By{' '}
                  <a href="https://aminbenz.vercel.app" target="_blank">
                    {' '}
                    Amin Benz 💖
                  </a>
                </p>

                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      onClick={signIn}
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      Sign In With Google
                    </a>
                  </div>

                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/author">
                      <span className="w-full flex items-center cursor-pointer justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                        About Admin
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://img.freepik.com/free-photo/medium-shot-woman-with-computer_23-2149311901.jpg?w=740&t=st=1654948000~exp=1654948600~hmac=d81050de5896b3e311445f350a7a0b64e179be7a0a41992802eb23e1f4539723"
            alt="login wallpaper"
          />
        </div>
      </div>
    </div>
  );
}
