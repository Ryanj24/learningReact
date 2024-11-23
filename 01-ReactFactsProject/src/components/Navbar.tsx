import ReactLogo from '../assets/React-icon.svg'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 p-10'>
        <div className='flex items-center space-x-2'>
          <img src={ReactLogo} alt='React Logo SVG' className='h-10 w-10'/>
          <h1 className='text-[#61DBFB] text-3xl'>React Facts</h1>
        </div>
    </nav>
  )
}

export default Navbar