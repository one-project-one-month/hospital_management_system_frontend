
// eslint-disable-next-line react/prop-types
const PatientInput = ({ userData, setUserData, patients }) => {

  const handlePatients = (e) => {
    const patientName = e.target.value;
    // eslint-disable-next-line react/prop-types
    const selectedPatient = patients.find((p) => p.Name === patientName);
console.log(selectedPatient)
    if (selectedPatient) {
      // Directly use selectedPatient.Id to update userData
      setUserData({
        ...userData,
        PatientId: selectedPatient.Id
      });
    }
  };

  return (
    <div>
      <div className="relative w-full h-20 px-4 mt-2">
        <label className="font-bold text-xl text-red-400">
          Patient Name
        </label>
        <div className="relative h-10 mt-2">
          <input
            type="text"
            className="border w-full h-full p-2 rounded-md text-black"
            name="patientName"
            onChange={handlePatients}
            placeholder="Patient Name"/>
        </div>
      </div>
    </div>
  );
}

export default PatientInput;
