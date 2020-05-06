import classes from './DummyProgressBar.module.css';
import React, { useState, useEffect } from 'react';

const DummyProgressBar = () =>{

    const [progress, setProgress] = useState(20);
	let progressStyle = {
		width: progress + '%'
	}


    let addProgress = ()=> {
        setProgress(progress+10)
        if(progress>=100){
            setProgress(0);
        }
    }

	return(
        <div onClick={()=>addProgress()} className={classes.wrapper}>
            <div className={classes.progress_bar}>
                <span className={classes.progress_bar_fill} style={progressStyle}></span>
            </div>
            {progress}%
        </div>
    )
}


export default DummyProgressBar;