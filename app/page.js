import Image from "next/image";
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function WelcomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 lg:p-48">
      <div className="mb-6 py-20 relative flex flex-col place-items-center justify-center flex-1 w-full dark:bg-gradient-radial dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
        <p className="mb-3 text-xl">
          Benvenuto in
        </p>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.svg"
          alt="WMS3D logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <Link
          href="/setup?type=manual"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Crea manualmente{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            <ArrowForwardIcon />
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Crea il tuo magazzino su misura in pochi istanti.
          </p>
        </Link>

        <Link
           href="/setup?type=file"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Carica da file{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <ArrowForwardIcon />
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Visualizza e modifica il tuo magazzino con un semplice click.
          </p>
        </Link>
      </div>
    </main>
  );
}
