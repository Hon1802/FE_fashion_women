// ** React Imports
import { Link } from "react-router-dom"
import React, { useEffect } from 'react';

// ** Reactstrap Imports
import { Button } from "reactstrap"
import source from "../../assets/error.svg"
const PageNotFound = () => {

    return (
        <div className="misc-wrapper">
            <Link className="brand-logo" to="/test/VanHon/fashion_women/ThoiTrangNu2/build/" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            </Link>
            <div className="misc-inner p-2 p-sm-3">
                <div className="w-100 text-center">
                    <h2 className="mb-1">Page Not Found 🕵🏻‍♀️</h2>
                    <p className="mb-2">Oops! 😖 The requested URL was not found on this server</p>
                    <Button tag={Link} to="/" color="primary" className="btn-sm-block mb-2">
                        Back to Home
                    </Button>
                    <img className="img-fluid" src={source} alt="Not authorized page" />
                </div>
            </div>
        </div>
    )
}
export default PageNotFound
