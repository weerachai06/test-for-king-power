import { combineReducers } from "redux";
import { id, title, firstName, lastName, phoneCode, birthday, nationality, citizenID, gender, phoneNumber, passportNo, expectedSalary } from "./crud";
import { ErrTitle, ErrFirstName, ErrLastName, ErrPhoneCode, ErrBirthday, ErrNationality, ErrCitizenID, ErrGender, ErrPhoneNumber, ErrPassportNo, ErrExpectedSalary } from "./ErrCrud";

export default combineReducers({
  id,
  title,
  firstName,
  lastName,
  birthday,
  nationality,
  citizenID,
  gender,
  phoneCode,
  phoneNumber,
  passportNo,
  expectedSalary,
  ErrTitle,
  ErrFirstName,
  ErrLastName,
  ErrPhoneCode,
  ErrBirthday,
  ErrNationality,
  ErrCitizenID,
  ErrGender,
  ErrPhoneNumber,
  ErrPassportNo,
  ErrExpectedSalary,
});