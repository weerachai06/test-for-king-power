export const id = (state = "", action={}) => {
    switch (action.type) {
        case "STORE_ID":
            return action.id;
        case "CLEAR_ID":
            return "";
        default:
            return state;
    }
}
export const title = (state = "", action={}) => {
    switch (action.type) {
        case "STORE_TITLE":
            return action.title;
        case "CLEAR_TITLE":
            return "";
        default:
            return state;
    }
}
export const firstName = (state = "", action={}) => {
    switch (action.type) {
        case "STORE_FIRSTNAME":
            return action.firstName;
        case "CLEAR_FIRSTNAME":
            return "";
        default:
            return state;
    }
}
export const lastName = (state = "", action={}) => {
    switch (action.type) {
        case "STORE_LASTNAME":
            return action.lastName;
        case "CLEAR_LASTNAME":
            return "";
        default:
            return state;
    }
}
export const birthday = (state = "", action={}) => {
    switch (action.type) {
        case "STORE_BIRTHDAY":
            return action.birthday;
        case "CLEAR_BIRTHDAY":
            return "";
        default:
            return state;
    }
}
export const nationality = (state = "", action={}) => {
    switch (action.type) {
        case "STORE_NATIONALITY":
            return action.nationality;
        case "CLEAR_NATIONALITY":
            return "";
        default:
            return state;
    }
}
export const citizenID = (state = "", action={}) => {
    switch (action.type) {
        case "STORE_CITIZENID":
            return action.citizenID;
        case "CLEAR_CITIZENID":
            return "";
        default:
            return state;
    }
}
export const gender = (state = "", action={}) => {
    switch (action.type) {
        case "STORE_GENDER":
            return action.gender;
        case "CLEAR_GENDER":
            return "";
        default:
            return state;
    }
}
export const phoneCode = (state = "", action={}) => {
    switch (action.type) {
        case "STORE_PHONECODE":
            return action.phoneCode;
        case "CLEAR_PHONECODE":
            return "";
        default:
            return state;
    }
}
export const phoneNumber = (state = "", action={}) => {
    switch (action.type) {
        case "STORE_PHONENUMBER":
            return action.phoneNumber;
        case "CLEAR_PHONENUMBER":
            return "";
        default:
            return state;
    }
}
export const passportNo = (state = "", action={}) => {
    switch (action.type) {
        case "STORE_PASSPORTNO":
            return action.passportNo;
        case "CLEAR_PASSPORTNO":
            return "";
        default:
            return state;
    }
}
export const expectedSalary = (state = "", action={}) => {
    switch (action.type) {
        case "STORE_EXPECTEDSALARY":
            return action.expectedSalary;
        case "CLEAR_EXPECTEDSALARY":
            return "";
        default:
            return state;
    }
}
