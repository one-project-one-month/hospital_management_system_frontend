import React from 'react'
import { useEffect,useState } from 'react'
import { Button} from '@/components/ui/button'
import axios from 'axios'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { setIsResponseComplete } from '@/store/patient/responseSlice'

const ListOfPatients = () => {
  const [datas, setDatas] = useState([]);
  const [clickStates, setClickStates] = useState(Array(datas.length).fill(false));
  const [patientList, setPatientList] = useState({
    Name :'',
    Id: null,
    BirthDate :''
  });
  
  const [newPatientList, setNewPatientList] = useState({
    name :'',
    address:'',
    email:'',
    phoneNumber :'',
    gender : '',
    bloodType : '',
    birthDate : ''
  });

  const [currentId, setCurrentId] = useState(null);

  const [currentIndex,setCurrentIndex] = useState(null);

  const[isEdit,setIsEdit] = useState (false);

  const[isClickNewPatient,setIsClickNewPatient] = useState(false);
  
  // const dispatch = useDispatch ();

  const fetchData = async () => {
    try {
      const {data:{data}} = await axios.get('https://hospital-management-system-backend-7fee.vercel.app/api/v1/patients');
      console.log(data);
      setDatas(data) 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clickHandler = (name, i) => {
    const newClickStates = [...clickStates];
    newClickStates[i] = !newClickStates[i];
    setClickStates(newClickStates);
  };

  const changeHandler = (e) => {
    const {name,value} = e.target;
    setPatientList({[name]: value})
  }

  const searchHandler = async () => {
    let numberedID = parseInt(patientList.Id);
    let data = {};
  
    if (patientList.Name) {
      data.name = patientList.Name;
    }
  
    if (!isNaN(numberedID)) {
      data.id = numberedID;
    }
  
    let jsonData = JSON.stringify(data);
  
    try {
      const response = await toast.promise(
        axios.post('https://hospital-management-system-backend-7fee.vercel.app/api/v1/patients/search', jsonData, {
          headers: {
            'Content-Type': 'application/json'
          }
        }),
        {
          pending: 'Searching in progress, please wait...',
          success: 'Search successful',
          error: 'Server error'
        }
      );
  
      console.log(response.data.data);
      setDatas(response.data.data);
    } catch (error) {
      console.log('Search failed:', error);
    }
  };
  
  const deleteItem = (i, id) => {
    const url = `https://hospital-management-system-backend-7fee.vercel.app/api/v1/patients/${id}`
    try {
      toast.promise(
        axios.delete(url),
        {
          pending: 'Deleting in progress, please wait...',
          success: 'Successfully deleted the patient',
          error: 'Failed to delete the patient'
        }
      ).then(response => {
        if (response.status === 200 || response.status === 204) {
          // const filteredItems = datas.filter(data => data.Id !== id);
          // setDatas(filteredItems);
          // setDeletedSuccessfully(true)
          fetchData();
          setClickStates(prevStates => {
            const newState = [...prevStates];
            newState[i] = !newState[i];
            return newState;
          });
        } else {
          console.error(response.status);
        }
      })
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };
  
  // useEffect(() => {
  //   if (response && datas.length === 0) {
  //     dispatch(setIsResponseComplete(true));
  //   }
  // }, [datas]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPatientList(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async() => {
    let isoBirthDate = newPatientList.birthDate ? new Date(newPatientList.birthDate ).toISOString() : '';
    let combinedDatas= {
      Name : newPatientList.name,
      Gender : newPatientList.gender,
      phoneNumber: newPatientList.phoneNumber,
      Email: newPatientList.email,
      BloodType: newPatientList.bloodType,
      BirthDate: isoBirthDate,
      Address: newPatientList.address
    }
    if (combinedDatas) {
      try {
        const url = `https://hospital-management-system-backend-7fee.vercel.app/api/v1/patients`;
        const response = await toast.promise(
          axios.post(url, combinedDatas),
          {
            pending: 'Adding in progress,please wait...',
            success: 'Successfully added a pateint',
            error: 'Server error'
          }
        );
        setNewPatientList({})
        if(response.status >= 200 && response.status < 300) {
        fetchData()
         setIsClickNewPatient(false)
        }
      }
      catch (error) {
        console.log(error);
        setIsClickNewPatient(false)
      }
    } 
  }

  const saveChanges = async (id,index) => {
    try {
    const url = `https://hospital-management-system-backend-7fee.vercel.app/api/v1/patients/${id}`; 
    let data ={};
    if (newPatientList.name) {
      data.Name = newPatientList.name;
  }
    if (newPatientList.address) {
      data.Address = newPatientList.address;
    }
    const response = await toast.promise(
      axios.put(url, data),
      {
        pending: 'Updating in progress,please wait...',
        success: 'Successfully updated a pateint',
        error: 'Server error'
      }
    )
      if(response.status >= 200 && response.status < 300) {
      fetchData()
      setIsEdit(false)
      setClickStates(prevStates => {
        const newState = [...prevStates];
        newState[index] = !newState[index];
        return newState;
      });
      }
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  const editItem = (i,id) => {
    setIsEdit(true)
    setCurrentId(id);
    setCurrentIndex(i)
  }

  const handleClickSave = () => {
    saveChanges(currentId,currentIndex); 
  };

  const addNewPatient = () => {
    setIsClickNewPatient(true)
  }

  const closeEdit = () => {
    setIsEdit(false);
      setClickStates(prevStates => {
        const newState = [...prevStates];
        newState[currentIndex] = !newState[currentIndex];
        return newState;
      });
  }

  return (
    <div className='w-full min-h-full bg-gray-100 px-[60px] py-[20px]'>
      <div className='bg-white w-full max-h-full rounded-xl p-8'>
        <div className='text-lg font-bold text-black'>Filter by</div>
        <div className='w-full flex items-center gap-5 mt-4'>
          <div className='w-full relative'>
            <input 
              type="text" 
              name="Name" 
              id="Name" 
              className={`w-full bg-white outline outline-gray-300 text-gray-900 
              text-sm rounded-lg focus:ring-blue-500 block pl-10 p-2.5  relative focus:outline-blue-500`}
               value={patientList.Name || ''}
               onChange={changeHandler}
              placeholder='Search by patient name'
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 absolute top-[12px] left-[15px] text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <div className='w-full relative'>
            <input 
              type="text" 
              name="Id" 
              id="Id" 
              className={`w-full bg-white outline outline-gray-300 text-gray-900 
              text-sm rounded-lg focus:ring-blue-500 block pl-10 p-2.5 relative focus:outline-blue-500`}
               value={patientList.Id || '' }
               onChange={changeHandler}
              placeholder='Search by patient ID'
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 absolute top-[12px] left-[15px] text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <div className='w-[60%] flex items-center justify-between gap-3'>
            <Button className='py-5 px-5 rounded-3xl'onClick={searchHandler}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </Button>
            <Button className='w-[60%] bg-white text-blue-500 outline outline-blue-500 hover:bg-white'
            onClick={addNewPatient}>
              Add new patient
            </Button>
          </div>
        </div>
      </div>
      <div className='bg-white h-full w-full rounded-xl p-6 mt-6'>
        <div className='w-full flex items-center  flex-wrap gap-5'>
          {!!datas && datas.map((data,index)=> (
            <div key={index} className='w-[245px] max-h-[200px] bg-white p-3 border border-gray-200 rounded-lg text-left space-y-4 '>
              <div className='flex items-center justify-between relative'>
                <div className='text-base font-semibold'>{data.Name}</div>
                <div className='w-[10%] flex items-center justify-center' onClick={()=>clickHandler(data.Name,index)} >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                  </svg>
                </div>
                {!!clickStates[index]&& <div className='absolute w-[60px] p-2 rounded-md top-5 right-2 text-xs flex flex-col gap-1 bg-white border border-gray-300'>
                      <p onClick={()=>editItem(index,data.Id)} className=' border-b pb-1 cursor-pointer'>Edit</p>
                      <p onClick={()=>deleteItem(index,data.Id)} className=' cursor-pointer'>Delete</p>
                    </div>
                }
              </div>
              <div className='text-xs text-gray-500'>{data.Address}</div>
              <div className='flex items-center justify-between text-sm'>
                  <div>Patient Id</div>
                  <div className='font-semibold'>{data.Id}</div>
                </div>
                <div className='flex items-center justify-between text-sm'>
                  <div>Blood Type</div>
                  <div className='font-semibold'>{data.BloodType}</div>
                </div>
                <div className='flex items-center justify-between text-sm'>
                  <div>Gender</div>
                  <div className='font-semibold'>{data.Gender}</div>
                </div>
              </div>
          ))}
        </div>
        <div className='border border-gray-100 w-full mt-6'></div>
        <div className='w-full flex items-center justify-between mt-3'>
          <div className='text-sm flex items-center gap-2'>
            <p className=''>Showing</p>
            <Select>
              <SelectTrigger className="w-[50px]">
                <SelectValue placeholder="1" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
              </SelectContent>
            </Select>
            <p>of 50 pages</p>
          </div>
          {isEdit && <div
            className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-md p-6 relative">
              <div className="flex items-center pb-3 border-b text-black">
                <h3 className="text-xl font-bold flex-1">Edit patient</h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 ml-2 cursor-pointer shrink-0 fill-black hover:fill-red-500"
                  viewBox="0 0 320.591 320.591" onClick={closeEdit}>
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <div className="my-6">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input value={newPatientList.name} onChange={handleChange} type='text' name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your new name" required />
                <label  className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                <input value={newPatientList.address} onChange={handleChange}  type='text' name='address' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your new Address" required />
              </div>
              <div className="border-t flex justify-end pt-6 space-x-4">
                <button type="button"
                  className="px-6 py-2 rounded-md text-black text-sm border-none outline-none bg-gray-200 hover:bg-gray-300 active:bg-gray-200" onClick={closeEdit}>Cancel</button>
                <button type="button"
                  className="px-6 py-2 rounded-md text-white text-sm border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600" onClick={handleClickSave}>Save</button>
              </div>
            </div>
          </div>
          }
          {isClickNewPatient && <div
            className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-md p-6 relative">
              <div className="flex items-center pb-3 border-b text-black">
                <h3 className="text-xl font-bold flex-1">Add new patient</h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 ml-2 cursor-pointer shrink-0 fill-black hover:fill-red-500"
                  viewBox="0 0 320.591 320.591" onClick={()=>setIsClickNewPatient(false)}>
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <div className="my-6">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input value={newPatientList.name} onChange={handleChange} type='text' name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your name" required />
                <label  className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                <input value={newPatientList.address} onChange={handleChange}  type='text' name='address' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your Address" required />
                <label  className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                <input value={newPatientList.phoneNumber} onChange={handleChange}  type='text' name='phoneNumber' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your phone number" required />
                <label  className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                <input value={newPatientList.email} onChange={handleChange}  type='text' name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your email address" required />
                <div className='w-full flex items-center gap-8 flex-wrap'>
                  <div className='w-[40%]'>
                    <label  className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                    <select id="gender" 
                      name="gender" className={`bg-gray-50 outline outline-gray-200  text-gray-900 
                    text-sm rounded-lg focus:ring-blue-500  block  focus:outline-blue-500 w-full p-2.5 border-r-8 border-transparent `} value={newPatientList.gender} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="other">Other</option>
                    </select>
                  </div>
                  <div className='w-[40%]'>
                    <label  className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Blood type</label>
                    <select id="bloodtype" 
                      name="bloodType" className={`bg-gray-50  outline outline-gray-200  text-gray-900 
                    text-sm rounded-lg focus:ring-blue-500  block  focus:outline-blue-500 w-full p-2.5  border-r-8 border-transparent `} value={newPatientList.bloodType} onChange={handleChange}>
                        <option value="">Select BloodType</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                        <option value="O">O</option>
                    </select>
                  </div>
                </div>
                <div className='w-[40%]'>
                    <label  className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                    <input 
                  type="date" 
                  name="birthDate" 
                  id="dob" 
                  className={`w-[80%] bg-gray-50 outline outline-gray-200 text-gray-900 
                  text-sm rounded-lg focus:ring-blue-500 block focus:outline-blue-500 p-2.5`}
                  value={newPatientList.birthDate}
                  onChange={handleChange}
                />
                </div>
              </div>
              <div className="border-t flex justify-end pt-6 space-x-4">
                <button type="button"
                  className="px-6 py-2 rounded-md text-black text-sm border-none outline-none bg-gray-200 hover:bg-gray-300 active:bg-gray-200" onClick={()=>setIsClickNewPatient(false)}>Cancel</button>
                <button type="button"
                  className="px-6 py-2 rounded-md text-white text-sm border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600" onClick={handleSubmit}>Save</button>
              </div>
            </div>
          </div>}
          <Button className='rounded-2xl bg-white border border-blue-500 text-blue-500 px-6'>Load more</Button>
        </div>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      </div>
    </div>
  )
}

export default ListOfPatients