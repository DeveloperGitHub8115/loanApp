// LoanList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

export function LoanList() {
  const [loans, setLoans] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get(`http://localhost:4500/myloans?userId=${userId}`)
      .then((response) => {
        console.log("Fetched user's loans:", response.data.loans);
        setLoans(response.data.loans);
      })
      .catch((error) => {
        console.error("Failed to fetch user's loans:", error);
      });
  }, [userId]);

  return (
    <div className="mt-5">
      <h2 className="text-center">Current Loans</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Loan ID</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Term</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loans.map((loan) => (
              <TableRow key={loan._id}>
                <TableCell>{loan._id}</TableCell>
                <TableCell>{loan.loanAmount}</TableCell>
                <TableCell>{loan.term}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
