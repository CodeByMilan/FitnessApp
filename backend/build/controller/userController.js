"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../database/models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthController {
    static registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, email, password, role } = req.body;
            if (!username || !email || !password) {
                res.status(400).json({
                    message: "Please enter username,email,password",
                });
                return;
            }
            yield User_1.default.create({
                username,
                email,
                role: role,
            });
            res.status(200).json({
                message: "User created successfully",
            });
        });
    }
    static loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            if (!email || !password) {
                res.status(400).json({
                    message: "Please enter email and password",
                });
                return;
            }
            const [user] = yield User_1.default.findAll({
                where: {
                    email: email,
                },
            });
            if (!user) {
                res.status(400).json({
                    message: "User not found with the email",
                });
                return;
            }
            const isPasswordMatch = bcrypt_1.default.compareSync(password, user.password);
            if (!isPasswordMatch) {
                res.status(400).json({
                    message: "Invalid email or password",
                });
                return;
            }
            const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.SECRET_KEY, {
                expiresIn: "1h",
            });
            res.status(200).json({
                message: "User logged in successfully",
                data: token,
            });
        });
    }
}
exports.default = AuthController;
