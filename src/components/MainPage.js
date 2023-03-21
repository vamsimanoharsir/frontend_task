import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai#AiOutlineSearch'
import { BsFillPeopleFill } from 'react-icons/bs'
import { BiCube } from 'react-icons/bi'
import { HiOutlineInbox } from 'react-icons/hi'
import { BsSun } from 'react-icons/bs'
import '../components/MainPage.css'

//used a functional component to leverage React hooks
//the component runs on PORT number 3003 set in package.json
//before running the application, it is necessary to install all the dependencies using npm install command
function MainPage(props) {
    var i = 0;
    //arrays related to the details of the employees
    const jobsArray = ['manager', 'sde', 'analyst', 'hr', 'ca', 'writer', 'senior', 'fresher']
    const namesArray = ['VM', 'RV', 'RK', 'MM', 'JR', 'PV', 'DB', 'HK']
    const firstNameArray = ['vamsi', 'rahul', 'rama', 'manoj', 'jeevan', 'prasant', 'dk', 'hari']

    var [search, setSearch] = useState('')//holds the searched name of the employee
    var [dark, setDark] = useState(false);//to check for the color mode of the application
    let iconStyles = { color: "blue", fontSize: "1.1em" };
    let iconStyleForMode = { color: "blue", fontSize: "1.1em" };

    var changeColorMode = () => {
        //toggle the mode every time change mode button is clicked to interchange the css properties
        setDark((dark) => !dark)
    }

    //this code is free from code smells as it is simple yet efficient application, we have not used MapStateToProps, useEffect and similar complex functionalities
    return (
        <div>
            <div id="main-wrap">

                {/* all css stylings can be found in MainPage.css file */}
                {/* to implement the sideBar that has Team Members, Products, Inbox buttons  */}
                {/* used react-icons package for better UI/UX experience */}

                <div id="sidebar" style={{ backgroundColor: dark ? "white" : "#111827" }}>
                    <div className='sideBarElements' style={{ paddingTop: "100px" }}>
                        <div><BsFillPeopleFill style={iconStyles} />
                            <button className='btn' style={{ height: "30px", width: "160px", backgroundColor: "#2563EB", color: "white" }}>Team Members</button><br /></div>
                        <div><BiCube style={iconStyles} /><button className='btn' style={{ height: "30px", width: "160px", backgroundColor: dark ? "white" : "#111827" }}>Product</button><br /></div>
                        <div><HiOutlineInbox style={iconStyles} /><button className='btn' style={{ height: "30px", width: "160px", backgroundColor: dark ? "white" : "#111827" }}>Inbox</button></div></div>
                </div>
                <div id="content-wrap" style={{ backgroundColor: dark ? "#f6f4f4" : "#1F2937" }}>

                    {/* to implement the header section that has Title and a search bar to search for an employee */}
                    <div id="info-wrap">
                        <div class="info" style={{ backgroundColor: dark ? "white" : "#111827", color: dark ? "#2563EB" : "white", alignItems: "center" }}>Team Members</div>
                        <div class="info" style={{ backgroundColor: dark ? "white" : "#111827" }}>
                            <input type='search' style={{ height: "23px", backgroundColor: dark ? "white" : "#6B7280", alignItems: "center" }} placeholder='search while you type' onChange={(e) => { setSearch(e.target.value) }} />
                            <div className='searchbutton'><AiOutlineSearch style={iconStyles} /></div>
                        </div>
                    </div>

                    {/* displaying the entire list of employees until the search is completed */}
                    {/* displaying the information related to seven employees */}
                    {!(firstNameArray.includes(search.toLowerCase())) ? <div className='employeeDiv'>
                        <div className='profile1' style={{ backgroundColor: dark ? "white" : "darkblue" }}>
                            <div className='profile2'>
                                <div className='profile3' style={{ display: "flex" }}>
                                    <span className='initialsDiv'>VM
                                    </span>
                                    <span className='nameDiv' style={{ color: dark ? "black" : "white" }}>vamsi kumar
                                    </span>
                                    <span className='designationDiv' style={{ color: dark ? "black" : "white" }}>manager
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='profile1' style={{ backgroundColor: dark ? "white" : "darkblue" }}>
                            <div className='profile2'>
                                <div className='profile3' style={{ display: "flex" }}>
                                    <span className='initialsDiv'>RV
                                    </span>
                                    <span className='nameDiv' style={{ color: dark ? "black" : "white" }}>rahul Varma
                                    </span>
                                    <span className='designationDiv' style={{ color: dark ? "black" : "white" }}>sde
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='profile1' style={{ backgroundColor: dark ? "white" : "darkblue" }}>
                            <div className='profile2'>
                                <div className='profile3' style={{ display: "flex" }}>
                                    <span className='initialsDiv'>RK
                                    </span>
                                    <span className='nameDiv' style={{ color: dark ? "black" : "white" }}>rama kanth
                                    </span>
                                    <span className='designationDiv' style={{ color: dark ? "black" : "white" }}>analyst
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='profile1' style={{ backgroundColor: dark ? "white" : "darkblue" }}>
                            <div className='profile2'>
                                <div className='profile3' style={{ display: "flex" }}>
                                    <span className='initialsDiv'>MM
                                    </span>
                                    <span className='nameDiv' style={{ color: dark ? "black" : "white" }}>manoj desai
                                    </span>
                                    <span className='designationDiv' style={{ color: dark ? "black" : "white" }}>HR
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='profile1' style={{ backgroundColor: dark ? "white" : "darkblue" }}>
                            <div className='profile2'>
                                <div className='profile3' style={{ display: "flex" }}>
                                    <span className='initialsDiv'>JR
                                    </span>
                                    <span className='nameDiv' style={{ color: dark ? "black" : "white" }}>jeevan reddy
                                    </span>
                                    <span className='designationDiv' style={{ color: dark ? "black" : "white" }}>CA
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='profile1' style={{ backgroundColor: dark ? "white" : "darkblue" }}>
                            <div className='profile2'>
                                <div className='profile3' style={{ display: "flex" }}>
                                    <span className='initialsDiv'>PV
                                    </span>
                                    <span className='nameDiv' style={{ color: dark ? "black" : "white" }}>Prasant rao
                                    </span>
                                    <span className='designationDiv' style={{ color: dark ? "black" : "white" }}>Writer
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='profile1' style={{ backgroundColor: dark ? "white" : "darkblue" }}>
                            <div className='profile2'>
                                <div className='profile3' style={{ display: "flex" }}>
                                    <span className='initialsDiv'>DB
                                    </span>
                                    <span className='nameDiv' style={{ color: dark ? "black" : "white" }}>dk bose
                                    </span>
                                    <span className='designationDiv' style={{ color: dark ? "black" : "white" }}>SSE
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='profile1' style={{ backgroundColor: dark ? "white" : "darkblue" }}>
                            <div className='profile2'>
                                <div className='profile3' style={{ display: "flex" }}>
                                    <span className='initialsDiv'>HK
                                    </span>
                                    <span className='nameDiv' style={{ color: dark ? "black" : "white" }}>hari kiran
                                    </span>
                                    <span className='designationDiv' style={{ color: dark ? "black" : "white" }}>Fresher
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div> :
                        <div className='employeeDiv'>

                            {/* displaying the details of an employee if the search was a success */}
                            {firstNameArray.forEach(element => {
                                if (element === search) { 
                                    //logging the information on to the console
                                    console.log('employee found with the searched name',element,' ',search);
                                    i = firstNameArray.indexOf(element)
                                 }
                            })}
                            <div className='profile1' style={{ backgroundColor: dark ? "white" : "darkblue" }}>
                                <div className='profile2'>
                                    <div className='profile3' style={{ display: "flex" }}>
                                        <span className='initialsDiv'>{namesArray[i]}
                                        </span>
                                        <span className='nameDiv' style={{ color: dark ? "black" : "white" }}>{firstNameArray[i]}
                                        </span>
                                        <span className='designationDiv' style={{ color: dark ? "black" : "white" }}>{jobsArray[i]}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>

            {/* css for the footer at left bottom of the web application */}
            <div className='footer-css'>
                <div id="footer"><button className='btn' style={{ height: "30px", width: "180px", backgroundColor: dark ? "white" : "#2563EB", color: dark ? "#2563EB" : "white" }} onClick={changeColorMode}>{dark ? 'Switch to dark mode' : 'Switch to light mode'}</button><BsSun style={iconStyleForMode} /></div>
            </div>
        </div>
    );
}

export default MainPage;