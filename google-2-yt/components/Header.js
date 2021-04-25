import { SearchIcon, MicrophoneIcon, XIcon } from "@heroicons/react/solid"

import Image from "next/image";
import { useRouter } from "next/router"
import { useRef } from "react"

import Avatar from "./Avatar"
import HeaderOptions from "./HeaderOptions"



function Header() {
    const router = useRouter()
    const searchInputRef = useRef(null)

    const search = (e) => {
        e.preventDefault()
        const term = searchInputRef.current.value;

        if (!term) return

        router.push(`/search?term=${term}`)
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    height={40}
                    width={120}
                    onClick={() => router.push("/")}
                    className="cursor-pointer"
                />
                <form className="flex flex-grow px-6 py-3 ml-10 border boder-gray-200 rounded-full flex-grow shadow-lg max-w-3xl items-center">
                    <input ref={searchInputRef} className="flex-grow w-full focus:outline-none " type="text" />
                    <XIcon
                        className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                        onClick={() => (searchInputRef.current.value = "")}
                    />
                    <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                    <button hidden type="submit" onClick={search} >Search</button>
                </form>
                <Avatar className="ml-auto" url={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fbloximages.newyork1.vip.townnews.com%2Fkmov.com%2Fcontent%2Ftncms%2Fassets%2Fv3%2Feditorial%2F0%2Fd1%2F0d1a16ac-98e5-11eb-b533-2fe2e5930157%2F606fcc65335dd.image.png%3Fcrop%3D360%252C360%252C140%252C0%26resize%3D1200%252C1200%26order%3Dcrop%252Cresize&imgrefurl=https%3A%2F%2Fwww.kmov.com%2Fnews%2Fwash-u-to-hold-in-person-graduation-nba-hall-of-famer-will-give-commencement-speech%2Farticle_753e36ec-98e4-11eb-9c40-03f8261719eb.html&tbnid=N39VV0Xk9HfSuM&vet=10CAkQxiAoAWoXChMI8OjT846a8AIVAAAAAB0AAAAAEAc..i&docid=xe5bdiy40TdiFM&w=1200&h=1200&itg=1&q=person&ved=0CAkQxiAoAWoXChMI8OjT846a8AIVAAAAAB0AAAAAEAc"} />
            </div>
            {/* HeaderOptions */}
            <HeaderOptions />
        </header>
    )
}

export default Header
