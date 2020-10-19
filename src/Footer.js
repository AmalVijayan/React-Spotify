import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
// import Pau-seCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img
                className="footer__albumLogo" 
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/de96a427-aecc-41f3-8e1b-3a425360d246/d9pe5rz-05996e4b-9187-45b8-90b2-35b7fe993492.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGU5NmE0MjctYWVjYy00MWYzLThlMWItM2E0MjUzNjBkMjQ2XC9kOXBlNXJ6LTA1OTk2ZTRiLTkxODctNDViOC05MGIyLTM1YjdmZTk5MzQ5Mi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ._Q14pi8i2P7Ylf0gd4sFdmxXDJpLVu_PsbNNoVlJghk" alt="" />
                <div className="footer__songInfo">
                    <h4>Song</h4>
                    <p>singer</p>
                </div>
            </div>
            <div className="footer__middle">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
