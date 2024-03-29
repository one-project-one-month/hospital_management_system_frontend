// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line react/prop-types
const RoomInput = ({userData,setUserData,rooms}) => {

  const [selectedRoom , setSelectedRoom]= useState(null)

    const handleRooms = (e) =>{
      const room = e.target.value;
      // eslint-disable-next-line react/prop-types
      const selectRoom = rooms.find((r)=>{
        return r.Name = room;
      })
      if(selectRoom){
        setSelectedRoom(selectRoom.Id)
        setUserData({
          ...userData,RoomId :selectedRoom
        })
      }
    }
  return (
    <div>
         <div className="relative w-[100%] h-[80px] px-4 mt-2">
            <label className="font-bold text-xl text-red-400">Room No</label>
            <div className=" relative h-[40px] mt-2">
              <input
                type="text"
                className="border w-[100%] h-[100%] p-2 rounded-md text-black"
                name="roomName"
                onChange= {handleRooms}
                placeholder="Room No"
              />
            </div>
          </div>
    </div>
  )
}

export default RoomInput