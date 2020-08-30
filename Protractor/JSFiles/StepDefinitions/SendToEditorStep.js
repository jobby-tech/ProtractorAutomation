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
var SendToEditorObject_1 = require("../PageObjects/SendToEditorObject");
var se = new SendToEditorObject_1.SendToEditor();
var expect = chai_1.default.expect;
cucumber_1.Given('Click on the News Card Check Box After Review', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, se.ClickNewsCardCheckBox()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('Click on the Selected Items only Slider', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, se.ClickSelectedOnlySlider()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('Click on Send to Editor Button', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, se.ClickSendButton()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('Verify if the Sent Message is displayed on the LightBox', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(se.SentToEditorMsg()), 8000)];
            case 1:
                _a.sent();
                return [4 /*yield*/, protractor_1.browser.sleep(4000)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VuZFRvRWRpdG9yU3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1N0ZXBEZWZpbml0aW9ucy9TZW5kVG9FZGl0b3JTdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQXlDO0FBQ3pDLHlDQUE0RDtBQUM1RCw4Q0FBd0I7QUFDeEIsd0VBQWlFO0FBRWpFLElBQUksRUFBRSxHQUFHLElBQUksaUNBQVksRUFBRSxDQUFDO0FBQzVCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFHekIsZ0JBQUssQ0FBQywrQ0FBK0MsRUFBRTs7O29CQUVuRCxxQkFBTSxFQUFFLENBQUMscUJBQXFCLEVBQUUsRUFBQTs7Z0JBQWhDLFNBQWdDLENBQUM7Ozs7S0FFakMsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFFLHlDQUF5QyxFQUFFOzs7b0JBRWhELHFCQUFNLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxFQUFBOztnQkFBbEMsU0FBa0MsQ0FBQzs7OztLQUVuQyxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUUsZ0NBQWdDLEVBQUU7OztvQkFFdkMscUJBQU0sRUFBRSxDQUFDLGVBQWUsRUFBRSxFQUFBOztnQkFBMUIsU0FBMEIsQ0FBQzs7OztLQUU5QixDQUFDLENBQUM7QUFHQSxlQUFJLENBQUUseURBQXlELEVBQUU7OztvQkFFaEUscUJBQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUMsSUFBSSxDQUFDLEVBQUE7O2dCQUE5RCxTQUE4RCxDQUFDO2dCQUMvRCxxQkFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7Z0JBQXpCLFNBQXlCLENBQUM7Ozs7S0FDN0IsQ0FBQyxDQUFDIn0=