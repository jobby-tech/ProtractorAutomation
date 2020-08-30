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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var protractor_1 = require("protractor");
var chai_1 = __importDefault(require("chai"));
var LoginPageObject_1 = require("../PageObjects/LoginPageObject");
//browser.ignoreSynchronization=true;
var lp = new LoginPageObject_1.LoginPage();
var expect = chai_1.default.expect;
cucumber_1.Given('Navigate to the {string} Login Page', function (string) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, protractor_1.browser.get(string)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Given('Enter the {string} on the User ID Input Box', function (string) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, lp.EnterUsername().sendKeys(string)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Given('Enter the {string} on the Password Input Box', function (string) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, lp.EnterPassword().sendKeys(string)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('Click on the Sign in Button as User Role Curator', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, lp.ClickLoginButton()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('Verify if the Title {string} of the Page and Heading {string} are displayed', function (string, string2) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(lp.PageHeading()), 5000)];
            case 1:
                _a.sent();
                return [4 /*yield*/, protractor_1.browser.getTitle().then(function (text) {
                        expect(text).to.equal(string);
                    })];
            case 2:
                _a.sent();
                return [4 /*yield*/, lp.PageHeading().getText().then(function (text) {
                        expect(text).to.equal(string2);
                    })];
            case 3:
                _a.sent();
                return [4 /*yield*/, protractor_1.browser.sleep(3000)];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5QYWdlU3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvTG9naW5QYWdlU3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxQ0FBMEM7QUFDMUMseUNBQTREO0FBQzVELDhDQUF3QjtBQUN4QixrRUFBMkQ7QUFHM0QscUNBQXFDO0FBQ3JDLElBQUksRUFBRSxHQUFHLElBQUksMkJBQVMsRUFBRSxDQUFDO0FBQ3pCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFJekIsZ0JBQUssQ0FBRSxxQ0FBcUMsRUFBRSxVQUFNLE1BQU07OztvQkFFdEQscUJBQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUE7O2dCQUF6QixTQUF5QixDQUFDOzs7O0tBQzdCLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsNkNBQTZDLEVBQUUsVUFBTyxNQUFNOzs7b0JBRTlELHFCQUFNLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUE7O2dCQUF6QyxTQUF5QyxDQUFDOzs7O0tBRTNDLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsOENBQThDLEVBQUUsVUFBTyxNQUFNOzs7b0JBRWpFLHFCQUFNLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUE7O2dCQUF6QyxTQUF5QyxDQUFDOzs7O0tBRTNDLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyxrREFBa0QsRUFBRTs7O29CQUV2RCxxQkFBTSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7Z0JBQTNCLFNBQTJCLENBQUM7Ozs7S0FFN0IsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLDZFQUE2RSxFQUFFLFVBQU8sTUFBTSxFQUFFLE9BQU87OztvQkFHeEcscUJBQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUMsSUFBSSxDQUFDLEVBQUE7O2dCQUF4RCxTQUF3RCxDQUFDO2dCQUN6RCxxQkFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7d0JBRXZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNsQyxDQUFDLENBQUMsRUFBQTs7Z0JBSEYsU0FHRSxDQUFBO2dCQUVGLHFCQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO3dCQUUvQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkMsQ0FBQyxDQUFDLEVBQUE7O2dCQUhGLFNBR0UsQ0FBQTtnQkFFRixxQkFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7Z0JBQXpCLFNBQXlCLENBQUM7Ozs7S0FFM0IsQ0FBQyxDQUFDIn0=