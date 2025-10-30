import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Field } from "../../../../types/field";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { authService } from "../../../../core/services/LoginService";
import { cadastrosUsuarios } from "../../../../core/services/CadastrosUsuarios";

interface ModalFormProps {
    fields?: Field[];
    type?: 'login' | 'cadastro';
    isAdmin?: boolean;
    onLoginSuccess?: () => void;
    onCadastroSuccess?: () => void;
}

export default function ModalForm({ fields = [], type, isAdmin = false, onLoginSuccess, onCadastroSuccess }: ModalFormProps) {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (type === 'login') {
            setLoading(true);
            setError("");

            try {
                const loginData = {
                    email: formData.email || "",
                    senha: formData.senha || ""
                };
                console.log("Dados enviados para login:", loginData); 
                const response = await authService.autenticarLogin(loginData);
                
                if (response.validado) {
                    console.log("Login realizado com sucesso!");
                    if (onLoginSuccess) {
                        onLoginSuccess();
                    } 
                } else {
                    setError(response.mensagem || "Credenciais inválidas");
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : "Erro na autenticação");
            } finally {
                setLoading(false);
            }
        } else {
            console.log("Dados enviados:", formData);
        }

        if(type == 'cadastro'){
            setLoading(true);
            setError("");
    
            const cadastroData = {
                email: formData.email || "",
                senha: formData.senha || "",
                nome: formData.nome || "",
                dataNascimento: formData.dataNascimento || "",
                genero: formData.genero || "",
                cpf: formData.cpf || ""
            };
    
            const response = await cadastrosUsuarios.cadastrarAdmin(cadastroData);
    
            if (response.validado) {
                        console.log("Cadastro realizado com sucesso!");
                        if (onCadastroSuccess) {
                            onCadastroSuccess();
                        } 
                    } else {
                        setError(response.mensagem || "Dados inválidas");
                }
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
            {error && <div style={{color: 'red'}}>{error}</div>}

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
                    onClick={isAdmin ? () => navigate('/admin/inicio') : () => navigate('/inicio')}
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
                    buttonType="submit"
                    //onClick={() => handleSubmit({} as React.FormEvent)}
                />
            </div>
        </form>
    );
}
