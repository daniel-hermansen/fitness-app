import React from 'react';
import ReactDom from 'react-dom';
import NavBar from '../Components/Nav/navbar';
import './welcomePage.css';



function WelcomePage(){
    return(
        <div>
            <NavBar/>
            <body>
                <img class="banner" src={require('../Images/homeBanner.jpg').default} alt="Woman exercising"></img>
                <h4 id= "quick-start">Quick Start</h4>
                <section id="todaysworkout">
                    <h4>Today's Workout</h4>
                    <div class="workout-card">
                        <div id="workout-title">
                            <p>Legs & Back (45 min)</p>
                            <button>Start Workout</button>
                        </div>
                        <ul id="todays-exercise-list">
                            <div> 
                                <li>Standard Squats</li>
                                <li>Reverse Lunges</li>
                                <li>Wide Front Pull Ups</li>
                            </div>
                            <div>
                                <li>Romanian Deadlift</li>
                                <li>80/20 Squats</li>
                                <li>Reverse Grip Pull Ups</li>
                            </div>
                            <div>
                                <li>Wall Sits</li>
                                <li>0/45/90 Lunges</li>
                                <li>Switch Grip Pull Ups</li>
                            </div>
                        </ul>
                    </div>
                </section>

                <section id="myworkouts">
                    <h4>My Workouts</h4>
                    <div id="myworkout-cards">
                        <div class="myworkout-card">
                            <p>Back & Biceps (52 min)</p>
                            <ul>
                                <li>Front Curls</li>
                                <li>Full Supination Curls</li>
                                <li>Back Flys</li>
                            </ul>
                        </div>
                        <div class="myworkout-card">
                            <p>Shoulders & Arms (44 min)</p>
                            <ul>
                                <li>Standing Shoulder Press</li>
                                <li>Static Arm Curls</li>
                                <li>Tricep Kickbacks</li>
                            </ul>
                        </div>
                        <div class="myworkout-card">
                            <p>Core (45 min)</p>
                            <ul>
                                <li>Bicycles</li>
                                <li>Mason Twist</li>
                                <li>Back Extensions (Superman)</li>
                            </ul>
                        </div>
                        <div class="myworkout-card">
                            <p>View All</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h4>Additional Links</h4>
                    <div id="bottom-cards">
                        <div class="card-links">
                            <p>Log A Workout</p>
                        </div>
                        <div class="card-links">
                            <p>Create A Workout</p>
                        </div>
                        <div class="card-links">
                            <p>Update Body <br/> Measurements</p>
                        </div>
                    </div>
                </section>
            </body>
        </div>
        
    )
}

export default WelcomePage; 