import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "./InfosContato.module.scss";
import Menu from "../../../components/Menu";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import IconArrowChevron from "../../../assets/icons/icon-arrow-chevron";
import IconEdit from "../../../assets/icons/icon-edit";
import IconCheck from "../../../assets/icons/icon-check";
import IconPinSharp from "../../../assets/icons/icon-pin-sharp";
import { dictDataRoutes } from "../../../constants/typeUser";
import { TAG_COLORS } from "../../../constants/tagColors";
import Tag from "../../../components/Tag";

const InfosContato: React.FC = () => {
    const navigate = useNavigate();
    const userData = dictDataRoutes("guia");

    const [photo, setPhoto] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [name, setName] = useState("João Silva");
    const [tags, setTags] = useState(["História", "Trilhas"]);
    const [description, setDescription] = useState(
        "Guia turístico apaixonado por cultura local, com 5 anos de experiência em passeios históricos e ecológicos."
    );
    const [email, setEmail] = useState("joao.silva@exemplo.com");
    const [phone, setPhone] = useState("(11) 98765-4321");
    const [isEditing, setIsEditing] = useState(false);

    const handleImageClick = () => {
        if (isEditing) fileInputRef.current?.click();
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImageFile(file);
            console.log(imageFile);
            setPhoto(URL.createObjectURL(file));
        }
    };

    const handleSave = () => {
        console.log({ name, tags, description, email, phone, photo });
        setIsEditing(false);
    };

    return (
        <div className="w-[95vw] flex flex-col items-center min-h-screen bg-white pt-[5vh] pb-[15vh]">
            <div className="w-full max-w-md lg:max-w-5xl px-4 sm:px-6">
                <div className="w-full flex items-center mb-6">
                    <button onClick={() => navigate(-1)}>
                        <IconArrowChevron class={`${styled.icon} ${styled.arrow}`} />
                    </button>
                </div>
            </div>

            <div className="w-full max-w-md lg:max-w-5xl px-6 flex flex-col items-center">
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    accept="image/*"
                />

                {photo ? (
                    <img
                        src={photo}
                        alt="Foto do Guia"
                        className={`w-32 h-32 rounded-full object-cover mb-2 ${
                            !isEditing ? "opacity-70 cursor-default" : "cursor-pointer"
                        }`}
                        onClick={handleImageClick}
                    />
                ) : (
                    <div
                        onClick={handleImageClick}
                        className={`w-32 h-32 rounded-full flex items-center justify-center mb-2 ${
                            !isEditing ? "opacity-70 cursor-default" : "cursor-pointer"
                        }`}
                        style={{ backgroundColor: userData.color }}
                    >
                        <IconPinSharp
                            class={`${styled.icon} ${styled.pin}`}
                            mainColor={userData.color}
                        />
                    </div>
                )}

                {isEditing && (
                    <button
                        type="button"
                        onClick={handleImageClick}
                        className={`${styled.link}`}
                        style={{ color: userData.color }}
                    >
                        {photo ? "Alterar Imagem" : "Adicionar Imagem"}
                    </button>
                )}

                <h1
                    className="text-3xl font-bold my-6"
                    style={{ color: userData.color }}
                >
                    Informações de Contato
                </h1>

                <form className={`${styled.form} w-full flex flex-col items-center`}>
                    <div className="w-full flex flex-col lg:flex-row lg:gap-12 lg:items-start">
                        <div className="w-full lg:w-1/2 flex flex-col" >
                            <h2
                                className="text-2xl font-bold w-full my-4 text-start"
                                style={{ color: userData.color }}
                            >
                                Dados Pessoais
                            </h2>

                            <div style={{fontFamily:"'Rubik', sans-serif"}}>
                                <Input
                                    label="Nome"
                                    type="text"
                                    placeholder="Digite seu nome..."
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    disabled={!isEditing}
                                />

                                <div className="w-full mt-2" style={{ fontFamily: "'Rubik', sans-serif" }}>
                                    <label className="block font-semibold mb-1 text-black text-left">
                                        Áreas de Atuação
                                    </label>

                                    {isEditing ? (
                                        <input
                                            type="text"
                                            className="w-full border-b border-gray-400 focus:outline-none pb-4 pl-3 mb-6 mt-2 text-black placeholder-gray-400 focus:border-orange-500"
                                            placeholder="Ex: História, Trilhas"
                                            value={tags.join(", ")}
                                            onChange={(e) =>
                                                setTags(
                                                    e.target.value
                                                        .split(",")
                                                        .map((t) => t.trim())
                                                        .filter(Boolean)
                                                )
                                            }
                                        />
                                    ) : (
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {tags.map((tag) => {
                                                const tagKey = tag.toLowerCase().replace(/\s+/g, "");
                                                const tagData =
                                                    TAG_COLORS.atracoes[tagKey as keyof typeof TAG_COLORS.atracoes] ||
                                                    TAG_COLORS.localizacao[tagKey as keyof typeof TAG_COLORS.localizacao] ||
                                                    TAG_COLORS.acessibilidadeInclusao[tagKey as keyof typeof TAG_COLORS.acessibilidadeInclusao];

                                                return (
                                                    <Tag
                                                        key={tag}
                                                        text={tag}
                                                        bgColor={tagData?.bgColor || "#EEE"}
                                                        textColor={tagData?.textColor || "#555"}
                                                        borderColor={tagData?.borderColor || "#CCC"}
                                                    />
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>

                            </div>

                            <div className="w-full mt-4" style={{fontFamily:"'Rubik', sans-serif"}}>
                                <label
                                    className="font-semibold"
                                    style={{ color: userData.color }}
                                >
                                    Descrição
                                </label>
                                {isEditing ? (
                                    <textarea
                                        className="w-full border-2 rounded mt-1 p-2 text-sm focus:outline-none"
                                        style={{ borderColor: userData.color }}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                ) : (
                                    <p className="mt-1 text-gray-700 text-sm leading-relaxed">
                                        {description}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 flex flex-col mt-6 lg:mt-0">
                            <h2
                                className="text-2xl font-bold w-full my-4 text-start"
                                style={{ color: userData.color }}
                            >
                                Contato
                            </h2>

                            <div style={{fontFamily:"'Rubik', sans-serif"}}>
                                <Input
                                    label="E-mail"
                                    type="email"
                                    placeholder="Digite seu e-mail..."
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={!isEditing}
                                />

                                <Input
                                    label="Telefone"
                                    type="text"
                                    placeholder="Digite seu telefone..."
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    disabled={!isEditing}
                                />
                            </div>

                        </div>
                    </div>

                    <div className="w-full flex justify-center px-6 pt-3">
                        <div className="w-full max-w-md">
                            <Button
                                colorText={userData.color}
                                backgroundColor="#FFF"
                                colorShadow={userData.color}
                                outlineColor={userData.color}
                                height="50px"
                                width="100%"
                                title={
                                    isEditing ? "Salvar Informações" : "Editar Informações"
                                }
                                isAdm={false}
                                positionItems="center"
                                fontFamily="'Madimi One', sans-serif"
                                buttonType="button"
                                onClick={() =>
                                    isEditing ? handleSave() : setIsEditing(true)
                                }
                                icon={isEditing ? IconCheck : IconEdit}
                            />
                        </div>
                    </div>
                </form>
            </div>

            <Menu isGuia />
        </div>
    );
};

export default InfosContato;