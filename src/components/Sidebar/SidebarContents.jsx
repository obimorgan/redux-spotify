// import { Link } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { BiSearch, BiLibrary, BiDownload } from "react-icons/bi";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

const SidebarContent = () => {
    return (
        <>
            <div className="sidebar_frame">
                <div className="flex-column sidebar_items">
                    <div>
                        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
                            className="spotify_logo" alt="spotify-logo" />
                    </div>
                    <div>
                        <GoHome /> <span>Home</span>
                    </div>
                    <div>
                        <BiSearch /> <span>Search</span>
                    </div>
                    <div>
                        <BiLibrary /> <span>Your Library</span>
                    </div>
                    <div>
                        <AiOutlinePlusSquare /> <span>Created Playlist</span>
                    </div>
                    <div>
                        <FcLike /><span>Liked Songs</span>
                    </div>
                    <section className="scroll_bar flex-column">
                        {/* mapp items here */}
                    </section>
                    <div className="sidebar_footer align-self-end ">
                        <BiDownload /><span>Install App</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SidebarContent