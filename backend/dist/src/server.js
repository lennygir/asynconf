"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const server = (0, express_1.default)();
// Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            contact: {
                name: "Lenny GIRARDOT",
                url: "https://asynconf.fr/#tournament",
                email: "lenny@example.com",
            },
            title: 'Green bank API',
            version: '1.0.0',
            description: 'API for Green Bank rate simulator',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ["**/*.ts"]
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
server.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs, { explorer: true }));
// CORS
const corsOptions = {
    origin: "http://localhost:8080",
};
server.use((0, cors_1.default)(corsOptions));
// Logging
server.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString("fr-FR")}] - ${req.method} ${req.url}`);
    next();
});
// Handle JSON Body
server.use(express_1.default.json());
// Routes
server.use(routes_1.default);
// Errors (not 404)
server.use(function (err, req, res, next) {
    const DEFAULT_STATUS = 500;
    res.status(err.status || DEFAULT_STATUS).json({ message: err.message, status: err.status });
});
// Error 404
server.use(function (req, res) {
    res.status(404).json({
        message: "Endpoint not found, make sure you used the correct URL / Method",
    });
});
exports.default = server;
