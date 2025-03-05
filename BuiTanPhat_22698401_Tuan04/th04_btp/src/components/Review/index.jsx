export default function Review() {
    return (
        <>
            <div className="main px-30">
                <div className="title mt-10">
                    <h5 className="text-3xl">Emma Gonzales's Recipe Box</h5>
                </div>
                <div className="content flex gap-10 my-5">
                    <div className="avatar">
                        <img className="w-70" src="/avatar.png" alt="" />
                    </div>
                    <div className="desc">
                        <div className="text">
                            <span>
                                Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
                            </span>
                        </div>
                        <div className="flex gap-5 mt-5">
                            <span className="bg-gray-300 text-pink-400 p-1 rounded-md">6.5 Subscribes</span>
                            <a className="bg-pink-500 text-white p-1 px-2 rounded-md" href="">
                                Share
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}