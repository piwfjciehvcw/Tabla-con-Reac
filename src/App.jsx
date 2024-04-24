/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useState } from "react";

function App() {
  

  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true
    },
    {
      name: "Apellido",
      selector: (row) => row.Apellido,
      sortable: true
    },
    {
      name: "Edad",
      selector: (row) => row.edad,
      sortable: true
    },
  ];



  const data = [
    {
      nombre: "Carol",
      Apellido: "Rodríguez",
      edad: "34",
    },
    {
      nombre: "Nani",
      Apellido: "Rodríguez",
      edad: "33",
    },
    {
      nombre: "Pedro",
      Apellido: "Rodríguez",
      edad: "344",
    },
    {
      nombre: "mario",
      Apellido: "Rodríguez",
      edad: "45",
    },
    {
      nombre: "carlos",
      Apellido: "Rodríguez",
      edad: "29",
    },
    {
      nombre: "jose",
      Apellido: "Rodríguez",
      edad: "14",
    },
    {
      nombre: "jose",
      Apellido: "Rodríguez",
      edad: "14",
    },
    {
      nombre: "jose",
      Apellido: "Rodríguez",
      edad: "14",
    },
    {
      nombre: "jose",
      Apellido: "Rodríguez",
      edad: "14",
    },
    {
      nombre: "jose",
      Apellido: "Rodríguez",
      edad: "14",
    },
    {
      nombre: "jose",
      Apellido: "Rodríguez",
      edad: "14",
    },
    {
      nombre: "jose",
      Apellido: "Rodríguez",
      edad: "14",
    },
    {
      nombre: "jose",
      Apellido: "Rodríguez",
      edad: "14",
    },
    {
      nombre: "jose",
      Apellido: "Rodríguez",
      edad: "14",
    },
    {
      nombre: "jose",
      Apellido: "Rodríguez",
      edad: "14",
    },
    {
      nombre: "jose",
      Apellido: "Rodríguez",
      edad: "14",
    },
    {
      nombre: "jose",
      Apellido: "Rodríguez",
      edad: "14",
    },
    {
      nombre: "karlos",
      Apellido: "Rodríguez",
      edad: "14",
    },
  ];

  const [records, setRecords] = useState();
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const timeout= setTimeout(() => {
      setRecords(data)
      setLoading(false)
    }, 2000);
    return() => clearTimeout(timeout);
  }, []);

  const handlechange = (e) => {
    const inputValue = e.target.value.toLowerCase();
  
    const filteredRecords = data.filter(record => {
      return record.nombre.toLowerCase().includes(inputValue);
    });
  
    setRecords(filteredRecords);
  }
  

  return (
    <div>
      <input type="text"
      onChange={handlechange}
      />
      <DataTable
    title=" datos "
      columns={columns} 
      data={records}
      selectableRows
      pagination
      paginationPerPage={4}
      onSelectedRowsChange={data => console.log(data)}
      fixedHeader
      progressPending={loading}
      progressComponent = {<h1>cargando nombres</h1>}
      />

    </div>
  );
}

export default App;
