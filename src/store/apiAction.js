import { createAction } from "@reduxjs/toolkit";

export const apiRequestBegan = createAction('apiRequestBegan');
export const apiRequestSuccess = createAction('apiRequestSuccess');
export const apiResquestFail = createAction('apiResquestFail');