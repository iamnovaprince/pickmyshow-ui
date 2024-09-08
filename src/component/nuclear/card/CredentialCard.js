import React from "react";
import Profile_photo from "../../../assets/Profile_photo.jpg";

const CredentialCard = ({ title, value }) => {
    return (
        <>
            <h1 style={{fontSize:"28px", fontWeight:"600", textalign:"",color:"#EEEFEE"}}>{title} Panel</h1>
            <img src={Profile_photo} alt="no_profile_photo" style={{ width:"180px", height:"fit-content", borderRadius:"100px", margin:"25px 0px 20px 0px"}} />
            <div style={{fontSize:"14px", color:"#EEEEEE", fontWeight:"500", marginLeft:"10px"}} >
                <div style={{marginBottom:"8px"}}>
                    <span style={{fontWeight:"700", color:"#000000"}}>{title} Name: </span> <span>{value.name}</span>
                </div>

                <div style={{marginBottom:"8px"}}>
                    <span style={{fontWeight:"700", color:"#000000"}}>{title} Email: </span> <span>{value.email}</span> {/* Corrected value.email */}
                </div>

                <div style={{marginBottom:"8px"}}>
                    <span style={{fontWeight:"700", color:"#000000"}}>{title} Password:</span> <span>{value.password}</span>
                </div>
            </div>
        </>
    );
};

export default CredentialCard;
