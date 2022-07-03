import { createAction } from "@reduxjs/toolkit";

export const apiRequestBegan = createAction('api/RequestBegan');
export const apiRequestSuccess = createAction('api/RequestSuccess');
export const apiResquestFail = createAction('api/ResquestFail');
