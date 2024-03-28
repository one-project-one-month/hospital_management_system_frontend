import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const SpecialistSelect = ({ defaultValue, setState, doctorData }) => {
  const [optionValues, setOptionValues] = useState(null);
  const [specialists, setSpecialists] = useState(defaultValue);
  const fetchSpecialists = async () => {
    const speicalists = await axios.get(
      "https://hospital-management-system-backend.vercel.app/api/v1/doctor-specialists"
    );
    const data = await speicalists.data.data;
    console.log(1);
    return data;
  };
  useEffect(() => {
    fetchSpecialists().then((data) => {
      setOptionValues(data);
    });
  }, []);
  return (
    <select
      name=""
      id=""
      value={specialists}
      className="w-[200px]"
      onChange={(e) => {
        setSpecialists(e.target.value);
        setState({ ...doctorData, SpecialistId: parseInt(e.target.value) });
      }}
    >
      {optionValues?.map((item) => (
        <option key={item.Id} value={item.Id}>
          {item.Name}
        </option>
      ))}
    </select>
  );
};

export default SpecialistSelect;
