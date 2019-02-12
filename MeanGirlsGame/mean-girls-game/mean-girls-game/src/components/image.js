import React from "react";


function Image(props) {
    return (
        <div >
            <div>
                <img src={props.url} class="rounded" alt={props.name}  />
            </div>
        </div>
    );
}

export default Image;



