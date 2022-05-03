import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const Excel = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const getSheetData = () => {
    setLoading(true);
    fetch("api/sheet")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getSheetData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>failed to load data</p>;

  if (data) {
    // console.log({ data });
    const tableHeaders: any = data[0];
    const tableBody: any = [data.slice(1, data.length)];

    const columns: object[] = [
      { field: "guia", headerName: "N Guia", width: 130 },
      { field: "dia", headerName: "Dia", width: 50 },
      { field: "movil", headerName: "Movil", width: 50 },
      { field: "nguia", headerName: "Val # Guia", width: 50 },
      { field: "activo", headerName: "Activo", width: 50 },
      { field: "organico", headerName: "Organico", width: 50 },
      { field: "pago", headerName: "Metodo de Pago", width: 50 },
      {
        field: "date",
        headerName: "Fecha Inscripcion",
        width: 50,
      },
      { field: "nombre", headerName: "Nombre Contacto", width: 50 },
      { field: "telefono", headerName: "Telefono", width: 50 },
      { field: "email", headerName: "Email", width: 50 },
      { field: "direccion", headerName: "Direccion", width: 50 },
      { field: "lat", headerName: "Latitud", width: 50 },
      { field: "long", headerName: "Longitud", width: 50 },
    ];

    const arraysToObject = tableBody[0].map((item) => {
      //   console.log(item);
      return {
        id: item[0],
        guia: item[1],
        dia: item[2],
        movil: item[3],
        vnguia: item[4],
        activo: item[5],
        organico: item[6],
        pago: item[7],
        date: item[8],
        nguia: item[9],
        nombre: item[10],
        telefono: item[11],
        email: item[12],
        direccion: item[13],
        lat: item[14],
        long: item[15],
      };
    });
    // console.log(arraysToObject);

    // return <DataGrid rows={arraysToObject} columns={columns} pageSize={25} />;
    return (
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {tableHeaders.map((header: string, index: number) => {
                return <TableCell key={index}>{header}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {arraysToObject.map((register: any) => {
              return (
                <TableRow key={register.id}>
                  <TableCell>{register.id}</TableCell>
                  <TableCell>{register.guia}</TableCell>
                  <TableCell>{register.dia}</TableCell>
                  <TableCell>{register.movil}</TableCell>
                  <TableCell>{register.vnguia}</TableCell>
                  <TableCell>{register.activo}</TableCell>
                  <TableCell>{register.organico}</TableCell>
                  <TableCell>{register.pago}</TableCell>
                  <TableCell>{register.date}</TableCell>
                  <TableCell>{register.nguia}</TableCell>
                  <TableCell>{register.nombre}</TableCell>
                  <TableCell>{register.telefono}</TableCell>
                  <TableCell>{register.email}</TableCell>
                  <TableCell>{register.direccion}</TableCell>
                  <TableCell>{register.lat}</TableCell>
                  <TableCell>{register.long}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
};

export default Excel;
