import React from "react";

export interface User {
    id: string;
    email: string;
    first_name: string;
}
export interface UserBody  {
    email: string;
    password: string
}