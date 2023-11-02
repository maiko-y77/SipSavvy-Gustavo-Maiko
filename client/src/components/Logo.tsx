import Image from 'next/image'
const logoUrl = '/images/SipSavvy-Logo.svg'
const adminLogoUrl = '/images/AdminSipSavvy-Logo.svg'

export function Logo() {
    return (
        <a href="/">
            <Image src={logoUrl} width={163.67} height={64} alt="SipSavvy Logo" />
        </a>
    )
}

export function AdminLogo() {
    return (
        <a href="/">
            <Image src={adminLogoUrl} width={163.67} height={64} alt="SipSavvy Logo" />
        </a>
    )
}