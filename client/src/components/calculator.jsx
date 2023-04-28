import React, { useState } from "react";
import { Grid, Button, TextField } from "@mui/material";
import "../styles/calculator.css"
function Calculator() {
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const handleCalculate = () => {
    try {
      setExpression(eval(expression));
    } catch (error) {
      setExpression("Error");
    }
  };

  const handleClear = () => {
    setExpression("");
  };

  return (
    <Grid container spacing={1} className="calculator">
      <Grid item xs={10}>
        <TextField variant="outlined" fullWidth value={expression} />
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => handleButtonClick("7")}className="button">
          7
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => handleButtonClick("8")}className="button">
          8
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => handleButtonClick("9")}className="button">
          9
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => handleButtonClick("+")}className="button">
          +
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => handleButtonClick("4")}className="button">
          4
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => handleButtonClick("5")}className="button">
          5
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => handleButtonClick("6")}className="button">
          6
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => handleButtonClick("-")}className="button">
          -
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => handleButtonClick("1")}className="button">
          1
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => handleButtonClick("2")}className="button">
          2
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => handleButtonClick("3")}className="button">
          3
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => handleButtonClick("*")}className="button">
          *
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => handleButtonClick("0")}className="button">
          0
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => handleButtonClick(".")}className="button">
          .
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => handleCalculate()}className="button">
          =
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => handleButtonClick("/")}className="button">
          /
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => handleClear()}className="button">
          Clear
        </Button>
      </Grid>
    </Grid>
  );
}

export default Calculator;
