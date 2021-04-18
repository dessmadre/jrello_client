"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const result = dotenv_1.config();
if (!result.error) {
    const parsed = result.parsed;
    if (parsed) {
        Object.keys(parsed).forEach((key) => {
            const value = parsed[key];
            if (value) {
                process.env[key] = value;
            }
        });
    }
}
//# sourceMappingURL=env.js.map