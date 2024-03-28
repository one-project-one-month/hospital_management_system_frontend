
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import "./style.module.css";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { UserFetch } from "@/services/UseFetch"
import { useState } from "react"
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";


 const Disease = () => {


  const [search , setSearch] = useState('');

  const [addDisease , setAddDiseae] = useState([]);
  const [addDiseaseData , setAddDiseaeData] = useState({
    "Id": 0,
    "Name": ""
   
  });

 

 //const url = "http://localhost:3000/diseases";
 //const url="https://hospital-management-system-backend.vercel.app/api/v1/appointments";
 const url="https://hospital-management-system-backend.vercel.app/api/v1/diseases";
 

 // eslint-disable-next-line no-unused-vars
 //const {data , error , loading} = UserFetch(url);
 
 const fetchData = async() =>{
  await axios.get(url)
  .then(res =>{
    setAddDiseae(res.data.data)
  })
}
useEffect(()=>{
  fetchData()
},[])




 const [currentPage, setCurrentPage] = useState(1);
 const [itemPerPage] = useState(5);

 const [pageNumberLimit] = useState(5);
 const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
 const [miniPageNumberLimit, setMiniPageNumberLimit] = useState(0);
 const pages = [];

 const navigate = useNavigate();

 for (let i = 1; i <= Math.ceil(addDisease.length / itemPerPage); i++) {
   pages.push(i);
 }
 const lastIndex = currentPage * itemPerPage;
 const firstIndex = lastIndex - itemPerPage;


  const currentIndex=addDisease.slice(firstIndex, lastIndex);
 


 

 const pageClick = (e) => {
   setCurrentPage(Number(e.target.id));
 };

 const prevClick = () => {
   setCurrentPage((prev) => prev - 1);
   if ((currentPage - 1) % pageNumberLimit == 0) {
     setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
     setMiniPageNumberLimit(miniPageNumberLimit - pageNumberLimit);
   }
 };
 const nextClick = () => {
   setCurrentPage((prev) => prev + 1);
   if (currentPage + 1 > maxPageNumberLimit) {
     setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
     setMiniPageNumberLimit(miniPageNumberLimit + pageNumberLimit);
   }
 };

 const filterData = currentIndex
 .filter((u)=>{
   return search.toLowerCase() === '' ? u : u.Name.toLowerCase().includes(search)
 })


 const handleEdit = async(el)  => {

//  alert(`${url}/${el}`);

 await axios.get(`${url}/${el}`).then((res)=>
   // myForm.current.reset()
   setAddDiseaeData(res.data.data)
   
  )
 // window.location.reload()
};

const handleDelete = async (el) => {
  const confirm = window.confirm("Are you want to delete?");
  if (confirm) {
   // alert(el);
   await axios
      .delete(url + "/" + el)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
 window.location.reload()
 //navigate('/Disease')
};


const handleChange = (e) =>{
  setAddDiseaeData({
    ...addDiseaseData,[e.target.name]:e.target.value
  })
}


const handelAdd =  async(e) =>{
  e.preventDefault();

  let data = JSON.stringify({
    id: addDiseaseData.Id,
    name: addDiseaseData.Name//,
   // description: addDiseaseData.Description
  });

  if(addDiseaseData.Id!=0)
  {
    console.log("1");
    


  await  axios.put(url+"/"+addDiseaseData.Id,data,{headers:{"Content-Type" : "application/json"}}).then(res=>{
    
     window.location.reload()
     // navigate('/Disease')
    })
    .catch(err =>{
      console.log(err.message)
    })
  }
  else
  {
    console.log("2");
   
  
  await axios.post(url,data,{headers:{"Content-Type" : "application/json"}}).then(res=>{
       window.location.reload()
    //  navigate('/Disease')
    })
    .catch(err =>{
      console.log(err.message)
    })
  }
  
 
};  
  return (
    <>
    <Card>
  <CardHeader>
    <CardTitle> <h1>Disease Setup</h1></CardTitle>
    <CardDescription></CardDescription>
  </CardHeader>
  <hr></hr>
  <CardContent>
  <form   className="mx-auto flex items-center justify-center flex-col mt-8" onSubmit={handelAdd}> 
  <div>       
  <Label htmlFor="diseaseid">Disease ID</Label>
      <Input disabled="true" name="Id" value={addDiseaseData.Id} onChange={handleChange}></Input>
    
      <Label htmlFor="diseaseName">Disease Name</Label>
      <Input  placeholder="Disease Name" name="Name" value={addDiseaseData.Name} onChange={handleChange} ></Input><br/>
      
      <input type="submit" value="Submit" className="px-2 py-1 bg-blue-400 w-[100%] m-4 cursor-pointer rounded-md"/>
    </div> 
    </form> 
   {/*  {loading && <h1>Loading...</h1>}
    {error && <h1>Something went wrong</h1>} */}
    <div className="flex px-4 items-center m-4">
          <h2 className="font-semibold">Showing <span className="font-bold text-xl text-blue-500">{currentIndex.length}</span> Diseases</h2>
          <input type="text" placeholder="Search..." className="border ml-4 w-[300px] px-2 py-1 rounded-md dark:text-black" onChange={(e)=> setSearch(e.target.value)}/>
        </div>
        <Table >
  <TableCaption></TableCaption>
  <TableHeader>
    <TableRow>
    <TableHead className="text-center w-[400px]">Disease ID</TableHead>
      <TableHead className="text-center w-[400px]">Disease Name</TableHead>
      <TableHead className="text-right"></TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {
            filterData
              .map((d) => {
                return (
                  <TableRow
                    className="border hover:bg-gray-100 text-center font-medium text-sm"
                    key={d.Id}
                  >
                      <TableCell className="px-6 py-2">{d.Id}</TableCell>
                    <TableCell className="px-6 py-2">{d.Name}</TableCell>
                    <TableCell className="px-6 py-2 flex items-center justify-center">                     
                    <MdEdit
                        className="text-blue-400 mx-2"
                        size={20}
                        onClick={() => handleEdit(d.Id)}
                      />
                      <MdDelete
                        className="text-blue-400 mx-2"
                        size={20}
                        onClick={() => handleDelete(d.Id)}
                      />
                    </TableCell>
                    {/* <TableCell className="text-right"> <Button>Edit</Button> <Button>Delete</Button></TableCell> */}
                    </TableRow> 
                );
              })}

   
      
      
    
    {/* <TableRow>
      <TableCell className="font-medium">လေဖက်နာ</TableCell>
      <TableCell className="text-right"> <Button>Edit</Button> <Button>Delete</Button></TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">သွေးတိုး</TableCell>
      <TableCell className="text-right"> <Button>Edit</Button> <Button>Delete</Button></TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">ဆီးချို</TableCell>
      <TableCell className="text-right"> <Button>Edit</Button> <Button>Delete</Button></TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">ဂေါက် ရောဂါ</TableCell>
      <TableCell className="text-right"> <Button>Edit</Button> <Button>Delete</Button></TableCell>
    </TableRow>*/}
   </TableBody>
</Table> 

<div className={`${currentIndex.length=== 0 ? 'hidden':"flex items-center justify-start px-8 my-8 w-[100%] h-[40px] shadow-md fixed bottom-0 bg-blue-600`"}`}>
        <div className="pagination">
        <Link to="../" className={buttonVariants({ variant: "bg-blue-400" })}>Back</Link>
          <button
            type="button"
            className="py-1 w-[40px] mr-1 cursor-pointer rounded-sm bg-blue-400 text-black dark:bg-black dark:text-black"
            onClick={prevClick}
            disabled={currentPage === pages[0] ? true : false}
          >
            Prev
          </button>
          {pages.map((p, index) => {
            if (p < maxPageNumberLimit + 1 && p > miniPageNumberLimit) {
              return (
                <button
                  type="button"
                  className={
                    currentPage === p
                      ? " py-1 mr-1 w-[30px] cursor-pointer rounded-sm bg-blue-900 text-white"
                      : "py-1 w-[30px]  cursor-pointer rounded-sm bg-blue-400 text-black dark:bg-black dark:text-black mr-1"
                  }
                  key={index}
                  id={p}
                  onClick={pageClick}
                >
                  {p}
                </button>
              );
            } else {
              return null;
            }
          })}
          <button
            type="button"
            className="py-1 w-[40px]  mr-1 cursor-pointer rounded-sm bg-blue-400 text-black dark:bg-black dark:text-black"
            onClick={nextClick}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          > Next </button>


        </div>
        </div>
  </CardContent>
  <CardFooter>
  
  </CardFooter>
</Card>
      
   


    </>
  );
};

export default Disease

