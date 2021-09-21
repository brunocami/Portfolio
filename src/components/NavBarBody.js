import React from 'react'

const NavBarBody = () => {
    return (
        <div className="h-75 bg-dark position-relative">
            <div className="position-absolute top-50 start-50 translate-middle w-50">
                <div class="col-1 col-lg-1" style={{width: "100%"}}>
                    <button class="btn btn-outline-primary ml-2" type="button">Button</button>
                    <button class="btn btn-outline-primary ml-2"  type="button">Button</button>
                </div>
            </div>
        </div>
    )
}

export default NavBarBody
