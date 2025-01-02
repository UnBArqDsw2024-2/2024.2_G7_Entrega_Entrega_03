import React from "react";

export interface User {
    id: string;
}

export interface UserBody {
    first_name: string;
    cpf: string;
    email: string;
    phone: string;
    password: string;
}

export interface UserLogin {
    email: string;
    password: string;
}