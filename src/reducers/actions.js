export const storeTitle = (title = null) => ({
    type: "STORE_TITLE",
    title
});

export const storeFirstname = (firstName = null) => ({
    type: "STORE_FIRSTNAME",
    firstName
});

export const storeLastName = (lastName = null) => ({
    type: "STORE_LASTNAME",
    lastName
});
export const storeCitizenID = (citizenID = null) => ({
    type: "STORE_CITIZEN_ID",
    citizenID
});