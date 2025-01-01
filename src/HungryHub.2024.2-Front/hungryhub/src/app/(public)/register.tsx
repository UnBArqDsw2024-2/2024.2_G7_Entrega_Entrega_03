import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Input from "../../components/Input";
import FormInput from "../../components/FormInput";
import LinkButton from "../../components/LinkButton";
import { RegisterUserBody } from "../../interfaces/registerUser.interface";
import { createUser } from "../../api/services/user.service";
import { router } from "expo-router";

// Regex para validação de CPF, e-mail, telefone, senha e CEP
const CPF_REGEX = /^\d{3}\d{3}\d{3}\d{2}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^\(\d{2}\) \d{5}-\d{4}$/;
// Senha deve conter no mínimo 8 caracteres, sendo pelo menos uma letra e um número
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const CEP_REGEX = /^\d{5}-\d{3}$/;

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        cpf: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        cep: "",
    });
    const [formErrors, setFormErrors] = useState({
        cpf: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        cep: "",
    });
    const [error, setError] = useState("");
    const [formValid, setFormValid] = useState(false);

    const handleChange = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
    }

    useEffect(() => {
        if (formData.cpf && !CPF_REGEX.test(formData.cpf)) {
            setFormErrors({ ...formErrors, cpf: "CPF inválido. Ex.: 53312145333" });
        } else {
            setFormErrors({ ...formErrors, cpf: "" });
        }
    }, [formData.cpf]);

    useEffect(() => {
        if (formData.email && !EMAIL_REGEX.test(formData.email)) {
            setFormErrors({ ...formErrors, email: "E-mail inválido" });
        } else {
            setFormErrors({ ...formErrors, email: "" });
        }
    }, [formData.email]);

    useEffect(() => {
        if (formData.phone && !PHONE_REGEX.test(formData.phone)) {
            setFormErrors({ ...formErrors, phone: "Telefone inválido. Ex.: (94) 97181-5631" });
        } else {
            setFormErrors({ ...formErrors, phone: "" });
        }
    }, [formData.phone]);

    useEffect(() => {
        if (formData.password && !PASSWORD_REGEX.test(formData.password)) {
            setFormErrors({
                ...formErrors,
                password: "A senha deve conter no mínimo 8 caracteres, sendo pelo menos uma letra e um número"
            });
        } else {
            setFormErrors({ ...formErrors, password: "" });
        }
    }, [formData.password]);

    useEffect(() => {
        if (formData.confirmPassword !== formData.password) {
            setFormErrors({ ...formErrors, confirmPassword: "Senhas não conferem" });
        } else {
            setFormErrors({ ...formErrors, confirmPassword: "" });
        }
    }, [formData.confirmPassword]);

    useEffect(() => {
        if (formData.cep && !CEP_REGEX.test(formData.cep)) {
            setFormErrors({ ...formErrors, cep: "CEP inválido. Ex.: 72896-378" });
        } else {
            setFormErrors({ ...formErrors, cep: "" });
        }
    }, [formData.cep]);

    // Verifica se todos os campos estão preenchidos e se não há erros
    useEffect(() => {
        const inputsEmpty = Object.values(formData).some((value) => value === "");
        if (inputsEmpty) {
            setFormValid(false);
            return;
        }
        const valid = Object.values(formErrors).every((error) => error === "");
        setFormValid(valid);
    }, [formErrors]);

    const handleRegister = async () => {
        try {
            const body: RegisterUserBody = {
                name: formData.name,
                cpf: formData.cpf,
                email: formData.email,
                phone: formData.phone,
                password: formData.password,
            };
            // TODO: Implementar a chamada para a API
            // const response = await createUser(body);
            // console.log(response);
            router.push({
                pathname: "./login",
            });
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Cadastro</Text>

                <FormInput
                    label="Nome"
                    type="text"
                    placeholder="Nome do usuário"
                    value={formData.name}
                    onChangeText={(value) => handleChange("name", value)}
                />

                <FormInput
                    label="CPF"
                    type="numeric"
                    placeholder="CPF"
                    value={formData.cpf}
                    onChangeText={(value) => handleChange("cpf", value)}
                    error={formErrors.cpf}
                />

                <FormInput
                    label="E-mail"
                    type="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChangeText={(value) => handleChange("email", value)}
                    error={formErrors.email}
                />

                <FormInput
                    label="Telefone"
                    type="phone"
                    placeholder="Telefone"
                    value={formData.phone}
                    onChangeText={(value) => handleChange("phone", value)}
                    error={formErrors.phone}
                />

                <FormInput
                    label="Senha"
                    type="password"
                    placeholder="Senha"
                    value={formData.password}
                    onChangeText={(value) => handleChange("password", value)}
                    error={formErrors.password}
                />

                <FormInput
                    label="Confirme a senha"
                    type="password"
                    placeholder="Confirme a senha"
                    value={formData.confirmPassword}
                    onChangeText={(value) => handleChange("confirmPassword", value)}
                    error={formErrors.confirmPassword}
                />

                <LinkButton title="Criar Conta" onPress={handleRegister} disabled={!formValid} />

                <Text style={styles.error}>{error}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    formContainer: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#EB001B',
        marginBottom: 20,
    },
    error: {
        color: '#EB001B',
    },
});