export default function MapStateToProps(state) {
    return {
        title: (state.title) || null,
        firstName: state.firstName || null,
        lastName: state.lastName || null,
        birthday: state.birthday || null,
        nationality: state.nationality || null,
        citizenID: state.citizenID || null,
        gender: state.gender || null,
        phoneCode: state.phoneCode || null,
        phoneNumber: state.phoneNumber || null,
        passportNo: state.passportNo || null,
        expectedSalary: state.expectedSalary || null,
        isSucceeded: state.isSucceeded || null,
    };
};