import React from 'react'
import Sidebar from '../components/Sidebar'
import ProfileStaff from '../components/ProfileStaff'
import Navbar from '../components/Navbar'


const ProfileStaffPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex mt-[9.4rem]">
        <div className="h-auto md:h-[100vh] border-r border-[#ccc] px-0">
          <Sidebar />
        </div>

        <div className="h-[100vh] w-full overflow-auto flex-2 px-0 md:px-2 pt-3">
          <ProfileStaff />
        </div>
      </div>
    </>
  )
}

export default ProfileStaffPage