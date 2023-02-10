import React from 'react'
import { useLocation } from 'react-router-dom'
import NavbarLink from './NavbarLink'

interface IProps {

}

export default function Navbar() {
    const location = useLocation()
    console.log(location.pathname);


    return (
        <nav className='flex px-64 py-6 justify-between bg-slate-800'>
            <NavbarLink title='Barang' to='/barang' active={location.pathname === '/barang' || location.pathname === '/'} />
            <NavbarLink title='Peminjaman' to='/peminjaman' active={location.pathname === '/peminjaman'} />
            <NavbarLink title='Pengembalian' to='/pengembalian' active={location.pathname === '/pengembalian'} />
        </nav>
    )
}
