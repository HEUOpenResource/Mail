"use client"

import Link from "next/link"
import Image from "next/image"

export function Logo() {
  return (
    <Link 
      href="/"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <div className="relative w-8 h-8 rounded-full overflow-hidden">
        <Image
          src="/icons/favicon.ico"
          alt="HEU Mail Logo"
          fill
          className="object-contain"
        />
      </div>
      <span className="font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
        HEU Mail
      </span>
    </Link>
  )
}