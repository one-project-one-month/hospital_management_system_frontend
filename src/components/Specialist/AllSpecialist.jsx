/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Input } from "../ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import SpecialistSelect from "../Doctor/SpecialistSelect";
import { DeleteComformationDialog } from "../Doctor/DeleteConformationDialog";

export function DoctorDialog(props) {
  const data = props.props;
  console.log(data)
  const [doctorData, setDoctorData] = useState({
    DoctorName: data.DoctorName,
    SpecialistId: data?.Specialist?.Id,
    Email: data.Email,
    MobileNumber: data.MobileNumber,
    StartDuty: data.StartDuty,
    EndDuty: data.EndDuty,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-[#2563eb] p-1 text-[#ffffff] rounded-md mx-2"
        >
          {props.newDoc ? "New Doctor" : "Edit"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {props.newDoc ? "Create new Doctor" : "Edit Doctor"}
          </DialogTitle>
        </DialogHeader>
        <form
          className="grid gap-4 py-4"
          onSubmit={(e) => {
            e.preventDefault();
            props.function(doctorData);
          }}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="DoctorName"
              value={doctorData.DoctorName}
              className="col-span-3"
              type="text"
              onChange={(e) => {
                setDoctorData({ ...doctorData, DoctorName: e.target.value });
                console.log(e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Specialist" className="text-right">
              Specialist
            </Label>
            <SpecialistSelect
              defaultValue={doctorData.SpecialistId}
              setState={setDoctorData}
              doctorData={doctorData}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Email" className="text-right">
              Email
            </Label>
            <Input
              id="Email"
              value={doctorData.Email}
              className="col-span-3"
              type="email"
              onChange={(e) =>
                setDoctorData({ ...doctorData, Email: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Phone" className="text-right">
              Phone
            </Label>
            <Input
              id="Phone"
              value={doctorData.MobileNumber}
              className="col-span-3"
              type="text"
              onChange={(e) =>
                setDoctorData({ ...doctorData, MobileNumber: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="StartTime" className="text-right">
              Start Time
            </Label>
            <Input
              id="StartTime"
              value={doctorData.StartDuty}
              className="col-span-3"
              type="text"
              onChange={(e) =>
                setDoctorData({ ...doctorData, StartDuty: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="EndTime" className="text-right">
              End Time
            </Label>
            <Input
              id="EndTime"
              value={doctorData.EndDuty}
              className="col-span-3"
              type="text"
              onChange={(e) =>
                setDoctorData({ ...doctorData, EndDuty: e.target.value })
              }
            />
          </div>
          <DialogFooter>
            <Button type="submit">
              {props.newDoc ? "Create" : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// eslint-disable-next-line react/prop-types
const AllSpecialist = ({ data, handleDelete, handleCreate }) => {
  return (
    <>
      <table className="w-[90%] text-center mx-auto mt-6 border-collapse">
        <thead>
          <tr className="border text-center font-bold bg-[#3b82f6] text-white">
            <th className="px-6 py-3">Doctor Name</th>
            <th className="px-6 py-3">Specialist</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Phone</th>
            <th className="px-6 py-3">Start Duty</th>
            <th className="px-6 py-3">End Duty</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            // eslint-disable-next-line react/prop-types
            data.map((d) => {
              return (
                <tr
                  className="border hover:bg-[#649CF7] text-center font-medium text-sm hover:text-white"
                  key={d.Id}
                >
                  <td className="px-6 py-2">{d.DoctorName}</td>
                  <td className="px-6 py-2">{d?.Specialist?.Name}</td>
                  <td className="px-6 py-2">{d.Email}</td>
                  <td className="px-6 py-2">{d.MobileNumber}</td>
                  <td className="px-6 py-2">{d.StartDuty}</td>
                  <td className="px-6 py-2">{d.EndDuty}</td>
                  <td className="px-6 py-2 flex">
                    <DoctorDialog
                      props={d}
                      function={handleCreate}
                      newDoc={false}
                    />
                    <DeleteComformationDialog
                      deleteFunction={handleDelete}
                      Id={d.Id}
                    />
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </>
  );
};

export default AllSpecialist;
