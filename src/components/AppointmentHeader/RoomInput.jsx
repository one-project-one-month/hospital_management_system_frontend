// eslint-disable-next-line no-unused-vars
import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineXMark } from "react-icons/hi2";
// eslint-disable-next-line react/prop-types
const RoomInput = ({handleRoomSearch,roomInput,handleRoomClear,handleRoom,isroom,rooms,handleRoomInput}) => {
  return (
    <div>
         <div className="relative w-[100%] h-[80px] px-4 mt-2">
            <label className="font-bold text-xl text-red-400">Room No</label>
            <div className=" relative h-[40px] mt-2">
              <input
                type="text"
                className="border w-[100%] h-[100%] p-2 rounded-md text-black"
                onChange={handleRoomSearch}
                name="roomId"
                value={roomInput}
                placeholder="Room No"
              />
              <div className="absolute top-2 right-6 cursor-pointer flex items-center justify-center">
                <HiOutlineXMark
                  size={25}
                  onClick={handleRoomClear}
                  className={`${roomInput === "" ? "hidden" : "block"}`}
                />
                <MdKeyboardArrowDown size={30} onClick={handleRoom} />
              </div>
            </div>
            <div
              className={`${
                isroom
                  ? "block border absolute w-[90%] h-[100px] overflow-y-scroll text-center bg-black z-10"
                  : "hidden"
              }`}
            >
              {rooms
                // eslint-disable-next-line react/prop-types
                .filter((item) => {
                  return roomInput.toString() === ""
                    ? item
                    : item.No.toString().includes(roomInput);
                })
                .map((room, index) => {
                  return (
                    <option
                      value={room.No}
                      key={index}
                      className="border cursor-pointer text-xl font-semibold text-white hover:bg-gray-500"
                      onClick={() => handleRoomInput(room.No)}
                    >
                      {room.No}
                    </option>
                  );
                })}
            </div>
          </div>
    </div>
  )
}

export default RoomInput