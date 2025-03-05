export default function Nav() {
    return (
        <>
            <div className="nav px-25">
                <div className="list">
                    <ul className="flex gap-3">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </li>
                        <li className="text-pink-400 font-bold">
                            <a href="">Your recipe Box</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}