const path = require("path");
const fs = require("fs");

const moduleFileExtensions = ["tsx", "ts", "jsx", "js", "mjs", "json"];

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const resolveModule = (resolveFn, filePath) => {
    const extension = moduleFileExtensions.find(extension =>
        fs.existsSync(resolveFn(`${filePath}.${extension}`))
    );

    if (extension) {
        return resolveFn(`${filePath}.${extension}`);
    }

    return resolveFn(`${filePath}.js`);
};

const APP_PATH = resolveApp(".");
const APP_BUILD = resolveApp("build");
const APP_SRC = resolveApp("src");
const APP_INDEX_JS = resolveModule(resolveApp, "src/index");
const APP_HTML = resolveApp("public/index.html");
const APP_PUBLIC = resolveApp("public");
const APP_TSCONFIG = resolveApp("tsconfig.json");
const APP_JSCONFIG = resolveApp("jsconfig.json");

module.exports = {
    APP_PATH,
    APP_BUILD,
    APP_SRC,
    APP_INDEX_JS,
    APP_HTML,
    APP_PUBLIC,
    APP_TSCONFIG,
    APP_JSCONFIG,
    moduleFileExtensions
};