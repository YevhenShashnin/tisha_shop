import React from 'react'
import Link from 'next/link'

export default function Home({ allPostsData }) {
    return (
      <Link href="/shop">
        <a>Shop</a>
      </Link>
    )
  }