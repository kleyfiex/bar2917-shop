import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link className='logo' href='/'>
      <Image
        className='logo__img__footer'
        src='/img/logo.svg'
        alt='Bar2917 Logo'
        width={113}
        height={70}
      />
    </Link>
  )
}

export default Logo
