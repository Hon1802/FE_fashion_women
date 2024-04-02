import ModalVideo from "react-modal-video";
import React, { useState, useEffect } from 'react';
import { Grow } from "@material-ui/core";

const PlayVideo = (props) => {
    return(<>
        <div>
            <Grow in={props.isOpen} mountOnEnter unmountOnExit>
                <ModalVideo
                    chanel="youtube"
                    autoplay
                    loop="1"
                    isOpen={true}
                    videoId="AXOfw9x-hVw"
                    onClose={props.close}
                />
            </Grow>
        </div>
    </>);
};

export default PlayVideo;
