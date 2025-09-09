import { useState } from "react";
import Input from "../../components/Input";
import type { Field } from "../../types/field";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

interface ModalFormProps {
    fields?: Field[];
}

export default function ModalForm({fields = []}: ModalFormProps) {
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
            />
        ))}

        <div className="w-full flex justify-center gap-4 mt-4 mb-2 items-center">
            <Button
                colorText="#ff7022ff"
                backgroundColor="#fff9f6"
                colorShadow="#ff7022ff"
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
                colorText="#fff9f6"
                backgroundColor="#ff7022ff"
                colorShadow="#dd3603"
                height="50px"
                width="200px"
                isAdm={false}
                title="Salvar"
                positionItems="center"
                fontSize="1.25rem"
                fontFamily="'Madimi One', sans-serif"
                onClick={() => navigate("/")}
            />
        </div>

        </form>
    );
}

/*
<Input
    label="Confirme sua senha"
    type="password"
    placeholder="Confirme sua senha..."
    name="confirmarSenha"
    value={formData.confirmarSenha}
    onChange={handleChange}
/>

button type submit
*/