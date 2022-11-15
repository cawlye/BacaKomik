import Link from 'next/link'

export default function Header() {
  return (
    <div className="p-3 flex justify-between items-center bg-sky-500 text-white">
      <div className="">
        <Link href="/">
          <a className="text-xl font-bold text-black-500 uppercase text-center my-3">Cawlye Komik</a>
        </Link>
      </div>
      <div className=""></div>
    </div>
  )
}
