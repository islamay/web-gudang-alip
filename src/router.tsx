import { useState } from 'react'
import { createBrowserRouter, redirect, Router, } from 'react-router-dom'
import Barang from './pages/Barang'
import Peminjaman from './pages/Peminjaman'
import Pengembalian from './pages/Pengembalian'
import './index.css'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Barang />
    },
    {
        path: '/barang',
        element: <Barang />
    },
    {
        path: '/peminjaman',
        element: <Peminjaman />
    },
    {
        path: '/pengembalian',
        element: <Pengembalian />
    }
])

export default router