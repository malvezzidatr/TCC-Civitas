import bcrypt from "bcrypt";
import { Router, Request, Response, NextFunction } from "express";
import JWT from "jsonwebtoken";

import { UserRepository } from "../repositories/UserRepository";

const userRoutes = Router();
const userRepository = new UserRepository();

async function checkUser(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;
    const user = await userRepository.findUserByEmail(email);
    if (!user) {
        return res.status(404).json({ error: "Usuário não cadastrado" });
    }
    return next();
}

async function checkPassword(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    const user = await userRepository.findUserByEmail(email);
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
        return res.status(422).json({ error: "Senha inválida" });
    }
    return next();
}

function checkJWTToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    const JWTtoken = authHeader && authHeader.split(" ")[1];
    if (!JWTtoken) {
        return res.status(401).json({ error: "Acesso negado!" });
    }

    try {
        const secret = process.env.SECRET;
        JWT.verify(JWTtoken, secret);
        return next();
    } catch (error) {
        return res.status(400).json({ error: "Token inválido!" });
    }
}

userRoutes.get("/:id", checkJWTToken, async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await userRepository.findUserById(id);
    return res.send(user);
});

userRoutes.get("/", checkJWTToken, async (req: Request, res: Response) => {
    const allUsers = await userRepository.getAllUsers();
    return res.send(allUsers);
});

userRoutes.delete(
    "/delete/:id",
    checkJWTToken,
    async (req: Request, res: Response) => {
        const { id } = req.params;
        await userRepository.deleteUserById(id);
        return res.status(204).send();
    }
);

userRoutes.post(
    "/auth/register",
    checkJWTToken,
    async (req: Request, res: Response) => {
        const { name, email, password } = req.body;
        const userExists = await userRepository.findUserByEmail(email);
        if (!userExists) {
            const salt = await bcrypt.genSalt(12);
            const passwordHashed = await bcrypt.hash(password, salt);
            const user = {
                name,
                email,
                password: passwordHashed,
            };
            try {
                await userRepository.createUser(user);
                return res
                    .status(201)
                    .json({ msg: "Usuário criado com sucesso" });
            } catch (error) {
                return res.status(500).json({ error: "Erro do servidor" });
            }
        }
        return res.status(400).json({ error: "Usuário já cadastrado" });
    }
);

userRoutes.post(
    "/auth/login",
    checkUser,
    checkPassword,
    async (req: Request, res: Response) => {
        const user = await userRepository.findUserByEmail(req.body.email);
        const token = userRepository.generateJWT(process.env.SECRET, user);
        if (!token) {
            return res.status(500).json({ error: "Erro do servidor" });
        }
        return res.status(200).json({ msg: "Autenticação com sucesso", token });
    }
);

export { userRoutes };
