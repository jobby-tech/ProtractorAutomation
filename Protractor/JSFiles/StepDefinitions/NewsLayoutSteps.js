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
var NewsLayoutObject_1 = require("../PageObjects/NewsLayoutObject");
var chai_1 = __importDefault(require("chai"));
var nl = new NewsLayoutObject_1.NewsLayout();
var expect = chai_1.default.expect;
cucumber_1.Given('Click on the News Link', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, nl.ClickCard()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('Switch Over to the Main Page', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, protractor_1.browser.getAllWindowHandles().then(function (handles) {
                    protractor_1.browser.switchTo().window(handles[0]);
                })];
            case 1:
                _a.sent();
                return [4 /*yield*/, protractor_1.browser.sleep(5000)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('Click on the Rank Tag - {string}', function (string) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, protractor_1.browser.sleep(8000)];
            case 1:
                _a.sent();
                return [4 /*yield*/, nl.ClickTag()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('Click on the Value {float} {string}', function (float, string) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, protractor_1.browser.sleep(5000)];
            case 1:
                _a.sent();
                return [4 /*yield*/, nl.ClickValue()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3c0xheW91dFN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcERlZmluaXRpb25zL05ld3NMYXlvdXRTdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUF5QztBQUN6Qyx5Q0FBNEQ7QUFDNUQsb0VBQTZEO0FBQzdELDhDQUF3QjtBQUV4QixJQUFJLEVBQUUsR0FBRyxJQUFJLDZCQUFVLEVBQUUsQ0FBQztBQUMxQixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBRWpCLGdCQUFLLENBQUMsd0JBQXdCLEVBQUU7OztvQkFFOUIscUJBQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFBOztnQkFBcEIsU0FBb0IsQ0FBQzs7OztLQUVyQixDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsOEJBQThCLEVBQUM7OztvQkFFbkMscUJBQU8sb0JBQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLE9BQU87b0JBQ3pELG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDLENBQUMsRUFBQTs7Z0JBRkosU0FFSSxDQUFDO2dCQUVILHFCQUFPLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFBOztnQkFBMUIsU0FBMEIsQ0FBQzs7OztLQUM3QixDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsa0NBQWtDLEVBQUUsVUFBTyxNQUFNOzs7b0JBQ3JELHFCQUFPLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFBOztnQkFBMUIsU0FBMEIsQ0FBQztnQkFDM0IscUJBQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFBOztnQkFBbkIsU0FBbUIsQ0FBQzs7OztLQUVwQixDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMscUNBQXFDLEVBQUUsVUFBTyxLQUFLLEVBQUUsTUFBTTs7O29CQUVqRSxxQkFBTyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7Z0JBQTFCLFNBQTBCLENBQUM7Z0JBQzNCLHFCQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBQTs7Z0JBQXJCLFNBQXFCLENBQUM7Ozs7S0FFcEIsQ0FBQyxDQUFDIn0=