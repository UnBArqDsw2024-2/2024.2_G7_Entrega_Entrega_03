import React from 'react';
import { TextInputProps } from 'react-native';
import Input from './Input';

export interface InputFactoryProps extends TextInputProps {
    type?: 'text' | 'email' | 'password' | 'phone' | 'numeric';
}

export default function InputFactory({ type, ...props }: InputFactoryProps) {
    switch (type) {
        case 'text':
            return <Input {...props} />
        case 'email':
            return <Input keyboardType="email-address" {...props} />
        case 'password':
            return <Input secureTextEntry={true} {...props} />
        case 'phone':
            return <Input keyboardType="phone-pad" {...props} />
        case 'numeric':
            return <Input keyboardType="numeric" {...props} />
        default:
            return <Input {...props} />
    }
};