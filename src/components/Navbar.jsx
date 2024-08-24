import React from "react";

function Navbar() {
    return (
        <div className="w-full">
            <ul className="flex justify-start gap-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">Schedule</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar;