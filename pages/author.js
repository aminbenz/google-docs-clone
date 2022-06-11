import Head from 'next/head';

import { PaperClipIcon } from '@heroicons/react/solid';

import React from 'react';
import Header2 from '../components/Header2';

export default function Author() {
  return (
    <div className="fixed z-20 w-full top-0 bg-white">
      <Head>
        <title>About author | Amin Benz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header2 />
      <div className="bg-white shadow overflow-hidden sm:rounded-lg max-w-6xl mt-10 mx-auto	">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            About author{' '}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details about author
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Amin Benz
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                A full-Stack developer has a passion for bringing meaningful
                ideas to life through code. My interest in technology has
                allowed me to advance my skills with unique projects.
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Application for
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                word processor
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <a
                href="mailto:aminbenz73@gmail.com"
                className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 hover:underline hover:text-blue-500"
              >
                aminbenz73@gmail.com
              </a>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Github</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <a
                  className="hover:underline hover:text-blue-500"
                  href="https://github.com/aminbenz"
                  target="_blank"
                >
                  github/aminbenz
                </a>
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Resume</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul
                  role="list"
                  className="border border-gray-200 rounded-md divide-y divide-gray-200"
                >
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <PaperClipIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2 flex-1 w-0 truncate">
                        resume_fullstack_developer.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="/public/resume.pdf"
                        download
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
