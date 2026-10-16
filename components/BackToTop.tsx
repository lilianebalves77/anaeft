'use client'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
export default function BackToTop(){const [show,setShow]=useState(false);useEffect(()=>{const on=()=>setShow(window.scrollY>600);window.addEventListener('scroll',on,{passive:true});return()=>window.removeEventListener('scroll',on)},[]);return <a aria-label="Voltar ao início" href="#inicio" className={`fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-ink text-cream shadow-lift transition-all hover:-translate-y-1 ${show?'translate-y-0 opacity-100':'pointer-events-none translate-y-4 opacity-0'}`}><ArrowUp size={18}/></a>}
