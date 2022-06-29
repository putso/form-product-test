import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React, { FC, useState } from "react";
import { deleteData } from "../../service/deleteField";
import { Data } from "../../types";
const rowName = ['propduct','name', 'cost', 'count'];
const Index: FC<{data?:Data[],updateData:()=> void}> = ({data,updateData}) => {
  const [sort,setSort] = useState(0);
  const rows = data || [];
  console.log(rows);
  const sumCost= rows?.reduce( (a,b) => a + Number(b.cost) ,0) || 0;
  const sumCount = rows?.reduce( (a,b) => a + Number(b.count) ,0) || 0;
  const tableSort = (id:number) => {
    console.log('click')
    setSort(id);
  };
  return (
    <div>
      <TableContainer
        component={Paper}
        sx={{
          width: 1200,
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
             { ['Производитель','Наименование','Цена','Количество'].map((el,i) => {
              return (<TableCell sx={
                {
                  cursor: 'pointer'
                }
              } key={i} onClick={()=> {tableSort(i)}} align="left">{el}</TableCell>)
             })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.sort((a,b) => {
              console.log(rows);
              const row = Object.keys(a) as Array<keyof typeof a>;
              const val1 = a[row[sort]];
              const val2 = b[row[sort]];
              if(typeof val1 == 'number' && typeof val2 == 'number')  return val1 - val2;
              return val1.toString().localeCompare(val2.toString());

            } ).map((row,i) => (
              <TableRow
                key={row.id}
                sx={{ cursor: 'pointer' }}
                onClick={async () => {
                  await deleteData(row);
                  await updateData();
                }}
              >
                <TableCell align="left">{row.propduct}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.cost}</TableCell>
                <TableCell align="left">{row.count}</TableCell>
              </TableRow>
            ))}
            <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={1} align= 'right'><b>Итого:</b></TableCell>
            <TableCell align="left"><b>{sumCost}</b></TableCell>
            <TableCell align="left"><b>{sumCount}</b></TableCell>
          </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Index;
