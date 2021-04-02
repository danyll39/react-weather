import React from 'react'
import { NavLink } from 'react-router-dom'


const ReposNav = () => {
    return (
        <div activeClassName="reposNav" className="reposNav">
            <NavLink activeClassName="active" to="/overview">Overview</NavLink>
            <NavLink activeClassName="active" to="/repos">Repos</NavLink>
            <NavLink activeClassName="active" to="/followers">Followers</NavLink>


        </div>
    )
}


export default ReposNav