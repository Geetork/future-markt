import React, { useState } from "react";
import { Checkbox, FormControl, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Button from "../button/Button";
import styles from "./RequestForm.module.scss";

const theme = createTheme({
    palette: {
        primary: { main: '#FFFF', },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 14,
    },
    components: {
        MuiCheckbox: {
            styleOverrides: { root: { color: "#FFFF", } },
        },
      },
});

/**
 * RequestForm component for ordering a call back.
 * 
 * @param sendRequest Function to send the request.
 * @returns A form for ordering a callback with name, phone, and consent checkbox.
 */
const RequestForm: React.FC<{
    sendRequest: () => void,
}> = ({ sendRequest }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();

        setNameError(false);
        setPhoneError(false);
 
        !name.length && setNameError(true);
        !phone.length && setPhoneError(true);
 
        if (name.length && phone.length) {
            localStorage.setItem("isRequestSent", JSON.stringify({ timestamp: new Date().getTime() }));
            sendRequest();
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit} >
                <FormControl className={`column ${styles.form}`}>
                    <p className="text__raleway_h3">Закажите обратный звонок</p>
                    <TextField 
                        label="ИМЯ"
                        type="text"
                        onChange={e => setName(e.target.value)}
                        error={nameError}
                        variant="standard"
                        InputProps={{ style: { color: "white" } }}
                        InputLabelProps={{
                            style: { color: 'white' },
                        }}
                        required />
                    <TextField 
                        label="ТЕЛЕФОН (8XXXXXXXXXX)"
                        type="tel"
                        onChange={e => setPhone(e.target.value)}
                        error={phoneError}  
                        variant="standard"
                        inputProps={{
                            pattern: "[0-9]*",
                            style: { color: "white" },
                          }}
                        InputLabelProps={{
                            style: { color: 'white' },
                        }}
                        required
                        />
                    <div className={styles.checkbox}>
                        <Checkbox id="check" required={true} color="primary" />
                        <label htmlFor="check">
                            Согласен на сохранение и обработку персональных данных
                        </label>
                    </div>
                    
                    <div className={styles.button__container}>
                        <Button buttonType="submit" style="secondary">
                            Закажите обратный звонок
                        </Button>
                    </div>
                </FormControl>
            </form>
        </ThemeProvider>
    )
}

export default RequestForm;