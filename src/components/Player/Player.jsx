import "./Player.css"
import { AiOutlinePlusSquare } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { IoShuffleOutline } from "react-icons/io5";
import { MdSkipPrevious, MdSkipNext, MdQueueMusic, MdDevices } from "react-icons/md";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsArrowRepeat, BsVolumeDown, BsArrowsAngleExpand } from "react-icons/bs";
import { GiMicrophone } from "react-icons/gi";
import ProgressBar from 'react-bootstrap/ProgressBar'
import { IconContext } from 'react-icons'

const Player = () => {
    return (
        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "20px" }}>
            <div className="player d-flex ">
                <div className="left_section d-flex align-items-center px-2">
                    <img src="data:image/jpeg;base64,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" alt="img" />
                    <div className="flex-column ml-2">
                        <div className="artist_name">
                            Track title
                        </div>
                        <div>
                            Artist Name
                        </div>
                    </div>
                    <div className="d-flex align-items-center ml-1">
                        <div className="mx-3" ><AiOutlinePlusSquare /></div>
                        <div><FcLike /></div>
                    </div>
                </div>
                <div className="center_section d-flex justify-content-center align-items-center">
                    <div className="flex-collumn">
                        <div className="d-flex justify-content-center align-items-center">
                            <div>
                                <IoShuffleOutline />
                            </div>
                            <div>
                                <MdSkipPrevious />
                            </div>
                            <div>
                                <AiFillPlayCircle />
                            </div>
                            <div>
                                <MdSkipNext />
                            </div>
                            <div>
                                <BsArrowRepeat />
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <IoShuffleOutline />
                            </div>
                            <div className="progress-bar bg-dark mx-2">
                                <ProgressBar now={60} />
                            </div>
                            <div>
                                <AiFillPlayCircle />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="right_section d-flex align-items-center justify-content-between pr-3">
                    <div><GiMicrophone /></div>
                    <div><MdQueueMusic /></div>
                    <div><MdDevices /></div>
                    <div><BsVolumeDown /></div>
                    <div className="volume_progress_bar"><ProgressBar /></div>
                    <div> <BsArrowsAngleExpand /></div>
                </div>
            </div>
        </IconContext.Provider>
    )
}
export default Player