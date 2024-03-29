// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import AllSpecialist, {
  DoctorDialog,
} from "@/components/Specialist/AllSpecialist";
import axios from "axios";
import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-context-menu";
import { Input } from "@/components/ui/input";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const doctorURL =
  "https://hospital-management-system-backend.vercel.app/api/v1/doctors";
const specialistsURL =
  "https://hospital-management-system-backend.vercel.app/api/v1/doctor-specialists";

function SpecialistDialog() {
  const [newSpeicialist, setSepcialist] = useState({
    Name: "",
    Description: "",
  });
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleSave = async (data) => {
    try {
      const res = await axios.post(specialistsURL, data);
      if (res.status === 201) {
        setSepcialist({
          Name: "",
          Description: "",
        });
        setOpen(false);
        toast.success("Specialist created successfully");
        navigate('/doctor/doctorSpecialist')
      } else {
        setOpen(false);
        toast.error("Error creating specialist");
      }
    } catch (err) {
      toast.error("Error creating specialist");
    }
  };
  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          New Specialist
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>New Specialist</DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave(newSpeicialist);
          }}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Name" className="text-right">
              Name
            </Label>
            <Input
              id="Name"
              value={newSpeicialist.Name}
              className="col-span-3"
              type="text"
              onChange={(e) => {
                setSepcialist({ ...newSpeicialist, Name: e.target.value });
                console.log(e.target.value);
              }}
            />
            <Label htmlFor="Des" className="text-right">
              Description
            </Label>
            <Input
              id="Des"
              value={newSpeicialist.Description}
              className="col-span-3"
              type="text"
              onChange={(e) => {
                setSepcialist({
                  ...newSpeicialist,
                  Description: e.target.value,
                });
              }}
            />
          </div>
          <DialogFooter>
            <Button
              type="reset"
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

const DoctorSpecialist = () => {
  const showSuccessToast = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      theme: "light",
    });
  };
  const showErrorToast = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      theme: "light",
    });
  };

  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await axios.get(doctorURL);
    const data = await res.data.data;
    return data;
  };
  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  const handleCreate = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(doctorURL, data);
      if (res.status == 201) {
        showSuccessToast("✅ Doctor created successfully");
        fetchData().then((data) => {
          setData(data);
          // eslint-disable-next-line no-undef
          navigate('/doctor/doctorSpecialist')
        });
      } else {
        showErrorToast("❌ Something went wrong");
      }
    } catch (error) {
      showErrorToast("❌ Error");
      console.log(error);
    }
  };
  const handleDelete = async (Id) => {
    console.log(Id);
    try {
      const res = await axios.delete(doctorURL + `/${Id}`);
      if (res.status == 200) {
        showSuccessToast(" Doctor deleted successfully");
        fetchData().then((data) => {
          setData(data);
          // eslint-disable-next-line no-undef
          navigate('/doctor/doctorSpecialist')
        });
      }
    } catch (error) {
      showErrorToast("❌ Error Deleting Doctor");
      console.log(error);
    }
  };
  const handleEdit = async (data) => {
    try {
      const res = await axios.put(doctorURL + `/${data.Id}`, data);
      if (res.status == 200) {
        showSuccessToast(" Doctor updated successfully");
        fetchData().then((data) => {
          setData(data);
        });
      }
    } catch (error) {
      showErrorToast("❌ Error Editing Doctor");
      console.log(error);
    }
  };

  const blankDocotor = {
    DoctorName: "",
    Specialist: "",
    Email: "",
    PhNo: "",
    StartDuty: "",
    EndDuty: "",
  };

  return (
    <>
      <div className="flex justify-between px-2 items-center">
        <h2 className="text-xl p-4">Manage Doctors</h2>
        <div>
          <SpecialistDialog />
          <DoctorDialog
            props={blankDocotor}
            newDoc={true}
            function={handleCreate}
          />
        </div>
      </div>

      <AllSpecialist
        data={data}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <ToastContainer />
    </>
  );
};

export default DoctorSpecialist;
