'use client'

import Image from 'next/image'
import Link from 'next/link'
import {Session} from 'next-auth'

export default function NavBar({session}: {session: Session | null}) {
    return (
        <div>
            <ul>
                <li>a</li>
                <li>b</li>
                <li>c</li>
            </ul>
        </div>
    )
}
