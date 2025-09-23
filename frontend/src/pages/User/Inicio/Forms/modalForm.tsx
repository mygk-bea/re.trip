import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Field } from "../../../../types/field";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

interface ModalFormProps {
    fields?: Field[];
    type?: 'login' | 'cadastro';
}

export default function ModalForm({fields = [], type}: ModalFormProps) {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Dados enviados:", formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-[100%] mx-auto flex flex-col items-center justify-center"
        >

        {fields.map((field) => (
            <Input
                key={field.name}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                onChange={handleChange}
            />
        ))}

        <div className="w-full flex justify-center gap-4 mt-4 mb-2 items-center">
            <Button
                colorText="var(--color-primary-user)"
                backgroundColor="var(--color-light"
                colorShadow="var(--color-primary-user)"
                height="50px"
                width="200px"
                isAdm={false}
                title="Voltar"
                positionItems="center"
                fontSize="1.25rem"
                fontFamily="'Madimi One', sans-serif"
                onClick={() => navigate("/inicio")}
            />

            <Button
                colorText="var(--color-light"
                backgroundColor="var(--color-primary-user)"
                colorShadow="var(--color-shadow-user)"
                height="50px"
                width="200px"
                isAdm={false}
                title={type === 'cadastro' ? "Salvar" : "Entrar"}
                positionItems="center"
                fontSize="1.25rem"
                fontFamily="'Madimi One', sans-serif"
                onClick={() => navigate("/")}
            />
        </div>

        </form>
    );
}