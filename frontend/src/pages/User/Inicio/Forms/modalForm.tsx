import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Field } from "../../../../types/field";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { authService } from "../../../../core/services/LoginService";
import { cadastrosUsuarios } from "../../../../core/services/CadastrosUsuarios";
import { dictDataRoutes } from "../../../../constants/typeUser";

interface ModalFormProps {
    fields?: Field[];
    type?: 'login' | 'cadastro';
    isAdmin?: boolean;
    isGuia?: boolean;
    onLoginSuccess?: () => void;
    onCadastroSuccess?: () => void;
}

export default function ModalForm({
    fields = [],
    type,
    isAdmin = false,
    isGuia = false,
    onLoginSuccess,
    onCadastroSuccess,
}: ModalFormProps) {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const typeUser = isAdmin ? "admin" : isGuia ? "guia" : "user";
    const { color, secondaryColor } = dictDataRoutes(typeUser);

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            if (type === "login") {
                const response = await authService.autenticarLogin({
                    email: formData.email || "",
                    senha: formData.senha || "",
                });

                if (response.validado) {
                    onLoginSuccess?.();
                } else {
                    setError(response.mensagem || "Credenciais inválidas");
                }
            } else if (type === "cadastro") {
                const response = await cadastrosUsuarios.cadastrarAdmin({
                    email: formData.email || "",
                    senha: formData.senha || "",
                    nome: formData.nome || "",
                    dataNascimento: formData.dataNascimento || "",
                    // genero: formData.genero || "",
                    cpf: formData.cpf || "",
                });

                if (response.validado) {
                    onCadastroSuccess?.();
                } else {
                    setError(response.mensagem || "Dados inválidos");
                }
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erro na requisição");
        } finally {
            setLoading(false);
        }
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
                    name={field.name}
                />
            ))}

            {error && <div style={{ color: "red" }}>{error}</div>}

            <div className="w-full flex justify-center gap-4 mt-4 mb-2 items-center">
                {/* Botão Voltar */}
                <Button
                    colorText={color}
                    backgroundColor="#FFFFFF"
                    outlineColor={color}
                    colorShadow={color}
                    height="50px"
                    width="200px"
                    isAdm={isAdmin}
                    title="Voltar"
                    positionItems="center"
                    fontSize="1.25rem"
                    fontFamily="'Madimi One', sans-serif"
                    onClick={() => navigate(-1)}
                />

                {/* Botão Entrar / Salvar */}
                <Button
                    colorText="#fff9f6"
                    backgroundColor={color}
                    outlineColor={color}
                    colorShadow={secondaryColor}
                    height="50px"
                    width="200px"
                    isAdm={isAdmin}
                    title={type === "cadastro" ? "Salvar" : "Entrar"}
                    positionItems="center"
                    fontSize="1.25rem"
                    fontFamily="'Madimi One', sans-serif"
                    buttonType="submit"
                />
            </div>
        </form>
    );
}