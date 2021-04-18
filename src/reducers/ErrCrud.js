export const ErrTitle = (state = "", action) => {
    switch (action.type) {
        case "STORE_ERR_TITLE":
            return action.ErrTitle;
        case "CLEAR_ERR_TITLE":
            return "";
        default:
            return state;
    }
}
export const ErrFirstName = (state = "", action) => {
    switch (action.type) {
        case "STORE_ERR_FIRSTNAME":
            return action.ErrFirstName;
        case "CLEAR_ERR_FIRSTNAME":
            return "";
        default:
            return state;
    }
}
export const ErrLastName = (state = "", action) => {
    switch (action.type) {
        case "STORE_ERR_LASTNAME":
            return action.ErrLastName;
        case "CLEAR_ERR_LASTNAME":
            return "";
        default:
            return state;
    }
}
export const ErrBirthday = (state = "", action) => {
    switch (action.type) {
        case "STORE_ERR_BIRTHDAY":
            return action.ErrBirthday;
        case "CLEAR_ERR_BIRTHDAY":
            return "";
        default:
            return state;
    }
}
export const ErrNationality = (state = "", action) => {
    switch (action.type) {
        case "STORE_ERR_NATIONALITY":
            return action.ErrNationality;
        case "CLEAR_ERR_NATIONALITY":
            return "";
        default:
            return state;
    }
}
export const ErrCitizenID = (state = "", action) => {
    switch (action.type) {
        case "STORE_ERR_CITIZENID":
            return action.ErrCitizenID;
        case "CLEAR_ERR_CITIZENID":
            return "";
        default:
            return state;
    }
}
export const ErrGender = (state = "", action) => {
    switch (action.type) {
        case "STORE_ERR_GENDER":
            return action.ErrGender;
        case "CLEAR_ERR_GENDER":
            return "";
        default:
            return state;
    }
}
export const ErrPhoneCode = (state = "", action) => {
    switch (action.type) {
        case "STORE_ERR_PHONECODE":
            return action.ErrPhoneCode;
        case "CLEAR_ERR_PHONECODE":
            return "";
        default:
            return state;
    }
}
export const ErrPhoneNumber = (state = "", action) => {
    switch (action.type) {
        case "STORE_ERR_PHONENUMBER":
            return action.ErrPhoneNumber;
        case "CLEAR_ERR_PHONENUMBER":
            return "";
        default:
            return state;
    }
}
export const ErrPassportNo = (state = "", action) => {
    switch (action.type) {
        case "STORE_ERR_PASSPORTNO":
            return action.ErrPassportNo;
        case "CLEAR_ERR_PASSPORTNO":
            return "";
        default:
            return state;
    }
}
export const ErrExpectedSalary = (state = "", action) => {
    switch (action.type) {
        case "STORE_ERR_EXPECTEDSALARY":
            return action.ErrExpectedSalary;
        case "CLEAR_ERR_EXPECTEDSALARY":
            return "";
        default:
            return state;
    }
}
