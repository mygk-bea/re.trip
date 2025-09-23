import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Field } from "../../../../types/field";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

interface ModalFormProps {
    fields?: Field[];
    type?: 'login' | 'cadastro';
    isAdmin?: boolean;
}

export default function ModalForm({ fields = [], type, isAdmin = false }: ModalFormProps) {
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
                    isAdmin={isAdmin} 
                />
            ))}

            <div className="w-full flex justify-center gap-4 mt-4 mb-2 items-center">
                <Button
                    colorText={isAdmin ? "#229CFF" : "#ff7022ff"}
                    backgroundColor={isAdmin ? "#FFFFFF" : "#fff9f6"}
                    colorShadow={isAdmin ? "#229CFF" : "#ff7022ff"}
                    height="50px"
                    width="200px"
                    isAdm={isAdmin}
                    title="Voltar"
                    positionItems="center"
                    fontSize="1.25rem"
                    fontFamily="'Madimi One', sans-serif"
                    onClick={() => navigate("/inicio")}
                />

                <Button
                    colorText={isAdmin ? "#fff9f6" : "#fff9f6"}
                    backgroundColor={isAdmin ? "#229CFF" : "#ff7022ff"}
                    colorShadow={isAdmin ? undefined : "#dd3603"}
                    height="50px"
                    width="200px"
                    isAdm={isAdmin}
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
