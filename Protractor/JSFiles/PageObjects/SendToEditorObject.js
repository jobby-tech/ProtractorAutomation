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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendToEditor = void 0;
var protractor_1 = require("protractor");
var SendToEditor = /** @class */ (function () {
    function SendToEditor() {
        this.ENewsCardCheckBox = protractor_1.element(protractor_1.by.id("defaultCheck1"));
        this.ESelectedOnlySlider = protractor_1.element(protractor_1.by.xpath("//span[@class='slider']"));
        this.ESendButton = protractor_1.element(protractor_1.by.xpath("//a[@class='actionButton']"));
        this.ESentToEditorMsg = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'sent to Editor ')]"));
    }
    SendToEditor.prototype.ClickNewsCardCheckBox = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.ENewsCardCheckBox), 5000).then(function () {
                            return _this.ENewsCardCheckBox.click();
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SendToEditor.prototype.ClickSelectedOnlySlider = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.ESelectedOnlySlider), 5000).then(function () {
                            return _this.ESelectedOnlySlider.click();
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SendToEditor.prototype.ClickSendButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(this.ESendButton), 5000).then(function () {
                            return _this.ESendButton.click();
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SendToEditor.prototype.SentToEditorMsg = function () {
        return this.ESentToEditorMsg;
    };
    return SendToEditor;
}());
exports.SendToEditor = SendToEditor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VuZFRvRWRpdG9yT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZU9iamVjdHMvU2VuZFRvRWRpdG9yT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvRjtBQUdwRjtJQVFJO1FBRUksSUFBSSxDQUFDLGlCQUFpQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxtQkFBbUIsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRUssNENBQXFCLEdBQTNCOzs7Ozs0QkFFWSxxQkFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBRSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzs0QkFFbEYsT0FBTyxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBRXpDLENBQUMsQ0FBQyxFQUFBOzRCQUpGLHNCQUFPLFNBSUwsRUFBQTs7OztLQUNMO0lBRUssOENBQXVCLEdBQTdCOzs7Ozs0QkFFVyxxQkFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBRSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzs0QkFFcEYsT0FBTyxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBRTNDLENBQUMsQ0FBQyxFQUFBOzRCQUpGLHNCQUFPLFNBSUwsRUFBQTs7OztLQUNMO0lBRUssc0NBQWUsR0FBckI7Ozs7OzRCQUVXLHFCQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFFLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzs0QkFFNUUsT0FBTyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUVuQyxDQUFDLENBQUMsRUFBQTs0QkFKRixzQkFBTyxTQUlMLEVBQUE7Ozs7S0FDTDtJQUVELHNDQUFlLEdBQWY7UUFFSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqQyxDQUFDO0lBQ04sbUJBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDO0FBL0NZLG9DQUFZIn0=