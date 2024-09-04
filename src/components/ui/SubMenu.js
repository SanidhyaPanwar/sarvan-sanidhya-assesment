import React from 'react'
import SubMenuButton from '../LeafNodes/SubMenuButton'


const SubMenu = () => {
    return (
        <div className='subMenu'>
            <SubMenuButton menuItem={'collection'} />
            <SubMenuButton menuItem={'type'} />
            <SubMenuButton menuItem={'year'} />
            <SubMenuButton menuItem={'virtual gallery'} />
        </div>
    )
}

export default SubMenu