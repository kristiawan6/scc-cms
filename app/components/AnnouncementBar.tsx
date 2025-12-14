'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Gift, Sparkles, CalendarClock } from 'lucide-react';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);
  const [centered, setCentered] = useState(false);

  useEffect(() => {
    const closed = typeof window !== 'undefined' && localStorage.getItem('announcement_closed') === '1';
    setVisible(!closed);
    const update = () => {
      const w = window.innerWidth;
      setCentered(w < 1024);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  if (!visible) return null;

  if (centered) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => { localStorage.setItem('announcement_closed', '1'); setVisible(false); }} />
        <div className="relative w-full max-w-md bg-black/85 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-400">Jadwal Ibadah Natal dan Tahun Baru</span>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/jadwal-ibadah" className="text-xs font-semibold text-orange-400 bg-orange-400/10 px-3 py-1 rounded">
                Lihat Detail
              </Link>
              <button aria-label="Tutup pengumuman" onClick={() => { localStorage.setItem('announcement_closed', '1'); setVisible(false); }} className="text-xs text-gray-300 hover:text-white">
                Tutup
              </button>
            </div>
          </div>
          <div className="grid gap-3 grid-cols-1 px-4 pb-4">
            <div className="bg-white/5 rounded-lg border border-gray-700/40 p-3">
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-yellow-400" />
                <p className="text-sm font-semibold text-yellow-400">Perayaan Natal Bersama</p>
              </div>
              <p className="text-sm text-white mt-1">Ps. Herron Dollf Anton, S.E., M.M.</p>
              <div className="flex items-center justify-between text-xs text-gray-300 mt-2">
                <div className="flex items-center gap-1">
                  <CalendarClock className="w-3.5 h-3.5 text-orange-400" />
                  <span>Minggu, 21 Desember 2025</span>
                </div>
                <span className="text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded">10.00 WIB</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Disertai Perjamuan Kudus</p>
            </div>
            <div className="bg-white/5 rounded-lg border border-gray-700/40 p-3">
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-yellow-400" />
                <p className="text-sm font-semibold text-yellow-400">Ibadah Natal 25 Desember</p>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-300 mt-2">
                <div className="flex items-center gap-1">
                  <CalendarClock className="w-3.5 h-3.5 text-orange-400" />
                  <span>Kamis, 25 Desember 2025</span>
                </div>
                <span className="text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded">10.00 WIB</span>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg border border-gray-700/40 p-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <p className="text-sm font-semibold text-yellow-400">Ibadah Buka Tahun 2026</p>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-300 mt-2">
                <div className="flex items-center gap-1">
                  <CalendarClock className="w-3.5 h-3.5 text-orange-400" />
                  <span>Kamis, 1 Januari 2026</span>
                </div>
                <span className="text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded">10.00 WIB</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Disertai Perjamuan Kudus</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-16 left-0 right-0 z-40 px-4">
      <div className="mx-auto max-w-5xl bg-black/80 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-400">Jadwal Ibadah Natal dan Tahun Baru</span>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/jadwal-ibadah" className="text-xs font-semibold text-orange-400 bg-orange-400/10 px-3 py-1 rounded">
              Lihat Detail
            </Link>
            <button aria-label="Tutup pengumuman" onClick={() => { localStorage.setItem('announcement_closed', '1'); setVisible(false); }} className="text-xs text-gray-300 hover:text-white">
              Tutup
            </button>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-3 px-4 pb-4">
          <div className="bg-white/5 rounded-lg border border-gray-700/40 p-3">
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-yellow-400" />
              <p className="text-sm font-semibold text-yellow-400">Perayaan Natal Bersama</p>
            </div>
            <p className="text-sm text-white mt-1">Ps. Herron Dollf Anton, S.E., M.M.</p>
            <div className="flex items-center justify-between text-xs text-gray-300 mt-2">
              <div className="flex items-center gap-1">
                <CalendarClock className="w-3.5 h-3.5 text-orange-400" />
                <span>Minggu, 21 Desember 2025</span>
              </div>
              <span className="text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded">10.00 WIB</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">Disertai Perjamuan Kudus</p>
          </div>
          <div className="bg-white/5 rounded-lg border border-gray-700/40 p-3">
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-yellow-400" />
              <p className="text-sm font-semibold text-yellow-400">Ibadah Natal 25 Desember</p>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-300 mt-2">
              <div className="flex items-center gap-1">
                <CalendarClock className="w-3.5 h-3.5 text-orange-400" />
                <span>Kamis, 25 Desember 2025</span>
              </div>
              <span className="text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded">10.00 WIB</span>
            </div>
          </div>
          <div className="bg-white/5 rounded-lg border border-gray-700/40 p-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <p className="text-sm font-semibold text-yellow-400">Ibadah Buka Tahun 2026</p>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-300 mt-2">
              <div className="flex items-center gap-1">
                <CalendarClock className="w-3.5 h-3.5 text-orange-400" />
                <span>Kamis, 1 Januari 2026</span>
              </div>
              <span className="text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded">10.00 WIB</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">Disertai Perjamuan Kudus</p>
          </div>
        </div>
      </div>
    </div>
  );
}
