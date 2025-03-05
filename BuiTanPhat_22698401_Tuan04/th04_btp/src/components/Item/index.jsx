export default function Item() {
    return (
        <>
            <div className="item my-5">
                <div className="img">
                    <img className="w-70 h-40" src="/dish.png" alt="" />
                </div>
                <div className="main mt-3 flex gap-5 items-center">
                    <div className="name">
                        <span>Italian - Style Tomato Salad</span>
                    </div>
                    <div className="icon border border-pink-500 inline-block p-1 rounded-full">
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="time text-pink-400">
                    <span>14 minutes</span>
                </div>
            </div>
        </>
    )
}