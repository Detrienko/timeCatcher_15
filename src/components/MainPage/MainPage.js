import React from 'react';
import classes from './MainPage.module.css';
import DummyStopWatch from '../../containers/DummyStopWatch/DummyStopWatch';
import DummyProgressBar from '../UI/DummyProgressBar/DummyProgressBar';

const MainPage = () => {

	return(
		<div className={classes.mainPageWrapper}>
			<div className={classes.mainPageLeft}>
				<h2 className={classes.mainText}>With this app you can track your time of doing anything, just sign up and start right now</h2>
				<button className={classes.signUpBtn}>SIGN UP</button>
			</div>
		</div>
		)
}

export default MainPage;