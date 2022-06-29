import { TableSortLabel } from "@mui/material";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import { getData } from "./service/getData";
import { Data } from "./types";
const url = "http://form/get-data.php";

function App() {
  const [data, setData] = useState<Data[]>([]);
  const updateData = async () => {
    const data:Data[] = await getData();
    console.log(data);
    setData(data);
  };
  useEffect(() => {
    updateData();
  }, []);
  return (
    <div className="App">
      <Form update={updateData} />
      <Table data={data || []} updateData={updateData} />
      <TableSortLabel />
    </div>
  );
}

export default App;
