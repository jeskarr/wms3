import { cookies } from 'next/headers'
import Render3D from './render'

export default function Wms() {
  const cookieStore = cookies();

  const name = cookieStore.get('name').value;
  const x = cookieStore.get('x').value;
  const y = cookieStore.get('y').value;
  const z = cookieStore.get('z').value;

  return (
    <div className='w-screen h-screen flex flex-col justify-start'>
      <header className="p-3 text-2xl font-medium text-white dark:bg-gray-800">
        {name}
      </header>
      <main className="flex-1 bg-gray-300 dark:bg-gray-600">
        <Render3D x={x} y={y} z={z} />
      </main>
    </div>
  )
}