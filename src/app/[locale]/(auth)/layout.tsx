import Image from 'next/image';

import type { JSX, ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className="flex h-screen w-full justify-center items-center gap-4 bg-green-100">
      <div className="w-full h-full bg-green-100 flex flex-col justify-center items-center rounded-2xl p-10">
        <Image
          src="/loginpage.webp"
          alt="HRM"
          width={1000}
          height={1000}
          className="mb-6 rounded-lg"
        />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Exam Mastery Hub</h2>
        <p className="text-sm text-gray-600 text-center px-4">
          Unleash Your Academic Success with Exam Mastery Hub's Exam Excellence Platform
        </p>
      </div>

      <div className="w-full h-full bg-white flex items-center justify-center p-6">{children}</div>
    </div>
  );
};

export default AuthLayout;
