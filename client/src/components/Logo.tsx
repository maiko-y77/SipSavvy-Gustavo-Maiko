import Image from 'next/image'
const logoUrl = '/images/SipSavvy-Logo.svg'

export default function Logo() {
    return (
        <a href="/">
            <Image src={logoUrl} width={163.67} height={64} alt="SipSavvy Logo" />
        </a>
    )
}