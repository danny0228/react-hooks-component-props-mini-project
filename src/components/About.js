import React from "react";

function About(props) {
    return (
        <aside>
            {props.image ? <img src={props.image} alt="blog logo" /> : <img src="https://via.placeholder.com/215Links to an external site." alt="blog logo" />
            }
            <p>{props.about}</p>

        </aside>
    )
}

export default About;