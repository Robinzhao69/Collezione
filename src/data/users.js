import doom from "../../public/img/doom.webp"
import forza from "../../public/img/forza.webp"
import minecraft from "../../public/img/minecraft.webp"

const users = [

        {
            id: 1,
            name: "admin",
            password: "admin",
            collection: [
                {
                    id: 1,
                    title: "Placeholder",
                    img: "",
                    category: ["All"],
                    description: "Dit is een placeholder",
                    price: "19,99",
                },
                {
                    id: 2,
                    title: "forza",
                    img: forza,
                    category: ["Racing", "All"],
                    description: "Auto go vroom",
                    price: "15,99",
                },
            ]
        },
        {
            id: 2,
            name: "Robin",
            password: "Hu",
            collection: [
                {
                    id: 1,
                    title: "Placeholder",
                    img: "",
                    category: ["All"],
                    description: "Dit is een placeholder",
                    price: "19,99",
                },
                {
                    id: 2,
                    title: "forza",
                    img: forza,
                    category: ["Racing", "All"],
                    description: "Auto go vroom",
                    price: "15,99",
                },
                {
                    id: 3,
                    title: "Minecraft",
                    img: minecraft,
                    category: ["Sandbox", "All"],
                    description: "Diamond",
                    price: "199,99",
                },
            ]
        },


]

export default users